export const register= (req, res) => {
    res.render('register')
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
    res.render('profile')
    console.log(req.session);
};

export const products = (req, res) => {
    res.render("realTimeProducts", users);
  };

export const chat = (req, res) => {
    res.render("chat");
  };