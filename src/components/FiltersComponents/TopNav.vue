<script setup>
import { useFiltersStore } from '../../stores/filtersStore'
const emit = defineEmits(['clickActiveFilters'])
defineProps({
  categories: Array
})

const filtersStore = useFiltersStore()
</script>
<template>
  <div class="pb-[24px] lg:pb-[16px]">
    <h1
      class="font-serif text-[36px] pb-[18px] leading-[120%] mobileSmall:text-[24px] mobile:text-[28px]"
    >
      Доставка цветов в Краснодаре
    </h1>
    <div class="flex items-center">
      <button
        @click="emit('clickActiveFilters')"
        type="button"
        class="large:hidden mr-[14px] large:mb-[14px] px-[14px] mobile:px-[24px] flex text-center justify-center mbs:text-[16px] items-center border-[2px] border-solid min-h-[32px] border-gray-200 rounded-[25px] hover:border-[#2dad73]"
      >
        <img class="w-[22px] mr-[4px]" src="/filter.svg" alt="filter" />
        <span class="leading-[120%]">Фильтры</span>
      </button>

      <ul class="flex large:flex-wrap overflow-x-auto scrollbar-hide -mr-[16px] rounded-[12px]">
        <li
          v-for="(category, index) in categories"
          :key="category.id"
          :class="[
            filtersStore.filters.category === index
              ? 'bg-[#2dad73e6] text-white'
              : 'bg-[rgba(85,182,134,0.24)] '
          ]"
          @click="filtersStore.filters.category = index"
          class="transition cursor-pointer whitespace-nowrap hover:bg-[#2dad73e6] hover:text-white flex items-center min-h-[32px] px-[14px] mr-[14px] large:mb-[14px] rounded-[15px]"
        >
          {{ category.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
