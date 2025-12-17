<script setup>
import jsonData from "/data.json";
import { ref, watch, computed, onMounted } from "vue";
import Ingredient from "../components/UI/Ingredient.vue";
import Summary from "../components/Summary.vue";
import Button from "../components/UI/Button.vue";

const STORAGE_KEY = "burger_builder_v1";

const elements = ref(jsonData);
const ingredientCounts = elements.value.map(() => ref(0));
const selectedIngredients = ref([]);
const totalPrice = ref(0);
const forceUpdate = ref(0);

const showBunTop = ref(false);
let bunTopTimer = null;

const onUserChange = () => {
  showBunTop.value = false;

  if (bunTopTimer) {
    clearTimeout(bunTopTimer);
    bunTopTimer = null;
  }

  const hasFillings = selectedIngredients.value.some((el) => !el.auto);
  if (!hasFillings) return;

  bunTopTimer = setTimeout(() => {
    const stillHasFillings = selectedIngredients.value.some((el) => !el.auto);
    if (stillHasFillings) showBunTop.value = true;
  }, 3000);
};

// ------------------- КНОПКИ + / - -------------------

const incr = (index) => {
  if (elements.value[index].auto) return;

  ingredientCounts[index].value++;
  updateSelectedIngredients();
};

const decr = (index) => {
  if (elements.value[index].auto) {
    if (ingredientCounts[index].value > 1) {
      ingredientCounts[index].value--;
      updateSelectedIngredients();
    }
    return;
  }

  if (ingredientCounts[index].value > 0) {
    ingredientCounts[index].value--;
    updateSelectedIngredients();
  }
};

// ------------------- СБОР ИНГРЕДИЕНТОВ -------------------

const updateSelectedIngredients = () => {
  selectedIngredients.value = [];
  let totalSelected = 0;

  elements.value.forEach((element, index) => {
    totalSelected += ingredientCounts[index].value;
    for (let i = 0; i < ingredientCounts[index].value; i++) {
      selectedIngredients.value.push(element);
    }
  });

  elements.value.forEach((element, index) => {
    if (element.auto) {
      ingredientCounts[index].value = 1;
    }
  });

  forceUpdate.value++;
  onUserChange();
};

// ------------------- CLEAR ALL -------------------

const clearIngredients = () => {
  ingredientCounts.forEach((c, index) => {
    if (elements.value[index].auto) {
      c.value = 1;
    } else {
      c.value = 0;
    }
  });

  updateSelectedIngredients();
};

// ------------------- ИТОГОВЫЕ ЗНАЧЕНИЯ -------------------

const totalMinutes = ref(0);
const totalOz = ref(0);
const totalCkal = ref(0);

const updateTotalPrice = () => {
  totalPrice.value = Math.floor(
    selectedIngredients.value.reduce(
      (total, ingredient) => total + (ingredient.price || 0),
      0
    )
  );
};

const updatedTotalMinutes = () => {
  totalMinutes.value = Math.floor(
    selectedIngredients.value.reduce(
      (total, ingredient) => total + (ingredient.min || 0),
      0
    )
  );
};

const updateTotalOz = () => {
  const sum = selectedIngredients.value.reduce(
    (total, ingredient) => total + (ingredient.oz || 0),
    0
  );
  totalOz.value = +sum.toFixed(1);
};

const updateTotalCkal = () => {
  totalCkal.value = selectedIngredients.value.reduce(
    (total, ingredient) => total + (ingredient.kcal || 0),
    0
  );
};

// ------------------- СТЕК ДЛЯ БУРГЕРА -------------------

const stackedIngredients = computed(() => {
  const rest = selectedIngredients.value.filter((el) => !el.auto);

  const bunBottom = elements.value.find((el) => el.name === "Bun-bottom");

  const bunTop = elements.value.find((el) => el.name === "Bun-top");

  const stack = [];

  if (bunBottom) stack.push(bunBottom);
  stack.push(...rest);

  if (showBunTop.value && bunTop) {
    stack.push(bunTop);
  }

  return stack;
});

// ------------------- localStorage -------------------

const saveState = () => {
  const counts = ingredientCounts.map((c) => c.value);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts));
};

const loadState = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  const counts = JSON.parse(raw);
  if (Array.isArray(counts)) {
    counts.forEach((value, index) => {
      if (ingredientCounts[index]) {
        ingredientCounts[index].value = Number(value) || 0;
      }
    });
    updateSelectedIngredients();
  }
};

