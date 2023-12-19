<script>
export default {
  props: { title: String },
  emits: ["enlarge-text"],

  data() {
    return {
      list: ["Item 1", "Item 2", "Item 3"],
      inputValue: "",
      inputElement: null, // Store the input element reference
    };
  },
  watch: {},
  computed: {},

  methods: {
    setInputRef(el) {
      // The function receives the element reference as the first argument
      // You can store the element reference or perform any other logic
      console.log("Input element reference:", el);

      // Store the element reference in a data property
      this.$data.inputElement = el;
    },
  },
  created() {
    console.log("Component created!");
  },
  unmounted() {},
  mounted() {
    console.log(`Exp5 component`);
    this.$refs.input.focus();
    console.log(this.$refs.items);
  },
};
</script>

<template>
  <h3>Template Refs</h3>
  <input ref="input" />

  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>

  <div>Function Refs</div>
  <div>
    <input
      :ref="
        (el) => {
          setInputRef(el);
        }
      "
      v-model="inputValue"
    />
    <p>Input Value: {{ inputValue }}</p>
  </div>

  <button @click="$emit('enlarge-text')">Enlarge text</button>

  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong>
    <slot />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.alert-box {
  color: red;
}
</style>
