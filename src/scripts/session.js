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
  static delete(slug) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${config.host}/session/${slug}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          // save the items in local storage
          resolve(resp.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export const CreateSession = Session.CreateSession;
export const DeleteSession = Session.delete;
