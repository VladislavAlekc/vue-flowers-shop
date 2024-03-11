<template>
  <div>
    <article class="flex flex-col">
      <div class="flex justify-center mb-[20px]">
        <h1
          class="text-[#2b3039] mbs:text-[38px] text-[28px] font-serif leading-[120%] relative after:absolute after:h-[1px] after:w-[110%] after:bg-[#333] after:left-[-8px] after:bottom-0"
        >
          Гарантии
        </h1>
      </div>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-[34px]">
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/delivery.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Доставка к точному времени
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Мы доставляем товары к точному времени за 90 минут и по указанному вами адресу нашей
            собственной курьерской службой.
          </p>
        </div>
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/flowers.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Гарантия качества
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Букеты собираются нашими лучшими флористами и соответсвуют фото на сайте.
          </p>
        </div>
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/person.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Индивидуальный подход
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Добавьте к букету подарок по вашему выбору, и мы приобретем его специально для вас.
          </p>
        </div>
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/support.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Мы всегда на связи
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Наши специалисты всегда готовы ответить на ваши вопросы.
          </p>
        </div>
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/protection.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Ваши данные под надежной защитой
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Мы всегда заботимся о вашей приватности и бережно храним информацию, которую вы нам
            доверяете.
          </p>
        </div>
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/postcard.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Бесплатная открытка
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Мы дополним ваш букет красивой открыткой с индивидуальным сообщением для получателя.
          </p>
        </div>
        <div class="flex shadow-service flex-col items-center py-[34px] text-center">
          <img class="w-[64px]" src="/services/camera.svg" alt="img" />
          <h4
            class="leading-[120%] mobileSmall:text-[16px] text-[#209560e3] font-bold pt-[4px] text-[18px]"
          >
            Фотография букета до доставки
          </h4>
          <p class="leading-[120%] text-gray-500 pt-[8px]">
            Вы всегда будете уверены в качестве вашего заказа.
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center pt-[48px]">
        <router-link
          to="/"
          class="btn text-[16px] min-h-[46px] w-[310px] mobileSmall:w-full leading-[120%] bg-[#2dad73] text-white hover:bg-[#288b5e] rounded-[6px]"
        >
          К покупкам
        </router-link>
      </div>
    </article>
  </div>
</template>
