import { ProductModel } from "./models/product.model.js";
import { CartModel } from "./models/cart.model.js";
import logger from "../../../middlewares/logger-mw.js";

export default class ProdDaoMDB {
  async getAllProd() {
    try {
      const response = await ProductModel.aggregate([
        {
          $match: {
            categoria: "${categoria}",
          },
        },
        {
          $sort: {
            importe: -1,
            _id: 1,
          },
        },
      ]);
      return response;
    } catch (error) {
      logger.warning (error, "something unexpected happened: " + error.message);
    }
  }

  async getById(pid) {
    try {
      const response = await ProductModel.findById(pid);
      return response;
    } catch (error) {
      logger.warning ( "something unexpected happened: " + error.message);
    }
  }

  async createProd(obj) {
    try {
      const response = await ProductModel.create(obj);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateProd(id, obj) {
    try {
      const response = await ProductModel.findByIdAndUpdate({ _id: id }, obj, {
        new: true,
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async addProdToCart(productId, cartId, quantity) {
    try {
      const cart = await CartModel.findById(cartId);
      if (!cart) return false;
      cart.products.push(productId.trim(), quantity);
      cart.save();
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  /**
   *
   * @param {*} id
   * @returns
   */
  async deleteProd(id) {
    try {
      const response = await ProductModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getProdPaginate(page = 1, limit = 10) {
    try {
      const response = await ProductModel.paginate({}, { page, limit });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
