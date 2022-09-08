import axios from "axios";
import { BASE_URL, AUTH } from "../../constants/public";

export default {
  getPicture,
  addPicture,
  updatePicture,
  deletePicture,
};

export function getPicture() {
  return axios({
    method: "GET",
    url: BASE_URL + "/pictures",
    auth: AUTH,
  });
}

export function addPicture(data) {
  return axios({
    method: "POST",
    url: BASE_URL + "/pictures",
    data,
    auth: AUTH,
  });
}
export function updatePicture(data) {
  return axios({
    method: "PUT",
    url: BASE_URL + "/pictures",
    data,
  });
}
export function deletePicture(data) {
  return axios({
    method: "DELETE",
    url: BASE_URL + "/pictures",
    data,
  });
}
