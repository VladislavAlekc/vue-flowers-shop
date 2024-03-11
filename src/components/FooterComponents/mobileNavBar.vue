<script setup>
import { useRoute } from 'vue-router'
import { useFavoritesStore } from '../../stores/favoritesStore'
import { useCartStore } from '../../stores/cartsStore'

const route = useRoute()
const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()
console.log(route.fullPath)
</script>

<template>
  <div
    class="tb:hidden flex justify-around w-full h-[67px] border-solid border-[#e1e1e5] border-t-[0.5px] bg-white fixed bottom-0 left-0 overflow-hidden z-[300]"
  >
    <router-link class="flex flex-col justify-center items-center" to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
        :class="[route.fullPath === '/' ? 'text-[#2dad73]' : 'text-gray-400']"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>

      <div
        :class="[route.fullPath === '/' ? 'text-[#2dad73]' : 'text-gray-400']"
        class="mobileSmall:text-[12px]"
      >
        Главная
      </div>
    </router-link>
    <router-link class="flex flex-col justify-center items-center" :to="{ name: 'Favorites' }">
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          :class="[route.fullPath === '/favorites' ? 'text-[#2dad73]' : 'text-gray-400']"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <span
          v-if="favoritesStore.countFavorites"
          class="absolute text-white flex items-center font-bold justify-center text-[12px] -top-[7px] -right-[8px] bg-[#41c489] h-4 w-4 rounded-[50%]"
          >{{ favoritesStore.countFavorites }}</span
        >
      </div>
      <div
        :class="[route.fullPath === '/favorites' ? 'text-[#2dad73]' : 'text-gray-400']"
        class="mobileSmall:text-[12px]"
      >
        Избранное
      </div>
    </router-link>
    <router-link class="flex flex-col justify-center items-center" :to="{ name: 'Cart' }">
      <div class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
          :class="[route.fullPath === '/cart' ? 'text-[#2dad73]' : 'text-gray-400']"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        <span
          v-if="cartStore.totalCount"
          class="absolute text-white flex items-center font-bold justify-center text-[12px] -top-[7px] -right-[8px] bg-[#41c489] h-4 w-4 rounded-[50%]"
          >{{ cartStore.totalCount }}</span
        >
      </div>
      <div
        :class="[route.fullPath === '/cart' ? 'text-[#2dad73]' : 'text-gray-400']"
        class="mobileSmall:text-[12px]"
      >
        Корзина
      </div>
    </router-link>

    <div class="flex flex-col justify-center cursor-pointer items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 text-gray-400"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
        />
      </svg>

      <div class="text-gray-400 mobileSmall:text-[12px]">Войти</div>
    </div>
  </div>
</template>
