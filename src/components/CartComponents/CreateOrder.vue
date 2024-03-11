<script setup>
import { useCartStore } from '../../stores/cartsStore.js'

const cartStore = useCartStore()
</script>

<template>
  <div class="container flex flex-col mobile:items-center mobile:text-center">
    <img class="w-[88px]" src="/ok.svg" alt="ok" />
    <div class="text-[26px] font-bold leading-[120%]">Заказ оформлен</div>
    <p class="text-gray-500 text-[16px] leading-[120%] pt-[4px]">
      Ваш заказ №{{ cartStore.orderId }} скоро будет передан курьерской доставке
    </p>
    <router-link
      class="inline-flex justify-start mobile:justify-center items-center text-center transition px-[15px] text-[16px] min-h-[46px] w-[210px] mobileSmall:w-full leading-[120%] bg-[#2dad73] text-white hover:bg-[#288b5e] rounded-[6px] mt-[18px]"
      to="/"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="w-5 h-5 mobile:hidden"
      >
        <path
          fill-rule="evenodd"
          d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
          clip-rule="evenodd"
        />
      </svg>

      <span class="mb:pl-[10px]">Вернуться назад</span>
    </router-link>
  </div>
</template>
