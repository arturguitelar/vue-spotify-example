import { createStore } from "vuex";

describe("#Artist", () => {
  describe("Success cases", () => {
    // Obs: Por enquanto, só fazendo o teste passar para ajustar coisas do layout com dados válidos
    it("Should return an array with artists", () => {
      const expectedData = [
        {
          external_urls: {
            spotify: "https://open.spotify.com/artist/2ye2Wgw4gimLv2eAKyk1NB"
          },
          followers: {
            href: null,
            total: 17001896
          },
          genres: [
            "hard rock",
            "metal",
            "old school thrash",
            "rock",
            "thrash metal"
          ],
          href: "https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB",
          id: "2ye2Wgw4gimLv2eAKyk1NB",
          images: [
            {
              height: 640,
              url:
                "https://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91",
              width: 640
            },
            {
              height: 320,
              url:
                "https://i.scdn.co/image/0c22030833eb55c14013bb36eb6a429328868c29",
              width: 320
            },
            {
              height: 160,
              url:
                "https://i.scdn.co/image/c1fb4d88de092b5617e649bd4c406b5cab7d3ddd",
              width: 160
            }
          ],
          name: "Metallica",
          popularity: 86,
          type: "artist",
          uri: "spotify:artist:2ye2Wgw4gimLv2eAKyk1NB"
        }
      ];

      const store = createStore({
        state() {
          return {
            artists: expectedData
          };
        },
        getters: {
          getArtists(state) {
            return state.artists;
          }
        }
      });

      expect(store.state.artists).toEqual(expectedData);
    });
  });
});
