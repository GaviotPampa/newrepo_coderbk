import { Router } from "express";
const router = Router();
import logger from "../middlewares/logger-mw.js";

router.get("/"),
  (req, res) => {
    logger.fatal("Fatal message");
    logger.error("Error message");
    logger.warning("Warning message");
    logger.info("User Authenticated");
    res.send({ message: "User Profile " });
    logger.http("Http message");
    logger.debug("Debug message");
  };

export default router;
