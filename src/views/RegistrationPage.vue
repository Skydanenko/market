<template>
  <div class="registration-page">
    <template>
      <h2>Registration page</h2>
      <BaseInput v-model="email" label="Email" />
      <BaseInput v-model="password" type="password" label="Password" />
      <BaseButton buttonText="Submit" @click.native="registration" />

      <p>{{ responseMessage }}</p>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { registration } from '@/api/auth'

@Component({
  components: {
    BaseButton,
    BaseInput,
  },
})
export default class RegistrationPage extends Vue {
  email = ''
  password = ''

  responseMessage = ''

  get loggedUser(): any {
    return this.$store.getters['user/getLoggedUser']
  }

  async registration(): Promise<void> {
    this.responseMessage = await registration({ email: this.email, password: this.password })

    if (this.loggedUser.isAuthenticated) {
      await this.$router.push({
        name: 'HomePage',
      })
    }
  }
}
</script>
