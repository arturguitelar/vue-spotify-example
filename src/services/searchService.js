// temporary
import fakeData from "./fakeData";

const getArtists = query => {
  console.log("query artists", query);

  return new Promise(resolve => {
    setTimeout(() => {
      return resolve(fakeData.artists);
    }, 1000);
  });
};

const getAlbums = query => {
  console.log("uqery albums", query);
  return fakeData.albums;
};

const getTracks = query => {
  console.log("uqery tracks", query);
  return fakeData.tracks;
};

export default { getArtists, getAlbums, getTracks };
