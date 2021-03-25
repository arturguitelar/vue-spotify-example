import { shallowMount } from "@vue/test-utils";
import CardArtist from "@/components/cards/CardArtist.vue";

const DATASET_CARD = "[data-card='artist']";
const DATASET_MESSAGE = "[data-card-message='empty']";
const IMAGE_URL = "https://via.placeholder.com/500";
const messages = {
  INVALID_DATA: "Dados inválidos",
  NO_CATEGORY: "sem categoria"
};

describe("#CardArtist", () => {
  describe("#FAIL", () => {
    test("render invalid data if doesn't receive an artist object", () => {
      const wrapper = shallowMount(CardArtist);

      expect(wrapper.find(DATASET_CARD).exists()).toBe(false);
      expect(wrapper.find(DATASET_MESSAGE).exists()).toBe(true);
      expect(wrapper.text()).toBe(messages.INVALID_DATA);
    });

    test("render message if artist has no genres", () => {
      const wrapper = shallowMount(CardArtist, {
        props: {
          artist: {
            name: "Some Artist",
            imageUrl: IMAGE_URL,
            genres: [],
            popularity: 50
          }
        }
      });

      expect(wrapper.vm.getGenres()).toStrictEqual(messages.NO_CATEGORY);
      expect(wrapper.html()).toContain(messages.NO_CATEGORY);
    });
  });

  describe("#SUCCESS", () => {
    const defaultData = {
      name: "Some Artist",
      imageUrl: IMAGE_URL,
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
      expect(wrapper.find(DATASET_CARD).exists()).toBe(true);
      expect(wrapper.find(DATASET_MESSAGE).exists()).toBe(false);
    });

    test("get a string of genres to render in genres", () => {
      const expectedFormat = "Some - Genres - Here";

      expect(wrapper.vm.getGenres()).toStrictEqual(expectedFormat);
      expect(wrapper.text()).toContain(expectedFormat);
    });

    test("image should be placed by placeholder if no image url", () => {
      defaultData.imageUrl = "";

      wrapper = shallowMount(CardArtist, {
        props: { artist: defaultData }
      });

      expect(wrapper.find("img").attributes()).toEqual({
        src: IMAGE_URL
      });
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

      expect(wrapper.find("span").classes()).toContain(badge);
      expect(wrapper.find("span").text()).toBe(badge);
    }

    describe("Snapshots", () => {
      test("should render a card correctly", () => {
        expect(wrapper.wrapperElement).toMatchSnapshot();
      });
    });
  });
});
