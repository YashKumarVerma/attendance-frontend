import axios from "axios";
import config from "./config";

class Session {
  static create(param) {
    const {
      sessionName,
      sessionStartTime,
      sessionEndTime,
      sessionOvertime,
      sessionSlug,
      parentEvent,
    } = param;
    return new Promise((resolve, reject) => {
      axios
        .post(
          `${config.host}/session/create`,
          {
            session: {
              slug: sessionSlug,
              overtimePermission: sessionOvertime,
              endTime: sessionEndTime,
              startTime: sessionStartTime,
              sessionName: sessionName,
              parent: parentEvent,
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

  static GetAllSessionsOfEvent(param) {
    const { eventSlug } = param;
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.host}/event/${eventSlug}/sessions`, {
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

export const CreateSession = Session.create;
export const GetAllSessionsOfEvent = Session.GetAllSessionsOfEvent;
