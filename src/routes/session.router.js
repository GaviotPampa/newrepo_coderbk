//**para los metodos de registro y login de users* */

/* ruta /current al router api/sessions la cual utilizara el modelo de session utilizado para devolver respuesta al usuario actual */
import { Router } from "express";
const router = Router();
import * as controller  from "../controllers/views.controllers.js";


router.get("/login", controller.login);
router.get("/register", controller.register);
router.get("/profile", controller.profile);
router.get("/error-login", controller.errorLogin);
router.get("/error-register", controller.errorRegister);
  


export default router;
