import albumService from "@/services/api/picture.service.js";

import { action } from "@/constants/picture.js";

const actions = {
  async [action.GE_PICTURE]() {
    try {
      const result = await albumService[action.GE_PICTURE]();
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async [action.ADD_PICTURE]({}, data) {
    try {
      const result = await albumService[action.ADD_PICTURE](data);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async [action.UPDATE_PICTURE]({}, data) {
    try {
      const result = await albumService[action.UPDATE_PICTURE]();
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async [action.DELETE_PICTURE]({}, data) {
    try {
      const result = await albumService[action.DELETE_PICTURE]();
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default actions;
