/* 
router de vistas en la ruta base / para llevar al formulario de login, de registro y de perfil. */

import { Router } from "express";
const router = Router();

import * as controller from "../controllers/views.controllers.js";

router
  .get("/login", controller.login)
  .get("/register", controller.register)
  .get("/profile", controller.profile)
  .get("/error-login", controller.errorLogin)
  .get("/error-register", controller.errorRegister)
  .get("/chat", controller.chat)

 /*  .get("/products", controller.products) */
  /* router.get("/:id", cartId); */
 /*  .get("/", (req, res) => {
    res.render("products", { products });
  }) */
  .get("/realtimeproducts", (req, res) => {
    res.render("realtimeproducts");
  });

router.post("/", (req, res) => {
  res.render("login");
});

export default router;
