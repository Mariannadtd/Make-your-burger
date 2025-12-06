<script setup>
import { ref, onMounted } from "vue";

const loadImages = async () => {
  const images = {};
  const imagesImport = import.meta.globEager("../assets/img/*");
  Object.entries(imagesImport).forEach(([path, image]) => {
    const imageName = path.split("/").pop();
    images[imageName] = image.default;
  });
  return images;
};

const links = ref([
  { name: "2025", id: 1 },
  { name: "Make Your Burger", href: "/order", id: 2 },
  { name: "Privacy Policy", href: "/privacy", id: 3 },
  { name: "Terms & Conditions", href: "/terms", id: 4 },
  { name: "Visa", img: "payment-visa.svg", id: 5, isFirstImage: true },
  { name: "Mastercard", img: "payment-mastercard.svg", id: 6 },
  { name: "Google Pay", img: "payment-gpay.svg", id: 7 },
  { name: "Apple Pay", img: "payment-apple-pay.svg", id: 8 },
  { name: "PayPal", img: "payment-paypal.svg", id: 9 },
  { name: "Etherium", img: "payment-etherium.svg", id: 10 },
  { name: "Bitcoin", img: "payment-bitcoin.svg", id: 11 },
]);

const images = ref(null);

onMounted(async () => {
  images.value = await loadImages();
});
</script>

<template>
  <footer class="footer">
    <ul class="footer__menu">
      <li
        v-for="link in links"
        :key="link.id"
        :class="{ footer__item: true, 'first-image': link.isFirstImage }"
      >
        <router-link v-if="link.href" :to="link.href">
          {{ link.name }}
        </router-link>

        <img
          v-else-if="link.img"
          :src="images ? images[link.img] : ''"
          :alt="link.name"
        />

        <span v-else>
          {{ link.name }}
        </span>
      </li>
    </ul>
  </footer>
</template>

<style lang="sass" scoped>
.footer
  &__menu
    display: flex
    align-items: center
    width: 100%
    list-style: none
    margin: 0
    padding: 0
    font-size: 1.7rem
    a
      color: black !important
      text-decoration: none

  &__item
    margin-left: 1.5rem
    white-space: nowrap

    img
      height: 3.5rem

    &:first-child
      margin-left: 0

.first-image
  margin-left: auto
</style>
