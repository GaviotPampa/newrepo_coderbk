import ProductReqDTO from "../../dtos/productDto/product.req.dto.js";
import logger from '../../../middlewares/logger-mw.js';
import ProdDaoMDB from '../../daos/mongodb/product.dao.js';

export default class ProductRepository {
    constructor(){
        this.dao = ProdDaoMDB;
    }

    async getByIdDTO(id){
        try {
            const response = await this.dao.getById(id);
            return new ProductReqDTO(response);
        } catch (error) {
            logger.error(error);
        }
    }

    async createProdDTO(obj) {
        try {
          const prodDTO = new ProductReqDTO(obj);
          const response = await this.dao.create(prodDTO);
          return response;
        } catch (error) {
          logger.error(error);
        }
    }
}