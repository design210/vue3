import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const lnb = () => import("@/components/common/Lnb.vue");
const footer = () => import("@/components/common/Footer.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/SearchOrder",
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("@/views/login/Login.vue"),
    meta: { unauthorized: true },
  },
  {
    path: "/SearchOrder",
    name: "SearchOrder",
    components: {
      lnb,
      footer,
      contents: () => import("@/views/order/SearchOrder.vue"),
    },
    meta: { unauthorized: true },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
