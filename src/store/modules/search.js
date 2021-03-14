// temporary
import fake from "../fakeData";

const state = {
  artists: [],
  albums: [],
  tracks: []
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
  search({ dispatch }, query) {
    console.log(`Query recebida: ${query}`);

    dispatch("createArtists", fake.artists.items);
    dispatch("createAlbums", fake.albums.items);
    dispatch("createTracks", fake.tracks.items);
  },
  createArtists({ commit }, artists) {
    const newArtists = artists.map(artist => {
      return {
        name: artist.name,
        imageUrl: artist.images[0]?.url,
        genres: artist.genres,
        popularity: artist.popularity
      };
    });

    commit("setArtists", newArtists);
  },
  createAlbums({ commit }, albums) {
    const newAlbums = albums.map(album => {
      return {
        name: album.name,
        imageUrl: album.images[0]?.url,
        artist: album.artists[0]?.name
      };
    });

    commit("setAlbums", newAlbums);
  },
  createTracks({ commit }, tracks) {
    const newTracks = tracks.map(track => {
      return {
        name: track.name,
        imageUrl: track.album.images[0]?.url,
        artist: track.album.artists[0]?.name
      };
    });

    commit("setTracks", newTracks);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
