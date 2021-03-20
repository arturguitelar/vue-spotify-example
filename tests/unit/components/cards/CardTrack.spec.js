import { shallowMount } from "@vue/test-utils";
import CardTrack from "@/components/cards/CardTrack";

describe("#CardTrack", () => {
  describe("#FAIL", () => {
    test("render invalid data if doesn't receive correct object", () => {
      const wrapper = shallowMount(CardTrack);

      const message = wrapper.get(".message");

      expect(wrapper.find(".card").exists()).toBe(false);
      expect(message.text()).toBe("Dados inválidos");
    });
  });

  describe("#SUCCESS", () => {
    const defaultData = {
      name: "Track name",
      imageUrl: "https://via.placeholder.com/500",
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
      expect(wrapper.find(".card").exists()).toBe(true);
      expect(wrapper.find(".message").exists()).toBe(false);
    });
  });
});
