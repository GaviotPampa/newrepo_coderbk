//en el servicio llamamos a la clase con su método
//desde los servicios llamamos al dao
import ProdDaoMongoDB from "../daos/mongodb/product.dao.js";
const prodDao = new ProdDaoMongoDB();

// import { __dirname } from "../utils.js";
// import ProductDaoFS from "../dao/filesystem/product.dao.js";
// const prodDao = new ProductDaoFS(__dirname+'/dao/filesystem/products.json');
export const getAllProdServ = async () => {
  try {
    const response = await prodDao.getAllProd();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getByIdServ = async (id) => {
  try {
    const item = await prodDao.getProdById(id);
    if (!item) return false;
    else return item;
  } catch (error) {
    console.log(error);
  }
};

export const createServ = async (obj) => {
  try {
    const newProduct = await prodDao.createProd(obj);
    if (!newProduct) return false;
    else return newProduct;
  } catch (error) {
    console.log(error);
  }
};

export const updatedServ = async (id, obj) => {
  try {
    const item = await prodDao.updateProd(id, obj);
    return item;
  } catch (error) {
    console.log(error);
  }
};

export const addProdToCart = async (cartId, productId) => {
  try {
    const prodExists = await prodDao.getProductById(productId);
    const newProdCart = await prodDao.addProdToCart(cartId, productId);
    if (!prodExists) throw new Error("Product not found");
    else return newProdCart;
  } catch (error) {
    console.log(error);
  }
};
export const deleteServ = async (id) => {
  try {
    const item = await prodDao.deleteProd(id);
    return item;
  } catch (error) {
    console.log(error);
  }
};

export const getProdPaginateServ = async (page, limit) => {
  try {
    const item = await prodDao.getProdPaginate(page, limit);
    if (!item) throw new Error("Item Paginate not found");
    else return item;
  } catch (error) {
    console.log(error);
  }
};
