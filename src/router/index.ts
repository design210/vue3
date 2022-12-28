import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/OrderList",
  },
  {
    path: "/OrderList",
    name: "OrderList",
    components: {
      contents: () => import("@/views/order/OrderList.vue"),
    },
    meta: { unauthorized: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
