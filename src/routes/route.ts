import { createRouter, createWebHistory } from "vue-router";
import { Home, About } from "@/pages";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
