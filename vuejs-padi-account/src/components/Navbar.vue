<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <div class="nav-bar">
    <router-link to="/">
      <img src="@/assets/padi-logo.png" alt="Logo" class="nav-bar__img" />
    </router-link>
    <ul class="nav-bar__ul">
      <li class="nav-bar__li">
        <button
          id="darkModeToggle"
          onclick="toggleDarkMode()"
          class="nav-bar__button"
        >
          Toggle Dark Mode
        </button>
      </li>
      <li class="nav-bar__li">
        <a href="" class="nav-bar__link-text">Create an account</a>
      </li>
      <li class="nav-bar__li">
        <router-link to="/login" class="nav-bar__link-text link-text-color">
          Sign In
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.nav-bar {
  display: flex;
  justify-content: space-between;
  background-color: white;
  overflow: hidden;
  padding: 10px;

  &__ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }

  &__li {
    margin-left: 10px;
  }

  &__button {
    color: black;
    padding: 14px 16px;
    text-decoration: none;
    display: none;
  }

  &__img {
    max-width: 10%;
    height: auto;
    margin-right: 20px;
  }

  &__link-text {
    color: black;
    padding: 14px 16px;
    text-decoration: none;
  }
}
@media screen and (max-width: 600px) {
  .nav-bar {
    flex-direction: column;
    align-items: center;
    gap: 10px;

    &__ul {
      flex-direction: column;
      text-align: center;
      gap: 10px;
    }

    &__li {
      margin-left: 0;
    }

    &__li {
      margin-left: 0;
    }

    &__button {
      display: block;
    }

    &__img {
      max-width: 30%;
      height: auto;
      // margin-right: 20px;
    }
  }
}
.link-text-color {
  text-decoration: none;
  color: #0070d3;
  font-weight: bold;
}
</style>
