<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav__link" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="nav__link" :to="{ name: 'About' }">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAllProducts } from "./api/mainRequests";

@Component
export default class App extends Vue {
  mounted(): void {
    getAllProducts();
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  background-color: #222;
  min-height: 100vh;
  color: #fff;
  font-family: $font-family-default;
}

.nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 30px;

  &__link {
    font-weight: bold;
    color: #f8fcff;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    &.router-link-exact-active {
      color: #ffe81e;
    }
  }
}
</style>
