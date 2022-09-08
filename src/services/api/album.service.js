import axios from "axios";
import {BASE_URL, AUTH} from "../../constants/public";

export default {
    getAlbum,
    addAlbum,
    updateAlbum,
    deleteAlbum,
};

export function getAlbum() {
    return axios({
        method: "GET",
        url: BASE_URL + "/albums",
        auth: AUTH,
    });
}

export function addAlbum(data) {
    return axios({
        method: "POST",
        url: BASE_URL + "/albums",
        data,
        auth: AUTH,
    });
}

export function updateAlbum(data) {
    return axios({
        method: "PUT",
        url: BASE_URL + "/album/" + data.oldname,
        data:{name : data.newname},
        auth: AUTH,
    });
}

export function deleteAlbum(data) {
    return axios({
        method: "DELETE",
        url: BASE_URL + "/album/" + data.name,
        auth: AUTH,
    });
}
