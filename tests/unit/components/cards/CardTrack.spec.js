import { shallowMount } from "@vue/test-utils";
import CardTrack from "@/components/cards/CardTrack";

const DATASET_CARD = "[data-card='track']";
const DATASET_MESSAGE = "[data-card-message='empty']";
const IMAGE_URL = "https://via.placeholder.com/300";
const INVALID_DATA_MESSAGE = "Dados inválidos";

describe("#CardTrack", () => {
  describe("#FAIL", () => {
    test("render invalid data if doesn't receive correct object", () => {
      const wrapper = shallowMount(CardTrack);

      expect(wrapper.find(DATASET_CARD).exists()).toBe(false);
      expect(wrapper.find(DATASET_MESSAGE).exists()).toBe(true);
      expect(wrapper.text()).toBe(INVALID_DATA_MESSAGE);
    });
  });

  describe("#SUCCESS", () => {
    const defaultData = {
      name: "Track name",
      imageUrl: IMAGE_URL,
      artist: "Artist name"
    };

    let wrapper;

    beforeEach(() => {
      wrapper = shallowMount(CardTrack, {
        props: { track: defaultData }
      });
    });

    afterEach(() => {
      wrapper.unmount();
    });

    test("create a card with correct data", () => {
      expect(wrapper.vm.track).toStrictEqual(defaultData);
      expect(wrapper.props()).toEqual({ track: defaultData });
      expect(wrapper.find(DATASET_CARD).exists()).toBe(true);
      expect(wrapper.find(DATASET_MESSAGE).exists()).toBe(false);
    });

    test("image should be placed by placeholder if no image url", () => {
      defaultData.imageUrl = "";

      wrapper = shallowMount(CardTrack, {
        props: { track: defaultData }
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
