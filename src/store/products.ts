import { Product } from "@/types/Product";

export default {
  namespaced: true,
  state: {
    allProducts: [] as Product[],
  },

  mutations: {
    setProducts(state: { allProducts: Product[] }, newProducts: Product[]) {
      state.allProducts = [...newProducts];
    },
  },

  getters: {
    getAllProducts: (state: { allProducts: Product }) => state.allProducts,
  },
};
