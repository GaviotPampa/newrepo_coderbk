import * as service from "../services/message.service.js";

export const getAll = async (req, res, next) => {
  try {
    const response = await service.getAllMsgsServ();
    res.status(200).json(response);
  } catch (error) {
    next(error.message);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const msgChat = await service.getByIdServ(id);
    if (!msgChat) res.status(404).json({ message: "msgChat not found" });
    else res.status(200).json(msgChat);
  } catch (error) {
    next(error.message);
  }
};

export const createMsg = async (req, res, next) => {
  try {
    const newChat = await service.createChatServ(req.body);
    console.log(newChat);
    if (!newChat) res.status(404).json({ message: "Validation error" });
    else res.status(200).json(newChat);
    console.log("Chat created successfully whit mongoose");
    return newChat;
  } catch (error) {
    next(error.message);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const msgUpd = await service.updatedMsgServ(id, req.body);
    res.json(msgUpd);
  } catch (error) {
    next(error.message);
  }
};

export const expunge = async (req, res, next) => {
  try {
    const { id } = req.params;
    const msgDele = await service.deleteMsgServ(id);
    res.json(msgDele);
  } catch (error) {
    next(error.message);
  }
};

export const removeAllChat = async (req, res, next) => {
  try {
    const chatDele = await service.removeAllMsgs();
    res.json(chatDele);
  } catch (error) {
    next(error.message);
  }
};
