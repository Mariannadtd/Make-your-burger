<script setup>
const props = defineProps(["el", "count", "onIncr", "onDecr"]);
const emit = defineEmits();

const selectedIngredient = () => {
  emit("selectIngredient");
};
</script>

<template>
  <div @click="selectedIngredient" class="ingredient">
    <div class="ingredient__img">
      <img
        v-lazy="props.el.img"
        :alt="props.el.name"
        :style="{ 'margin-top': `${props.el['margin-top']}rem` }"
      />
    </div>
    <span>{{ props.el.name }}</span>
    <div class="ingredient__count">
      <button
        @click.stop="props.onDecr"
        class="ingredient__count_decr"
      ></button>
      <span>{{ props.count }}</span>
      <button
        @click.stop="props.onIncr"
        class="ingredient__count_incr"
      ></button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.ingredient
  display: flex
  align-items: center
  flex-direction: column
  padding: 1.5rem 1.5rem 2rem 1.5rem
  border: 0.2rem solid var(--main)
  border-radius: 3rem
  margin-right: 2rem
  cursor: pointer
  &:hover
    border: 0.2rem solid var(--blue)
  & span
    font-size: 1.7rem
    padding: 1.5rem 0
  &__img
    padding: 2rem 0
    & img
      width: 10rem
  &__count
    display: flex
    align-items: center
    justify-content: center
    & span
      padding: 0 1rem
    & button
      padding: 18px
      background-color: var(--main)
      border-radius: 5rem
      position: relative
      border: none
      cursor: pointer
      &:focus
        outline: none
      &.ingredient__count_decr::before
        content: ""
        display: block
        width: 1.4rem
        height: 0.2rem
        background-color: var(--blue)
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      &.ingredient__count_incr
        &::before
          content: ""
          display: block
          width: 1.4rem
          height: 0.2rem
          background-color: var(--blue)
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
        &::after
          content: ""
          display: block
          width: 0.2rem
          height: 1.4rem
          background-color: var(--blue)
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
</style>
