import { Router } from "express";
import * as controller from "../controllers/ticket.controller.js";
import { isAuth } from "../middlewares/isAuth.js";
/* import { getAll } from "../controllers/cart.controllers.js";
 */
const router = Router();

router
  .get("/", controller.getAllTk)
  .post("/", isAuth, controller.generateTicket);

export default router;
