import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

import UserDao from "../persistence/daos/mongodb/user.dao.js";
const userDao = new UserDao();

const strategyOptions = {
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
};

const register = async (req, email,password, done) => {
  try {
    const user = await userDao.getByEmail(email);
    console.log("register passport.config", user);

    if (user) return done(null, false);
    const newUser = await userDao.register(req.body);
    console.log("register passport.config", newUser);
    return done(null, newUser);
  } catch (error) {
    console.log("Error al obtener el usuario en passport.config" + " " + error);
  }
};

const login = async (req, email, password, done) => {
  try {
    const user = { email, password };
    console.log("USER passport.comfig:", user);
    const userLogin = await userDao.login(user);
    console.log("LOGIN passport.config:", userLogin);
    if (!userLogin) return done(null, false, { message: "User not found" });
    return done(null, userLogin);
  } catch (error) {
    console.log(error);
  }
};

const registerStrategy = new LocalStrategy(strategyOptions, register);
const loginStrategy = new LocalStrategy(strategyOptions, login);

passport.use("login", loginStrategy).use("register", registerStrategy);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  const user = await userDao.getById(id);
  return done(null, user);
});
