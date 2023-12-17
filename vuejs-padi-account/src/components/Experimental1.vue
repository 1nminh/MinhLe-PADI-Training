<script>
export default {
  props: {},

  data() {
    return {};
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },

  methods: {
    dog() {
      return;
    },
  },
  created() {},
  unmounted() {},
  mounted() {
    console.log(`The initial count is.`);
  },
};
</script>

<template>
  <span>{{}}</span>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
