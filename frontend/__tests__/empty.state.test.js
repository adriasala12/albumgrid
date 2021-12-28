import { shallowMount } from "@vue/test-utils";
import EmptyState from "@/components/EmptyState.vue";

const mockData = { message: "Sample message"};

describe("EmptyState Unit Tests", () => {
  test("EmptyState renders message", () => {
    const wrapper = shallowMount(EmptyState, {
      propsData: mockData,
    });

    expect(wrapper.find('#message').text()).toBe(mockData.message);
  });
});
