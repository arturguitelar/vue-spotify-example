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
      },
      props: {
        getData: query => {
          store.commit("setSearchInput", query);
        }
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

  test("search with input value", async () => {
    const text = "Some search here";

    await wrapper.get("input").setValue(text);
    await wrapper.get("[data-test='search-btn']").trigger("click");

    expect(store.getters.getSearchInput).toBe(text);
  });

  test("clear input when click in the clear button", async () => {
    await wrapper.get("input").setValue("Some search here");
    await wrapper.get("[data-test='search-btn']").trigger("click");

    expect(wrapper.find("[data-test='clear-btn'").exists()).toBeTruthy();

    await wrapper.get("[data-test='clear-btn'").trigger("click");

    const inputValue = await wrapper.find("input").element.value;

    expect(inputValue).toBe("");
    expect(store.getters.getSearchInput).toBe("");
  });
});
