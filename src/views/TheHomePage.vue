<!-- <script setup>
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
    width: 50%
    margin-right: 15rem
  &::before
    content: ''
    position: absolute
    right: -3%
    width: 95%
    height: 95%
    background-image: url('../assets/img/bg_burger.svg')
    background-repeat: no-repeat
    background-size: contain
    background-position: 77%
    z-index: 0
    pointer-events: none
  &__title
    font-weight: 700
    font-size: 8rem
    width: 25%
a
  color: white
</style> -->

<script setup>
import Button from "../components/UI/Button.vue";
import Burger from "../components/Burger.vue";

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
    <Burger />
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
    width: 50%
    margin-right: 15rem
  &::before
    content: ''
    position: absolute
    right: -3%
    width: 95%
    height: 95%
    background-image: url('../assets/img/bg_burger.svg')
    background-repeat: no-repeat
    background-size: contain
    background-position: 77%
    z-index: 0
    pointer-events: none
  &__title
    font-weight: 700
    font-size: 8rem
    width: 25%
a
  color: white
</style>
