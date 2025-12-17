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
  &__title
    font-weight: 700
    font-size: 8rem
    width: 25%
a
  color: white
</style>
