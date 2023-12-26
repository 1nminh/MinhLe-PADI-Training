<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import { debounce } from "lodash";

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
  watch: { inputEmail: "handleEmailInputDebounced" },
  computed: {
    ...mapState({
      myValue: (state) => state.myValue,
      darkMode: (state) => state.darkMode,
    }),
    // ...mapState({ myValue: (state) => state.myValue }),
    // ...mapGetters(["someGetter"]),

    // ...mapState({ inputEmail: (state) => state.inputEmail }),
  },
  methods: {
    // ...mapActions(["someAction"]),
    // ...mapMutations(["someMutation"]),

    // async clickForward() {
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
      // await this.$store.dispatch("validateEmail", this.inputEmail);
    },
    handleEmailInputDebounced: debounce(function () {
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
    }, 500),
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
    <div class="login-container" :class="{ 'dark-mode': darkMode }">
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
          @input="handleEmailInputDebounced"
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
