<script setup>
import { ref, onMounted } from "vue";

import bunBottom from "/img/bun_bottom.png";
import bunTop from "/img/bun_top.png";
import cheese from "/img/cheese.png";
import cucumber from "/img/cucumber.png";
import cutlet from "/img/cutlet.png";
import mayoBottom from "/img/mayo_bottom.png";
import mayoTop from "/img/mayo_top.png";
import onion from "/img/onion.png";
import salad from "/img/salad.png";
import tomato from "/img/tomato.png";

import iconFlash from "/img/icon-flash.png";
import iconParty from "/img/icon-party.png";
import iconSmile from "/img/icon-smile.png";
import iconThumb from "/img/icon-th-up.png";

const exploded = ref(false);
const entered = ref(false);

onMounted(() => {
  requestAnimationFrame(() => {
    entered.value = true;
  });

  setTimeout(() => {
    exploded.value = true;
  }, 1500);
});
</script>

<template>
  <div class="burger-scene">
    <div class="burger-bg"></div>

    <div
      class="burger"
      :class="{ 'burger--entered': entered, 'burger--exploded': exploded }"
    >
      <div class="layer layer--bun-bottom">
        <img :src="bunBottom" alt="" class="layer__img" />
      </div>
      <img :src="mayoBottom" alt="" class="layer layer--mayo-bottom" />
      <img :src="salad" alt="" class="layer layer--salad-bottom" />
      <img :src="tomato" alt="" class="piece piece--tomato-1" />
      <img :src="tomato" alt="" class="piece piece--tomato-2" />
      <img :src="tomato" alt="" class="piece piece--tomato-3" />
      <img :src="cheese" alt="" class="layer layer--cheese" />
      <img :src="cutlet" alt="" class="layer layer--cutlet" />
      <img :src="cucumber" alt="" class="piece piece--cucumber-1" />
      <img :src="cucumber" alt="" class="piece piece--cucumber-2" />
      <img :src="cucumber" alt="" class="piece piece--cucumber-3" />
      <img :src="onion" alt="" class="piece piece--onion-1" />
      <img :src="onion" alt="" class="piece piece--onion-2" />
      <img :src="onion" alt="" class="piece piece--onion-3" />
      <img :src="onion" alt="" class="piece piece--onion-4" />
      <img :src="onion" alt="" class="piece piece--onion-5" />
      <img :src="salad" alt="" class="layer layer--salad-top" />
      <img :src="mayoTop" alt="" class="layer layer--mayo-top" />
      <img :src="bunTop" alt="" class="layer layer--bun-top" />

      <div class="icon-wrap icon--flash">
        <img :src="iconFlash" alt="" class="icon-img" />
      </div>
      <div class="icon-wrap icon--party">
        <img :src="iconParty" alt="" class="icon-img" />
      </div>
      <div class="icon-wrap icon--smile">
        <img :src="iconSmile" alt="" class="icon-img" />
      </div>
      <div class="icon-wrap icon--thumb">
        <img :src="iconThumb" alt="" class="icon-img" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
@keyframes float-soft
  0%
    transform: translateY(0)
  50%
    transform: translateY(-6px)
  100%
    transform: translateY(0)

@keyframes burger-drop
  0%
    opacity: 0
    transform: translateX(5rem) translateY(-18rem) scale(1.08)
  65%
    opacity: 1
    transform: translateX(5rem) translateY(0.8rem) scale(1)
  82%
    transform: translateX(5rem) translateY(-0.4rem) scale(1)
  100%
    opacity: 1
    transform: translateX(5rem) translateY(0) scale(1)

.burger-scene
  position: relative
  width: min(50rem, 55vw)
  aspect-ratio: 1 / 1
  top: 22rem
  left: -25rem

.burger-bg
  position: absolute
  inset: 0
  margin: auto
  top: -20rem
  width: 160%
  height: 160%
  background-image: url('/img/bg_burger.svg')
  background-repeat: no-repeat
  background-size: contain
  background-position: center
  z-index: 0
  pointer-events: none

.burger
  position: absolute
  inset: 0
  width: 100%
  height: 100%
  z-index: 1
  transform: translateX(5rem)
  opacity: 1

.burger:not(.burger--entered)
  opacity: 0
  transform: translateX(5rem) translateY(-18rem) scale(1.08)

.burger.burger--entered
  animation: burger-drop .85s cubic-bezier(.22, .61, .36, 1) forwards

.layer
  position: absolute
  left: 50%
  transform: translateX(-50%)
  transform-origin: center center
  transition: transform .8s cubic-bezier(.22, .61, .36, 1), opacity .8s
  will-change: transform, opacity
  z-index: 1
  width: 64.6%
  &__img
    width: 100%
    height: auto
    display: block
    position: relative
    z-index: 1

