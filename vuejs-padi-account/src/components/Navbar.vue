<script>
export default {};
</script>

<template>
  <div class="nav-bar">
    <img
      src="@/assets/padi-logo.png"
      alt="Logo"
      class="md-logo-img nav-bar__img"
    />
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
        <a href="" class="nav-bar__link-text md-anchor">Create an account</a>
      </li>
      <li class="nav-bar__li">
        <a href="" class="nav-bar__link-text link-text-color md-anchor"
          >Sign In</a
        >
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
</style>
