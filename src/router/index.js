import { createRouter, createWebHashHistory } from "vue-router";
import Artists from "../views/Artists.vue";

const routes = [
  {
    path: "/",
    name: "Artists",
    component: Artists
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
