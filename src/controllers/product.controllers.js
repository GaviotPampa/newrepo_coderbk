//desde controllers llamamos a los servicios

//en controlllers manejamos lo que requerimos del usuario y lo que le respondemos

/* Se deberá poder buscar productos por categoría o por disponibilidad, y se deberá poder realizar un ordenamiento de estos productos de manera ascendente o descendente por precio. */

/* Con base en nuestra implementación actual de productos, modificar el método GET / para que cumpla con los siguientes puntos:
Deberá poder recibir por query params un limit (opcional), una page (opcional), un sort (opcional) y un query (opcional)
-limit permitirá devolver sólo el número de elementos solicitados al momento de la petición, en caso de no recibir limit, éste será de 10.
page permitirá devolver la página que queremos buscar, en caso de no recibir page, ésta será de 1
 */
/*query, el tipo de elemento que quiero buscar (es decir, qué filtro aplicar), en caso de no recibir query, realizar la búsqueda general
sort: asc/desc, para realizar ordenamiento ascendente o descendente por precio, en caso de no recibir sort, no realizar ningún ordenamiento
  */

import * as service from "../services/product.service.js";
import { HttpResponse } from "../utils/http.response.js";
const httpResponse = new HttpResponse();

export const getAllProd = async (req, res, next) => {
  try {
    const response = await service.getAllProdServ();
    if (!response) return httpResponse.ServerError(res, "No response");
    return httpResponse.Ok(res, response);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.getByIdServ(id);
    if (!product) 
    return httpResponse.NotFound(res, "Product not found");
    else httpResponse.Ok (res, product);
  } catch (error) {
    next(error.message);
  }
};

export const create = async (req, res, next) => {
  try {
    const { ...obj } = req.body;
    if (!obj.title) httpResponse.BadRequest(res, "Title are required");
    if (!obj.description)
      httpResponse.BadRequest(res, "Description are required");
    if (!obj.price) httpResponse.BadRequest(res, "Price are required");
    if (!obj.stock) httpResponse.BadRequest(res, "Stock are required");
    if (!obj.code) httpResponse.BadRequest(res, "Code are required");
    if (!obj.status) httpResponse.BadRequest(res, "Status are required");
    if (!obj.category) httpResponse.BadRequest(res, "Category are required");
    const newProduct = await service.createServ(req.body);
    console.log(newProduct);
    if (!newProduct)
      /* res.status(404).json({ message: "Validation error" }); */
      httpResponse.BadRequest(res, "Validation error");
    /* res.status(200).json */ else httpResponse.Ok(res, newProduct);
    console.log("Product created successfully whit mongoose");
    return newProduct;
  } catch (error) {
    console.log("Error creating product");
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prodUpd = await service.updatedServ(id, req.body);
    res.json(prodUpd);
  } catch (error) {
    next(error.message);
  }
};

export const addProdToCart = async (req, res, next) => {
  try {
    const { idCart } = req.params;
    const { idProduct } = req.params;
    const { quantity } = req.params;
    const newProdCart = await service.addProdToCart(
      idProduct,
      idCart,
      Number(quantity)
    );
    if (!newProdCart) 
      httpResponse.BadRequest(res, "No se encuentra el producto.");
    else console.log(`El producto ${idProduct} fue agregado al carrito`);
    create(res, 200, newProdCart);
  } catch (error) {
    next(error.message);
  }
};
export const expunge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itemDele = await service.deleteServ(id);
    res.json(itemDele);
  } catch (error) {
    next(error.message);
  }
};

export const getPaginate = async (req, res, next) => {
  try {
    const { page, limit } = req.query;
    const response = await service.getProdPaginateServ(page, limit);
    res.status(200).json(response);
  } catch (error) {
    next(error.message);
  }
};

/* El método GET deberá devolver un objeto con el siguiente formato:
{
	status:success/error
payload: Resultado de los productos solicitados
totalPages: Total de páginas
prevPage: Página anterior
nextPage: Página siguiente
page: Página actual
hasPrevPage: Indicador para saber si la página previa existe
hasNextPage: Indicador para saber si la página siguiente existe.
prevLink: Link directo a la página previa (null si hasPrevPage=false)
nextLink: Link directo a la página siguiente (null si hasNextPage=false)
} */
