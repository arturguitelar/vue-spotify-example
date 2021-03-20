import { shallowMount } from "@vue/test-utils";
import CardAlbum from "@/components/cards/CardAlbum";

describe("#CardAlbum", () => {
  describe("#FAIL", () => {
    test("render invalid data if doesn't receive correct object", () => {
      const wrapper = shallowMount(CardAlbum);

      const message = wrapper.get(".message");

      expect(wrapper.find(".card").exists()).toBe(false);
      expect(message.text()).toBe("Dados inválidos");
    });
  });

  describe("#SUCCESS", () => {
    const defaultData = {
      name: "Album name",
      imageUrl: "https://via.placeholder.com/500",
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
      expect(wrapper.find(".card").exists()).toBe(true);
      expect(wrapper.find(".message").exists()).toBe(false);
    });
  });
});
