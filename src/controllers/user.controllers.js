import logger from "../middlewares/logger-mw.js";
import UserDao from "../persistence/daos/mongodb/user.dao.js";
const userDao = new UserDao();

export const register = async (req, res) => {
  try {
    const newUser = await userDao.register(req.body);
    if (newUser) res.redirect("/api/sessions/login");
    else res.redirect("/api/sessions/error-register");
    console.log("error en el register en user.controllers", newUser);
  } catch (error) {
    logger.error(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userDao.login(req.body);
    if (user) {
      req.session.email = email;
      req.session.password = password;
      res.redirect("/api/sessions/profile");
    } else  res.redirect("/api/sessions/error-login");
    console.log("login user.controller ok", user);
  } catch (error) {
    console.log("login failed user.controller".error);
  }
};

export const githubResponse =  (req, res, next) => {
  try {
    const { first_name, last_name, email, isGithub } = req.user;
    res.json({
      msg: "Welcome! Registration/Login GitHub Ok",
     /*  session: req.session, */
      userData: {
        first_name,
        last_name,
        email,
        isGithub,
      },
    });
    
  } catch (error) {
    next(error);
  }
};

export const profile = (req, res, next) => {
  try {
    const { first_name,  email, role } = req.body;
    createResponse(res, 200, {
      first_name,
      email,
      role,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req, res) => {
  try {
    //cerrar la sesion del usu
    req.logout();
    // Redirigir al usuario a la página de inicio de sesión
    res.redirect("/api/sessions/login");
    console.log("logout user.controller ok");
  } catch (error) {
    console.log("logout failed user.controller".error);
  }
};
