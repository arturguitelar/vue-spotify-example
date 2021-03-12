// temporary
import fake from "../fakeData";

const state = {
  artists: fake.artists.items,
  albums: fake.albums.items,
  tracks: fake.tracks.items
};

const getters = {
  getArtists(state) {
    return state.artists;
  },
  getAlbums(state) {
    return state.albums;
  },
  getTracks(state) {
    return state.tracks;
  }
};

const mutations = {
  setArtists(state, data) {
    state.artists = data;
  },
  setAlbums(state, data) {
    state.albums = data;
  },
  setTracks(state, data) {
    state.tracks = data;
  }
};

const actions = {
  getArtists({ /*getters,*/ commit }) {
    commit("setArtists", fake.artists.items);
  },
  getAlbums({ /*getters,*/ commit }) {
    commit("setAlbums", fake.albums.items);
  },
  getTracks({ /*getters,*/ commit }) {
    commit("setTracks", fake.tracks.items);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
