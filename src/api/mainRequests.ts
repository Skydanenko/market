import { instanceApi } from "../api/instance";
import store from "../store";

export const getAllProducts = async (): Promise<void> => {
  const smartphonesResponse = await instanceApi.get(
    "products/category/smartphones"
  );

  const laptopsResponse = await instanceApi.get("products/category/laptops");

  const neededProducts = [
    ...smartphonesResponse.data.products,
    ...laptopsResponse.data.products,
  ];

  store.commit("products/setProducts", neededProducts);
};