.piece
  position: absolute
  transform-origin: center center
  transition: transform .8s cubic-bezier(.22, .61, .36, 1), opacity .8s
  will-change: transform, opacity
  z-index: 1
  width: 30.8%

.icon-wrap
  position: absolute
  top: 21.5%
  left: 50%
  width: 7.7%
  opacity: 0
  transform: translateX(-50%)
  transition: transform .8s cubic-bezier(.22, .61, .36, 1), opacity .8s
  will-change: transform, opacity
  z-index: 1

.icon-img
  display: block
  width: 100%
  height: auto
  animation: none
  position: relative
  z-index: 1

// ------ СОБРАННЫЙ БУРГЕР ------
.layer--bun-bottom
  top: 52.3%
  &::after
    content: ''
    position: absolute
    left: 50%
    bottom: -3px
    transform: translateX(-50%)
    width: 100%
    height: 17px
    background: rgba(20,20,5,.35)
    border-radius: 50%
    filter: blur(9px)
    z-index: 0
    pointer-events: none

.layer--mayo-bottom
  top: 50.8%

.layer--salad-bottom
  top: 43.1%

.layer--salad-top
  top: 24.6%

.piece--tomato-1
  top: 47.7%
  left: 32.3%

.piece--tomato-2
  top: 47.7%
  left: 17.7%

.piece--tomato-3
  top: 47.7%
  left: 52.3%

.layer--cutlet
  top: 35.4%

.piece--cucumber-1
  top: 36.9%
  left: 16.9%

.piece--cucumber-2
  top: 36.9%
  left: 32.3%

.piece--cucumber-3
  top: 36.9%
  left: 53%

.layer--cheese
  top: 44.6%

.piece--onion-1
  top: 33.8%
  left: 18.5%

.piece--onion-2
  top: 33.8%
  left: 29.2%

.piece--onion-3
  top: 33.8%
  left: 46.2%

.piece--onion-4
  top: 33.8%
  left: 52.3%

.piece--onion-5
  top: 33.8%
  left: 52.3%

.layer--mayo-top
  top: 24.6%

.layer--bun-top
  top: 4.6%

// ------ ВЗРЫВ БУРГЕРА ------
.burger.burger--exploded
  opacity: 1

  .icon-wrap
    opacity: 1

  .layer--bun-bottom
    transform: translateX(10%) translateY(12rem) rotate(-15deg)

  .layer--mayo-bottom
    transform: translateX(10%) translateY(11rem) rotate(-13deg)

  .layer--cutlet
    transform: translateX(-5%) translateY(-45px) rotate(6deg)

  .layer--cheese
    transform: translateX(-25%) translateY(-5px) rotate(20deg)

  .layer--mayo-top
    transform: translateX(10%) translateY(-150px) rotate(30deg)

  .layer--bun-top
    transform: translateX(20%) translateY(-150px) rotate(30deg)

  .layer--salad-bottom
    transform: translateX(-10%) translateY(11rem) rotate(-3deg)

  .layer--salad-top
    transform: translateX(-12%) translateY(-17rem) rotate(23deg)

  .piece--tomato-1
    transform: translateX(105%) translateY(80px) rotate(-35deg)

  .piece--tomato-2
    transform: translateX(-5%) translateY(-150px) rotate(-22deg)
    width: 23%

  .piece--tomato-3
    transform: translateX(120%) translateY(-105px) rotate(28deg)

  .piece--cucumber-1
    transform: translateX(140%) translateY(-85px) rotate(-50deg)

  .piece--cucumber-2
    transform: translateX(40%) translateY(-130px) rotate(50deg)
    width: 23%

  .piece--cucumber-3
    transform: translateX(210%) translateY(70px) rotate(-18deg)
    width: 25%

  .piece--onion-1
    transform: translateX(230%) translateY(-90px) rotate(-25deg)
    width: 25%

  .piece--onion-2
    transform: translateX(70%) translateY(60px) rotate(27deg)
    width: 15%

  .piece--onion-3
    transform: translateX(80%) translateY(-140px) rotate(-9deg)
    width: 15%

  .piece--onion-4
    transform: translateX(80%) translateY(35px) rotate(16deg)

  .piece--onion-5
    transform: translateX(-5%) translateY(95px) rotate(-12deg)

  .icon--flash
    transform: translateX(0%) translateX(-145%) translateY(-65px)
    .icon-img
      animation: float-soft 3s ease-in-out infinite

  .icon--party
    transform: translateX(-450%) translateX(240%) translateY(190px)
    .icon-img
      animation: float-soft 3.2s ease-in-out infinite

  .icon--smile
    transform: translateX(-50%) translateX(800%) translateY(110px)
    .icon-img
      animation: float-soft 2.8s ease-in-out infinite

  .icon--thumb
    transform: translateX(270%) translateX(-145%) translateY(-60px)
    .icon-img
      animation: float-soft 3.1s ease-in-out infinite
</style>
