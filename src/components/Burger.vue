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
    exploded.value = false;
  }, 1500);
});
</script>

<template>
  <div class="burger" :class="{ 'burger--exploded': exploded }">
    <img :src="bunBottom" alt="" class="layer layer--bun-bottom" />
    <img :src="mayoBottom" alt="" class="layer layer--mayo-bottom" />
    <img :src="cheese" alt="" class="layer layer--cheese" />
    <img :src="salad" alt="" class="layer layer--salad-bottom" />
    <img :src="bunTop" alt="" class="layer layer--bun-top" />
    <img :src="cutlet" alt="" class="layer layer--cutlet" />
    <img :src="salad" alt="" class="layer layer--salad-top" />
    <img :src="mayoTop" alt="" class="layer layer--mayo-top" />

    <img :src="tomato" alt="" class="piece piece--tomato-1" />
    <img :src="tomato" alt="" class="piece piece--tomato-2" />
    <img :src="tomato" alt="" class="piece piece--tomato-3" />

    <img :src="cucumber" alt="" class="piece piece--cucumber-1" />
    <img :src="cucumber" alt="" class="piece piece--cucumber-2" />
    <img :src="cucumber" alt="" class="piece piece--cucumber-3" />

    <img :src="onion" alt="" class="piece piece--onion-1" />
    <img :src="onion" alt="" class="piece piece--onion-2" />
    <img :src="onion" alt="" class="piece piece--onion-3" />
    <img :src="onion" alt="" class="piece piece--onion-4" />
    <img :src="onion" alt="" class="piece piece--onion-5" />

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
  width: 72rem          // БЫЛО 56rem — теперь реально больше
  height: 72rem
  animation: burger-enter .8s ease-out

  &::before
    content: ''
    position: absolute
    top: 115%
    left: 50%
    transform: translate(-50%, -50%)
    width: 150%        // фон-капля тоже чуть больше
    height: 150%
    background-image: url('../assets/img/bg_burger.svg')
    background-repeat: no-repeat
    background-size: contain
    z-index: 0
    pointer-events: none

.layer,
.piece,
.icon
  position: absolute
  left: 50%
  transform: translateX(-50%)
  transform-origin: center center
  transition: transform .8s cubic-bezier(.22, .61, .36, 1), opacity .8s
  will-change: transform, opacity
  z-index: 1

.layer
  max-width: 42rem     // БЫЛО 30rem — вот тут бургер реально растёт
  width: 80%

.piece
  max-width: 8rem      // кусочки тоже крупнее
  // видимы в базовом состоянии, лежат внутри бургера

.icon
  max-width: 5rem      // и иконки побольше
  opacity: 0
  top: 14rem

// ------ СОБРАННЫЙ БУРГЕР ------
.layer--bun-bottom
  top: 34rem

.layer--mayo-bottom
  top: 30.5rem

// томаты между майонезом и котлетой
.piece--tomato-1
  top: 28.5rem

.piece--tomato-2
  top: 27.6rem

.piece--tomato-3
  top: 26.8rem

.layer--cutlet
  top: 26rem

// огурцы выше котлеты, ближе к сыру
.piece--cucumber-1
  top: 24.2rem

.piece--cucumber-2
  top: 23.4rem

.piece--cucumber-3
  top: 22.6rem

.layer--cheese
  top: 21.8rem

// лук — часть снизу, часть выше
.piece--onion-1
  top: 31.5rem   // ближе к низу бургера

.piece--onion-2
  top: 29.2rem

.piece--onion-3
  top: 25rem

.piece--onion-4
  top: 21.2rem

.piece--onion-5
  top: 20.2rem

.layer--mayo-top
  top: 18.7rem

.layer--bun-top
  top: 14.8rem

// ------ ВЗРЫВ ------
.burger.burger--exploded
  .layer--bun-bottom
    transform: translateX(28%) translateY(50px) rotate(5deg)

  .layer--mayo-bottom
    transform: translateX(8%) translateY(30px) rotate(-4deg)

  .layer--cutlet
    transform: translateX(-10%) translateY(5px) rotate(4deg)

  .layer--cheese
    transform: translateX(-32%) translateY(-25px) rotate(-6deg)

  .layer--mayo-top
    transform: translateX(24%) translateY(-90px) rotate(-10deg)

  .layer--bun-top
    transform: translateX(55%) translateY(-130px) rotate(7deg)

  // томаты — разлет
  .piece--tomato-1
    transform: translateX(-135%) translateY(-100px) rotate(-25deg)

  .piece--tomato-2
    transform: translateX(-5%) translateY(-150px) rotate(12deg)

  .piece--tomato-3
    transform: translateX(120%) translateY(-105px) rotate(28deg)

  // огурцы — разлет
  .piece--cucumber-1
    transform: translateX(-110%) translateY(-40px) rotate(-20deg)

  .piece--cucumber-2
    transform: translateX(0%) translateY(-65px) rotate(14deg)

  .piece--cucumber-3
    transform: translateX(105%) translateY(-50px) rotate(-16deg)

  // лук — разлет
  .piece--onion-1
    transform: translateX(-130%) translateY(10px) rotate(-18deg)

  .piece--onion-2
    transform: translateX(-60%) translateY(40px) rotate(11deg)

  .piece--onion-3
    transform: translateX(0%) translateY(60px) rotate(-9deg)

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
