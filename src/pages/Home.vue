<script setup>
import { computed, onMounted, ref, watchEffect } from 'vue'
import { useItemStore } from '../stores/itemsStore.js'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { useFiltersStore } from '../stores/filtersStore'
import CardList from '../components/CardComponents/CardList.vue'
import Sort from '../components/FiltersComponents/Sort.vue'
import Filters from '../components/FiltersComponents/Filters.vue'
import SliderHome from '../components/HomeComponents/SliderHome.vue'
import TopNav from '@/components/FiltersComponents/TopNav.vue'

const favoritesStore = useFavoritesStore()
const itemsStore = useItemStore()
const filtersStore = useFiltersStore()
const categories = ref([
  { id: 1, name: 'Весь каталог' },
  { id: 2, name: 'Акции' },
  { id: 3, name: 'Новинки' },
  { id: 4, name: '8 марта' },
  { id: 5, name: 'Розы Premium' },
  { id: 6, name: 'Авторские букеты' }
])
const activeFilters = ref(false)
const clickActiveFilters = () => {
  activeFilters.value = !activeFilters.value
}
const selectedCategory = computed(() => categories.value[filtersStore.filters.category])

onMounted(async () => {
  await itemsStore.fetchItems()
  await favoritesStore.fetchFavorites()
  await favoritesStore.getFavorites()
})
watchEffect(itemsStore.fetchItems)
</script>
<template>
  <main class="flex-auto">
    <section class="pt-[16px] mobile:pt-[28px]">
      <div class="container">
        <TopNav @click-active-filters="clickActiveFilters" :categories="categories" />

        <div class="flex">
          <div
            class="large:flex-[0_0_25%] relative pr-[30px] lg:filters-popup transition-all mobile:w-[55%] mobileSmall:w-full"
            :class="[activeFilters ? 'lg:left-0' : 'lg:-left-[100%]']"
          >
            <Filters @click-active-filters="clickActiveFilters" />
          </div>
          <div class="large:flex-[0_0_75%] lg:flex-auto">
            <div class="flex-col">
              <div class="flex justify-between items-center">
                <h2
                  class="font-serif text-[32px] mobile:text-[26px] mobileSmall:text-[21px] mb-[16px] lg:pt-[12px] leading-[120%]"
                >
                  {{ selectedCategory.name }}
                </h2>
                <Sort />
              </div>

              <div v-if="!itemsStore.items.length" class="text-[16px] pt-[4px] pb-[34px]">
                По вашим параметрам мы не смогли подобрать букет. Попробуйте
                <a
                  @click="filtersStore.clearFilters"
                  class="text-[#2dad73] hover:underline cursor-pointer"
                  >сбросить фильтры</a
                >.
              </div>
            </div>
            <CardList />
          </div>
        </div>
      </div>
    </section>
    <section class="py-[64px] mobileSmall:py-[54px] bg-bott">
      <div class="container">
        <div
          class="text-[38px] mobile:text-[32px] mobileSmall:text-[24px] flex tabble:justify-center leading-[120%] font-serif text-black"
        >
          Почему нас выбирают ?
        </div>
        <div class="flex flex-wrap justify-around pt-[18px]">
          <router-link
            :to="{ name: 'Delivery' }"
            class="flex hover:shadow-service hover:-translate-y-2 transition flex-col items-center w-[284px] py-[21px] text-center"
          >
            <img class="w-[34px]" src="/services/delivery.svg" alt="img" />
            <h4 class="leading-[120%] mobileSmall:text-[16px] pt-[4px] text-[18px]">
              Бесплатная доставка
            </h4>
            <p class="leading-[120%] pt-[6px]">
              Доставка осуществляется каждый день с 8:00 до 00:00 по г. Краснодару
            </p>
          </router-link>
          <router-link
            :to="{ name: 'Guarantees' }"
            class="flex hover:shadow-service hover:-translate-y-2 transition flex-col items-center w-[284px] py-[21px] text-center"
          >
            <img class="w-[34px]" src="/services/flowers.svg" alt="img" />
            <h4 class="leading-[120%] mobileSmall:text-[16px] pt-[4px] text-[18px]">
              Гарантия качества
            </h4>
            <p class="leading-[120%] pt-[6px]">
              Букеты собираются нашими лучшими флористами и соответсвуют фото на сайте
            </p>
          </router-link>
          <router-link
            :to="{ name: 'About us' }"
            class="flex hover:shadow-service hover:-translate-y-2 transition flex-col items-center w-[284px] py-[21px] text-center"
          >
            <img class="w-[34px]" src="/services/ten.svg" alt="img" />
            <h4 class="leading-[120%] mobileSmall:text-[16px] pt-[4px] text-[18px]">
              Более 10 лет на рынке
            </h4>
            <p class="leading-[120%] pt-[6px]">
              Мы успешно доставляем цветы уже более 10 лет в Краснодаре.
            </p>
          </router-link>
        </div>
      </div>
    </section>
    <section class="py-[64px]">
      <div class="container">
        <div class="text-[32px] tabble:text-[26px] mobile:text-[20px] font-serif leading-[120%]">
          Счастливые получатели наших цветов в
          <span class="text-[#2dad73]">Краснодаре</span> (750)
        </div>
        <SliderHome />
        <div class="flex items-center justify-center pt-[26px]">
          <router-link
            to="/reviews"
            class="btn text-[16px] min-h-[42px] mobile:min-h-[38px] w-[360px] mobile:w-[264px] mobileSmall:w-full leading-[120%] border-[2px] border-solid text-gray-600 border-gray-400 hover:border-[#2dad73] hover:text-[#2dad73] rounded-[6px]"
            >Перейти в галерею</router-link
          >
        </div>
      </div>
    </section>
  </main>
</template>