const showPriceWarning = computed(() => {
  return totalPrice.value > 25;
});

watch(forceUpdate, () => {
  updateTotalPrice();
  updatedTotalMinutes();
  updateTotalOz();
  updateTotalCkal();
  saveState();
});

onMounted(loadState);
</script>

<template>
  <section class="order">
    <div class="order__mid">
      <h1 class="order__title">Make Your Burger</h1>

      <div class="order__burger">
        <img
          class="order__burger-bg"
          src="../assets/img/bg_burger.svg"
          alt=""
        />

        <div class="order__burger-inner">
          <ul class="order__burger-stack">
            <li
              v-for="(ingredient, index) in stackedIngredients"
              :key="index"
              :style="{
                bottom: `${index * 1.5 + (ingredient.stackShift || 0)}rem`,
              }"
            >
              <img
                class="order__burger-ingredients"
                :src="ingredient.img_group || ingredient.img"
              />
              <span
                v-if="ingredient.name === 'Bun-bottom'"
                class="bun-shadow"
              ></span>
            </li>
          </ul>
        </div>

        <p v-if="showPriceWarning" class="order__shure">Are you shure?</p>
      </div>

      <Summary
        :totalPrice="totalPrice"
        :totalMinutes="totalMinutes"
        :totalOz="totalOz"
        :totalCkal="totalCkal"
        @clearIngredients="clearIngredients"
      />
    </div>

    <ul class="order__list">
      <li v-for="(el, index) in elements" :key="el.id">
        <Ingredient
          :el="el"
          :count="ingredientCounts[index]"
          :onIncr="() => incr(index)"
          :onDecr="() => decr(index)"
        />
      </li>
    </ul>
  </section>
</template>

<style lang="sass" scoped>
.order
  &__title
    font-weight: 700
    font-size: 6rem
    max-width: 20rem

  &__mid
    display: flex
    align-items: center
    justify-content: space-between
    gap: 4rem
    padding: 4rem 0

  &__burger
    pointer-events: none
    position: relative
    display: flex
    justify-content: center
    align-items: center
    min-height: 28rem
    width: clamp(26rem, 32vw, 38rem)
    flex-shrink: 0

    &-bg
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      width: 135%
      max-width: none
      z-index: 0
      pointer-events: none

    &-inner
      position: absolute
      left: 50%
      bottom: -5rem
      transform: translateX(-50%)
      width: 60%
      max-width: 26rem
      z-index: 2

    &-stack
      position: absolute
      left: 50%
      bottom: 0
      transform: translateX(-50%)
      width: 120%
      margin: 0
      padding: 0
      list-style: none
      z-index: 3

      li
        position: absolute
        left: 50%
        transform: translateX(-50%)
        width: 130%

    &-ingredients
      width: 100%
      display: block
      position: relative
      z-index: 1

    &-bun
      width: 150%
      left:-25%
      bottom: -5rem
      display: block
      position: relative
      z-index: 1

    &:hover
      background: #ff4d4f
      color: #fff
      transform: translateY(-1px)

    &:active
      transform: translateY(0)

  &__list
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: 4rem

  &__list > li
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center

  &__clear
    display: block
    margin: 0 auto

  &__shure
    z-index: 2
    position: absolute
    font-size: 1.7rem
    font-weight: 700
    padding: 1.5rem 2rem 1.5rem 4rem
    border-radius: 1rem
    background-color: #fff
    box-shadow: 0 8px 20px rgba(0, 0, 0, .12)
    &::before
      content: ''
      position: absolute
      top: 1rem
      left: 1rem
      width: 2.5rem
      height: 2.5rem
      background: url('../assets/img/shure.png') center / contain no-repeat
      z-index: 3
    &::after
      content: ''
      position: absolute
      top: -1.2rem
      right: 13rem
      width: 0
      height: 0
      border-left: 1rem solid transparent
      border-right: 1rem solid transparent
      border-bottom: 1.2rem solid #fff
      z-index: 3

.bun-shadow
  position: absolute
  left: 50%
  bottom: -3px
  transform: translateX(-50%)
  width: 100%
  height: 15px
  background: rgba(20,20,5,.35)
  border-radius: 50%
  filter: blur(10px)
  z-index: 0
  pointer-events: none
</style>
