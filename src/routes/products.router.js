import { Router } from "express";
const router = Router();

import * as controller from "../controllers/product.controllers.js";

router
  .get("/", controller.getAllProd)

  .post("/", controller.create)

  .get("/:id", controller.getById)

  .put("/:id", controller.update)

  /* Sólo el usuario puede agregar productos a su carrito. */

  .post("/add/:idCart/:idProduct", controller.addProdToCart)

  .delete("/:id", controller.expunge)

  .get("/paginate", controller.getPaginate);

  /* Sólo el administrador puede crear, actualizar y eliminar productos */
  /* router.post("/", [verifyToken, isModerator], createProduct);

router.put("/:productId", [verifyToken, isModerator], updateProductById);

router.delete("/:productId", [verifyToken, isAdmin], deleteProductById); */

export default router;
