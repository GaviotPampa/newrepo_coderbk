import UserDao from "../daos/mongodb/user.dao.js";
const userDao = new UserDao();

export const register = async (req, res) => {
  try {
    const newUser = await userDao.register(req.body);
    if (newUser) res.redirect("/login");
    else res.redirect("/error-register");
  } catch (error) {
    console.log(error);
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
