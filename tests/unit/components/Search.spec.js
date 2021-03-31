import { mount } from "@vue/test-utils";
import { createStore } from "vuex";

import searchModule from "@/store/modules/search";
import Search from "@/components/Search";

describe("#Search", () => {
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
    wrapper = mount(Search, {
      global: {
        plugins: [store]
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("initial search value should be the same as stored", async () => {
    const inputValue = await wrapper.find("input").element.value;
    expect(inputValue).toMatch(store.getters.getSearchInput);
  });

  test.only("should do a search", async () => {
    const text = "Some search here";
    await wrapper.get("input").setValue(text);
    await wrapper.get(".search-btn").trigger("click");

    console.log("searchInput", store.getters.getSearchInput);

    expect(store.getters.getSearchInput).toMatch(text);
  });
});
