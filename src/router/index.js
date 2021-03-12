import { createRouter, createWebHashHistory } from "vue-router";
import Artists from "../views/Artists";
import Tracks from "../views/Tracks";
import Albums from "../views/Albums";

const routes = [
  {
    path: "/",
    name: "Artists",
    component: Artists
  },
  {
    path: "/tracks",
    name: "Tracks",
    component: Tracks
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
