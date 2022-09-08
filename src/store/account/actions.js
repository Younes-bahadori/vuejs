import accountService from "@/services/api/account.service";

import {action} from "@/constants/account.constant";

const actions = {
    async [action.LOGIN]() {
        try {
            const result = await accountService[action.LOGIN]();
            return result
        } catch (error) {
            return Promise.reject(error)
        }

    },
    async [action.signup()](context, data) {
        try {
            const result = await accountService[action.SINUP](data);
            return result
        } catch (error) {
            return Promise.reject(error)
        }
    },
};

export default actions;
