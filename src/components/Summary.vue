<script setup>
import { ref } from "vue";
import Button from "../components/UI/Button.vue";
import Modal from "../components/Modal.vue";

const showModal = ref(false);

const props = defineProps({
  totalPrice: Number,
  totalMinutes: Number,
  totalOz: Number,
  totalCkal: Number,
});

const emit = defineEmits(["clearIngredients", "ketchupPicker"]);
const onClear = () => {
  emit("clearIngredients");
};

const onKetchup = () => {
  emit("ketchupPicker");
};
</script>

<template>
  <div class="summary">
    <h3 class="summary__heading">Summary</h3>
    <div class="summary__line"></div>
    <div>
      <div class="summary__price">
        <div class="summary__group">
          <span v-if="totalPrice > 0"> $ {{ totalPrice }} </span>
          <span v-else> $ 0.00 </span>
          <Button
            third
            class="summary__checkout_button"
            @click="showModal = true"
          >
            <template #third>Checkout</template>
          </Button>
        </div>
      </div>
    </div>
    <p class="summary__text">
      Build a <span class="red">$10</span> Burger and Get a Gift
    </p>
    <ul class="summary__value">
      <li>
        <img src="../assets/img/clock.svg" alt="" class="clock" />
        {{ totalMinutes }} min
      </li>
      <li>
        <img src="../assets/img/weight.svg" alt="weight" class="weight" />
        {{ totalOz }} oz
      </li>
      <li>
        <img src="../assets/img/kcal.svg" alt="kcal" class="kcal" />
        {{ totalCkal }} kcal
      </li>
    </ul>

    <div class="summary__ketchup">
      <button @click="onKetchup">
        <span class="red">+ Tomato Ketchup</span> 1.2 oz
      </button>
    </div>

    <Button third @click="onClear" class="summary__clear">
      <template #third>Clear all ingredients</template>
    </Button>
  </div>
  <Modal :showModal="showModal" @closeModal="showModal = false" />
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
    align-items: center
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
  &__clear
    margin-top: 2rem
  &__checkout_button
    background-color: var(--blue) !important
    color: #fff !important
  &__ketchup
    & button
      font-size: 2rem !important
      background: none
      border: none
      cursor: pointer
      margin: 2rem 0
</style>
