// temporary
import fake from "../fakeData";

const getters = {
  getArtistByName(name) {
    const artists = fake.artists.items;
    return artists;
  }
};

export default {
  getters
};
