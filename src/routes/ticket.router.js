import { Router } from "express";
import TicketController from "../controllers/ticket.controller.js";
import { checkAuth } from "../middlewares/isAuth.js";

const router = Router();

router.post('/', checkAuth, controller.generateTicket);

export default router;
