<template>
  <main class="py-[65px] mobile:pt-[45px]">
    <div class="container">
      <div class="flex flex-col justify-center items-center">
        <img class="max-w-[65%] mobileSmall:max-w-[85%]" src="/404.svg" alt="404" />
        <div class="items-center text-center flex-col flex pt-[12px] mbs:max-w-[80%]">
          <h3
            class="text-[34px] tabble:text-[24px] mobileSmall:text-[18px] font-serif leading-[120%]"
          >
            Страница не найдена...
          </h3>
          <p class="tb:text-[18px] pt-[6px] font-serif leading-[120%]">
            Пожалуйста, проверьте правильность написания страницы или перейдите на
            <router-link class="text-[#2dad73] underline" to="/">главную</router-link>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>
