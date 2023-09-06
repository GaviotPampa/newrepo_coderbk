import * as service from "../services/cart.service.js";

export const getAll = async (req, res, next) => {
  try {
    const response = await service.getAllCartServ();
    res.status(200).json(response);
  } catch (error) {
    next(error.message);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const productInCart = await service.getByIdCartServ(id);
    if (!productInCart) res.status(404).json({ message: "Product not found in Cart" });
    else res.status(200).json(productInCart);
  } catch (error) {
    next(error.message);
  }
};

export const create = async (req, res, next) => {
  try {
    const newProdInCart = await service.createCartServ(req.body);
    console.log(newProdInCart);
    if (!newProdInCart) res.status(404).json({ message: "Validation error" });
    else res.status(200).json(newProdInCart);
    console.log("Product successfully added to cart");
    return newProdInCart;
  } catch (error) {
    next(error.message);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.updatedCartServ(id, req.body);
    res.json(prodUpd);
  } catch (error) {
    next(error.message);
  }
};

export const addCartToUser = async (req, res, next) => {
  try {
    const {cartId} = req.params;
    const {idUser} = req.params;
    const youCart = await service.addCartToUser(idUser, cartId);
    res.json(youCart);
  } catch (error) {
    next (error.message);
  }
}
export const expunge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itemsDele = await service.deleteCartServ(id);
    res.json(itemsDele);
  } catch (error) {
    next(error.message);
  }
};
export const remove = async (req, res, next) => {
    try {
      const { id } = req.params;
      const prodRemove = await service.removeProdToCart(id);
      res.json(prodRemove);
    } catch (error) {
      next(error.message);
    }
  };
