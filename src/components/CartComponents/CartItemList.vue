<script setup>
import CartItem from './CartItem.vue'
import { useCartStore } from '../../stores/cartsStore.js'

const cartStore = useCartStore()
</script>
<template>
  <div class="flex flex-col large:pr-[46px]" v-auto-animate>
    <CartItem
      v-for="item in cartStore.cartItems"
      :key="item.id"
      :id="item.id"
      :size="item.options.size"
      :price="item.price"
      :priceOld="item.priceOld"
      :title="item.title"
      :count="item.count"
      :imageUrl="item.imageUrl"
      :minusItem="() => cartStore.minusItem(item)"
      :plusItem="() => cartStore.addToCart(item)"
      @on-click-remove="() => cartStore.removeFromCart(item)"
    />
  </div>
</template>
