import { Router } from "express";
const router = Router();

import * as controller from "../controllers/cart.controllers.js";

router.get("/", controller.getAll);
router.get("/:cid", controller.getById);
router.post('/', controller.create);

router.post("/add/:idUser/:idCart", controller.addCartToUser);


/* deberá eliminar del carrito el producto seleccionado. */
router.delete("/:cid/products/:id", controller.remove);

/* eliminar todos los productos del carrito  */
router.delete("/:cid", controller.expunge);

/* deberá actualizar el carrito con un arreglo de productos con el formato especificado arriba. */
router.put ("/:cid", controller.update);

/* deberá poder actualizar SÓLO la cantidad de ejemplares del producto por cualquier cantidad pasada desde req.body
 */
router.put("/:cid/products/:id", controller.getById);

export default router;