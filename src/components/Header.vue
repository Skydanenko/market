<template>
  <header class="header">
    <div class="header__inner">
      <router-link :to="{ name: 'HomePage' }" class="logo">
        <img src="" alt="logo" class="logo__img" />
      </router-link>
      <nav class="nav">
        <router-link
          v-for="route in routes"
          :key="route.name"
          class="nav__link"
          :to="{ name: route.name }"
          active-class="nav__link_active"
        >
          {{ route.titleName }}
        </router-link>
      </nav>
      <router-link :to="{ name: 'LoginPage' }">
        <BaseButton @click="onSignUp" />
      </router-link>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'

@Component({
  components: { BaseButton, BaseInput },
})
export default class Header extends Vue {
  routes = [
    {
      path: '/home',
      name: 'HomePage',
      titleName: 'Home',
    },
    {
      path: '/products',
      name: 'ProductsPage',
      titleName: 'Products',
    },
  ]

  onSignUp(): void {
    this.$router.push({
      name: 'SignUpPage',
    })
  }
}
</script>

<style lang="scss">
.header {
  box-shadow: 0 0 12px 0 #ffe81e;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: calc(100% - 32px);
  }
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

    &_active {
      color: #ffe81e;
    }
  }
}
</style>
