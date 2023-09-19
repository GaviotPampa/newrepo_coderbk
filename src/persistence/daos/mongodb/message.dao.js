import { MsgModel } from "./models/message.model.js";

export default class MsgDaoMongoDB {
  async getAllMsgs() {
    try {
      const response = await MsgModel.find({});
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async getMsgById(id) {
    try {
      const response = await MsgModel.findById(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createMsg(obj) {
    try {
      const response = await MsgModel.create(obj);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateMsg(id, obj) {
    try {
      await MsgModel.findByIdAndUpdate(id, obj, { new: true });
      return obj;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteMsg(id) {
    try {
      const response = await MsgModel.findByIdAndDelete(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAllMsgs() {
    try {
      const response = await MsgModel.removeAllListeners();
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}
