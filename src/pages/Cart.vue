<script setup>
import { computed } from 'vue'
import CartItemList from '../components/CartComponents/CartItemList.vue'
import CartIsEmpty from '@/components/CartComponents/CartIsEmpty.vue'
import { useCartStore } from '../stores/cartsStore.js'
import CreateOrder from '@/components/CartComponents/CreateOrder.vue'

const cartStore = useCartStore()
const cartEmpty = computed(() => cartStore.cartItems.length === 0)
const buttonDisabled = computed(() => cartStore.isCreatingOrder || cartEmpty.value)
</script>

<template>
  <main сlass="flex-auto">
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
            <router-link :to="{ name: 'Cart' }">
              <span>Корзина</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="container min-h-[108px] mobileSmall:min-h-[96px] items-center flex flex-start">
        <h3 class="text-[32px] font-[initial] mobileSmall:text-[26px] leading-[120%]">Корзина</h3>
      </div>
    </div>
    <div v-if="!cartStore.totalCount" class="pb-[78px] mobileSmall:pb-[64px]">
      <CartIsEmpty v-if="!cartStore.totalCount && !cartStore.orderId" />
      <CreateOrder v-if="cartStore.orderId" />
    </div>
    <section v-else class="pt-[48px] pb-[78px] lg:pt-[26px] mobileSmall:pt-[14px]">
      <div class="container">
        <div class="flex lg:flex-col">
          <div class="flex-auto">
            <CartItemList />
          </div>
          <div class="large:flex-[0_0_368px]">
            <div
              class="large:shadow-order large:sticky flex flex-col large:top-[84px] p-[28px] lg:p-[20px_0px_20px_0px]"
            >
              <div>
                <div class="text-[20px] mobileSmall:text-[18px] leading-[120%] font-bold">
                  Ваш заказ
                </div>
                <div class="flex items-center pt-[8px]">
                  <div class="text-[#2dad73] mbs:text-[16px] pr-[4px]">Краснодар</div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4 text-[#2dad73]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div class="flex justify-between items-center pt-[28px]">
                  <div class="mbs:text-[16px] leading-[120%]">
                    Стоимость товаров ({{ cartStore.totalCount }})
                  </div>
                  <div class="mbs:text-[16px] leading-[120%]">{{ cartStore.totalPrice }} ₽</div>
                </div>
                <div
                  class="flex justify-between items-center pt-[16px] pb-[24px] large:border-b large:border-solid large:border-gray-300"
                >
                  <div class="mbs:text-[16px] leading-[120%]">Доставка</div>
                  <div class="mbs:text-[16px] leading-[120%]">Бесплатно</div>
                </div>
              </div>
              <div
                class="lg:fixed lg:z-[100] lg:bottom-0 lg:bg-white lg:left-0 lg:pt-[16px] lg:pb-[83px] lg:px-[24px] mobileSmall:p-[12px] lg:border-t lg:border-gray-200 lg:border-solid lg:w-full"
              >
                <div class="flex justify-between items-center large:pt-[24px]">
                  <div class="mbs:text-[16px] leading-[120%]">Скидка</div>
                  <div class="text-[#c34283] mbs:text-[16px] leading-[120%]">
                    {{ cartStore.discountPrice }} ₽
                  </div>
                </div>
                <div class="flex justify-between items-center pt-[16px] mobileSmall:pt-[8px]">
                  <div class="text-[20px] mobileSmall:text-[16px] font-bold leading-[120%]">
                    Итого
                  </div>
                  <div
                    class="text-[20px] mobileSmall:text-[16px] text-[#2dad73] font-bold leading-[120%]"
                  >
                    {{ cartStore.finalPrice }} ₽
                  </div>
                </div>
                <button
                  @click="cartStore.createOrder"
                  :disabled="buttonDisabled"
                  type="button"
                  class="btn w-full h-[46px] disabled:bg-[#5e65612e] mobileSmall:h-[42px] bg-[#2dad73] mbs:text-[16px] leading-[120%] hover:bg-[#308d63] rounded-md text-white mt-[24px] mobileSmall:mt-[14px]"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
