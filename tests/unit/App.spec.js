import { createRouter, createMemoryHistory } from "vue-router";
import { createStore } from "vuex";
import { mount } from "@vue/test-utils";
import routes from "@/router/routes.js";
import searchStore from "@/store/modules/search.js";
import App from "@/App.vue";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CardSection from "@/components/cards/CardSection";
import Main from "@/components/shared/Main";

const headerText = {
  ARTIST: "Artistas",
  ALBUM: "Álbums",
  TRACK: "Músicas"
};

const basicComponents = [Header, Footer, Main, CardSection];

describe("App", () => {
  let store;
  let router;
  let wrapper;

  beforeAll(() => {
    store = createStore({
      modules: {
        searchStore
      }
    });

    router = createRouter({
      history: createMemoryHistory(),
      routes
    });
  });

  beforeEach(() => {
    wrapper = mount(App, {
      global: {
        plugins: [store, router]
      }
    });
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test("Renders Artists view from '/' route", async () => {
    await checkViewRender("/", headerText.ARTIST);
  });

  test("Renders Albums view from '/albums' route", async () => {
    await checkViewRender("/albums", headerText.ALBUM);
  });

  test("Renders Tracks view from '/tracks' route", async () => {
    await checkViewRender("/tracks", headerText.TRACK);
  });

  async function checkViewRender(route, headerText) {
    router.push(route);
    await router.isReady();

    const header = wrapper.get("h2");

    expect(wrapper.findAllComponents(basicComponents)).toBeTruthy();
    expect(header.text()).toBe(headerText);
  }
});
