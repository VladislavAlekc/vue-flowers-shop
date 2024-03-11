<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Mousewheel } from 'swiper/modules'
import 'swiper/css'

const modules = [Navigation, Pagination, Mousewheel]
</script>
<template>
  <div class="flex pt-[54px] items-center justify-between">
    <button
      type="button"
      class="w-[32px] mobile:hidden prev-btn mr-[14px] h-[32px] flex items-center justify-center hover:shadow-order transition hover:scale-125 rounded-[50%]"
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
      :navigation="{
        prevEl: '.prev-btn',
        nextEl: '.next-btn'
      }"
      :pagination="{ el: '.slider-home-dotts', clickable: true }"
      :allow-touch-move="true"
      :spaceBetween="14"
      :mousewheel="true"
      :breakpoints="{
        767.98: {
          slidesPerView: 4,
          spaceBetween: 40
        }
      }"
      :slides-per-view="3"
      :space-between="20"
      :modules="modules"
    >
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb1.jpg" alt="img" /></swiper-slide>
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb2.jpg" alt="img" /></swiper-slide>
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb3.jpg" alt="img" /></swiper-slide>
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb4.jpg" alt="img" /></swiper-slide>
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb5.jpg" alt="img" /></swiper-slide>
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb6.jpg" alt="img" /></swiper-slide>
      <swiper-slide class="cursor-pointer"><img src="/feedback/fb7.jpg" alt="img" /></swiper-slide>
      <div class="slider-home-dotts pt-[12px] cursor-pointer"></div>
    </swiper>

    <button
      type="button"
      class="w-[32px] mobile:hidden next-btn ml-[14px] h-[32px] flex items-center justify-center hover:shadow-order transition hover:scale-125 rounded-[50%]"
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
</template>
