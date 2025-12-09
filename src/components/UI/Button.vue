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
@keyframes burger-pulse
  0%
    transform: scale(1)
    box-shadow: 0 0 0 0 rgba(71, 58, 167, 0.8)
  50%
    transform: scale(1.18)
    box-shadow: 0 0 0 2rem rgba(71, 58, 167, 0)
  100%
    transform: scale(1)
    box-shadow: 0 0 0 0 rgba(71, 58, 167, 0)

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
    top: 19rem
    background-color: var(--blue)
    color: white
    font-size: 2.8rem
    height: 17rem
    width: 17rem
    padding: 3rem
    animation: burger-pulse 2s ease-in-out infinite
    transform-origin: center center

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
