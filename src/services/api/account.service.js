import axios from "axios";

export default {
    signIn,
    login,
};

// export function account(data,requestType) {
//   return axios({
//     method: "POST",
//     url: process.env.BASE_URL +requestType,
//     data,
//   });
// }

export function signIn(data) {
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
