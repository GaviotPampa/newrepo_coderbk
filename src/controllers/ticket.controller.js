import ticketService from "../services/ticket.service.js";
export const  generateTicket = async (req, res, next) =>{
    try {
        const { _id } = req.user;
        const ticket = await ticketService.generateTicket(_id);
        if(!ticket) createResponse(res, 404, 'Error generating ticket');
        createResponse(res, 200, ticket);
    } catch (error) {
        next(error.message);
    }
};
