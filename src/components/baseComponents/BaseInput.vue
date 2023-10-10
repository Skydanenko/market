<template>
  <div class="base-input">
    <label class="base-input__label">
      {{ label }}
    </label>
    <input class="base-input__input" @input="onInput" :type="type" :value="value" />
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BaseButton extends Vue {
  @Prop({ default: '' }) value!: string
  @Prop({ default: '' }) label!: string
  @Prop({ default: 'text' }) type!: string

  @Emit('input')
  onInput($event: Event): string {
    return ($event.target as HTMLInputElement).value
  }
}
</script>

<style lang="scss"></style>
