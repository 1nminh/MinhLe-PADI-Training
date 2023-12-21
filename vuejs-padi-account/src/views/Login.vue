<script>
import UsernameInputForm from "@/components/UsernameInputForm.vue";
import PasswordInputForm from "@/components/PasswordInputForm.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Login",

  components: { UsernameInputForm, PasswordInputForm },

  data() {
    return {};
  },
  computed: {
    ...mapState({ validEmail: (state) => state.validEmail }),
  },
  methods: {
    // clickForward() {
    //   if (!this.inputEmail) {
    //     this.displayBlankEmailWarning = true;
    //     this.displayWarningEmail = false;
    //   } else if (emailRegex.test(this.inputEmail)) {
    //     this.validEmail = true;
    //     this.displayWarningEmail = false;
    //     this.displayBlankEmailWarning = false;
    //   } else {
    //     this.validEmail = false;
    //     this.displayWarningEmail = true;
    //     this.displayBlankEmailWarning = false;
    //   }
    // },
    // handleEmailInput() {
    //   if (!this.inputEmail) {
    //     this.displayBlankEmailWarning = true;
    //     this.displayWarningEmail = false;
    //   } else if (emailRegex.test(this.inputEmail)) {
    //     this.displayWarningEmail = false;
    //     this.displayBlankEmailWarning = false;
    //   } else {
    //     this.displayWarningEmail = true;
    //     this.displayBlankEmailWarning = false;
    //   }
    // },
  },
};
</script>

<template>
  <template v-if="!validEmail">
    <UsernameInputForm />
  </template>
  <template v-else>
    <PasswordInputForm />
  </template>
</template>

<style lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  max-height: 500px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100vh;
  box-sizing: border-box;
  padding: 0px 60px;

  &__heading-2 {
    margin: 0;
    font-weight: 700;
    font-size: 24px;
  }

  &__input-text,
  &__input-button,
  &__input-password {
    box-sizing: border-box; /* Include padding and border in the element's total width and height */
  }

  &__input-text,
  &__input-password {
    width: 100%;
    height: 50px;
    border: 1px solid rgb(184, 184, 184);
    font-size: 16px;
    border-radius: 4px;
    padding: 0px 20px;
  }

  &__input-button {
    color: #fff;
    width: 100%;
    height: 50px;
    background: rgb(0, 112, 211);
    border: 0;
    border-radius: 4px;
  }

  &__back-icon {
    vertical-align: middle;
    width: 40px;
  }
}

.link-text-color {
  text-decoration: none;
  color: #0070d3;
  font-weight: bold;
}

.init-hide-content {
  display: none;
}

.warning-text {
  color: red;
}

.warning-border {
  border: red 1px solid;
}

.margin-10 {
  display: inline-block;
  margin: 10px 0px;
}

.margin-left-10 {
  margin-left: 10px;
}

.pw-note {
  color: #757575;
  font-size: 12px;
}

.form-back-button {
  text-decoration: none;
  color: black !important;
}

.dark-mode {
  background-color: rgb(249, 249, 182);
  color: black;
}
</style>
