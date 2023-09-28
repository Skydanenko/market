import { Goods } from "@/types/Goods";

export default {
  namespaced: true,
  state: {
    allProducts: [] as Goods[],
  },

  mutations: {
    setProducts(state: { allProducts: Goods[] }, newProducts: Goods[]) {
      state.allProducts = [...newProducts];
    },
  },

  getters: {
    getAllProducts: (state: { allProducts: Goods }) => state.allProducts,
  },
};
