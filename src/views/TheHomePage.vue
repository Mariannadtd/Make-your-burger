<script setup>
import Button from "../components/UI/Button.vue";

const btnPrimary = "primary";
</script>

<template>
  <main class="offer">
    <h1 class="offer__title">Make Your Burger</h1>
    <Button :primary="btnPrimary">
      <template v-slot:primary>
        <router-link :to="'/order'"> MAKE BURGER </router-link>
      </template>
    </Button>
    <img class="offer__img" src="../assets/img/offer.png" alt="offer-image" />
  </main>
</template>

<style lang="sass" scoped>
.offer
  position: relative
  display: flex
  align-items: center
  justify-content: space-between
  &__img
    position: relative
    z-index: 1
    width: 58%
    margin-right: -5rem
  &::before
    content: ''
    position: absolute
    right: -22rem
    width: 100%
    height: 100%
    background-image: url('../assets/img/bg_burger.svg')
    background-repeat: no-repeat
    background-size: contain
    background-position: 77%
    z-index: 0
    pointer-events: none
  &__title
    font-weight: 700
    font-size: 9rem
    width: 25%
a
  color: white
</style>
