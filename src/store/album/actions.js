import albumService from "../../services/api/album.service.js";

import {action} from "../../constants/album.js";

const actions = {
    async [action.GET_ALBUM]() {
        try {
            const result = await albumService[action.GET_ALBUM]();
            return result;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async [action.ADD_ALBUM]({}, data) {
        try {

            const result = await albumService[action.ADD_ALBUM](data);
            return result;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async [action.UPDATE_ALBUM]({}, data) {
        try {
            const result = await albumService[action.UPDATE_ALBUM](data);
            return result;
        } catch (error) {
            return Promise.reject(error);
        }
    },
    async [action.DELETE_ALBUM]({}, data) {
        try {
            const result = await albumService[action.DELETE_ALBUM](data);
            return result;
        } catch (error) {
            return Promise.reject(error);
        }
    },
};

export default actions;
