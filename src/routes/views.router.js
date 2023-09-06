/* 
router de vistas en la ruta base / para llevar al formulario de login, de registro y de perfil. */

import { Router } from "express";
const router = Router();

import * as controller  from "../controllers/views.controllers.js";


router.get("/login", controller.login);
router.get("/register", controller.register);
router.get("/profile", controller.profile);
router.get("/error-login", controller.errorLogin);
router.get("/error-register", controller.errorRegister);
router.get("/chat", controller.chat);

router.get('/products', controller.products);
/* router.get("/:id", cartId); */
router.get("/", (req, res) => {
  res.render("products", { products });
});

router.get('/realtimeproducts', (req, res) => {
  res.render('realtimeproducts');
});

router.post('/',(req,res)=>{
  res.render('login')
});


export default router;
