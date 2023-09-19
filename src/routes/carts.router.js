import { Router } from "express";
const router = Router();

import * as controller from "../controllers/cart.controllers.js";

router
  .get("/", controller.getAll)
  .get("/:pid", controller.getById)
  .post("/", controller.create)

  .post("/add/:idUser/:idCart", controller.addCartToUser)

  /* deberá eliminar del carrito el producto seleccionado. */
  .delete("/:cid/products/:pid", controller.remove)

  /* eliminar todos los productos del carrito  */
  .delete("/:cid", controller.expunge)

  /* deberá actualizar el carrito con un arreglo de productos con el formato especificado arriba. */
  .put("/:pid", controller.update)

  /* deberá poder actualizar SÓLO la cantidad de ejemplares del producto por cualquier cantidad pasada desde req.body
   */
  .put("/:cid/products/:id", controller.getById);

/* permitirá finalizar el proceso de compra de dicho carrito */

/* router.get ('/:cid/pourchase', controller.); */

export default router;
