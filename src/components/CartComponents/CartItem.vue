<script setup>
const emit = defineEmits(['onClickRemove'])
defineProps({
  id: Number,
  size: String,
  count: Number,
  imageUrl: String,
  title: String,
  price: Number,
  priceOld: Number,
  plusItem: Function,
  minusItem: Function
})
</script>

<template>
  <div
    class="flex border-b border-solid border-gray-300 duration-200 py-[26px] mobileSmall:py-[16px]"
  >
    <a class="_ibg w-[214px] h-[214px] mobileSmall:w-[168px] mobileSmall:h-[144px]">
      <img class="" :src="imageUrl" alt="flowers" />
    </a>
    <div
      class="flex-auto flex justify-between flex-col mbs:p-[20px_18px_16px_22px] mobileSmall:pl-[12px]"
    >
      <div class="flex flex-col">
        <div class="flex justify-between">
          <span class="text-[18px] mobileSmall:text-[15px] leading-[120%]">{{ title }}</span>
          <a
            @click="emit('onClickRemove')"
            class="text-gray-400 duration-300 pl-[15px] hover:text-[#2dad73]"
            href="##"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 mobileSmall:w-[18px]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </a>
        </div>
        <div class="mbs:text-[16px] leading-[120%] pt-[6px]">{{ size }}</div>
      </div>
      <div class="flex justify-between">
        <div
          class="flex items-center justify-between h-[40px] w-[86px] mobileSmall:w-[64px] mobileSmall:h-[34px] px-[8px] bg-[rgba(85,184,134,0.13)] rounded-lg"
        >
          <button
            @click="minusItem"
            :disabled="count === 1"
            :class="[count === 1 ? 'opacity-10 ' : 'text-gray-400 hover:scale-[1.24] duration-200']"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.6"
              stroke="currentColor"
              class="w-5 h-5 mobileSmall:w-[14px]"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
            </svg>
          </button>

          <div class="mbs:text-[16px]">{{ count }}</div>
          <button
            @click="plusItem"
            class="text-[#42aa6a] hover:scale-[1.24] duration-200"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.6"
              stroke="currentColor"
              class="w-5 h-5 mobileSmall:w-[14px]"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <div class="flex flex-col items-end">
          <div
            v-if="priceOld"
            class="text-gray-500 leading-[120%] text-[14px] mobileSmall:text-[12px] line-through"
          >
            {{ priceOld * count }} ₽
          </div>
          <div
            class="leading-[120%] text-[#20a569de] text-[22px] mobileSmall:text-[16px] mbs:pt-[2px]"
          >
            {{ price * count }} ₽
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
