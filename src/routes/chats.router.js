import { Router } from "express";
const router = Router();

/* import * as controller from "../controllers/message.controllers.js"; */

router.get("/chat"),
  (req, res) => {
    res.render("chat", {});
  };
export default router;
