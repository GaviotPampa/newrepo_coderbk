import ProductReqDTO from "../../dtos/product/product.req.dto.js";
import {logger} from '../../../middlewares/logger-mw.js';
import prodDaoMongoDB from '../../daos/mongodb/product.dao.js';

export default class ProductRepository {
    constructor(){
        this.dao = prodDaoMongoDB;
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