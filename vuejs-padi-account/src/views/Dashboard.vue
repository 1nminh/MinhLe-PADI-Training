<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getUsers", "getError"]),
  },
  methods: {
    ...mapActions(["fetchAndSetUsers"]),
  },
  mounted() {
    // Fetch users when the component is mounted
    this.fetchAndSetUsers();
  },
};
</script>
<template>
  <div>
    <h1>Users List</h1>
    <ul>
      <li v-for="user in getUsers" :key="user.id">
        <img :src="user.avatar" alt="User Avatar" />
        {{ user.name }} - {{ user.country }}
      </li>
    </ul>
    <p v-if="getError">{{ getError }}</p>
  </div>
</template>
<style lang="scss" scoped></style>
