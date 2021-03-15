import { createStore } from "vuex";

import auth from "./modules/auth";
import search from "./modules/search";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    search
  }
});
