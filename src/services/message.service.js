import MsgDaoMongoDB from "../daos/mongodb/message.dao.js";
const messageDao = new MsgDaoMongoDB();

export const getAllMsgsServ = async () => {
  try {
      const response = await messageDao.getAllMsgs();
      return response;
  } catch (error) {
      console.log(error);
  }
}

export const createChatServ = async (obj) => {
  try {
    const newChat = await messageDao.create(obj);
    if (!newChat) return false;
    else return newChat;
  } catch (error) {
    console.log(error);
  }
};

export const getByIdServ= async (id) => {
  try {
      const msgChat = await messageDao.getMsgById(id);
      if(!msgChat) return false;
      else return msgChat;
  } catch (error) {
      console.log(error);
  }
}


export const updatedMsgServ = async (id, obj) => {
  try {
    const itemChat = await messageDao.updateMsg(id, obj);
    return itemChat;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMsgServ = async (id) => {
  try {
    const chat = await messageDao.deleteMsg(id);
    return chat;
  } catch (error) {
    console.log(error);
  }
};

export const removeAllMsgs = async () => {
  try {
    const msgsRemove = await messageDao.deleteAllMsgs();
    return msgsRemove;
  } catch (error) {
    console.log(error);
  }
};
