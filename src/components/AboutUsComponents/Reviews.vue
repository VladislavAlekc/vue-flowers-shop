<script setup>
import { computed, ref } from 'vue'

const imgReviews = ref([
  { pathImg: '/feedback/fb1.jpg' },
  { pathImg: '/feedback/fb2.jpg' },
  { pathImg: '/feedback/fb3.jpg' },
  { pathImg: '/feedback/fb4.jpg' },
  { pathImg: '/feedback/fb5.jpg' },
  { pathImg: '/feedback/fb6.jpg' },
  { pathImg: '/feedback/fb7.jpg' }
])
const photos = ref({})
const length = ref(4)

photos.value = imgReviews.value.map((item) => {
  return { ...item, show: false }
})
const imgLimited = computed(() => {
  return photos.value.slice(0, length.value)
})

const loadMore = () => {
  if (length.value > imgReviews.value.length) return
  length.value = length.value + 4
}
const openImg = (img) => {
  img.show = true
  document.body.classList.add('overflow-hidden')
}
const closeImg = (img) => {
  img.show = false
  document.body.classList.remove('overflow-hidden')
}
</script>

<template>
  <div>
    <article class="flex flex-col">
      <div class="flex justify-center mb-[38px]">
        <h1
          class="text-[#2b3039] mbs:text-[38px] text-[28px] font-serif leading-[120%] relative after:absolute after:h-[1px] after:w-[110%] after:bg-[#333] after:left-[-7px] after:bottom-0"
        >
          Отзывы
        </h1>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[32px]">
        <div v-for="(img, index) in imgLimited" :key="index">
          <div
            @click="openImg(img)"
            class="cursor-pointer transition hover:-translate-y-2 hover:shadow-order _ibg pb-[378px]"
          >
            <img :src="img.pathImg" alt="img" />
          </div>

          <div v-if="img.show" class="popup-img">
            <img :src="img.pathImg" alt="img" />
            <span @click="closeImg(img)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2.8"
                stroke="currentColor"
                class="w-10 h-10"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="imgLimited.length !== imgReviews.length"
        class="flex items-center justify-center pt-[44px]"
      >
        <button
          @click="loadMore"
          class="btn text-[16px] min-h-[42px] mobile:min-h-[38px] w-[210px] mobileSmall:w-full leading-[120%] border-[2px] border-solid text-gray-600 border-gray-400 hover:border-[#2dad73] hover:text-[#2dad73] rounded-[6px]"
        >
          Показать еще
        </button>
      </div>
    </article>
  </div>
</template>
<style scoped>
.container .popup-img {
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(3px);
  height: 100%;
  width: 100%;
  z-index: 100;
}
.container .popup-img span {
  position: absolute;
  top: 30px;
  right: 35px;
  cursor: pointer;
  color: white;

  z-index: 100;
}
.container .popup-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 378px;
  object-fit: cover;
}
</style>
