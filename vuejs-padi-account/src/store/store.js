import { createStore } from "vuex";
import { fetchUsers } from "@/api/api.js";

export default createStore({
  state: {
    count: 0,
    inputEmail: null,
    darkMode: false,
    users: [],
    error: null,
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
    setUsers(state, users) {
      state.users = users;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    // Actions can be used to perform asynchronous operations and then commit mutations
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    toggleDarkMode({ commit, state }) {
      commit("setDarkMode", !state.darkMode);
    },
    async fetchAndSetUsers({ commit }) {
      try {
        const users = await fetchUsers();
        commit("setUsers", users);
      } catch (error) {
        commit("setError", "Error fetching users");
        console.error(error);
      }
    },
  },
  getters: {
    // Getters are used for computed state properties
    getCount: (state) => {
      return state.count;
    },
    getUsers: (state) => state.users,
    getError: (state) => state.error,
  },
  modules: {
    // your modules here
  },
});
