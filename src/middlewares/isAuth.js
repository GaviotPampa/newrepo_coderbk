/* retorna true o false si el usuario esta autenticado o no */
export const isAuth = (req,res,next) => {
    console.log(req.session.passport.user);
    console.log(req.isAuthenticated());
    if(req.isAuthenticated()) return next();
    res.status(401).send({ msg: 'Unauthorized' })
}