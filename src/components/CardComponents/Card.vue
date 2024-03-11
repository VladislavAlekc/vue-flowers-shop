<script setup>
const emit = defineEmits(['onClickAdd', 'onClickFavorite'])
defineProps({
  id: Number,
  labels: Object,
  imageUrl: String,
  title: String,
  size: String,
  price: Number,
  priceOld: Number,
  isFavorite: Boolean,
  isAdded: Boolean
})

const priceFormat = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0
})
const oldPriceFormat = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  maximumFractionDigits: 0
})
</script>
<template>
  <article
    class="relative flex flex-col bg-[#f4f5f7] duration-300 hover:shadow-[0_0_40px_rgba(58,186,118,0.46)]"
  >
    <button
      @click="emit('onClickFavorite')"
      v-if="!isFavorite"
      class="absolute top-[12px] z-10 right-[24px] w-[14px] hover:text-pink-500 hover:scale-125 transition duration-450"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
        viewBox="0 0 22 22"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
    <button
      v-else
      @click="emit('onClickFavorite')"
      class="absolute top-[12px] z-10 right-[24px] w-[14px] text-[#ee4b8f] hover:scale-125 transition duration-450"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#ee4b8f"
        viewBox="0 0 22 22"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
    <router-link class="_ibg pb-[103.6%]" :to="{ name: 'Bouquet', params: { id } }">
      <img :src="imageUrl" alt="flowers" />
      <div v-if="labels" class="absolute z-10 bottom-[8px] left-[6px]">
        <div
          :class="labels.type"
          class="leading-[120%] text-[14px] px-[15px] py-[5px] rounded-[10px] text-white font-bold"
        >
          {{ labels.name }}
        </div>
      </div>
    </router-link>
    <div class="flex flex-auto flex-col p-[12px_10px_12px_10px]">
      <router-link
        :to="{ name: 'Bouquet', params: { id } }"
        class="text-[18px] leading-[120%] font-bold mb-[5px] hover:text-[#368863] truncate"
      >
        {{ title }}
      </router-link>
      <div class="text-gray-500 leading-[120%] mb-[15px]">{{ size }}см</div>
      <div class="flex items-center mb-[15px]">
        <div class="leading-[120%] text-[20px]">
          {{ priceFormat.format(price) }}
        </div>
        <div
          v-if="priceOld"
          class="text-gray-500 leading-[120%] text-[16px] ml-[16px] line-through"
        >
          {{ oldPriceFormat.format(priceOld) }}
        </div>
      </div>
      <button
        v-if="!isAdded"
        @click="emit('onClickAdd')"
        type="button"
        class="btn min-h-[42px] w-full bg-[#2dad73] hover: hover:bg-[#1e7c53] rounded-[4px]"
      >
        <img src="/header/basket.svg" alt="cart" />
        <span class="text-[16px] text-white leading-[120%] ml-[10px]">В корзину</span>
      </button>
      <router-link v-else class="btn min-h-[42px] w-full bg-[#55b6843d] rounded-[4px]" to="/cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-[24px] h-[24px] text-[#2dad73]"
        >
          <path
            fill-rule="evenodd"
            d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
            clip-rule="evenodd"
          />
        </svg>

        <span class="text-[16px] text-[#333] leading-[120%] ml-[6px]">В корзине</span>
      </router-link>
    </div>
  </article>
</template>
