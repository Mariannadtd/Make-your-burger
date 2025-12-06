<!-- components/UI/Button.vue -->
<script setup>
const emit = defineEmits(["click"]);

const props = defineProps({
  primary: { type: Boolean, default: false },
  second: { type: Boolean, default: false },
  third: { type: Boolean, default: false },
});

const clickOnButton = () => {
  emit("click");
};
</script>

<template>
  <button
    class="btn"
    :class="{
      btn_primary: primary,
      btn_second: second,
      btn_third: third,
    }"
    @click="clickOnButton"
  >
    <slot name="primary" />
    <slot name="second" />
    <slot name="third" />
  </button>
</template>

<style scoped lang="sass">
.btn
  border: none
  cursor: pointer
  text-decoration: none
  outline: none
  border-radius: 100rem
  font-weight: 700
  display: inline-flex
  align-items: center
  justify-content: center

  &.btn_primary
    position: relative
    z-index: 10
    left: 13rem
    top: 22rem
    background-color: var(--blue)
    color: white
    font-size: 3.7rem
    height: 21rem
    width: 21rem
    padding: 3rem

  &.btn_second
    padding: 1rem 2.5rem
    background-color: #FFDEDE
    color: red
    font-size: 1.4rem

  &.btn_third
    padding: 1rem 3.5rem
    background-color: var(--pink)
    color: red
    font-size: 1.6rem
</style>
