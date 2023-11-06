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
      <div class="button-section">
        <BaseButton v-if="!loggedUser.isAuthenticated" buttonText="Registration" @click.native="onRegistration" />
        <BaseButton v-if="!loggedUser.isAuthenticated" button-text="Login" @click.native="onLogin" />
        <BaseButton v-if="loggedUser.isAuthenticated" button-text="Logout" @click.native="onLogout" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { logout } from '@/api/auth'

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
    {
      path: '/cart',
      name: 'CartPage',
      titleName: 'Cart',
    },
  ]

  get loggedUser(): any {
    return this.$store.getters['user/getLoggedUser']
  }

  onRegistration(): void {
    if (this.$route.name === 'RegistrationPage') return

    this.$router.push({
      name: 'RegistrationPage',
    })
  }

  onLogin(): void {
    if (this.$route.name === 'LoginPage') return

    this.$router.push({
      name: 'LoginPage',
    })
  }

  async onLogout(): Promise<void> {
    await logout()
    this.$store.commit('user/clearUser')

    if (!this.$store.state.user.isAuthenticated) {
      this.$router.push({
        name: 'LoginPage',
      })
    }
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

.button-section {
  display: flex;
  gap: 8px;
}
</style>
