<template>
  <div class="login-page">
    <template v-if="!isWelcomeGreeting">
      <BaseInput v-model="username" label="Username" />
      <BaseInput v-model="password" type="password" label="Password" />
      <BaseButton buttonText="Submit" @click.native="onLogin" />
    </template>

    <template v-if="isWelcomeGreeting">
      <div class="greeting-message">{{ `welcome back ${loggedUser.firstName}` }}</div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { login } from '@/api/auth'

type userData = {
  id: null
  email: ''
  firstName: ''
  lastName: ''
  gender: ''
  image: ''
  token: ''
}

@Component({
  components: {
    BaseButton,
    BaseInput,
  },
})
export default class LoginPage extends Vue {
  isWelcomeGreeting = false

  get loggedUser(): userData {
    return this.$store.getters['user/getLoggedUser']
  }

  get username(): string {
    return this.$store.state.user.username
  }

  set username(value: string) {
    this.$store.commit('user/setUsername', value)
  }

  get password(): string {
    return this.$store.state.user.password
  }

  set password(value: string) {
    this.$store.commit('user/setPassword', value)
  }

  async onLogin(): Promise<void> {
    await login({ username: this.username, password: this.password })

    if (this.loggedUser.token) {
      this.isWelcomeGreeting = true
    }
  }
}
</script>
