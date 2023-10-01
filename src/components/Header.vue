<template>
  <nav class="nav">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :class="['nav__link', { nav__link_active: isActiveLink(route.path) }]"
      :to="{ name: route.name }"
    >
      {{ route.name }}
    </router-link>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  routes = [
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/products",
      name: "Products",
    },
  ];

  isActiveLink(linkName: string): boolean {
    return this.$route.path.includes(linkName);
  }
}
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 30px;

  &__link {
    font-weight: bold;
    color: #f8fcff;
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }

    &_active {
      color: #ffe81e;
    }
  }
}
</style>
