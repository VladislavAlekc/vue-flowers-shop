<script setup>
import Slider from '../components/ProductComponents/Slider.vue'
import { watchEffect, onMounted, ref } from 'vue'
import axios from 'axios'
import { useFavoritesStore } from '../stores/favoritesStore.js'
import { useCartStore } from '../stores/cartsStore.js'
import { useRoute, useRouter } from 'vue-router'

const favoritesStore = useFavoritesStore()
const cartStore = useCartStore()
const { params } = useRoute()
const router = useRouter()

const item = ref({})

watchEffect(() => {
  async function fetchProduct() {
    try {
      const { data } = await axios.get(`https://4e897fcc89ece60f.mokky.dev/items/` + params.id)

      item.value = data
      item.value.isFavorite =
        favoritesStore.favorite.some((fav) => fav.item.id === item.value.id) || false
      item.value.isAdded = cartStore.cartItems.some((cart) => cart.id === item.value.id)

      const favId = favoritesStore.favorite.find((fav) => fav.item.id === item.value.id)
      item.value.favoriteId = favId?.id || null
    } catch (error) {
      router.go(-1)
      console.log(error)
    }
  }

  onMounted(async () => {
    await favoritesStore.fetchFavorites()
    await favoritesStore.getFavorites()
    await fetchProduct()
  })
})
</script>

