<template>
  <div class="cart-page">
    <ul class="cart-list">
      <li v-for="item in cartList" :key="item.id" class="cart-list__item">
        <p>{{ item.title }}</p>

        <div class="counter">
          <BaseButton buttonText="-" @click.native="decrement(item.id)" />
          <p class="counter__number">
            {{ item.count }}
          </p>
          <BaseButton buttonText="+" @click.native="increment(item.id)" />
        </div>

        <div class="cart-buttons">
          <BaseButton buttonText="X" @click.native="removeFromCart(item.id)" />
          <BaseButton button-text="confirm order" @click.native="buy(cartList)" />
        </div>
      </li>
    </ul>
    {{}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import BaseButton from '@/components/baseComponents/BaseButton.vue'
import { Product } from '@/types/Product'
import { buy } from '@/api/cartOrder'

@Component({
  components: {
    BaseButton,
  },
})
export default class CartPage extends Vue {
  response: any

  get cartList(): Product[] {
    return this.$store.state.cart.cartList
  }

  async buy(list: Product[]): Promise<void> {
    this.response = await buy(list)
  }

  removeFromCart(productId: number): void {
    this.$store.commit('cart/removeFromCart', productId)
  }

  increment(id: number): void {
    this.$store.commit('cart/increment', id)
  }

  decrement(id: number): void {
    this.$store.commit('cart/decrement', id)
  }
}
</script>

<style lang="scss">
.cart-list {
  display: flex;
  justify-content: center;

  &__item {
    gap: 8px;
    display: flex;
  }

  .counter {
    display: flex;
    gap: 4px;
  }

  .cart-buttons {
    display: flex;
    gap: 8px;
    margin-left: 12px;
  }
}
</style>
