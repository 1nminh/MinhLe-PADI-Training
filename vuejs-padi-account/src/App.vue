<script>
import Experimental0 from "@/components/Experimental0.vue";
import Experimental1 from "@/components/Experimental1.vue";
import Experimental2 from "@/components/Experimental2.vue";
import Experimental3 from "@/components/Experimental3.vue";
import Experimental5 from "@/components/Experimental5.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Experimental0,
    Experimental1,
    Experimental2,
    Experimental3,
    Experimental5,
    Navbar,
  },
  data() {
    return {
      msg: "Vite + Vue",
      testProps: '<span style="color: red">This should be red.</span>',
      posts: [
        { id: 1, title: "My journey with Vue" },
        // { id: 2, title: "Blogging with Vue" },
        // { id: 3, title: "Why Vue is so fun" },
      ],
      postFontSize: 1,
    };
  },
};
</script>

<template>
  <!-- <Experimental0
    :msg="msg"
    testProps='<span style="color: red">This should be red.</span>'
  /> -->
  <!-- <Experimental1 /> -->
  <!-- <Experimental2 /> -->
  <!-- <Experimental3 /> -->
  <!-- <Experimental4 /> -->
  <div :style="{ fontSize: postFontSize + 'em' }">
    <Experimental5
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      @enlarge-text="postFontSize += 0.1"
    >
      test slot</Experimental5
    >
  </div>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
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
