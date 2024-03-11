<script setup>
import Card from './Card.vue'
import { useItemStore } from '../../stores/itemsStore.js'
import { useCartStore } from '../../stores/cartsStore.js'
import { useFavoritesStore } from '../../stores/favoritesStore.js'
import Paginate from './Paginate.vue'

const favoritesStore = useFavoritesStore()

const cartStore = useCartStore()
const itemsStore = useItemStore()
</script>
<template>
  <div
    v-if="!itemsStore.isLoading"
    class="grid grid-cols-[repeat(auto-fit,minmax(246px,1fr))] gap-[32px]"
  >
    <Card
      v-for="item in itemsStore.items"
      :key="item.id"
      :id="item.id"
      :labels="item.labels"
      :size="item.options.size"
      :price="item.price"
      :priceOld="item.priceOld"
      :title="item.title"
      :imageUrl="item.imageUrl"
      :isFavorite="item.isFavorite"
      :isAdded="item.isAdded"
      @on-click-add="() => cartStore.addToCart(item)"
      @on-click-favorite="() => favoritesStore.addToFavorite(item)"
    />
  </div>
  <div v-else class="animate-pulse grid grid-cols-[repeat(auto-fit,minmax(246px,1fr))] gap-[32px]">
    <div
      v-for="item in itemsStore.limit"
      :key="item"
      class="shadow-[0_0_40px_rgba(58,186,118,29%)] max-w-[289px] w-full"
    >
      <div class="h-[280px] bg-[#ddddddb1] w-full"></div>
      <div class="flex flex-col p-[10px_8px_10px_8px]">
        <div class="h-[28px] w-[186px] rounded-lg bg-[#dddddda6]"></div>
        <div class="h-[22px] w-[86px] mt-[4px] rounded-lg bg-[#dddddda6]"></div>
        <div class="h-[28px] rounded-lg w-[110px] mt-[10px] bg-[#dddddda6]"></div>
        <div class="h-[42px] rounded-md mt-[12px] bg-[#dddddda6]"></div>
      </div>
    </div>
  </div>
  <Paginate />
</template>
