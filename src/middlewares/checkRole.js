
import userDao from '../persistence/daos/mongodb/user.dao.js';
import logger from './logger-mw.js';

export const checkRole= async (req, res, next) => {
  try {
    const authHeader = req.get("Authorization");
    if (!authHeader) return res.status(401).json({ msg: "Unauthorized" });
    const user = await userDao.getById(user._id);
    if (!user) return res.status(400).json({ msg: "Unauthorized" });
    const userRole = user.role;
    logger.info("error en chekRole ",userRole);
    if(userRole !== 'admin') return res.status(403).json({ msg: 'No user admin'});
    next();
  } catch (err) {
    logger.error(err);
    return res.status(401).json({ msg: "Unauthorized" });
  }
};