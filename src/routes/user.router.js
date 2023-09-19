import { Router } from "express";
const router = Router();

import passport from "passport";
import { isAuth } from "../middlewares/isAuth.js";
import { checkRole } from "../middlewares/checkRole.js";

import {
  login,
  register,
  githubResponse,
  profile
} from "../controllers/user.controllers.js";
/* router.post('/', controller.create); */

router
  .post("/register", passport.authenticate("register"), register)
  .post("/login", passport.authenticate("login"), login);
  

router
  .get("/", (req, res) => {
    const { first_name } = req.body;
    res.render("products", { first_name: first_name });
  })

  .get("/private", isAuth, (req, res) => res.send("route private"))
  .get("/profile", checkRole, (req,res) =>res.send("profile"), profile)
  .get(
    "/register-github",
    passport.authenticate("github", { scope: ["user:email"] }),
    githubResponse
  )

  .get(
    "/profile-github",
    passport.authenticate("github", { scope: ["user:email"] }),
    githubResponse /* (req, res) => res.send ("Welcome to profile-github") */
  )
  .get("/logout", (req, res) => {
    req.logout((err) => {
      if (err) return res.send(err);
      else res.redirect("/login");
    });
  });

export default router;
