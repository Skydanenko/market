import { Product } from '@/types/Product'

export default {
  namespaced: true,
  state: {
    cartList: [] as Product[],
  },

  mutations: {
    addToCart(state: { cartList: Product[] }, addedProduct: Product) {
      const neededProduct = { ...addedProduct }
      neededProduct.count = 1
      state.cartList.push(neededProduct)
    },

    removeFromCart(state: { cartList: Product[] }, productId: number) {
      const neededIndex = state.cartList.findIndex((item: Product) => item.id === productId)

      state.cartList.splice(neededIndex, 1)
    },

    increment(state: any, id: number) {
      const neededCartItem = state.cartList.find((item: Product) => item.id === id)

      neededCartItem.count += 1
    },

    decrement(state: any, id: number) {
      const neededCartItem = state.cartList.find((item: Product) => item.id === id)

      neededCartItem.count -= 1
    },
  },
}
