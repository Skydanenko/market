<template>
  <div class="products">
    <div
      v-for="product in allProducts"
      class="products__item products-item"
      :key="product.id"
    >
      <div class="products-item__header">
        <h3 class="products-item__title">{{ product.title }}</h3>
        <p class="products-item__rating">Ціна: {{ product.price }}</p>
      </div>
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
      <div class="products-item__footer product-footer">
        <p class="product-footer__item">Категорії: {{ product.category }}</p>
        <p class="product-footer__item">Бренд: {{ product.brand }}</p>
        <p class="product-footer__item">Залишок: {{ product.stock }}</p>
        <p class="product-footer__item">
          Знижка: {{ product.discountPercentage }}
        </p>
        <p class="product-footer__item">Рейтинг: {{ product.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/types/Product";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  computed: {
    allProducts(): Product[] {
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

    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
    }

    &__description {
      z-index: 1;
      align-self: flex-end;
      text-align: left;
      padding: 8px;
    }

    &__body {
      position: relative;
      display: flex;
      min-height: 320px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        z-index: 1;
      }
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
