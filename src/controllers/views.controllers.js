/* import { UserModel } from "../persistence/daos/mongodb/models/user.model.js";
 */
export const register= (req, res) => {
    res.render('register')
    console.log("Controller views register:" ,register);
};

export const errorRegister = (req, res) => {
    res.render('errorRegister')
};

export const login = (req, res) => {
    res.render('login')
};

export const errorLogin = (req, res) => {
    res.render('errorLogin')
};

export const profile = (req, res) => {
    const user =  req.user.toObject();
    res.render('profile',{user})
};

export const products = (req, res) => {
    res.render("realTimeProducts",{ users: req.user._id, products});
  };

export const chat = (req, res) => {
    res.render("chat");
  };