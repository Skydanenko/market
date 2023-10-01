<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAllProducts } from "./api/mainRequests";
import Header from "@/components/Header.vue";

@Component({
  components: { Header },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #222;
  min-height: 100vh;
  color: #fff;
  font-family: $font-family-default;
}
</style>
