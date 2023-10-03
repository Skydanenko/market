import { Product } from "@/types/Product";

export default {
  namespaced: true,
  state: {
    allProducts: [] as Product[],
    currentProduct: {} as Product,
  },

  mutations: {
    setProducts(state: { allProducts: Product[] }, newProducts: Product[]) {
      state.allProducts = [...newProducts];
    },

    setCurrentProduct(
      state: { allProducts: Product[]; currentProduct: Product },
      productID: number
    ) {
      const newCurrentProduct = state.allProducts.find(
        (item) => item.id === productID
      );

      if (newCurrentProduct) state.currentProduct = { ...newCurrentProduct };
    },
  },

  getters: {
    getAllProducts: (state: { allProducts: Product }) => state.allProducts,
  },
};
