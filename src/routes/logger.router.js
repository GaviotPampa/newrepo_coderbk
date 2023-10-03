import { Router } from "express";
const router = Router();
import logger from "../middlewares/logger-mw.js";

router.get("/"),
  (req, res) => {
    logger.fatal("Error fatal");
    logger.error("Level error");
    logger.warning("ñevel warning");
    logger.info("User Authenticated");
    res.send({ message: "User Profile " });
    logger.http("level http");
    logger.debug("level debug");
  };

export default router;
