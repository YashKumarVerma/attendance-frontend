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
          resolve(resp.data.payload);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }

  static async initialLoad() {
    try {
      const response = await axios.get(`${config.host}/event/user/all`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data.payload;
    } catch (err) {
      return err.response.data;
    }
  }
  //   //   this function is used to delete event
  //   static async makeDeleteRequest() {}
  // static delete(param) {
  //   const { slug } = param;
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .delete(`${config.host}/event/${slug}`, {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       })
  //       .then((resp) => {
  //         // save the items in local storage
  //         resolve(resp.data);
  //       })
  //       .catch((error) => {
  //         reject(error.response.data);
  //       });
  //   });
  // }
}

export const CreateEvent = Event.create;
export const InitialLoad = Event.initialLoad;
