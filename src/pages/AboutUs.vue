<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const isNavMenu = ref(false)
const routePath = computed(() => {
  return route.matched
})
</script>

<template>
  <main class="flex-auto">
    <div class="pt-[14px]">
      <div class="container">
        <ul class="flex items-center">
          <li>
            <router-link :to="{ name: 'Home' }" class="text-gray-400 flex items-center">
              <span class="pr-[4px]">Доставка цветов в Краснодаре</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                fill="currentColor"
                class="w-[14px] h-[14px] text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </router-link>
          </li>

          <li v-for="(item, index) in routePath" :key="index">
            <router-link v-if="item.meta.breadcrumb" :to="item.path" class="flex items-center">
              <span class="pl-[4px]">{{ item.meta.breadcrumb }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <section class="pt-[21px] pb-[70px]">
      <div class="container">
        <div class="grid tb:gap-[68px] gap-[18px] tb:grid-cols-[290px_1fr]">
          <div
            class="tb:sticky tb:overflow-auto tb:top-[78px] tb:max-h-[64vh] tabble:bg-[#dddddd63] tabble:rounded-[4px]"
          >
            <button
              @click="isNavMenu = !isNavMenu"
              class="tb:hidden w-full p-[16px_14px_16px_14px] flex items-center"
              type="button"
            >
              <svg
                v-if="isNavMenu === false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75ZM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10Z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5 text-gray-400"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="text-[17px] leading-[120%] text-gray-400 pl-[12px]">Меню разделов</span>
            </button>
            <div :class="[!isNavMenu ? 'tabble:hidden' : '']" class="tabble:pt-[6px]">
              <ul class="flex flex-col">
                <li>
                  <router-link
                    :class="
                      route.path === '/about' ? 'text-[#2dad73] bg-[#51816c14]' : 'text-gray-400'
                    "
                    class="flex items-center p-[12px_8px_12px_8px] rounded-[2px] hover:bg-[#51816c14] hover:text-[#2dad73]"
                    to="/about"
                  >
                    <span class="pl-[6px]"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          d="M8 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.156 11.763c.16-.629.44-1.21.813-1.72a2.5 2.5 0 0 0-2.725 1.377c-.136.287.102.58.418.58h1.449c.01-.077.025-.156.045-.237ZM12.847 11.763c.02.08.036.16.046.237h1.446c.316 0 .554-.293.417-.579a2.5 2.5 0 0 0-2.722-1.378c.374.51.653 1.09.813 1.72ZM14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM3.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 13c-.552 0-1.013-.455-.876-.99a4.002 4.002 0 0 1 7.753 0c.136.535-.324.99-.877.99H5Z"
                        />
                      </svg>
                    </span>
                    <span class="pl-[10px] text-[16px] leading-[120%]">О нас</span>
                  </router-link>
                </li>
                <li class="border-t-[0.5px] border-solid border-gray-200">
                  <router-link
                    :class="
                      route.path === '/delivery' ? 'text-[#2dad73] bg-[#51816c14]' : 'text-gray-400'
                    "
                    class="flex items-center p-[12px_8px_12px_8px] rounded-[2px] hover:bg-[#51816c14] hover:text-[#2dad73]"
                    to="/delivery"
                  >
                    <span class="pl-[6px]"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M6.333 4.478A4 4 0 0 0 1 8.25c0 .414.336.75.75.75h3.322c.572.71 1.219 1.356 1.928 1.928v3.322c0 .414.336.75.75.75a4 4 0 0 0 3.772-5.333A10.721 10.721 0 0 0 15 1.75a.75.75 0 0 0-.75-.75c-3.133 0-5.953 1.34-7.917 3.478ZM12 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                          clip-rule="evenodd"
                        />
                        <path
                          d="M3.902 10.682a.75.75 0 1 0-1.313-.725 4.764 4.764 0 0 0-.469 3.36.75.75 0 0 0 .564.563 4.76 4.76 0 0 0 3.359-.47.75.75 0 1 0-.725-1.312 3.231 3.231 0 0 1-1.81.393 3.232 3.232 0 0 1 .394-1.81Z"
                        />
                      </svg>
                    </span>
                    <span class="pl-[10px] text-[16px] leading-[120%]">Доставка</span>
                  </router-link>
                </li>
                <router-link
                  :class="
                    route.path === '/payment' ? 'text-[#2dad73] bg-[#51816c14]' : 'text-gray-400'
                  "
                  class="flex items-center p-[12px_8px_12px_8px] rounded-[2px] hover:bg-[#51816c14] hover:text-[#2dad73]"
                  to="/payment"
                >
                  <span class="pl-[6px]"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3Zm9 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM11.5 6A.75.75 0 1 1 13 6a.75.75 0 0 1-1.5 0Z"
                        clip-rule="evenodd"
                      />
                      <path
                        d="M13 11.75a.75.75 0 0 0-1.5 0v.179c0 .15-.138.28-.306.255A65.277 65.277 0 0 0 1.75 11.5a.75.75 0 0 0 0 1.5c3.135 0 6.215.228 9.227.668A1.764 1.764 0 0 0 13 11.928v-.178Z"
                      />
                    </svg>
                  </span>
                  <span class="pl-[10px] text-[16px] leading-[120%]">Оплата</span>
                </router-link>
                <li class="border-t-[0.5px] border-solid border-gray-200">
                  <router-link
                    :class="
                      route.path === '/contacts' ? 'text-[#2dad73] bg-[#51816c14]' : 'text-gray-400'
                    "
                    class="flex items-center p-[12px_8px_12px_8px] rounded-[2px] hover:bg-[#51816c14] hover:text-[#2dad73]"
                    to="/contacts"
                  >
                    <span class="pl-[6px]"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path d="M7.25 11.5a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" />
                        <path
                          fill-rule="evenodd"
                          d="M6 1a2.5 2.5 0 0 0-2.5 2.5v9A2.5 2.5 0 0 0 6 15h4a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 10 1H6Zm4 1.5h-.5V3a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-.5H6a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span class="pl-[10px] text-[16px] leading-[120%]">Контакты</span>
                  </router-link>
                </li>
                <li class="border-t-[0.5px] border-solid border-gray-200">
                  <router-link
                    :class="
                      route.path === '/reviews' ? 'text-[#2dad73] bg-[#51816c14]' : 'text-gray-400'
                    "
                    class="flex items-center p-[12px_8px_12px_8px] rounded-[2px] hover:bg-[#51816c14] hover:text-[#2dad73]"
                    to="/reviews"
                  >
                    <span class="pl-[6px]"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z"
                        />
                      </svg>
                    </span>
                    <span class="pl-[10px] text-[16px] leading-[120%]">Отзывы</span>
                  </router-link>
                </li>
                <li class="border-t-[0.5px] border-solid border-gray-200">
                  <router-link
                    :class="
                      route.path === '/guarantees'
                        ? 'text-[#2dad73] bg-[#51816c14]'
                        : 'text-gray-400'
                    "
                    class="flex items-center p-[12px_8px_12px_8px] rounded-[2px] hover:bg-[#51816c14] hover:text-[#2dad73]"
                    to="/guarantees"
                  >
                    <span class="pl-[6px]"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.5 1.709a.75.75 0 0 0-1 0 8.963 8.963 0 0 1-4.84 2.217.75.75 0 0 0-.654.72 10.499 10.499 0 0 0 5.647 9.672.75.75 0 0 0 .694-.001 10.499 10.499 0 0 0 5.647-9.672.75.75 0 0 0-.654-.719A8.963 8.963 0 0 1 8.5 1.71Zm2.34 5.504a.75.75 0 0 0-1.18-.926L7.394 9.17l-1.156-.99a.75.75 0 1 0-.976 1.138l1.75 1.5a.75.75 0 0 0 1.078-.106l2.75-3.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    <span class="pl-[10px] text-[16px] leading-[120%]">Гарантии</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </section>
  </main>
</template>
