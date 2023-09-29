<template>
  <div class="products">
    <div
      v-for="product in allProducts"
      class="products__item"
      :key="product.id"
    >
      <div class="products-header">
        <h3 class="products-header__title">{{ product.title }}</h3>
        <p class="products-header__rating">Ціна: {{ product.price }}</p>
      </div>
      <section class="products-body">
        <img
          class="products-body__thumbnail"
          :src="product.thumbnail"
          alt="poster"
        />
        <p class="products-body__description">
          {{ product.description }}
        </p>
      </section>
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

  &__item {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 16px;
    box-shadow: 3px 2px 14px -4px #ffe81e;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  &-body {
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

    &__description {
      z-index: 1;
      align-self: flex-end;
      text-align: left;
      padding: 8px;
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
