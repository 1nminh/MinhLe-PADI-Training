<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
  name: "UsernameInputForm",
  props: {},
  emits: [],

  data() {
    return {
      displayWarningEmail: false,
      displayBlankEmailWarning: false,
      inputEmail: null,
    };
  },
  watch: {},
  computed: {
    ...mapState({ myValue: (state) => state.myValue }),
    // ...mapState({ myValue: (state) => state.myValue }),
    // ...mapGetters(["someGetter"]),

    // ...mapState({ inputEmail: (state) => state.inputEmail }),
  },
  methods: {
    // ...mapActions(["someAction"]),
    // ...mapMutations(["someMutation"]),

    clickForward() {
      if (!this.inputEmail) {
        this.displayBlankEmailWarning = true;
        this.displayWarningEmail = false;
      } else if (emailRegex.test(this.inputEmail)) {
        this.$store.commit("setValidEmail", true);
        this.$store.commit("setInputEmail", this.inputEmail);
        this.displayWarningEmail = false;
        this.displayBlankEmailWarning = false;
      } else {
        this.$store.commit("setValidEmail", false);
        this.displayWarningEmail = true;
        this.displayBlankEmailWarning = false;
      }
    },
    handleEmailInput() {
      if (!this.inputEmail) {
        this.displayBlankEmailWarning = true;
        this.displayWarningEmail = false;
      } else if (emailRegex.test(this.inputEmail)) {
        this.displayWarningEmail = false;
        this.displayBlankEmailWarning = false;
      } else {
        this.displayWarningEmail = true;
        this.displayBlankEmailWarning = false;
      }
    },
  },

  created() {
    const stateValue = this.$store.state.stateKey;

    // Dispatch action
    // this.$store.dispatch("actionName", payload);

    // Commit mutation
    // this.$store.commit("mutationName", payload);
  },
  unmounted() {},
  mounted() {
    this.$store.commit("setValidEmail", false);
    this.$store.commit("setInputEmail", null);
  },
};
</script>

<template>
  <div class="main-container">
    <div class="login-container">
      <h2 class="login-container__heading-2">Sign In.</h2>
      <div class="margin-10">
        <span>Don't have an account?</span>
        <a href="" class="link-text-color margin-left-10">Create an account</a>
      </div>
      <div>
        <input
          v-model="inputEmail"
          placeholder="Email"
          class="login-container__input-text margin-10"
          :class="{
            'warning-border': displayWarningEmail || displayBlankEmailWarning,
          }"
          @input="handleEmailInput"
        />
        <span v-if="displayWarningEmail" class="warning-text">
          Please enter a valid email
        </span>
        <span v-if="displayBlankEmailWarning" class="warning-text">
          Don't leave the email input blank
        </span>
        <input
          type="button"
          value="Next"
          @click="clickForward"
          class="login-container__input-button margin-10"
        />
        <a href="" class="link-text-color margin-10">Forgot your password?</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

<!-- <template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['count']), // Map the count state to the component
  },
  methods: {
    ...mapMutations(['increment', 'decrement']), // Map the mutations to methods
  },
};
</script> -->

<!-- import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['yourStateProperty']),
  },
}; -->
