import { Product } from '@/types/Product'

export default {
  namespaced: true,
  state: {
    cartList: [] as Product[],
  },

  mutations: {
    addToCart(state: { cartList: Product[] }, addedProduct: Product) {
      state.cartList.push(addedProduct)
    },

    removeFromCart(state: { cartList: Product[] }, productId: number) {
      const neededIndex = state.cartList.findIndex((item: Product) => item.id === productId)

      state.cartList.splice(neededIndex, 1)
    },
  },
}
