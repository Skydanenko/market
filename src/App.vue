<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav__link" :to="{ name: 'Home' }">Home</router-link> |
      <router-link class="nav__link" :to="{ name: 'About' }">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "styles/common";
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  background-color: #000;
  min-height: 100vh;
}

.nav {
  padding: 30px;

  &__link {
    font-weight: bold;
    color: #777;
    text-decoration: none;

    &:hover {
      color: #ad9a0a;
    }

    &.router-link-exact-active {
      color: #ffe81e;
    }
  }
}
</style>
