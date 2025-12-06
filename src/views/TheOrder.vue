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

const incr = (index) => {
  ingredientCounts[index].value++;
  updateSelectedIngredients();
};

const decr = (index) => {
  if (ingredientCounts[index].value > 0) {
    ingredientCounts[index].value--;
    updateSelectedIngredients();
  }
};

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
      ingredientCounts[index].value = totalSelected > 0 ? 1 : 0;
    }
  });

  forceUpdate.value++;
};

// 👉 кнопка "убрать все" пользуется тем же механизмом
const clearIngredients = () => {
  ingredientCounts.forEach((c) => {
    c.value = 0;
  });
  updateSelectedIngredients();
};

const updateTotalPrice = () => {
  totalPrice.value = selectedIngredients.value.reduce(
    (total, ingredient) =>
      total + ingredient.price * ingredientCounts[ingredient.id - 1].value,
    0
  );
  totalPrice.value = parseFloat(totalPrice.value.toFixed(2));
};

const totalMinutes = ref(0);
const totalOz = ref(0);
const totalCkal = ref(0);

const updatedTotalMinutes = () => {
  totalMinutes.value = Math.round(
    selectedIngredients.value.reduce(
      (total, ingredient) =>
        total + ingredient.min * ingredientCounts[ingredient.id - 1].value,
      0
    )
  );
};

const updateTotalOz = () => {
  if (selectedIngredients.value.length > 0) {
    const totalOzValue = selectedIngredients.value.reduce(
      (total, ingredient) =>
        total +
        (ingredient.oz || 0) *
          (ingredientCounts[ingredient.id - 1]?.value || 0),
      0
    );
    totalOz.value = parseFloat(totalOzValue.toFixed(2));
  } else {
    totalOz.value = 0;
  }
};

const updateTotalCkal = () => {
  totalCkal.value = selectedIngredients.value.reduce(
    (total, ingredient) =>
      total + ingredient.kcal * ingredientCounts[ingredient.id - 1].value,
    0
  );
};

const stackedIngredients = computed(() => {
  const auto = selectedIngredients.value.filter((el) => el.auto);
  const rest = selectedIngredients.value.filter((el) => !el.auto);
  return [...rest, ...auto];
});

// ---- localStorage ----
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
                zIndex: ingredient.auto ? 999 : index + 2,
              }"
            >
              <img
                class="order__burger-ingredients"
                :src="ingredient.img_group || ingredient.img"
                :alt="ingredient.name"
              />
            </li>
          </ul>

          <img
            class="order__burger-bun"
            src="../assets/img/bun_bottom.png"
            alt=""
          />
        </div>
      </div>

      <Summary
        :totalPrice="totalPrice"
        :totalMinutes="totalMinutes"
        :totalOz="totalOz"
        :totalCkal="totalCkal"
      />
    </div>

    <div>
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
    </div>

    <div class="order__actions">
      <Button
        class="order__clear"
        type="button"
        second="second"
        @click="clearIngredients"
      >
        <template v-slot:second>Clear all</template>
      </Button>
    </div>
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
      bottom: 3rem
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
</style>
