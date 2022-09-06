const routes = [
  {
    path: "/album",
    name: "album",
    component: () => import("../views/album/List.vue"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("../views/account/account.vue"),
  },
];

export default routes;
