import axios from "axios";
import config from "./config";

class Session {
  static async CreateSession(param) {
    try {
      const response = await axios.post(
        `${config.host}/session/create`,
        param,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      return response.data.payload;
    } catch (err) {
      return err.response;
    }
  }

  //   this function is used to delete event
  static async delete(param) {
    try {
      const response = await axios.delete(`${config.host}/session/delete`, {
        data: param,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data.payload;
    } catch (err) {
      return err.response;
    }
  }
}

export const CreateSession = Session.CreateSession;
export const DeleteSession = Session.delete;
