export default {
  namespaced: true,
  state: {
    allProducts: [],
  },
  mutations: {
    setProducts(state: any, newProducts: [Record<string, unknown>]) {
      state.allProducts = [...newProducts]
    },
  },
}
