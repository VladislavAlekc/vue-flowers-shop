<script setup>
import { ref } from 'vue'

const visableClients = ref(true)
const visableAboutUs = ref(true)

const mediaQuery = window.matchMedia('(min-width: 767.98px)')

visableClients.value = mediaQuery.matches
visableAboutUs.value = mediaQuery.matches

const listener = (event) => {
  visableAboutUs.value = event.matches
  visableClients.value = event.matches
}

mediaQuery.addListener(listener)

const clickClients = () => {
  if (!mediaQuery.matches) {
    visableClients.value = !visableClients.value
  } else {
    visableClients.value
  }
}
const clickAboutUs = () => {
  if (!mediaQuery.matches) {
    visableAboutUs.value = !visableAboutUs.value
  } else {
    visableAboutUs.value
  }
}
</script>

<template>
  <footer class="bg-[#333] pt-[64px] pb-[14px]">
    <div class="container">
      <div class="grid gap-[80px] mobile:gap-[44px] tb:grid-cols-[250px_1fr_260px]">
        <div class="flex flex-col items-start">
          <router-link class="flex flex-col" to="/">
            <div class="flex items-center">
              <img class="w-[42px] pr-[4px]" src="/footer/logo4.svg" alt="logo" />
              <img src="/footer/logo3.svg" alt="logo" />
            </div>
            <h4 class="text-white pt-[6px] leading-[120%]">Доставка цветов по Краснодару</h4>
          </router-link>
          <div class="flex flex-col gap-[12px] pt-[24px]">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-white leading-[120%] pl-[2px]">Краснодар</span>
            </div>
            <div class="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-4 text-white group-hover:text-[#2dad73]"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <a
                href="tel:88005553535"
                class="pl-[4px] group-hover:text-[#2dad73] leading-[120%] text-white"
                >8-800-555-3535</a
              >
            </div>
            <div class="flex items-center group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-white group-hover:text-[#2dad73]"
              >
                <path
                  d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                />
                <path
                  d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                />
              </svg>

              <a
                href="info@flowers-galery.ru"
                class="pl-[4px] leading-[120%] text-white group-hover:text-[#2dad73]"
                >info@flowers-galery.ru</a
              >
            </div>
          </div>
        </div>
        <div class="flex mb:gap-[42px] mobile:flex-col">
          <div
            class="mobile:mb-[16px] mobile:bg-[#484848] mobile:p-[16px] mobile:rounded-[10px] transition"
          >
            <div
              @click="clickAboutUs"
              class="mobile:flex group mobile:justify-between mobile:cursor-pointer"
            >
              <button
                class="text-[#999] mobile:text-white mobile:group-hover:text-[#2dad73] mobile:cursor-pointer text-[18px] font-bold cursor-default leading-[120%]"
                type="button"
              >
                О нас
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-white mb:hidden mobile:group-hover:text-[#2dad73] transition"
                :class="visableAboutUs ? 'rotate-180' : ''"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <ul v-show="visableAboutUs" class="flex flex-col pt-[18px] gap-[14px]">
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'About us' }"
                  >О нас</router-link
                >
              </li>
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'Delivery' }"
                  >Доставка</router-link
                >
              </li>
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'Payment' }"
                  >Оплата</router-link
                >
              </li>
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'Reviews' }"
                  >Отзывы о салоне</router-link
                >
              </li>
            </ul>
          </div>
          <div class="mobile:p-[16px] mobile:rounded-[10px] mobile:bg-[#484848] transition">
            <div
              @click="clickClients"
              class="mobile:flex group mobile:justify-between mobile:cursor-pointer"
            >
              <button
                class="text-[#999] mobile:text-white mobile:group-hover:text-[#2dad73] mobile:cursor-pointer text-[18px] font-bold cursor-default leading-[120%]"
                type="button"
              >
                Клиентам
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-white mb:hidden mobile:group-hover:text-[#2dad73] transition"
                :class="visableClients ? 'rotate-180' : ''"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <ul v-show="visableClients" class="flex flex-col pt-[18px] gap-[14px]">
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'Сontacts' }"
                  >Контакты</router-link
                >
              </li>
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'Guarantees' }"
                  >Гарантии</router-link
                >
              </li>
              <li>
                <router-link
                  class="text-white leading-[120%] hover:text-[#2dad73]"
                  :to="{ name: 'Reviews' }"
                  >Отзывы о салоне</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col">
          <div class="text-[#999]">Язык интерфейса:</div>
          <div class="flex items-center pt-[14px]">
            <button
              class="border-[1px] border-white border-solid px-[2px] rounded-[4px]"
              type="button"
            >
              <img class="w-[24px]" src="/footer/flag-ru.svg" alt="flag" />
            </button>
            <button class="pl-[18px]" type="button">
              <img class="w-[24px]" src="/footer/flag-en.svg" alt="flag" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-[40px] mobile:my-[24px] border-t-[1px] border-[#eeeeee26] border-solid" />
    <div class="container">
      <div class="text-[#999]">© Служба доставки цветов Flowers galery, 2024</div>
    </div>
  </footer>
</template>
