<template>
  <div class="login-page">
    <h2>Login Page</h2>
    <BaseInput v-model="email" label="Email" />
    <BaseInput v-model="password" type="password" label="Password" />
    <BaseButton buttonText="login" @click.native="login()" />
    <p v-if="messageResponse">
      {{ messageResponse }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { login } from '@/api/auth'

@Component({
  components: {
    BaseButton,
    BaseInput,
  },
})
export default class LoginPage extends Vue {
  email = ''
  password = ''
  messageResponse = ''

  get loggedUser(): any {
    return this.$store.getters['user/getLoggedUser']
  }

  async delay(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 4000)
    })
  }

  async login(): Promise<void> {
    const messageResponse = await login({ email: this.email, password: this.password })

    if (messageResponse) {
      this.messageResponse = messageResponse
    }
    await this.delay()

    if (this.loggedUser.isAuthenticated) {
      this.$router.push({
        name: 'HomePage',
      })
    }
  }
}
</script>
