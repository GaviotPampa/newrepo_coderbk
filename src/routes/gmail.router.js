import { Router } from "express";
import { sendGmail } from "../controllers/gmail.controller.js";

const router = Router();

router.post('/gmail', sendGmail)

export default router;