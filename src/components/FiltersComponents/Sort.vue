<script setup>
import { ref, watchEffect } from 'vue'
import { useFiltersStore } from '../../stores/filtersStore'

const FiltersStore = useFiltersStore()
const visable = ref(false)
const activeFilter = ref('По популярности')
const filterRef = ref(null)
const filters = ref([
  { message: 'По популярности', sortBy: 'rating' },
  { message: 'По названию', sortBy: 'name' },
  { message: 'Цены по убыванию', sortBy: '-price' },
  { message: 'Цены по возрастанию', sortBy: 'price' }
])

const changeFilters = (filter) => {
  FiltersStore.changeFilter(filter)
  activeFilter.value = filter.message
  visable.value = false
}
const toggleVisableFilter = () => {
  visable.value = !visable.value
}
watchEffect(() => {
  const handleClickOutside = (event) => {
    const _event = event
    const path = _event.path || (event.composedPath && event.composedPath())
    if (filterRef.value && !path.includes(filterRef.value)) {
      visable.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
})
</script>
<template>
  <div ref="filterRef" class="relative">
    <div @click="toggleVisableFilter" class="flex items-center cursor-pointer group">
      <img class="w-[21px] mobileSmall:w-[16px]" src="/main/sort.svg" alt="sort" />
      <span
        class="font-bold mbs:text-[16px] leading-[120%] group-hover:underline group-hover:underline-offset-2"
        >{{ activeFilter }}</span
      >
    </div>

    <ul
      v-if="visable"
      class="absolute flex flex-col p-[2px] top-[28px] right-[0px] border-[1px] border-solid border-gray-200 rounded-[10px] transition-all pointer-events-auto z-50 bg-white w-max"
    >
      <li
        v-for="(filter, index) in filters"
        @click="changeFilters(filter)"
        :key="index"
        class="px-[18px] py-[10px] cursor-pointer hover:bg-[rgba(61,195,128,0.42)] hover:rounded-[8px] leading-[120%] text-[16px]"
      >
        {{ filter.message }}
      </li>
    </ul>
  </div>
</template>
