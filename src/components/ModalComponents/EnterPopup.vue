<script setup>
import { ref } from 'vue'

const emit = defineEmits(['toggleRegistrationPopup', 'changeAuth'])
const showPassword = ref(false)
const valuePassword = ref('')
</script>
<template>
  <div
    class="bg-white w-[600px] max-h-[100vh] overflow-auto rounded-[24px] shadow-[0_0_34px_rgba(0,0,0,0.14)]"
  >
    <div class="p-[32px] flex flex-col">
      <div class="flex items-center justify-between">
        <div class="text-[28px] leading-[120%] mobileSmall:text-[26px]">Войти в кабинет</div>
        <button
          @click="emit('toggleRegistrationPopup')"
          class="flex items-center justify-center bg-[#23b371cf] h-8 w-8 mobileSmall:w-7 mobileSmall:h-7 rounded-[50%] transition hover:scale-[1.2]"
          type="button"
        >
          <svg
            class="w-6 h-6 mobileSmall:w-5 mobileSmall:h-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-5"
          >
            <path
              d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <form class="flex flex-col p-[8px_32px_32px]">
      <input
        class="w-full mb-[16px] rounded-[8px] bg-[#55b68621] hover:placeholder-[#2dad73] transition placeholder-gray-400 focus:placeholder:opacity-0 focus:placeholder:duration-[130ms] text-[15px] tabble:text-[12px] outline-none py-[12px] px-[24px]"
        placeholder="Ваш e-mail или телефон"
        autocomplete="username"
        autofocus
        required
      />
      <div class="relative mb-[16px]">
        <input
          class="w-full rounded-[8px] bg-[#55b68621] hover:placeholder-[#2dad73] transition placeholder-gray-400 focus:placeholder:opacity-0 focus:placeholder:duration-[130ms] text-[15px] tabble:text-[12px] outline-none py-[12px] px-[24px]"
          :type="showPassword ? 'text' : 'password'"
          v-model="valuePassword"
          placeholder="Пароль"
          autocomplete="current-password"
          required
        />
        <button
          v-if="valuePassword.length !== 0"
          class="absolute top-[25%] right-5"
          @click="showPassword = !showPassword"
          type="button"
        >
          <svg
            v-if="!showPassword"
            class="w-[22px] h-[22px] text-[#2dad73]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[22px] h-[22px] text-[#2dad73]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        </button>
      </div>
      <div class="mb-5 flex justify-end items-center">
        <button class="text-[16px] leading-[120%] text-[#2dad73e6] hover:underline" type="button">
          Забыли свой пароль?
        </button>
      </div>
      <div class="flex flex-col">
        <button
          class="btn min-h-[42px] w-full mb-[14px] bg-[#2dad73] hover: hover:bg-[#1e7c53] rounded-[8px] text-white text-[16px] leading-[120%]"
          type="button"
        >
          Войти в кабинет
        </button>
        <button
          @click="emit('changeAuth')"
          class="text-[16px] leading-[120%] text-[#2dad73e6] hover:underline"
          type="button"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
</template>
