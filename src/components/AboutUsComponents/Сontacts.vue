<script setup>
import { GoogleMap, Marker, InfoWindow } from 'vue3-google-map'
const apiKey = 'GOOGLE_KEY'
const center = { lat: 45.055849, lng: 39.041088 }
const markerOptions = {
  position: center,

  icon: '/marker.png'
}
</script>

<template>
  <div>
    <article class="flex flex-col">
      <div class="flex justify-center mb-[26px] mobileSmall:mb-[18px]">
        <h1
          class="text-[#2b3039] mbs:text-[36px] text-[28px] font-serif leading-[120%] relative after:absolute after:h-[1px] after:w-[110%] after:bg-[#333] after:left-[-9px] after:bottom-0"
        >
          Наши контакты
        </h1>
      </div>
      <div class="flex flex-col">
        <div class="flex mobile:flex-col">
          <div class="mb:w-[50%] py-[12px]">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-[#2dad73]"
              >
                <path
                  fill-rule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="leading-[120%] mbs:text-[16px] pl-[4px]"
                >ул.40 лет Победы, д. 188, 2 подъезд</span
              >
            </div>
            <div class="flex items-center pt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-[#2dad73]"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="leading-[120%] mbs:text-[16px] pl-[4px]"> Пн-Вс, Круглосуточно</span>
            </div>
          </div>
          <div class="mb:w-[50%] py-[12px]">
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-[#2dad73]"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <a class="leading-[120%] mbs:text-[16px] hover:text-[#2dad73]" href="tel:88005553535">
                +7(777)555-35-35
              </a>
              <span class="pl-[6px] pr-[2px] text-gray-400">/</span>
              <a class="leading-[120%] mbs:text-[16px] hover:text-[#2dad73]" href="tel:88005553535">
                +7(777)777-77-77
              </a>
            </div>
            <div class="flex items-center pt-[4px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 text-[#2dad73]"
              >
                <path
                  d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z"
                />
                <path
                  d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z"
                />
              </svg>

              <a
                href="mailto:flowers-gallery@mail.ru"
                class="leading-[120%] mbs:text-[16px] pl-[4px] hover:text-[#2dad73]"
                >flowers-gallery@mail.ru</a
              >
            </div>
          </div>
        </div>
        <GoogleMap :api-key="apiKey" style="width: 100%; height: 450px" :center="center" :zoom="15">
          <Marker :options="markerOptions">
            <InfoWindow>
              <div class="flex flex-col pb-[12px]">
                <div class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 text-[#2dad73]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="leading-[120%] pl-[6px]">ул.40 лет Победы, д. 188, 2 подъезд</span>
                </div>
                <div class="flex items-center pt-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 text-[#2dad73]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="leading-[120%] pl-[6px]"> Пн-Вс, Круглосуточно</span>
                </div>
                <div class="flex items-center pt-[4px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="w-5 h-5 pl-[2px] text-[#2dad73]"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span class="leading-[120%] font-bold pl-[6px]"> +7(777)555-35-35</span>
                </div>
              </div>
            </InfoWindow></Marker
          >
        </GoogleMap>
      </div>
      <h3 class="mbs:text-[26px] text-[21px] font-serif leading-[120%] pt-[26px] pb-[12px]">
        Другие контакты
      </h3>
      <div class="flex flex-wrap">
        <a href="##" class="flex py-[4px] items-center hover:text-[#2dad73] pr-[20px]">
          <img class="w-[18px]" src="/header/whatsapp.svg" alt="img" />
          <span class="mbs:text-[16px] leading-[120%] pl-[4px]">+7(777)777-77-77</span>
        </a>
        <a href="##" class="flex py-[4px] items-center hover:text-[#2dad73] pr-[20px]">
          <img class="w-[18px]" src="/header/telegram.svg" alt="img" />
          <span class="mbs:text-[16px] leading-[120%] pl-[4px]">@FlowersGallery</span>
        </a>
        <a href="##" class="flex py-[4px] items-center hover:text-[#2dad73] pr-[20px]">
          <img class="w-[18px]" src="/header/instagram.svg" alt="img" />
          <span class="mbs:text-[16px] leading-[120%] pl-[4px]">@flowersgallery_krd</span>
        </a>
      </div>
      <hr class="border-t border-solid border-gray-200 mt-[16px]" />
      <div
        class="text-[24px] mobileSmall:text-[21px] font-serif leading-[120%] pt-[18px] pb-[16px]"
      >
        Сведения о государственной регистрации:
      </div>
      <p class="leading-[120%] mbs:text-[16px]">
        Индивидуальный предприниматель Иванов Иван Иванович
      </p>
      <p class="leading-[120%] mbs:text-[16px] pt-[8px]">ИНН ...</p>
      <p class="leading-[120%] mbs:text-[16px] pt-[8px]">ОГРНИП ...</p>
    </article>
  </div>
</template>
