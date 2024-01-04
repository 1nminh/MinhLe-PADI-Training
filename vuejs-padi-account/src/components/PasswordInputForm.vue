<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "PasswordInputForm",
  props: {
    initialEmail: {
      type: String,
      default: "",
    },
  },

  emits: ["inputEmail"],

  data() {
    return {
      inputEmail: this.initialEmail, // Initialize the inputEmail with the passed initialEmail prop
      password: "",
      errorMessage: "",
    };
  },
  watch: {
    inputEmail(newEmail) {
      this.$emit("update:inputEmail", newEmail); // Emit the updated email value
    },
  },
  computed: {
    ...mapState({
      myValue: (state) => state.myValue,
      darkMode: (state) => state.darkMode,
      // inputEmail: (state) => state.inputEmail,
    }),

    // ...mapGetters(["someGetter"]),
  },

  methods: {
    // ...mapActions(["someAction"]),
    // ...mapMutations(["someMutation"]),
    clickBack() {
      this.$store.commit("setValidEmail", false);
      // this.$emit("inputEmail", this.inputEmail);
    },
    login() {
      if (this.inputEmail == "a@a.c" && this.password == "a") {
        // Redirect to dashboard (assuming you have a router instance available)
        this.$router.push("/dashboard");
      } else {
        this.errorMessage = "Invalid credentials. Please try again.";
      }
    },
  },

  created() {},
  unmounted() {},
  mounted() {},
};
</script>

<template>
  <div class="main-container">
    <div class="login-container" :class="{ 'dark-mode': darkMode }">
      <h2 class="login-container__heading-2">Welcome back.</h2>
      <span class="margin-10">{{ inputEmail }}</span>
      <div>
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="login-container__input-password margin-10"
        />
        <p class="pw-note">Password is case sensitive</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <input
          @click="login"
          type="button"
          value="Sign In"
          class="login-container__input-button margin-10"
        />
        <a href="" class="link-text-color margin-10">Forgot your password?</a>
      </div>
      <div>
        <a href="#" class="form-back-button" @click="clickBack">
          <p>
            <span class="login-container__back-icon">
              <img src="@/assets/login-back-icon.png" alt="" />
            </span>
            Go back
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-message {
  display: inline-block;
  padding-top: 5px;
  color: red;
}
</style>
