import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/views/Products.vue"),
  },
  {
    path: "/:name",
    name: "ProductContentPage",
    component: () => import("@/views/ProductContentPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
