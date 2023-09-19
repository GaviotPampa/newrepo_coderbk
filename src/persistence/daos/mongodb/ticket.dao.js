import { TicketModel } from "./models/ticket.model.js";

export default class TkDaoMongoDB {
    async create(obj){
     try {
        const response = await TicketModel.create(obj);
        return response;
    } catch (error) {
        console.log(error);
    }}
}