import { createStore } from "vuex";
import { fetchUsersAPI, deleteUserAPI, createUserAPI } from "@/api/api.js";

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
    deleteUser(state, userId) {
      state.users = state.users.filter((user) => user.id !== userId);
    },
    addUser(state, newUser) {
      state.users.push(newUser);
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
    async fetchUsers({ commit }) {
      try {
        const users = await fetchUsersAPI();
        commit("setUsers", users);
      } catch (error) {
        console.error(error);
        commit("setError", "Error fetching users");
      }
    },
    async deleteUser({ commit }, userId) {
      try {
        await deleteUserAPI(userId);
        commit("deleteUser", userId);
      } catch (error) {
        console.error(error);
        commit("setError", "Error deleting user");
      }
    },
    async createUser({ commit }, userData) {
      try {
        const newUser = await createUserAPI(userData);
        commit("addUser", newUser);
      } catch (error) {
        console.error(error);
        commit("setError", "Error creating user");
      }
    },
  },
  getters: {
    // Getters are used for computed state properties
    getCount: (state) => {
      return state.count;
    },
    getUsers: (state) => {
      let users = state.users;
      users.forEach((user) => {
        user.existTime = 3;
      });
      return users;
    },
    getError: (state) => state.error,
  },
  modules: {
    // your modules here
  },
});
