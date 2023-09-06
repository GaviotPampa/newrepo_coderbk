import { Router } from "express";
const router = Router();

import * as controller from "../controllers/product.controllers.js";

router.get("/", controller.getAllProd);

router.post("/", controller.create);

router.get("/:id", controller.getById);

router.put("/:id", controller.update);

router.post("/add/:idCart/:idProduct", controller.addProdToCart);

router.delete("/:id", controller.expunge);

router.get("/paginate", controller.getPaginate);

export default router;
