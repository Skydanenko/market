<template>
  <div class="cart-page">
    <ul class="cart-list">
      <li v-for="item in cartList" :key="item.id" class="cart-list__item">
        <p>{{ item.title }}</p>
        <BaseButton buttonText="X" @click.native="removeFromCart(item.id)" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { Product } from '@/types/Product'

@Component({
  components: {
    BaseButton,
  },
})
export default class CartPage extends Vue {
  get cartList(): Product[] {
    return this.$store.state.cart.cartList
  }

  removeFromCart(productId: number): void {
    this.$store.commit('cart/removeFromCart', productId)
  }
}
</script>
