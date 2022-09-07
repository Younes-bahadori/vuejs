const routes = [
    {
        path: "/album",
        name: "album",
        component: () => import("../views/album/list/list.vue"),
        meta: {
            hideNavbar: false,
        }
    },
    {
        path: "/explore/:id",
        name: "explore",
        component: () => import("../views/album/explore/explore.vue"),
        meta: {
            hideNavbar: false,
        }
    },
    {
        path: "/account",
        name: "account",
        component: () => import("../views/account/account.vue"),
        meta: {
            hideNavbar: true,
        }
    },
];

export default routes;
