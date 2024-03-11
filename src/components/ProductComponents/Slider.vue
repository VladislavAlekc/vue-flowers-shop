<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Zoom, Navigation, Thumbs, FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css/zoom'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import { ref } from 'vue'

defineProps({
  imageUrl: String
})

const thumbsSwiper = ref(null)
const next = ref(null)
const prev = ref(null)

const modules = [Zoom, Navigation, Thumbs, FreeMode, Pagination]

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}
</script>
<template>
  <div>
    <swiper
      class="mySwiperTop"
      :zoom="true"
      :navigation="{
        prevEl: prev,
        nextEl: next
      }"
      :pagination="{ el: '.slider-dotts', clickable: true }"
      :loop="true"
      :allow-touch-move="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :slides-per-view="1"
      :space-between="50"
      :modules="modules"
      :breakpoints="{
        767.98: {
          allowTouchMove: false,
          loop: false
        }
      }"
    >
      <swiper-slide
        ><div class="swiper-zoom-container _ibg pb-[100%]">
          <img :src="imageUrl" alt="flowers1" /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="swiper-zoom-container _ibg pb-[100%]">
          <img :src="imageUrl" alt="flowers2" /></div
      ></swiper-slide>
      <swiper-slide
        ><div class="swiper-zoom-container _ibg pb-[100%]">
          <img :src="imageUrl" alt="flowers3" /></div
      ></swiper-slide>
      <div class="slider-dotts pt-[12px] hidden"></div>
    </swiper>

    <div class="flex items-center justify-between mobile:hidden">
      <button
        ref="prev"
        type="button"
        class="w-[32px] mr-[14px] h-[32px] flex items-center justify-center hover:shadow-order transition hover:scale-125 rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-7 h-7 text-[#2dad73]"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <swiper
        class="mySwiperBott"
        @swiper="setThumbsSwiper"
        :freeMode="true"
        :watchSlidesProgress="true"
        :spaceBetween="14"
        :slidesPerView="3"
        :modules="modules"
      >
        <swiper-slide
          class="flex items-center cursor-pointer transition hover:border-[2px] hover:border-solid hover:border-[#1a8b58b5] hover:rounded-[6px]"
          ><img class="rounded-[4px]" :src="imageUrl" alt="flowers1" /></swiper-slide
        ><swiper-slide
          class="flex items-center cursor-pointer transition hover:border-[2px] hover:border-solid hover:border-[#1a8b58b5] hover:rounded-[6px]"
          ><img class="rounded-[4px]" :src="imageUrl" alt="flower2" /></swiper-slide
        ><swiper-slide
          class="flex items-center cursor-pointer transition hover:border-[2px] hover:border-solid hover:border-[#1a8b58b5] hover:rounded-[6px]"
          ><img class="rounded-[4px]" :src="imageUrl" alt="flowers3"
        /></swiper-slide>
      </swiper>
      <button
        ref="next"
        type="button"
        class="w-[32px] ml-[14px] h-[32px] flex items-center justify-center hover:shadow-order transition hover:scale-125 rounded-[50%]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-7 h-7 text-[#2dad73]"
        >
          <path
            fill-rule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
