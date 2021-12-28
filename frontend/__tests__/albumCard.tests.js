import { mount } from "@vue/test-utils";
import AlbumCard from "@/components/AlbumCard.vue";

const mockData = {
  albumName: "Album test",
  artistName: "Artist test",
  imageUrl: "https://picsum.photos/300/300",
};

describe("AlbumCard Unit Tests", () => {
  test("AlbumCard renders name", () => {
    const wrapper = mount(AlbumCard, {
      propsData: mockData,
    });

    expect(wrapper.text()).toContain(mockData.albumName);
  });

  test("AlbumCard renders artist", () => {
    const wrapper = mount(AlbumCard, {
      propsData: mockData,
    });

    expect(wrapper.text()).toContain(mockData.artistName);
  });

  test("AlbumCard renders name", () => {
    const wrapper = mount(AlbumCard, {
      propsData: mockData,
    });

    const image = wrapper.find('img').attributes('src')
    expect(wrapper.find('img').attributes('src')).toBe(mockData.imageUrl);
  });
});
