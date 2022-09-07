import reportService from "@/services/api/acc.service";

import { action } from "@/constants/account.constant";

const actions = {
  async [action.GET_CONFIG]() {
    try {
      const result = await reportService[action.GET_CONFIG]();  
      return result
    } catch (error) {
      return Promise.reject(error)
    }
    
  },
  async [action.CREATE_REPORT](context, data) {
    try {
      const result = await reportService[action.CREATE_REPORT](data);
      return result
    } catch (error) {
      return Promise.reject(error)
    }
  },
};

export default actions;
