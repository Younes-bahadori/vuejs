import axios from "axios";

export default {
    signup,
    login,
};

// export function account(data,requestType) {
//   return axios({
//     method: "POST",
//     url: process.env.BASE_URL +requestType,
//     data,
//   });
// }

export function signup(data) {
    return axios({
        method: "POST",
        url: process.env.BASE_URL + '/register',
        data,
    });
}

export function login(data) {
    return axios({
        method: "POST",
        url: process.env.BASE_URL + '/login',
        data,
    });
}
