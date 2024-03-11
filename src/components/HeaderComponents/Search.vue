<script setup>
import { useFiltersStore } from '../../stores/filtersStore.js'
import { debounce } from 'lodash'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
const router = useRouter()
const enterTab = (e) => {
  e.preventDefault()
  router.push({ name: 'Home' })
  filtersStore.changeSearch
}
const value = ref('')
const filtersStore = useFiltersStore()
const onChangeSearch = debounce(filtersStore.changeSearch, 450)
const clearSearch = () => {
  value.value = ''
  filtersStore.filters.searchQuery = ''
}
const toggleSearchModal = ref(false)
</script>

<template>
  <div>
    <button
      @click="toggleSearchModal = !toggleSearchModal"
      type="button"
      class="mb:hidden relative"
    >
      <img class="w-[24px] mobileSmall:max-w-[21px]" src="/header/search2.svg" alt="search2" />
    </button>
    <form
      action="##"
      :class="[toggleSearchModal ? 'mobile:top-[48px]' : 'mobile:-top-[300%]']"
      class="relative bg-white h-[42px] flex items-center rounded-[25px] mobile:search-popup"
    >
      <input
        @input="onChangeSearch"
        v-model="value"
        @keydown.enter="enterTab"
        class="w-[264px] rounded-[25px] mb:focus:w-[384px] mobile:w-full duration-[335ms] placeholder:italic placeholder-gray-500 focus:placeholder:opacity-0 focus:placeholder:duration-[180ms] text-[14px] tabble:text-[12px] outline-none py-[12px] pl-[24px] pr-[64px]"
        type="text"
        autocomplete="off"
        placeholder="Поиск букетов..."
      />
      <svg
        v-if="value"
        @click="clearSearch"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 absolute top-[27%] right-[38px] text-gray-400 hover:text-[#333] cursor-pointer"
      >
        <path
          d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
        />
      </svg>

      <svg
        @click="router.push('/')"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 absolute top-[27%] right-[14px] text-gray-400 hover:text-[#333] cursor-pointer"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
          clip-rule="evenodd"
        />
      </svg>
    </form>
  </div>
</template>
