import  logger from "../middlewares/logger-mw.js";
import UserDao from "../persistence/daos/mongodb/user.dao.js";
const userDao = new UserDao();

export const register = async (req, res) => {
  try {
    const newUser = await userDao.register(req.body);
    if (newUser) res.redirect("/login");
    else res.redirect("/error-register");
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
      res.redirect("/profile");
    } else res.redirect("/error-login");
  } catch (error) {
    console.log(error);
  }
};

export const githubResponse = async (req, res) => {
  try {
    const { first_name, last_name, email, isGithub } = req.user;
    res.json({
      msg: "Registration/Login GitHub Ok",
      session: req.session,
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

export const  profile = (req, res, next)=>{
  try {
    const { first_name, last_name, email, role } = req.user;
    createResponse(res, 200, 
      {
        first_name, 
        last_name, 
        email, 
        role
      }
    )
  } catch (error) {
    next(error.message)
  }
};
