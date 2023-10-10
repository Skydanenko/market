<template>
  <div class="login-page">
    <BaseInput :label="'Name'" />
    <BaseInput :type="'password'" :label="'Password'" />
    <BaseButton :buttonText="'Submit'" />
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
export default class LoginPage extends Vue {}
</script>
