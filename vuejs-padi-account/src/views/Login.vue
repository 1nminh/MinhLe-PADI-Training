<script>
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export default {
  name: "Login",

  data() {
    return {
      validEmail: false,
      inputEmail: null,
      displayWarningEmail: false,
      displayBlankEmailWarning: false,
    };
  },

  methods: {
    clickBack() {
      this.validEmail = false;
    },
    clickForward() {
      if (!this.inputEmail) {
        this.displayBlankEmailWarning = true;
        this.displayWarningEmail = false;
      } else if (emailRegex.test(this.inputEmail)) {
        this.validEmail = true;
        this.displayWarningEmail = false;
        this.displayBlankEmailWarning = false;
      } else {
        this.validEmail = false;
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
};
</script>

<template>
  <template v-if="!validEmail">
    <div class="main-container">
      <div class="login-container">
        <h2 class="login-container__heading-2">Sign In.</h2>
        <div class="margin-10">
          <span>Don't have an account?</span>
          <a href="" class="link-text-color margin-left-10"
            >Create an account</a
          >
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
  <template v-else>
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
</template>

<style scoped lang="scss">
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
