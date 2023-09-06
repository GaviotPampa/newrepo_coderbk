import 'dotenv/config';
import { Strategy as GithubStrategy } from "passport-github2";


import passport from "passport";
import UserDao from "../daos/mongodb/user.dao.js";
const userDao = new UserDao();

const strategyOptions = {
  clientID: process.env.GITHUB_LOCAL_ID ,
  clientSecret: process.env.GITHUB_LOCAL_CLIENTSECRET,
  callbackURL: "http://localhost:8080/api/users/profile-github",
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
  try {
     console.log('PROFILE --> ', profile);
    const email =
      profile._json.email !== null ? profile._json.email : profile._json.blog;
    const user = await userDao.getByEmail(email);
    if (user) return done(null, user);
    const newUser = await userDao.register({
      first_name: profile._json.name.split(' ')[0],
      last_name: profile._json.name.split(' ')[2]+ profile._json.name.split(' ')[3]?profile._json.name.split(' ')[2]:'',
      email: profile._json.email,
      password: '',
      isGithub: true,
    });
    return done(null, newUser);
  } catch (error) {
    console.log(error);
  }
};

passport.use("github", new GithubStrategy(strategyOptions, registerOrLogin));
