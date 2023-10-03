<template>
  <div class="product">
    <div class="product__images">
      <img class="product__image" :src="currentProduct.images[0]" alt="image" />
    </div>
    <div class="product__info">
      <div class="product-header">
        <h3 class="product-header__title">{{ currentProduct.title }}</h3>
        <div class="product-header__price">
          <span class="price price_full">
            Full price {{ currentProduct.price }}$
          </span>
          <span class="discount"
            >- {{ this.currentProduct.discountPercentage }}%

            <span class="discount__price"
              >You saving {{ discountInCash.toFixed(2) }}$</span
            >
          </span>
          <span class="price"> = {{ currentProductPrice.toFixed(2) }}$</span>
        </div>
      </div>
      <div class="product-body">{{ currentProduct.description }}</div>
      <div class="product-footer">
        <span class="product-footer__item"
          >Category: {{ currentProduct.category }}</span
        >
        <span class="product-footer__item"
          >Brand: {{ currentProduct.brand }}</span
        >
        <span class="product-footer__item"
          >Rating: {{ currentProduct.rating }}</span
        >
        <span class="product-footer__item">
          Stock: {{ currentProduct.stock }}
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "@/types/Product";

@Component
export default class ProductContentPage extends Vue {
  get currentProduct(): Product {
    return this.$store.state.products.currentProduct;
  }

  get discountInCash(): number {
    return (
      (this.currentProduct.price * this.currentProduct.discountPercentage) / 100
    );
  }

  get currentProductPrice(): number {
    if (this.currentProduct.discountPercentage) {
      return (
        this.currentProduct.price -
        (this.currentProduct.price * this.currentProduct.discountPercentage) /
          100
      );
    } else {
      return this.currentProduct.price;
    }
  }
}
</script>

<style lang="scss">
.product {
  display: flex;
  justify-content: center;
  gap: 40px;

  &__images {
    border-radius: 20px;
    overflow: hidden;
    max-height: 360px;
    width: auto;
  }

  &__image {
    object-fit: contain;
    object-position: center;
  }

  &__info {
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 50%;
    background-color: rgba(255, 155, 255, 0.1);
    border-radius: 20px;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    padding: 16px;
    border-bottom: 1px solid #fff;
  }

  &-body {
    padding: 16px;
    flex-grow: 1;
    border-bottom: 1px solid #fff;
  }

  &-footer {
    display: flex;
    gap: 16px;
    padding: 16px;

    &__item {
      background-color: #222;
      border-radius: 20px;
      padding: 8px;
    }
  }

  .discount {
    position: relative;

    &__price {
      position: absolute;
      top: -60px;
      left: 50%;
      width: 100px;
      padding: 4px;
      transform: translateX(-50%);
      text-align: center;
      background-color: #f40e0e;
      color: #fff;
      border-radius: 20px;

      &::before {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-top: 8px solid red;
      }
    }
  }
}
</style>
