<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <div class="wrapper">
      <Header />

      <div class="main">
        <RouterView />
      </div>

      <Footer />
    </div>
  </div>
</template>

<style scoped></style>
