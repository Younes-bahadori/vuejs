import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes.js";
import cookie from "../services/cookie/index.js";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = cookie.Get("userDetails");
  if (!isLogin && !to.meta.public) {
    next({ name: "account" });
  } else {
    next();
  }
});

export default router;
