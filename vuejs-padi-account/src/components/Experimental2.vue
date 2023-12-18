<script>
export default {
  props: {},

  data() {
    return { name: "Vue.js" };
  },
  computed: {},

  methods: {
    greet(event) {
      // `this` inside methods points to the current active instance
      alert(`Hello ${this.name}!`);
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
  created() {},
  unmounted() {},
  mounted() {
    console.log(`Exp2 component`);
  },
};
</script>

<template>
  <h3>Event Handling​</h3>
  <button @click="greet">Greet</button>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
