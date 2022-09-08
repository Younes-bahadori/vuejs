import axios from "axios";
import { BASE_URL } from "../../constants/public";

export default {
  signup,
  login,
};

// export function account(data,requestType) {
//   return axios({
//     method: "POST",
//     url: BASE_URL +requestType,
//     data,
//   });
// }

export function signup(data) {
  return axios({
    method: "POST",
    url: BASE_URL + "/register",
    data,
  });
}

export function login(data) {
  return axios({
    method: "POST",
    url: BASE_URL + "/login",
    data,
  });
}
