import { createRouter, createWebHashHistory } from "vue-router";
import Artists from "../views/Artists";
import Tracks from "../views/Tracks";
import Albums from "../views/Albums";

const routes = [
  {
    path: "/",
    name: "Artists",
    component: Artists,
    beforeEnter(to, from, next) {
      next();
    }
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
    beforeEnter(to, from, next) {
      next();
    }
  },
  {
    path: "/tracks",
    name: "Tracks",
    component: Tracks,
    beforeEnter(to, from, next) {
      next();
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
