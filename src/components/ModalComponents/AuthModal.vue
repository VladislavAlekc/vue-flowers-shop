<script setup>
import { ref } from 'vue'
import EnterPopup from './EnterPopup.vue'
import RegistrationPopup from './RegistrationPopup.vue'

const emit = defineEmits(['toggleRegistrationPopup'])
const isAuth = ref(false)
const changeAuth = () => {
  isAuth.value = !isAuth.value
}

defineProps({
  registrationPopup: Boolean
})
</script>
<template>
  <div
    @click.self="emit('toggleRegistrationPopup')"
    class="fixed flex items-center justify-center w-full h-full bg-[#3c3c3c45] z-[1000] top-0 left-0"
  >
    <transition
      v-if="isAuth"
      appear
      enter-active-class="ease-out duration-150"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100"
    >
      <EnterPopup
        v-show="registrationPopup"
        @changeAuth="changeAuth"
        @toggle-registration-popup="emit('toggleRegistrationPopup')"
      />
    </transition>
    <transition
      v-else
      appear
      enter-active-class="ease-out duration-150"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100"
    >
      <RegistrationPopup
        v-show="registrationPopup"
        @changeAuth="changeAuth"
        @toggle-registration-popup="emit('toggleRegistrationPopup')"
      />
    </transition>
  </div>
</template>
