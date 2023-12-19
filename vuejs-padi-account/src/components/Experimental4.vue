<script>
export default {
  props: {},

  data() {
    return {
      question: "",
      answer: "Questions usually contain a question mark. ;-)",
      loading: false,
      myObject: {
        nested: {
          key: "initial value",
        },
      },
      questionEagerWatcher: "What is your favorite color?",
      answerEagerWatcher: "",
      value: 0,
    };
  },
  watch: {
    // whenever question changes, this function will run
    question(newQuestion, oldQuestion) {
      if (newQuestion.includes("?")) {
        this.getAnswer();
      }
    },

    questionEagerWatcher: {
      handler(newQuestion) {
        console.log(`Watcher triggered! New question: ${newQuestion}`);
      },
      // Force eager callback execution
      immediate: true,
    },

    // Watch for changes in myObject.nested.key
    "myObject.nested.key"(newValue) {
      console.log("Value of myObject.nested.key changed:", newValue);
    },

    value: {
      handler(newValue) {
        console.log(`Watcher triggered! New value: ${newValue}`);
        // Accessing the DOM inside the watcher callback
        console.log("DOM after update:", this.$el.textContent);
      },
      // Specify flush: 'post' to run the watcher after component updates
      flush: "post",
    },
  },
  computed: {},

  methods: {
    async getAnswer() {
      this.loading = true;
      this.answer = "Thinking...";
      try {
        const res = await fetch("https://yesno.wtf/api");
        this.answer = (await res.json()).answer;
      } catch (error) {
        this.answer = "Error! Could not reach the API. " + error;
      } finally {
        this.loading = false;
      }
    },
    updateValue() {
      // Update the value to trigger the watch
      this.myObject.nested.key = "new value";
    },
    increment() {
      this.value++;
    },
  },
  created() {
    console.log("Component created!");
  },
  unmounted() {},
  mounted() {
    console.log(`Exp4 component`);
  },
};
</script>

<template>
  <h3>Watcher​</h3>
  <p>
    Ask a yes/no question:
    <input v-model="question" :disabled="loading" />
  </p>
  <p>{{ answer }}</p>

  <div @click="updateValue">...</div>

  <div>Eager Watchers​</div>
  <div>
    <p>Current Question: {{ questionEagerWatcher }}</p>
  </div>

  <div>Callback Flush Timing​</div>
  <div>
    <p>Value: {{ value }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
