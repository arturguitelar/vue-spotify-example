import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store";
import Auth from "../views/Auth";
import Artists from "../views/Artists";
import Tracks from "../views/Tracks";
import Albums from "../views/Albums";

const routes = [
  {
    path: "/",
    name: "Artists",
    component: Artists,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    }
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    }
  },
  {
    path: "/tracks",
    name: "Tracks",
    component: Tracks,
    beforeEnter(to, from, next) {
      if (store.getters.isAuthenticated) {
        next();
      } else {
        next("/auth");
      }
    }
  },

  // otherwise redirect to auth
  {
    path: "/:catchAll(.*)",
    name: "Auth",
    component: Auth
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
