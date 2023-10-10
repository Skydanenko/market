<template>
  <button class="base-button">
    {{ buttonText }}
  </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseButton extends Vue {
  @Prop({ default: 'Sign In' }) buttonText!: string
}
</script>

<style lang="scss"></style>
