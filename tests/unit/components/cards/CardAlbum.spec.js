import { shallowMount } from "@vue/test-utils";
import CardAlbum from "@/components/cards/CardAlbum";

const DATASET_CARD = "[data-card='album']";
const DATASET_MESSAGE = "[data-card-message='empty']";
const IMAGE_URL = "https://via.placeholder.com/500";
const INVALID_DATA_MESSAGE = "Dados inválidos";

describe("#CardAlbum", () => {
  describe("#FAIL", () => {
    test("render invalid data if doesn't receive correct object", () => {
      const wrapper = shallowMount(CardAlbum);

      expect(wrapper.find(DATASET_CARD).exists()).toBe(false);
      expect(wrapper.find(DATASET_MESSAGE).exists()).toBe(true);
      expect(wrapper.text()).toBe(INVALID_DATA_MESSAGE);
    });
  });

  describe("#SUCCESS", () => {
    const defaultData = {
      name: "Album name",
      imageUrl: IMAGE_URL,
      artist: "Artist name"
    };

    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(CardAlbum, {
        props: { album: defaultData }
      });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test("create a card with correct data", () => {
      expect(wrapper.vm.album).toStrictEqual(defaultData);
      expect(wrapper.props()).toEqual({ album: defaultData });
      expect(wrapper.find(DATASET_CARD).exists()).toBe(true);
      expect(wrapper.find(DATASET_MESSAGE).exists()).toBe(false);
    });

    test("image should be placed by placeholder if no image url", () => {
      defaultData.imageUrl = "";

      wrapper = shallowMount(CardAlbum, {
        props: { album: defaultData }
      });

      expect(wrapper.find("img").attributes()).toEqual({
        src: IMAGE_URL
      });
    });

    describe("Snapshots", () => {
      test("should render a card correctly", () => {
        expect(wrapper.wrapperElement).toMatchSnapshot();
      });
    });
  });
});
