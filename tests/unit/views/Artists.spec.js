import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";

import searchModule from "@/store/modules/search";
import Artists from "@/views/Artists";

const ARTIST_HEADER = "Artistas";

describe("#Artists View", () => {
  let wrapper;
  let store;

  beforeAll(() => {
    store = createStore({
      modules: {
        searchModule
      }
    });
  });

  beforeEach(() => {
    wrapper = shallowMount(Artists, {
      global: {
        plugins: [store]
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("Renders Artists view header", () => {
    const header = wrapper.get("h2");
    expect(header.text()).toBe(ARTIST_HEADER);
  });
});
