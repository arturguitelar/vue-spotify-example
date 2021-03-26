import { mount } from "@vue/test-utils";
import CardSection from "@/components/cards/CardSection";
import { createStore } from "vuex";
import searchStore from "@/store/modules/search.js";

const IMAGE_URL = "https://via.placeholder.com/500";

const message = {
  EMPTY_SEARCH: "Nenhuma busca aqui."
};

describe("#CardSection", () => {
  describe("SUCCESS", () => {
    const artistsMock = [
      {
        name: "Some Artist",
        imageUrl: IMAGE_URL,
        genres: [],
        popularity: 50
      }
    ];

    const albumsMock = [
      {
        name: "Album name",
        imageUrl: IMAGE_URL,
        artist: "Artist name"
      }
    ];

    const tracksMock = [
      {
        name: "Track name",
        imageUrl: IMAGE_URL,
        artist: "Artist name"
      }
    ];

    const store = createStore({
      modules: {
        searchStore
      }
    });

    let wrapper;

    beforeEach(() => {
      wrapper = mount(CardSection, {
        global: {
          plugins: [store]
        }
      });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test("should render empty search message if has no props value", () => {
      wrapper = mount(CardSection);
      expect(wrapper.text()).toBe(message.EMPTY_SEARCH);
    });

    test("should render artist cards if props is 'artists'", async () => {
      await wrapper.setProps({ page: "artists" });

      await store.commit("setArtists", artistsMock);

      expect(wrapper.find("[data-test='artists']").exists()).toBeTruthy();
    });

    test("should render album cards if props is 'albums'", async () => {
      await wrapper.setProps({ page: "albums" });

      await store.commit("setAlbums", albumsMock);

      expect(wrapper.find("[data-test='albums']").exists()).toBeTruthy();
    });

    test("should render track cards if props is 'tracks'", async () => {
      await wrapper.setProps({ page: "tracks" });

      await store.commit("setTracks", tracksMock);

      expect(wrapper.find("[data-test='tracks']").exists()).toBeTruthy();
    });
  });
});
