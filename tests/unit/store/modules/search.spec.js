import { createStore } from "vuex";

import searchModule from "@/store/modules/search";

describe("#search store", () => {
  let store;

  beforeAll(() => {
    store = createStore({
      modules: {
        searchModule
      }
    });
  });

  describe("#SUCCESS", () => {
    test("should get a list of artists", async () => {
      await store.dispatch("getArtists", "Some Artist");
      expect(store.getters.getArtists.length).toBeGreaterThan(0);
    });
  });
});
