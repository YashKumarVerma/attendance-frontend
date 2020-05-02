import axios from "axios";
import config from "./config";

class Authentication {
  // this function is used to authenticate user from server
  static LoginHandler(param) {
    const { username, password } = param;
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.host}/user/login`, { username, password })
        .then((resp) => {
          // save the items in local storage
          console.log(resp.data.payload);
          localStorage.setItem("token", resp.data.payload);

          resolve({ error: false });
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export const LoginHandler = Authentication.LoginHandler;
