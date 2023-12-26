import { createStore } from "vuex";

export default createStore({
  state: {
    // Your state properties go here
    count: 0,
    inputEmail: null,
    darkMode: false,
  },
  mutations: {
    // Mutations are responsible for changing the state
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    setMyValue(state, newValue) {
      state.myValue = newValue;
    },

    setValidEmail(state, newValue) {
      state.validEmail = newValue;
    },

    setInputEmail(state, newValue) {
      state.inputEmail = newValue;
    },
    setDarkMode(state, newValue) {
      state.darkMode = newValue;
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
