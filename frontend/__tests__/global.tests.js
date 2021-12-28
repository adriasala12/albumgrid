import { mount } from "@vue/test-utils";
import App from "@/App.vue";

const mockData = {
  albums: [
    {
      artistName: "Adele",
      collectionName: "19",
      artworkUrl100:
        "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/14/2c/ec/142cecc4-e683-8a7d-8027-0e5cc38917d7/source/100x100bb.jpg",
    },
    {
      artistName: "Adele",
      collectionName: "21",
      artworkUrl100:
        "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/99/40/fd/9940fd59-1da9-0b74-bea7-782ef521efda/source/100x100bb.jpg",
    },
  ],
};

describe("Global Page Unit Tests", () => {
  test("Loader is displayed after search", async () => {
    const wrapper = mount(App);

    const searchField = wrapper.find("#search-field");
    await searchField.setValue("adele");
    const searchButton = wrapper.find("#search-button");
    await searchButton.trigger("click");

    expect(wrapper.html()).toContain("spinner-border");
  });

  test("Albums are displayed", async () => {
    const wrapper = mount(App);
    wrapper.setData(mockData);

    await wrapper.vm.$nextTick();
    const albums = wrapper.findAll("div[id*=album-]");
    expect(albums.length).toBeGreaterThan(0);
  });

  test("Albums are correctly filtered", async () => {
    const wrapper = mount(App);
    wrapper.setData({ albums: mockData.albums, filterTerm: "21" });

    await wrapper.vm.$nextTick();
    const albums = wrapper.findAll("div[id*=album-]");
    expect(albums.length).toBe(1);
  });
});
