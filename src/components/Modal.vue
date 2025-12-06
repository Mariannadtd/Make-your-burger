<script setup>
import { ref } from 'vue'
import Button from '../components/UI/Button.vue'

const emit = defineEmits(['closeModal'])
defineProps(["showModal"])

const nameValue = ref('')
const phoneValue = ref('')

const btnThird = 'third'

const close = () => {
  emit('closeModal')
}
</script>

<template>
  <div class="modal" v-if="showModal">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-content">
      <h2>Call Me Back</h2>
      <label for="nameInput">Enter your name</label>
      <input id="nameInput" v-model="nameValue" type="text" />
      <span v-if="nameValue" class="entered-value">Введенное значение: {{ nameValue }}</span>
      <label for="phoneInput">Enter your phone number</label>
      <input id="phoneInput" v-model="phoneValue" type="number" />
      <span v-if="phoneValue" class="entered-value">Введенное значение: {{ phoneValue }}</span>
      <Button @click="close" :second="btnThird">
        <template v-slot:second>
          Закрыть
        </template>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.modal 
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  display: flex
  align-items: center
  justify-content: center

.modal-overlay 
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: var(--blue)
  opacity: 0.5
  z-index: 100

.modal-content 
  width: 40rem
  height: 25rem
  background-color: white
  padding: 20px
  border-radius: 4px
  z-index: 200
  opacity: 1

button 
  margin-top: 10px
</style>