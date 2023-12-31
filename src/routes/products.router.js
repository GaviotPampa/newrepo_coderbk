import { Router } from "express";
const router = Router();
import { checkRole } from "../middlewares/checkRole.js";

import * as controller from "../controllers/product.controllers.js";

router
  .get("/", controller.getAllProd)

  .post("/"/* , checkRole */, controller.create)

  .get("/:pid", controller.getById)

  .put("/:pid", checkRole, controller.update)

  /* Sólo el usuario puede agregar productos a su carrito. */

  .post(
    "/add/:idCart/:idProduct/quantity/:quantity",
    checkRole,
    controller.addProdToCart
  )
  /* Sólo el administrador puede crear, actualizar y eliminar productos */
  .delete("/:pid", checkRole, controller.expunge)

  .get("/paginate", controller.getPaginate);
  

export default router;
