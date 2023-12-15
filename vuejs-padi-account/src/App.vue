<script>
import HelloWorld from "./components/HelloWorld.vue";
import Experimental from "./components/Experimental.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    HelloWorld,
    Experimental,
    Navbar,
  },
  data() {
    return {
      msg: "Vite + Vue",
      testProps: '<span style="color: red">This should be red.</span>',
    };
  },
};
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!-- <HelloWorld
    :msg="msg"
    testProps='<span style="color: red">This should be red.</span>'
  /> -->
  <Experimental />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
