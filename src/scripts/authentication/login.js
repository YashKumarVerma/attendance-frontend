import axios from "axios";

class Authentication {
  // one function to store configurations of all
  static GetConfig() {
    return {
      host: "http://localhost:3000",
    };
  }

  // this function is used to authenticate user from server
  static LoginHandler(param) {
    const { host } = Authentication.GetConfig();
    const { username, password } = param;
    return new Promise((resolve, reject) => {
      axios
        .post(`${host}/user/login`, { username, password })
        .then((resp) => {
          // save the items in local storage
          localStorage.setItem("username", resp.data.payload.username);
          localStorage.setItem("fullname", resp.data.payload.fullname);
          localStorage.setItem("profile", resp.data.payload.profilePicture);
          localStorage.setItem("token", resp.data.payload.token);

          resolve({ error: false });
        })
        .catch((error) => {
          reject(error.response.data);
        });
    });
  }
}

export default Authentication.LoginHandler;
