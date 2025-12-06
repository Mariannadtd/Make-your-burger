<script setup>
import { ref } from "vue";
import Modal from "./Modal.vue";
import Button from "../components/UI/Button.vue";

const showModal = ref(false);
const btnSecond = "second";
</script>

<template>
  <header class="header">
    <!-- левая часть -->
    <div class="navbar">
      <a class="logo">
        <img src="../assets/img/logo.svg" alt="logo" />
      </a>

      <nav class="nav">
        <router-link to="/" custom v-slot="{ navigate, isActive }">
          <a
            class="nav__link_discover"
            :class="{ active: isActive }"
            @click="navigate"
          >
            Discover
          </a>
        </router-link>

        <router-link to="/order" custom v-slot="{ navigate, isActive }">
          <a
            class="nav__link_order"
            :class="{ active: isActive }"
            @click="navigate"
          >
            Make Your Burger
          </a>
        </router-link>
      </nav>
    </div>

    <!-- правая часть -->
    <div class="call">
      <Button class="call__btn" @click="showModal = true" :third="btnSecond">
        <template #third>
          <img src="../assets/img/phone.svg" alt="Call Me" class="call__icon" />
          Call me Back
        </template>
      </Button>

      <span class="call__phone">8 800 555-35-35</span>

      <a href="#" class="user-link">
        <img class="user" src="../assets/img/user_head.png" alt="user" />
      </a>
    </div>

    <Modal :showModal="showModal" @closeModal="showModal = false" />
  </header>
</template>

<style lang="sass">
.header
  display: flex
  align-items: center
  justify-content: space-between
  font-weight: 500
  font-size: 1.9rem

.navbar
  display: flex
  align-items: center

.call
  display: flex
  align-items: center
  gap: 2rem
  &__btn
    flex-shrink: 0
    display: block

.logo
  display: inline-block
  background-color: var(--main)
  padding: 2rem
  border-radius: 5rem
  height: 7rem
  width: 7rem
  & img
    height: 2.5rem

.nav__link_discover,
.nav__link_order
  text-decoration: none
  position: relative
  display: inline-block
  margin-left: 5rem

.active::after
  content: ''
  display: block
  position: absolute
  font-weight: bold
  width: 100%
  height: 0.2rem
  background-color: var(--blue)
  left: 0
  bottom: -1rem

.call__icon
  width: 1.6rem
  height: 1.6rem
  margin-right: 0.5rem

.call__phone
  white-space: nowrap

.user-link
  display: flex
  align-items: center

.user
  width: 2rem
  height: 2rem
</style>
