import { createApp } from "vue";
import { createStore } from "vuex";
import App from "../App.vue";
import account from "./account/index.js";
import album from "./album/index.js";
import picture from "./picture/index.js";

export default createStore({
  modules: {
    account,
    album,
    picture,
  },
});
