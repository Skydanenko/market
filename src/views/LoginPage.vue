<template>
  <div class="login-page">
    <BaseInput :label="nameLabel" />
    <BaseInput :type="passwordType" :label="passwordLabel" />
    <BaseButton :buttonText="buttonText" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import BaseInput from '@/components/baseComponents/BaseInput.vue'
import BaseButton from '@/components/baseComponents/BaseButton.vue'

@Component({
  components: {
    BaseButton,
    BaseInput,
  },
})
export default class LoginPage extends Vue {
  @Prop({ default: 'password' }) passwordType!: string
  buttonText = 'Submit'
  passwordLabel = 'Password'
  nameLabel = 'Name'
}
</script>
