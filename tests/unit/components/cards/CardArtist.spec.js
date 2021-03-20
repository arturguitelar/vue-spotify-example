import { shallowMount } from "@vue/test-utils";
import CardArtist from "@/components/cards/CardArtist.vue";

describe("#CardArtist", () => {
  describe("#FAIL", () => {
    test("render invalid data if doesn't receive an artist object", () => {
      const wrapper = shallowMount(CardArtist);

      const message = wrapper.get(".message");

      expect(wrapper.find(".card").exists()).toBe(false);
      expect(message.text()).toBe("Dados inválidos");
    });

    test("render message if artist has no genres", () => {
      const wrapper = shallowMount(CardArtist, {
        props: {
          artist: {
            name: "Some Artist",
            imageUrl: "https://via.placeholder.com/500",
            genres: [],
            popularity: 50
          }
        }
      });

      expect(wrapper.vm.getGenres()).toStrictEqual("sem categoria");
      expect(wrapper.find(".genres").text()).toBe("sem categoria");
    });
  });

  describe("#SUCCESS", () => {
    const defaultData = {
      name: "Some Artist",
      imageUrl: "https://via.placeholder.com/500",
      genres: ["Some", "Genres", "Here"],
      popularity: 50
    };

    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(CardArtist, {
        props: { artist: defaultData }
      });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test("create a card with correct data", () => {
      expect(wrapper.vm.artist).toStrictEqual(defaultData);
      expect(wrapper.props()).toEqual({ artist: defaultData });
      expect(wrapper.find(".card").exists()).toBe(true);
      expect(wrapper.find(".message").exists()).toBe(false);
    });

    test("get a string of genres to render in genres", () => {
      const expectedFormat = "Some - Genres - Here";

      expect(wrapper.vm.getGenres()).toStrictEqual(expectedFormat);
      expect(wrapper.find(".genres").text()).toBe(expectedFormat);
    });

    test("badge score should be 'hot' if artist popularity >= 80", () => {
      scoreHelper(80, "hot");
    });

    test("badge score should be 'cool' if artist popularity >= 60", () => {
      scoreHelper(60, "cool");
    });

    test("badge score should be 'ok' if artist popularity >= 30", () => {
      scoreHelper(30, "ok");
    });

    test("badge score should be 'underground' if artist popularity < 30", () => {
      scoreHelper(29, "underground");
    });

    function scoreHelper(popularity, badge) {
      defaultData.popularity = popularity;

      wrapper = shallowMount(CardArtist, {
        props: { artist: defaultData }
      });

      expect(wrapper.find(".popularity span").classes()).toContain(badge);
      expect(wrapper.find(".popularity span").text()).toBe(badge);
    }
  });
});
