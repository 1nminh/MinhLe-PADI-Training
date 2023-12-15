<script>
import { nextTick } from "vue";
import debounce from "lodash-es";

export default {
  props: {
    msg: String,
    testProps: String,
  },

  data() {
    return {
      count: 0,
      dynamicId: "test v-bind",
      isButtonDisabled: false,
      objectOfAttrs: {
        id: "container",
        class: "wrapper",
      },
      date: "12-1-2022",
      seen: 1,
      attributeNames: ["href", "target", "style"],
      url: "https://example.com",
      someObject: {},
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? "Yes" : "No";
    },
    increment() {
      console.log(typeof count);
      this.count += count;
      console.log(count);
    },
  },

  methods: {
    // async increment() {
    //   this.count++;

    //   await nextTick();
    // },
    clickDebounce() {
      this.count--;
    },
  },
  created() {
    this.debouncedClick = debounce.debounce(this.clickDebounce, 500);
  },
  unmounted() {
    // also a good idea to cancel the timer
    // when the component is removed
    this.debouncedClick.cancel();
  },
  mounted() {
    console.log(`The initial count is ${this.count}.`);
    this.count = 2;

    const newObject = {};
    this.someObject = newObject;

    console.log(newObject === this.someObject);
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>Using text interpolation: <span v-html="testProps"></span></p>

  <div v-bind:id="dynamicId">bb</div>
  <div :id="dynamicId" :class="dynamicId">aa</div>

  <button :disabled="isButtonDisabled">Button</button>

  <div v-bind="objectOfAttrs">v bind object attributes</div>

  <!-- <div>
    {{ number + 1 }}

    {{ ok ? "YES" : "NO" }}

    {{ message.split("").reverse().join("") }}

    <div :id="`list-${id}`"></div>
  </div> -->

  <!-- <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time> -->

  <p v-if="seen">Now you see me</p>

  <a @click="clickDebounce"> click to minus </a>

  <a v-for="attribute in attributeNames" :key="attribute" :[attribute]="url"
    >{{ attribute }}
  </a>

  <p>---</p>
  <p>Computed Properties</p>

  <p>Has published books:</p>
  <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span>

  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>

  <div class="card">
    <button type="button" @click="increment">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
