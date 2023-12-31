<template>
  <div class="products-page">
    <div
      v-for="product in allProducts"
      class="products-page__item"
      :key="product.id"
      @click="setCurrentProduct(product.id, product.title)"
    >
      <div class="products-page-header">
        <h3 class="products-page-header__title">{{ product.title }}</h3>
        <p class="products-page-header__rating">Ціна: {{ product.price }}</p>
      </div>
      <section class="products-page-body">
        <img class="products-page-body__thumbnail" :src="product.thumbnail" alt="poster" />
        <p class="products-page-body__description">
          {{ product.description }}
        </p>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/types/Product'
import { Component, Vue } from 'vue-property-decorator'
import { getAllProducts } from '@/api/productsRequest'

@Component
export default class ProductsPage extends Vue {
  get allProducts(): Product[] {
    return this.$store.getters['products/getAllProducts']
  }

  setCurrentProduct(id: number, name: string): void {
    const formattedName = name.toLowerCase().replace(/\s+/g, '-')

    this.$store.commit('products/setCurrentProduct', id)

    this.$router.push({
      name: 'ProductContentPage',
      params: { name: formattedName },
    })
  }

  mounted(): void {
    getAllProducts()
  }
}
</script>

<style lang="scss">
.products-page {
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
      content: '';
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
