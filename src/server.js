import express, { json, urlencoded } from "express";
import morgan from "morgan";
import { __dirname, mongoStoreOptions } from "./utils.js";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";
import session from "express-session";
import config from './config/config.js';

import passport from "passport";
import "./config/passport.config.js";
import "./config/github.strategy.js";

import { Server, Socket } from "socket.io";
import { errorHandler } from "./middlewares/middle.js";
import "./persistence/daos/mongodb/db/dbConnection.js";

import logger, { addLogger } from "./middlewares/logger-mw.js";

import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import {info} from './docs/infoApi.js'

import viewsRouter from "./routes/views.router.js";
import sessionRouter from "./routes/session.router.js";
import indexRouter from "./routes/index.router.js";
import homeRouter from "./routes/home.router.js";
/* import cartIdRouter from "./routes/cartId.router.js"; */
import chatRouter from "./routes/chats.router.js";
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";
import userRouter from "./routes/user.router.js";
import emailRouter from "./routes/email.router.js";
import gmailRouter from "./routes/gmail.router.js";

import fakeProdRouter  from "./routes/productMock.router.js";

import MessageManager from "./persistence/daos/filesystem/message.dao.js";
 const msgManager = new MessageManager(__dirname+'/data/messages.json'); 

 import {cpus} from 'os';


 const numCPUS = cpus.length;
console.log(numCPUS);

//ejecucion de express

const app = express();

const specs = swaggerJSDoc(info);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

const cookieKey = "1234";

//middleware funciones antes de enviar la respuesta al cliente app.use, siempre en el archivo de entrada al servidor
//sirven para que el servidor pueda reconocer la info que llega del lado del cliente, sin esto no reconoce lo que enviamos, deben estar siempre

app
  .use(json())
  .use(urlencoded({ extended: true }))

  app
  .use(cookieParser(cookieKey))
  .use(session(mongoStoreOptions))

  .use(express.static(__dirname + "/public"))

  /* antes de los enrutadores */
  .use(morgan(`dev`));

app
  .engine("handlebars", handlebars.engine())
  .set("view engine", "handlebars")
  .set("views", __dirname + "/views");



//inicializar passport antes de las rutas
app.use(passport.initialize()).use(passport.session());

/* inicializar rutas con prefijos */

/* app
  .get("/setSignedCookie", (req, res) => {
    let visits = req.signedCookies.entry
      ? parseInt(req.signedCookies.entry) + 1
      : 1;
    console.log(visits); */
//res.cookie("nombre_de_la_cokie", valor_de_la_cokie)
/*  res
      .cookie("entry", visits, {
        maxAge: Date.now() + 1000 * 30,
        signed: true,
        secure: true,
        httpOnly: true,
      })
      .send("visits:" + visits.toString());
  })

  .get("/getCookies", (req, res) => {
    console.log(req.cookies);
    res.send("reading cookies: " + req.cookies);
  })

  .get("/deleteCookies", (req, res) => {
    console.log(req.cookies);
    res.clearCookie(req.cookies).send("deleting cookies: " + req.cookies);
  })

  .use((req, res, next) => {
    res.status(404).send("recurso no encontrado"); */ // termina
/* });
 */
app
  .use("/api/products", productRouter)
  .use("/api/carts", cartRouter)
  .use("/chat", chatRouter)
  .use("/index", indexRouter)
  .use("/home", homeRouter)
  .use("/", viewsRouter)
  /* .use("/carts", cartIdRouter) */
  .use("/api/users", userRouter)
  .use("/api/sessions", sessionRouter)
  .use("/api", emailRouter)
  .use("/api", gmailRouter)
  .use("/api/fakeProducts", fakeProdRouter)

  .use(addLogger)
  .get("/loggerTest", (req,res)=>{
    logger.error("Error message> This message should go to the log file");
    logger.warning("Warning messag> This message should go to the consol");
    logger.info("User Authenticated> This message should go to the consol");
    /* res.send({ message: "User Profile " }); */
    logger.http("Http message> This message should go to the consol");
    logger.verbose("V message> This message should go to the consol");
    logger.debug("Debug message> This message should go to the console");
    res.send ( {message:'Test loggers'})
  })
  
  /* luego de los enrutadores */
  .use(errorHandler);
  


const PORT = config.PORT || 3000;

//////////////////***Connection: Websocket***/////////////////
const httpServer = app.listen(PORT, () => {
  logger.info(`🎈Server express listening on port ${PORT}`);
});

const socketServer = new Server(httpServer); ///tb se puede poner const io en vez de socketServer

///conexion del servidor con el front
//primero escuchamos el evento connection

socketServer.on("connection", async (socket) => {
  console.log("💬User connected", socket.id);

  socketServer.emit("messages", await msgManager.getAll());

  socket.on("disconnect", () => {
    console.log("¡User disconnect!", socket.id);
  });

  socket.on("newuser", (user) => {
    console.log(`${user} inicio sesion`);
  });

  socket.on("chat: message", async(msg) => {
    await msgManager.createMsg(msg);
    socketServer.emit("messages", await msgManager.getAll() );

  });

  socket.on('newUser', (user) => {
    socket.broadcast.emit('newUser', user);

  } )
});

//////////////***Connection: server express***/////////////
/* app.listen(8080, () => {
console.log('🔌 Server conectado listening on port 8080');
}); */
