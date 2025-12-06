<script setup>
import Button from '../components/UI/Button.vue'
const props = defineProps({
  totalPrice: Number,
  totalMinutes: Number,
  totalOz: Number,
  totalCkal: Number
})
</script>

<template>
<div class="summary">
  <h3 class="summary__heading">Summary</h3>
  <div class="summary__line"></div>
  <div>
    <div class="summary__price">
      <div class="summary__group">
        <span v-if="totalPrice > 0">
          $ {{ totalPrice }}
        </span>
        <span v-else>
          $ 0.00
        </span>
        <Button third="third">
          <template v-slot:third>
            Checkout
          </template>
        </Button>
      </div>
    </div>
  </div>
  <p class="summary__text">Build a <span class="red">$10</span> Burger and Get a Gift</p>
  <ul class="summary__value">
    <li>
      <img src="../assets/img/clock.svg" alt="" class="clock">
      {{ totalMinutes }} min
    </li>
    <li>
      <img src="../assets/img/weight.svg" alt="weight" class="weight">
      {{ totalOz }} oz
    </li>
    <li> 
      <img src="../assets/img/kcal.svg" alt="kcal" class="kcal">
      {{ totalCkal }} kcal
    </li>
  </ul>
</div>
</template>

<style lang="sass" scoped>
.summary
  width: 32%
  &__heading
    font-weight: normal
    font-size: 4rem
  &__price
    font-size: 4.5rem
    font-weight: bold
    color: var(--blue)
  &__group
    display: flex
    justify-content: space-between
    margin: 3rem 0
  &__text
    font-size: 1.5rem
    margin-bottom: 3rem
  &__value
    display: flex
    justify-content: space-between
    align-items: center
    padding: 1rem 2rem
    background-color: var(--main)
    border-radius: 10rem
    & li 
      display: flex
      justify-content: space-between
      align-items: center
      text-align: center
    & li img
      padding: 1rem
      border-radius: 10rem
      margin-right: 1rem
    & li:nth-child(2) img
      background-color: #CA36FFDB
    & li:nth-child(1) img
      background-color: #FF8A51
    & li:nth-child(3) img
      background-color: #FFE451
  &__line
    width: 100%
    height: 0.3rem
    background-color: var(--main)


</style>