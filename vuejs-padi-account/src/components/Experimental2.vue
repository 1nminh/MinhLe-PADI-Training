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
    warn(message, event) {
      // now we have access to the native event
      if (event) {
        event.preventDefault();
      }
      alert(message);
    },

    handleClick() {
      console.log("Clicked on the div itself");
    },
    handleClickFromChild() {
      console.log("Clicked on the child element");
    },
    onScroll() {
      console.log("Scrolling...");
      // You can perform other scroll-related actions here
    },
    handleCapture() {
      console.log("Capturing click on the outer element");
    },
    handleClickCapture() {
      console.log("Click on the inner element");
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

  <!-- using $event special variable -->
  <button @click="warn('Form cannot be submitted yet.', $event)">Submit</button>

  <!-- using inline arrow function -->
  <button
    @mouseover.once="(event) => warn('Form cannot be submitted yet.', event)"
  >
    Submit
  </button>

  <!-- the click event's propagation will be stopped -->
  <a @click.stop="doThis"></a>

  <!-- the submit event will no longer reload the page -->
  <form @submit.prevent="onSubmit"></form>

  <!-- modifiers can be chained -->
  <a @click.stop.prevent="doThat"></a>

  <!-- just the modifier -->
  <form @submit.prevent></form>

  <!-- only trigger handler if event.target is the element itself -->
  <!-- i.e. not from a child element -->
  <div @click.self="doThat">...</div>
  <div @click.self="handleClick">
    Click on this text
    <span @click="handleClickFromChild">Child element</span>
  </div>
  <!-- use capture mode when adding the event listener -->
  <!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
  <div @click.capture="doThis">...</div>
  <div id="outer" @click.capture="handleCapture">
    Outer (Capture Phase)
    <div id="inner" @click="handleClickCapture">Inner</div>
  </div>

  <!-- the click event will be triggered at most once -->
  <a @click.once="doThis"></a>

  <!-- the scroll event's default behavior (scrolling) will happen -->
  <!-- immediately, instead of waiting for `onScroll` to complete  -->
  <!-- in case it contains `event.preventDefault()`                -->
  <div @scroll.passive="onScroll">...</div>
  <div @scroll.passive="onScroll" style="height: 200px; overflow-y: scroll">
    <div style="height: 500px; background-color: red">
      <!-- Content to make the container scrollable -->
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
