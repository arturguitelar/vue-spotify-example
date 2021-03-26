import Login from "@/views/Login";
import Artists from "@/views/Artists";
import Tracks from "@/views/Tracks";
import Albums from "@/views/Albums";

export default [
  {
    path: "/",
    name: "Artists",
    component: Artists
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums
  },
  {
    path: "/tracks",
    name: "Tracks",
    component: Tracks
  },

  // otherwise redirect to Home (Artists)
  {
    path: "/:catchAll(.*)",
    component: Artists
  }
];
