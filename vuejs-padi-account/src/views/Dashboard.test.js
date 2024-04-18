// Dashboard.spec.js

import { mount } from "@vue/test-utils";
import Dashboard from "./Dashboard.vue";
import { createStore } from "vuex";

// Mock Vuex store
const store = createStore({
  modules: {
    // Add your Vuex module configurations here if any
  },
});

describe("Dashboard.vue", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Dashboard, {
      global: {
        plugins: [store],
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("loads users on mount", async () => {
    // Mock fetchUsers action
    store.dispatch = jest.fn();

    await wrapper.vm.$options.mounted.call(wrapper.vm);

    expect(store.dispatch).toHaveBeenCalledWith("fetchUsers");
    expect(wrapper.vm.isLoading).toBe(false);
  });

  it("adds new user", async () => {
    store.dispatch = jest.fn();

    // Mock the input fields
    const nameInput = wrapper.find('input[placeholder="Name"]');
    await nameInput.setValue("John Doe");

    const countryInput = wrapper.find('input[placeholder="Country"]');
    await countryInput.setValue("USA");

    const saveButton = wrapper.find('button[type="button"]');
    await saveButton.trigger("click");

    expect(store.dispatch).toHaveBeenCalledWith("createUser", {
      name: "John Doe",
      avatar:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1223.jpg",
      country: "USA",
    });
    expect(wrapper.vm.isAddingNew).toBe(false);
  });

  // Add more tests as needed
});
