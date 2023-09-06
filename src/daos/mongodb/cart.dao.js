import { CartModel } from "./models/cart.model.js";

export default class CartDaoMongoDB {
  async getAllCarts() {
    try {
      const response = await CartModel.find({});
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getCartById(cid) {
    try {
      const response = await CartModel.findById(cid).populate("products");
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createCart(obj) {
    try {
      const response = await CartModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async saveProductToCart(cid, obj) {
    try {
      const response = await CartModel.findByIdAndUpdate(cid, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteCart(cid) {
    try {
      const response = await CartModel.findByIdAndDelete(cid);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async removeProduct(id) {
    try {
      const response = await CartModel.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
