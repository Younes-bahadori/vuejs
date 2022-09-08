import accountService from "@/services/api/account.service.js";

import { action } from "@/constants/account.js";

const actions = {
  async [action.LOGIN]({}, data) {
    try {
      const result = await accountService[action.LOGIN](data);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  async [action.SIGNUP]({}, data) {
    try {
      const result = await accountService[action.SIGNUP](data);
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export default actions;
