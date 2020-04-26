import axios from "axios";
import config from "../config";

class Requests {
  static getUserEvents() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.host}/events/list`)
        .then((resp) => {
          // save the items in local storage
          resolve(resp.payload);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export const getUserEvents = Requests.getUserEvents;
