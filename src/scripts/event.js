import axios from "axios";
import config from "./config";

class Event {
  // this function is used to authenticate user from server
  static create(param) {
    const { eventName, eventSlug, eventDescription } = param;
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${config.host}/event/create`,
          {
            event: {
              eventName,
              slug: eventSlug,
              description: eventDescription,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
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
