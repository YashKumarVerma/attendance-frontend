import axios from "axios";
import config from "./config";

class Requests {
  static getUserEvents() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.host}/event/list`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => {
          // save the items in local storage
          resolve(resp.data.payload);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export const getUserEvents = Requests.getUserEvents;
