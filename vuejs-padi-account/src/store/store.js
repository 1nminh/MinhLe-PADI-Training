import { createStore } from "vuex";

export default createStore({
  state: {
    // Your state properties go here
    count: 0,
  },
  mutations: {
    // Mutations are responsible for changing the state
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    // Actions can be used to perform asynchronous operations and then commit mutations
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
  },
  getters: {
    // Getters are used for computed state properties
    getCount: (state) => {
      return state.count;
    },
  },
  modules: {
    // your modules here
  },
});
