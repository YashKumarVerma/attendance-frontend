import axios from "axios";
import config from "./config";

class Event {
  static create(param) {
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${config.host}/event/create`,
          {
            event: { ...param },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then((resp) => {
          resolve(resp.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  //   this function is used to delete event
  static delete(param) {
    const { slug } = param;
    return new Promise((resolve, reject) => {
      axios
        .delete(`${config.host}/event/${slug}`, {
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

export const CreateEvent = Event.create;
export const DeleteEvent = Event.delete;
