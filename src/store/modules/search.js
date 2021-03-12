// temporary
import fake from "../fakeData";

const state = {
  artists: fake.artists.items,
  tracks: fake.tracks.items,
  albums: fake.albums.items
};

const getters = {
  getArtists(state) {
    return state.artists;
  }
};

const mutations = {
  setArtists(state, data) {
    state.artists = data;
  }
};

const actions = {
  getArtists({ /*getters,*/ commit }) {
    commit("setArtists", fake.artists.items);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
