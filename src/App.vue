<script setup>
import Header from './components/HeaderComponents/Header.vue'
import Footer from './components/FooterComponents/Footer.vue'
import MobileNavBar from './components/FooterComponents/mobileNavBar.vue'
import AuthModal from './components/ModalComponents/AuthModal.vue'
import { ref } from 'vue'

const registrationPopup = ref(false)
const toggleRegistrationPopup = () => {
  registrationPopup.value = !registrationPopup.value
  document.body.classList.toggle('_lock')
}
</script>

<template>
  <Header @toggle-registration-popup="toggleRegistrationPopup" />
  <router-view></router-view>
  <Footer />
  <MobileNavBar />
  <AuthModal
    v-show="registrationPopup"
    @toggle-registration-popup="toggleRegistrationPopup"
    :registrationPopup="registrationPopup"
  />
</template>
