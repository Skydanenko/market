<template>
  <div class="products">
    <div
      v-for="product in allProducts"
      :key="product.id"
      class="products__item products-item"
    >
      <header class="products-item__header">
        <h3 class="products-item__title">{{ product.title }}</h3>
        <p class="products-item__rating">{{ product.price }}</p>
      </header>
      <section class="products-item__body">
        <img
          class="products-item__thumbnail"
          :src="product.thumbnail"
          alt="poster"
        />
        <p class="products-item__description">
          {{ product.description }}
        </p>
      </section>
      <footer class="product-item__footer">
        <p class="products-item__">{{ product.category }}</p>
        <p class="products-item__">{{ product.brand }}</p>
        <p class="products-item__">{{ product.stock }}</p>
        <p class="products-item__">{{ product.discountPercentage }}</p>
        <p class="products-item__">{{ product.rating }}</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { Goods } from "@/types/Goods";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  computed: {
    allProducts(): Goods[] {
      return this.$store.getters["products/getAllProducts"];
    },
  },
})
export default class Products extends Vue {}
</script>

<style lang="scss">
.products {
  align-self: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1280px;
  width: calc(100% - 32px);
  gap: 40px;

  &-item {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 16px;
    box-shadow: 3px 2px 14px -4px #ffe81e;

    &__body {
      position: relative;
      display: flex;
      min-height: 320px;
    }

    &__thumbnail {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