<template>
  <main v-if="!item.id">
    <div class="container">
      <div class="py-[14px]">
        <div class="container">
          <ul class="flex items-center">
            <li>
              <router-link
                :to="{ name: 'Home' }"
                class="pr-[4px] text-gray-400 flex items-center"
                href="##"
              >
                <span class="pr-[4px]">Доставка цветов в Краснодаре</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                  class="w-[14px] h-[14px]"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </router-link>
            </li>
            <li>Загрузка...</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
  <main v-else>
    <div class="pt-[14px]">
      <div class="container">
        <ul class="flex items-center">
          <li>
            <router-link
              :to="{ name: 'Home' }"
              class="pr-[4px] text-gray-400 flex items-center"
              href="##"
            >
              <span class="pr-[4px]">Доставка цветов в Краснодаре</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="currentColor"
                class="w-[14px] h-[14px]"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </li>

          <li>
            <router-link :to="{ name: 'Bouquet', params: { id: item.id } }">
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <section class="pt-[24px]">
      <div class="container">
        <div>
          <div
            v-if="item.labels"
            :class="item.labels.type"
            class="leading-[120%] flex justify-center max-w-[112px] mbs:text-[14px] mb-[8px] text-[12px] px-[14px] py-[4px] bg-[#bd2597] rounded-[15px] text-white"
          >
            {{ item.labels.name }}
          </div>
          <h2 class="mbs:text-[40px] text-[34px] font-bold leading-[120%]">
            {{ item.title }}
          </h2>
        </div>
        <div
          class="tb:grid tb:grid-cols-[564px_1fr] tb:gap-[60px] flex flex-col mbs:py-[24px] py-[14px]"
        >
          <Slider :imageUrl="item.imageUrl" />
          <div class="flex flex-col tabble:pt-[14px]">
            <div class="text-[#2dad73] mbs:text-[18px] text-[16px]">В наличии</div>
            <div class="flex items-center pt-[24px]">
              <img class="w-[22px]" src="/product/romantic.svg" alt="delivery" />
              <div class="flex items-center">
                <span class="mbs:text-[16px] text-gray-400 pl-[4px] leading-[120%]"
                  >Доставим за 90 минут</span
                >
              </div>
            </div>
            <div class="flex items-center pt-[6px]">
              <img class="w-[22px]" src="/product/car.svg" alt="car" />
              <div class="pl-[6px] flex items-center">
                <p class="mbs:text-[16px] text-gray-400 leading-[120%]">
                  Доставка в г.
                  <span class="text-[#2dad73] underline underline-offset-2 leading-[120%]"
                    >Краснодар</span
                  >:
                </p>
                <span class="mbs:text-[16px] text-gray-400 pl-[6px] leading-[120%]">Бесплатно</span>
              </div>
            </div>
            <div class="flex items-center pt-[6px]">
              <img class="w-[22px]" src="/product/bouquet.svg" alt="car" />
              <div class="pl-[6px] flex items-center">
                <span class="mbs:text-[16px] text-gray-400 leading-[120%]"
                  >Полное соответствие букета на фото</span
                >
              </div>
            </div>
            <div class="flex items-center pb-[14px] pt-[32px]">
              <div class="leading-[120%] font-bold mbs:text-[28px] text-[24px]">
                {{ item.price }} ₽
              </div>
              <div
                v-if="item.priceOld"
                class="text-gray-500 leading-[120%] mbs:text-[18px] ml-[14px] line-through"
              >
                {{ item.priceOld }} ₽
              </div>
            </div>
            <div class="pb-[38px] flex">
              <button
                v-if="!item.isAdded"
                @click="() => cartStore.addToCart(item)"
                type="button"
                class="btn mbs:min-h-[48px] min-h-[38px] w-full bg-[#2dad73] hover:bg-[#1e7c53] rounded-[4px]"
              >
                <img src="/header/basket.svg" alt="cart" /><span
                  class="mbs:text-[16px] text-white leading-[120%] ml-[10px]"
                  >В корзину</span
                >
              </button>
              <router-link
                v-else
                class="btn mbs:min-h-[48px] min-h-[38px] w-full bg-[#55b6843d] rounded-[4px]"
                to="/cart"
              >
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
              <button
                v-if="!item.isFavorite"
                @click="() => favoritesStore.addToFavorite(item)"
                type="button"
                class="btn mbs:min-h-[48px] min-h-[38px] w-[62px] hover:scale-[1.20] ml-[14px] tabble:rounded-[6px] tabble:bg-[#c06ba045]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  class="mbs:w-8 mbs:h-8 text-[#e600ad] tabble:text-white"
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
                @click="() => favoritesStore.addToFavorite(item)"
                class="btn mbs:min-h-[48px] min-h-[38px] w-[62px] hover:scale-[1.20] ml-[14px] tabble:rounded-[6px] tabble:bg-[#c06ba045]"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#e600ad"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  class="mbs:w-8 mbs:h-8 text-[#e600ad]"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
            </div>
            <div class="flex flex-col">
              <div class="mbs:text-[18px] text-[16px] font-bold leading-[120%]">Состав букета:</div>
              <div class="flex items-center pt-[12px] justify-between">
                <div class="flex items-center">
                  <span class="mbs:text-[16px] pl-[8px] text-gray-400 leading-[120%]">Размер</span>
                </div>

                <span class="mbs:text-[16px] leading-[120%]">{{ item.options.size }} см.</span>
              </div>
              <div class="flex items-center pt-[8px] justify-between">
                <div class="flex flex-col">
                  <span
                    v-for="(name, index) in item.options.name"
                    :key="index"
                    class="mbs:text-[16px] pl-[8px] text-gray-400 leading-[120%] [&:not(:last-child)]:pb-[8px]"
                    >{{ name }}</span
                  >
                </div>
                <div class="flex flex-col">
                  <span
                    v-for="(quant, index) in item.options.quantity"
                    :key="index"
                    class="mbs:text-[16px] [&:not(:last-child)]:pb-[8px] leading-[120%]"
                    >{{ quant }} шт.</span
                  >
                </div>
              </div>
              <div class="flex items-center pt-[8px] justify-between">
                <div class="flex items-center">
                  <span class="mbs:text-[16px] pl-[8px] text-gray-400 leading-[120%]"
                    >Упаковка</span
                  >
                </div>
                <span class="mbs:text-[16px] leading-[120%]">{{ item.options.package }}</span>
              </div>
            </div>
            <div class="flex flex-col pt-[24px]">
              <div class="mbs:text-[18px] text-[16px] font-bold leading-[120%]">Бонусы:</div>
              <div class="flex items-center pt-[12px]">
                <div
                  class="flex items-center relative before:content-[''] before:absolute before:top-[7px] before:left-0 before:w-[6px] before:h-[6px] before:rounded-[20px] before:bg-[#999]"
                >
                  <span class="mbs:text-[16px] pl-[16px] leading-[120%]"
                    >Бесплатная открытка в подарок</span
                  >
                </div>
              </div>
              <div class="flex items-center pt-[8px]">
                <div
                  class="flex items-center relative before:content-[''] before:absolute before:top-[7px] before:left-0 before:w-[6px] before:h-[6px] before:rounded-[20px] before:bg-[#999]"
                >
                  <span class="mbs:text-[16px] pl-[16px] leading-[120%]"
                    >Бесплатное фото получателя</span
                  >
                </div>
              </div>
              <div class="flex items-center pt-[8px]">
                <div
                  class="flex items-center relative before:content-[''] before:absolute before:top-[7px] before:left-0 before:w-[6px] before:h-[6px] before:rounded-[20px] before:bg-[#999]"
                >
                  <span class="mbs:text-[16px] pl-[16px] leading-[120%]"
                    >Бесплатное фото букета до отправки</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
