<script setup>
import { onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: "" },
  width: { type: String, default: "720px" },
});

const emit = defineEmits(["update:modelValue", "close"]);

import iconClose from "@/assets/img/modal-icon-close.svg";
import iconCircle from "@/assets/img/modal-icon-circle.svg";

const close = () => {
  emit("update:modelValue", false);
  emit("close");
};

const onEsc = (e) => {
  if (e.key === "Escape" && props.modelValue) close();
};

onMounted(() => window.addEventListener("keydown", onEsc));
onBeforeUnmount(() => window.removeEventListener("keydown", onEsc));
</script>

<template>
  <div class="modal" v-if="modelValue">
    <div class="overlay" @click="close"></div>

    <div
      class="panel"
      role="dialog"
      aria-modal="true"
      @click.stop
      :style="{ maxWidth: width }"
    >
      <div class="head">
        <div class="title">
          <img class="title-icon" :src="iconCircle" alt="" />
          <h2>{{ title }}</h2>
        </div>

        <button class="x" type="button" @click="close" aria-label="Close">
          <img :src="iconClose" alt="" />
        </button>
      </div>

      <div class="divider"></div>

      <slot />

      <slot name="footer" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.modal
  position: fixed
  inset: 0
  z-index: 9999
  display: grid
  place-items: center
  padding: 18px
  isolation: isolate

.overlay
  position: fixed
  inset: 0
  background: rgba(107, 90, 230, 0.55)
  backdrop-filter: blur(18px)
  -webkit-backdrop-filter: blur(18px)
  z-index: 0
  will-change: backdrop-filter

.panel
  position: relative
  z-index: 1
  width: min(92vw, 720px)
  background: #fff
  border-radius: 18px
  padding: 20px 22px 18px
  box-shadow: 0 30px 90px rgba(0,0,0,.25)

.head
  display: flex
  align-items: center
  justify-content: space-between
  margin-bottom: 12px

.title
  display: flex
  align-items: center
  gap: 10px

.title-icon
  width: 22px
  height: 22px
  display: block

h2
  margin: 0
  font-size: 20px
  font-weight: 700

.x
  width: 34px
  height: 34px
  border: none
  background: #f3f3ff
  border-radius: 10px
  cursor: pointer
  display: grid
  place-items: center

  &:hover
    background: #ececff

  img
    width: 14px
    height: 14px
    display: block

.divider
  height: .1rem
  width: 100%
  background: rgba(0,0,0,.08)
  margin: 3rem 0
</style>
