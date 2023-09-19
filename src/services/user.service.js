import UserDaoMongoDB from "../persistence/daos/mongodb/user.dao.js";
const userDao = new UserDaoMongoDB();

import  {getByIdDTO} from "../persistence/repositories/user/user.repository.js";

export const register = async (req, res, next)=>{
  try {
    res.json({
      msg: 'Register ok',
      session: req.session 
    });
  } catch (error) {
    next(error.message)
  }
}  

export const login= async(req, res, next)=>{
  try {
    if (req.session.user) {
      const user = await userDao.getById(req.session.user);
      res.json({
        msg: 'Login ok',
        user
      
      })
    } else {
      res.json ({msg: 'Login error'})
    }

    console.log(user);
  } catch (error) {
    next(error.message)
  }
}  

export const githubResponse = async (req, res, next) => {
  try {
    // console.log(req.user)
    const { first_name, last_name, email, isGithub } = req.user;
    res.json({
      msg: "Register/Login Github OK",
      session: req.session,
      userData: {
        first_name,
        last_name,
        email,
        isGithub,
      },
    });
  } catch (error) {
    next(error.message);
  }
};
export const addCartToUser = async (userId, cartId) => {
  try {
    const cartExists = await userDao.getCartById(cartId);
    const newCart = await userDao.addCartToUser(userId, cartId, true);
    if (!cartExists) throw new Error(`The cart does not exist.`);
    else return newCart;
  } catch (error) {
    console.log(error.message);
  }
};

export const  getByIdDTO = async (id)=>{
  try {
      const user= await userdRepository.getByIdDTO(id);
      if(!user) return false;
      else return user;
  } catch (error) {
      console.log(error);
  }
}
