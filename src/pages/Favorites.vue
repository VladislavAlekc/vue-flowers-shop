<script setup>
import FavoritesList from '../components/FavoritesComponents/FavoritesList.vue'
import { onMounted } from 'vue'
import { useFavoritesStore } from '../stores/favoritesStore.js'

const favoritesStore = useFavoritesStore()

onMounted(async () => {
  await favoritesStore.getFavorites()
})
</script>

<template>
  <main class="flex-auto">
    <div class="pt-[14px]">
      <div class="container">
        <ul class="flex items-center flex-wrap">
          <li>
            <router-link
              :to="{ name: 'Home' }"
              class="pr-[4px] text-gray-400 flex items-center"
              href="##"
            >
              <span class="pr-[4px]">Доставка цветов в Краснодаре</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="currentColor"
                class="w-[14px] h-[14px]"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Favorites' }" class="flex items-center">
              <span>Избранные товары</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div
        class="container mobile:py-[34px] min-h-[108px] flex-col mobileSmall:min-h-[96px] flex justify-center"
      >
        <h3 class="text-[28px] mobileSmall:text-[24px] font-[initial] leading-[120%]">
          Избранные товары
        </h3>
        <p v-if="!favoritesStore.favorite.length" class="text-[16px] leading-[120%] pt-[8px]">
          В списке пока нет ни одного избранного товара, перейдите в
          <router-link class="text-[#2dad73] hover:underline" :to="{ name: 'Home' }"
            >каталог</router-link
          >
          и выберите понравившийся букет!
        </p>
      </div>
    </div>
    <div v-if="favoritesStore.favorite.length" class="pt-[14px] pb-[78px]">
      <div class="container">
        <FavoritesList />
      </div>
    </div>
  </main>
</template>
