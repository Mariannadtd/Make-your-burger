<script setup>
import { ref, onMounted } from "vue";

import bunBottom from "../assets/img/bun_bottom.png";
import bunTop from "../assets/img/bun_top.png";
import cheese from "../assets/img/cheese.png";
import cucumber from "../assets/img/cucumber.png";
import cutlet from "../assets/img/cutlet.png";
import mayoBottom from "../assets/img/mayo_bottom.png";
import mayoTop from "../assets/img/mayo_top.png";
import onion from "../assets/img/onion.png";
import salad from "../assets/img/salad.png";
import tomato from "../assets/img/tomato.png";

import iconFlash from "../assets/img/icon-flash.png";
import iconParty from "../assets/img/icon-party.png";
import iconSmile from "../assets/img/icon-smile.png";
import iconThumb from "../assets/img/icon-th-up.png";

const exploded = ref(false);

onMounted(() => {
  setTimeout(() => {
    exploded.value = true;
  }, 1500);
});
</script>

<template>
  <div class="burger" :class="{ 'burger--exploded': exploded }">
    <img :src="bunBottom" alt="" class="layer layer--bun-bottom" />
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

    <img :src="iconFlash" alt="" class="icon icon--flash" />
    <img :src="iconParty" alt="" class="icon icon--party" />
    <img :src="iconSmile" alt="" class="icon icon--smile" />
    <img :src="iconThumb" alt="" class="icon icon--thumb" />
  </div>
</template>

<style scoped lang="sass">
@keyframes burger-enter
  0%
    opacity: 0
    transform: translateY(40px) scale(0.8)
  60%
    opacity: 1
    transform: translateY(-8px) scale(1.05)
  100%
    opacity: 1
    transform: translateY(0) scale(1)

@keyframes float-soft
  0%
    transform: translateY(0)
  50%
    transform: translateY(-6px)
  100%
    transform: translateY(0)

.burger
  position: relative
  width: min(65rem, 55vw)
  aspect-ratio: 1 / 1
  animation: burger-enter .8s ease-out
  bottom: -15rem

  &::before
    content: ''
    position: absolute
    inset: 0
    margin: auto
    width: 140%
    height: 140%
    background-image: url('../assets/img/bg_burger.svg')
    background-repeat: no-repeat
    background-size: contain
    background-position: center
    z-index: 0
    pointer-events: none

.layer
  position: absolute
  left: 50%
  transform: translateX(-50%)
  transform-origin: center center
  transition: transform .8s cubic-bezier(.22, .61, .36, 1), opacity .8s
  will-change: transform, opacity
  z-index: 1
  width: 64.6%

.piece,
.icon
  position: absolute
  transform-origin: center center
  transition: transform .8s cubic-bezier(.22, .61, .36, 1), opacity .8s
  will-change: transform, opacity
  z-index: 1

.piece
  width: 30.8%

.icon
  width: 7.7%
  opacity: 0
  top: 21.5%

// ------ СОБРАННЫЙ БУРГЕР  ------
.layer--bun-bottom
  top: 52.3%

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
  left: 84.6%

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
  left: -10%

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
    transform: translateX(-5%) translateY(-23rem) rotate(55deg)

  // томаты — разлет
  .piece--tomato-1
    transform: translateX(-135%) translateY(-100px) rotate(-25deg)

  .piece--tomato-2
    transform: translateX(-5%) translateY(-150px) rotate(12deg)

  .piece--tomato-3
    transform: translateX(120%) translateY(-105px) rotate(28deg)

  // огурцы — разлет
  .piece--cucumber-1
    transform: translateX(-110%) translateY(-45px) rotate(-20deg)

  .piece--cucumber-2
    transform: translateX(40%) translateY(-130px) rotate(50deg)

  .piece--cucumber-3
    transform: translateX(90%) translateY(90px) rotate(-16deg)

  // лук — разлет
  .piece--onion-1
    transform: translateX(40%) translateY(-240px) rotate(-15deg)

  .piece--onion-2
    transform: translateX(-60%) translateY(10px) rotate(27deg)

  .piece--onion-3
    transform: translateX(80%) translateY(-140px) rotate(-9deg)

  .piece--onion-4
    transform: translateX(80%) translateY(35px) rotate(16deg)

  .piece--onion-5
    transform: translateX(-5%) translateY(95px) rotate(-12deg)

  // иконки
  .icon--flash
    opacity: 1
    transform: translateX(-145%) translateY(-65px)
    animation: float-soft 3s ease-in-out infinite

  .icon--party
    opacity: 1
    transform: translateX(140%) translateY(-90px)
    animation: float-soft 3.2s ease-in-out infinite

  .icon--smile
    opacity: 1
    transform: translateX(150%) translateY(60px)
    animation: float-soft 2.8s ease-in-out infinite

  .icon--thumb
    opacity: 1
    transform: translateX(-145%) translateY(90px)
    animation: float-soft 3.1s ease-in-out infinite
</style>
