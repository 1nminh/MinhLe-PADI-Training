<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "PasswordInputForm",
  props: {},
  emits: [],

  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapState({ myValue: (state) => state.myValue }),
    ...mapState({ inputEmail: (state) => state.inputEmail }),
    // ...mapGetters(["someGetter"]),
  },

  methods: {
    // ...mapActions(["someAction"]),
    // ...mapMutations(["someMutation"]),
    clickBack() {
      this.$store.commit("setValidEmail", false);
    },
  },

  created() {},
  unmounted() {},
  mounted() {},
};
</script>

<template>
  <div class="main-container">
    <div class="login-container">
      <h2 class="login-container__heading-2">Welcome back.</h2>
      <span class="margin-10">{{ inputEmail }}</span>
      <div>
        <input
          type="password"
          placeholder="Password"
          class="login-container__input-password margin-10"
        />
        <span class="pw-note">Password is case sensitive </span>
        <input
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

<style scoped></style>
