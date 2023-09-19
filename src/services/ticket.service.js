import TkDaoMongoDB from "../persistence/daos/mongodb/ticket.dao.js";

const tkDao = new TkDaoMongoDB();

export const create = async (obj) => {
  try {
    const newTk = await tkDao.create(obj);
    if (!newTk) return false;
    else return newTk;
  } catch (error) {
    console.log(error);
  }
};
