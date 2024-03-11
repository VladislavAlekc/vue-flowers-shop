<script setup>
import Header from './components/HeaderComponents/Header.vue'
import Footer from './components/FooterComponents/Footer.vue'
import MobileNavBar from './components/FooterComponents/mobileNavBar.vue'
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
  <MobileNavBar />
</template>
