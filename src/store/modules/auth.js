const state = {
  isAuthenticated: false
};

const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const mutations = {
  setAuthenticated(state, value) {
    state.isAuthenticated = value;
  }
};

const actions = {
  login({ commit }) {
    commit("setAuthenticated", true);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
