<script setup>
import Search from './Search.vue'
import { useCartStore } from '../../stores/cartsStore'
import { useFavoritesStore } from '../../stores/favoritesStore'
import { ref } from 'vue'

const cartStore = useCartStore()
const favoritesStore = useFavoritesStore()

const openContactsModal = ref(false)
const toggleBurgerMenu = ref(false)
</script>

<template>
  <header class="tb:sticky tb:-top-[70px] tb:left-0 tb:z-[100]">
    <div>
      <div class="container">
        <div class="flex justify-between min-h-[70px]">
          <div class="flex items-center">
            <router-link class="flex pr-[25px] items-center" to="/">
              <img class="max-w-[45px]" src="/header/logo2.svg" alt="logo2" />
              <img class="pl-[4px]" src="/header/logo1.svg" alt="logo1" />
            </router-link>
            <nav
              :class="[toggleBurgerMenu ? 'left-0 ' : 'left-[100%]']"
              class="flex mobile:burger-body-mob mobile:mob-burger-list"
            >
              <ul
                class="flex py-[5px] gap-[18px] tabble:ml-[8px] tabble:gap-[15px] mobile:ml-0 mobile:flex-col mobile:gap-[25px] mobile:mt-[10px]"
              >
                <li class="mb:hidden">
                  <router-link
                    class="flex pr-[25px] items-center"
                    to="/"
                    @click="toggleBurgerMenu = false"
                  >
                    <img class="max-w-[50px]" src="/header/logo2.svg" alt="logo2" />
                    <img class="pl-[4px]" src="/header/logo1.svg" alt="logo1" />
                  </router-link>
                </li>
                <li>
                  <router-link
                    class="lg:text-[12px] leading-[120%] mobile:text-[18px] mobile:font-serif relative after:absolute after:h-[1px] after:w-full after:bg-[#333] after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                    :to="{ name: 'About us' }"
                    @click="toggleBurgerMenu = false"
                    >О нас</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="lg:text-[12px] leading-[120%] mobile:text-[18px] mobile:font-serif relative after:absolute after:h-[1px] after:w-full after:bg-[#333] after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                    :to="{ name: 'Delivery' }"
                    @click="toggleBurgerMenu = false"
                    >Доставка</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="lg:text-[12px] leading-[120%] mobile:text-[18px] mobile:font-serif relative after:absolute after:h-[1px] after:w-full after:bg-[#333] after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                    :to="{ name: 'Payment' }"
                    @click="toggleBurgerMenu = false"
                    >Оплата</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="lg:text-[12px] leading-[120%] mobile:text-[18px] mobile:font-serif relative after:absolute after:h-[1px] after:w-full after:bg-[#333] after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                    :to="{ name: 'Сontacts' }"
                    @click="toggleBurgerMenu = false"
                    >Контакты</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="lg:text-[12px] leading-[120%] mobile:text-[18px] mobile:font-serif relative after:absolute after:h-[1px] after:w-full after:bg-[#333] after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                    :to="{ name: 'Reviews' }"
                    @click="toggleBurgerMenu = false"
                    >Отзывы</router-link
                  >
                </li>
                <li>
                  <router-link
                    class="lg:text-[12px] leading-[120%] mobile:text-[18px] mobile:font-serif relative after:absolute after:h-[1px] after:w-full after:bg-[#333] after:left-0 after:-bottom-1 after:scale-0 hover:after:scale-100 after:transition-transform"
                    :to="{ name: 'Guarantees' }"
                    @click="toggleBurgerMenu = false"
                    >Гарантии</router-link
                  >
                </li>
              </ul>
            </nav>
          </div>
          <div class="flex items-center">
            <div class="relative group">
              <button class="mr-[12px]" type="button">
                <img class="w-[24px]" src="/footer/flag-ru.svg" alt="flag" />
              </button>
              <ul
                class="absolute hidden flex flex-col w-max top-[135%] -left-[5%] border rounded-[8px] transition-all hover:pointer-events-auto shadow-customeblack z-50 bg-white opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              >
                <li
                  class="flex py-[8px] px-[12px] items-center hover:bg-[rgba(61,195,128,0.42)] hover:rounded-[8px] cursor-pointer"
                >
                  <img class="w-[24px]" src="/footer/flag-ru.svg" alt="flag" />
                  <div class="flex flex-col pl-[10px] leading-[120%]">Русский язык</div>
                </li>
                <li
                  class="flex items-center py-[8px] px-[12px] hover:bg-[rgba(61,195,128,0.42)] hover:rounded-[8px] cursor-pointer"
                >
                  <img class="w-[24px]" src="/footer/flag-en.svg" alt="flag" />
                  <div class="flex flex-col pl-[10px] text-gray-400 leading-[120%]">
                    Английский язык
                  </div>
                </li>
              </ul>
            </div>
            <a class="group flex items-center" href="#"
              ><img
                class="max-w-[24px] group-hover:scale-[1.16] transition-all"
                src="/header/enter.svg"
                alt="enter"
              />
              <span class="text-[#333] leading-[120%] pl-[3px] lg:text-[12px] mobile:hidden"
                >Войти</span
              >
            </a>
            <button
              @click="toggleBurgerMenu = !toggleBurgerMenu"
              :class="[
                toggleBurgerMenu ? 'active fixed top-[28px] right-[18px]' : 'block relative'
              ]"
              class="group mb:hidden z-[150] h-[15px] w-[20px] ml-[15px]"
            >
              <span
                class="bg-[#333] rounded-[25px] absolute h-[2px] -left-1 top-[1px] w-full bg-light group-[.active]:translate-y-[7px] group-[.active]:rotate-45 transition"
              ></span>
              <span
                class="bg-[#333] rounded-[25px] absolute h-[2px] left-0 w-[80%] top-[7px] bg-light group-[.active]:opacity-0 transition"
              ></span>
              <span
                class="bg-[#333] rounded-[25px] absolute h-[2px] -left-1 w-full -bottom-[0px] bg-light group-[.active]:translate-y-[-5px] group-[.active]:-rotate-45 transition"
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg relative">
      <div class="container">
        <div
          class="relative flex justify-between min-h-[72px] mobile:min-h-[58px] items-center py-[5px]"
        >
          <div class="flex gap-[24px] mobile:gap-[14px] items-center">
            <div class="flex">
              <img
                class="max-w-[26px] tabble:w-[21px] mr-[4px] animate-[bounce_1.7s_ease-in-out_infinite]"
                src="/header/place.svg"
                alt="place"
              />
              <div class="flex flex-col">
                <span
                  class="pb-[5px] leading-[120%] text-[#3c3636d4] tabble:text-[12px] mobile:hidden"
                  >Город доставки</span
                >
                <span class="text-white leading-[120%] font-bold text-[16px]">Краснодар</span>
              </div>
            </div>
            <ul>
              <li class="flex relative group">
                <div class="mb:flex mb:flex-col mb:cursor-pointer">
                  <button @click="openContactsModal = true" class="mb:hidden">
                    <img
                      class="w-[17px] group-hover:scale-[1.24] transition-all"
                      src="/header/telephone.svg"
                      alt="telephone"
                    />
                  </button>
                  <span
                    class="tabble:text-[12px] leading-[120%] text-[#3c3636d4] pb-[5px] mobile:hidden"
                    >Связаться с нами</span
                  >
                  <div class="flex items-center mobile:hidden">
                    <a
                      class="text-white tabble:text-[12px] leading-[120%] font-bold"
                      href="tel:88005553535"
                      >8 800 555-35-35</a
                    >
                    <button type="button" class="pl-[8px]">
                      <img
                        class="w-[10px] tabble:w-[8px] transition duration-[0.3s] group-hover:rotate-180 mobile:hidden"
                        src="/header/arrow.svg"
                        alt="arrow"
                      />
                    </button>
                  </div>
                  <ul
                    :class="openContactsModal ? 'mobile:left-0' : 'mobile:-left-[100%]'"
                    class="mb:absolute flex flex-col mb:py-[15px] mb:px-[15px] mb:min-w-[225px] mb:top-[135%] mb:-left-[5%] mobile:call-popup mb:border mb:rounded-[20px] transition-all mb:hover:pointer-events-auto shadow-customeblack z-50 bg-white mb:opacity-0 mb:invisible mb:group-hover:opacity-100 mb:group-hover:visible"
                  >
                    <li class="pb-[25px] mb:hidden flex items-center justify-between">
                      <span class="text-[#333] leading-[120%] text-[16px] font-bold">Контакты</span>
                      <span @click="openContactsModal = false">
                        <img class="w-[24px]" src="/header/cross.svg" alt="cross" />
                      </span>
                    </li>
                    <li
                      class="flex pb-[15px] flex-col border-solid border-b-[1px] border-gray-400 mb:hidden"
                    >
                      <span class="pb-[10px] text-[15px] leading-[120%] text-gray-400"
                        >Главный менеджер</span
                      >
                      <a class="font-bold leading-[120%]" href="##">8 800 555-35-35</a>
                    </li>
                    <li class="pb-[14px] text-[#333] leading-[120%] text-[16px] mobile:pt-[20px]">
                      Написать в чат
                    </li>
                    <li class="flex items-center pb-[15px]">
                      <img class="w-[25px]" src="/header/whatsapp.svg" alt="whatsapp" />
                      <div class="flex flex-col pl-[10px]">
                        <span class="pb-[5px] text-gray-400 leading-[120%]">WhatsApp</span>
                        <a class="font-bold hover:text-[#2dad73] leading-[120%]" href="##"
                          >8 800 555-35-35</a
                        >
                      </div>
                    </li>
                    <li class="flex items-center pb-[5px]">
                      <img class="w-[25px]" src="/header/telegram.svg" alt="telegram" />
                      <div class="flex flex-col pl-[10px]">
                        <span class="pb-[5px] text-gray-400 leading-[120%]">Telegram</span>
                        <a class="font-bold hover:text-[#2dad73] leading-[120%]" href="##"
                          >8 800 555-35-35</a
                        >
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="flex gap-[25px] lg:gap-[15px]">
            <Search />
            <router-link class="flex items-center group justify-center flex-col" to="/favorites">
              <div class="relative group-hover:scale-[1.14] transition-all">
                <img class="w-[22px] mobileSmall:w-[19px]" src="/header/like.svg" alt="marker" />
                <span
                  v-if="favoritesStore.countFavorites"
                  class="absolute flex items-center font-bold justify-center text-[12px] -top-[7px] -right-[8px] bg-white h-4 w-4 rounded-[50%]"
                  >{{ favoritesStore.countFavorites }}</span
                >
              </div>
              <span class="text-white leading-[120%] lg:text-[12px] lg:hidden">Избранное</span>
            </router-link>
            <router-link class="flex items-center justify-center group flex-col" to="/cart">
              <div class="relative transition-all group-hover:scale-[1.14]">
                <img
                  class="w-[22px] mobileSmall:max-w-[19px]"
                  src="/header/basket.svg"
                  alt="basket"
                />
                <span
                  v-if="cartStore.totalCount"
                  class="absolute flex items-center font-bold justify-center text-[12px] -top-[7px] -right-[8px] bg-white h-4 w-4 rounded-[50%]"
                  >{{ cartStore.totalCount }}</span
                >
              </div>
              <span class="text-white leading-[120%] tabble:pl-[5px] lg:text-[12px] lg:hidden"
                >Корзина</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
