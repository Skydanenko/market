<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '@/components/Header.vue'

@Component({
  components: { Header },
})
export default class App extends Vue {
  unSubscribe!: () => void

  synchronizeStateAndStore(): void {
    this.unSubscribe = this.$store.subscribe((_, state: any) => {
      localStorage.setItem('state', JSON.stringify(state))
    })
  }

  mounted(): void {
    this.synchronizeStateAndStore()
  }

  destroyed(): void {
    this.unSubscribe()
  }
}
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
