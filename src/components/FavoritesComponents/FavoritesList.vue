<script setup>
import FavoritesItem from './FavoritesItem.vue'
import { useFavoritesStore } from '../../stores/favoritesStore.js'

const favoritesStore = useFavoritesStore()
</script>
<template>
  <div class="grid grid-cols-[repeat(auto-fit,minmax(246px,379px))] gap-[32px]" v-auto-animate>
    <FavoritesItem
      v-for="item in favoritesStore.favorite"
      :key="item.id"
      :id="item.id"
      :labels="item.labels"
      :size="item.options.size"
      :price="item.price"
      :priceOld="item.priceOld"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :isAdded="item.isAdded"
      :isFavorite="item.isFavorite"
      @on-click-remove="() => favoritesStore.removeFavorites(item)"
      @on-click-add="() => favoritesStore.addToCart(item)"
    />
  </div>
</template>
