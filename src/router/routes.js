const routes = [
  {
    path: "/",
    redirect: "/account",
  },

  {
    path: "/album",
    name: "album",
    component: () => import("../views/album/list/list.vue"),
    meta: {
      public: false,
    },
  },
  {
    path: "/explore/:id",
    name: "explore",
    component: () => import("../views/album/explore/explore.vue"),
    meta: {
      public: false,
    },
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/account/account.vue"),
    meta: {
      public: true,
    },
  },
];

export default routes;
