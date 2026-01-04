<script setup>
import { ref, computed } from "vue";
import Button from "@/components/UI/Button.vue";

import iconSmileActive from "/img/form-icon-smile-active.svg";
import iconSmileDisabled from "/img/form-icon-smile-disabled.svg";

import iconPhoneActive from "/img/form-icon-phone-active.svg";
import iconPhoneDisabled from "/img/form-icon-phone-disabled.svg";

import iconAddressActive from "/img/form-icon-address-active.svg";
import iconAddressDisabled from "/img/form-icon-address-disabled.svg";

import iconArrow from "/img/form-icon-arrow-disabled.svg";

const emit = defineEmits(["submit", "cancel"]);

const nameValue = ref("");
const phoneValue = ref("");
const addressValue = ref("");
const deliveryValue = ref("");

const touchedName = ref(false);
const touchedPhone = ref(false);
const touchedAddress = ref(false);
const touchedDelivery = ref(false);

const phoneDigits = computed(() => phoneValue.value.replace(/\D/g, ""));

const isNameValid = computed(() => nameValue.value.trim().length >= 2);
const isPhoneValid = computed(() => phoneDigits.value.length >= 10);
const isAddressValid = computed(() => addressValue.value.trim().length >= 6);
const isDeliveryValid = computed(() => !!deliveryValue.value);

const isNameInvalid = computed(() => touchedName.value && !isNameValid.value);
const isPhoneInvalid = computed(
  () => touchedPhone.value && !isPhoneValid.value
);
const isAddressInvalid = computed(
  () => touchedAddress.value && !isAddressValid.value
);
const isDeliveryInvalid = computed(
  () => touchedDelivery.value && !isDeliveryValid.value
);

const nameIcon = computed(() =>
  isNameValid.value ? iconSmileActive : iconSmileDisabled
);
const phoneIcon = computed(() =>
  isPhoneValid.value ? iconPhoneActive : iconPhoneDisabled
);
const addressIcon = computed(() =>
  isAddressValid.value ? iconAddressActive : iconAddressDisabled
);

const onPhoneInput = (e) => {
  phoneValue.value = e.target.value.replace(/[^\d+()\-\s]/g, "");
};

const submit = () => {
  touchedName.value = true;
  touchedPhone.value = true;
  touchedAddress.value = true;
  touchedDelivery.value = true;

  if (
    !isNameValid.value ||
    !isPhoneValid.value ||
    !isAddressValid.value ||
    !isDeliveryValid.value
  )
    return;

  emit("submit", {
    name: nameValue.value.trim(),
    phone: phoneDigits.value,
    address: addressValue.value.trim(),
    delivery: deliveryValue.value,
  });
};
</script>

<template>
  <div class="grid">
    <div class="field" :class="{ valid: isNameValid, invalid: isNameInvalid }">
      <div class="control">
        <img class="left-ico" :src="nameIcon" alt="" />
        <input
          v-model="nameValue"
          type="text"
          placeholder="Your Name"
          autocomplete="name"
          @blur="touchedName = true"
        />
      </div>
    </div>

    <div
      class="field"
      :class="{ valid: isPhoneValid, invalid: isPhoneInvalid }"
    >
      <div class="control">
        <img class="left-ico" :src="phoneIcon" alt="" />
        <input
          v-model="phoneValue"
          type="tel"
          inputmode="tel"
          placeholder="Phone Number"
          autocomplete="tel"
          @input="onPhoneInput"
          @blur="touchedPhone = true"
        />
      </div>
    </div>

    <div
      class="field"
      :class="{ valid: isAddressValid, invalid: isAddressInvalid }"
    >
      <div class="control">
        <img class="left-ico" :src="addressIcon" alt="" />
        <input
          v-model="addressValue"
          type="text"
          placeholder="Shipping Address"
          autocomplete="street-address"
          @blur="touchedAddress = true"
        />
      </div>
    </div>

    <div
      class="field select"
      :class="{ valid: isDeliveryValid, invalid: isDeliveryInvalid }"
    >
      <div class="control">
        <span class="left-pad" aria-hidden="true"></span>

        <select v-model="deliveryValue" @blur="touchedDelivery = true">
          <option value="" disabled selected>Time to Delivery</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="03:00 PM">03:00 PM</option>
          <option value="06:00 PM">06:00 PM</option>
        </select>

        <img class="right-ico" :src="iconArrow" alt="" />
      </div>
    </div>
  </div>

  <div class="divider divider--bottom"></div>

  <div class="action">
    <Button third class="action action--checkout" @click="submit">
      <template #third>Checkout</template>
    </Button>
  </div>
</template>

<style scoped lang="sass">
.grid
  margin-top: 14px
  display: grid
  grid-template-columns: 1fr 1fr
  gap: 14px

  @media (max-width: 640px)
    grid-template-columns: 1fr

.control
  position: relative
  height: 44px

.left-ico
  position: absolute
  left: 14px
  top: 50%
  transform: translateY(-50%)
  width: 16px
  height: 16px
  display: block

.right-ico
  position: absolute
  right: 14px
  top: 50%
  transform: translateY(-50%)
  width: 2.5rem
  height: 2.5rem
  display: block
  pointer-events: none
  opacity: .8

.left-pad
  position: absolute
  left: 0
  top: 0
  width: 40px
  height: 44px

input, select
  width: 100%
  height: 44px
  border-radius: 12px
  border: 1px solid #e7e7ff
  background: #f3f3ff
  padding: 0 14px 0 40px
  font-size: 14px
  outline: none
  color: #1d1d2a

  &::placeholder
    color: #9aa3b2

.field:focus-within input,
.field:focus-within select
  border-color: rgba(107,90,230,.55)
  background: #ffffff

.field.valid input,
.field.valid select
  border-color: rgba(0,118,255,.75)
  background: rgba(0,118,255,.06)

.field.invalid input,
.field.invalid select
  border-color: rgba(255, 59, 48, .9)
  background: rgba(255, 59, 48, .06)

.field.select select
  appearance: none
  padding-right: 38px

.action
  margin-top: 16px
  display: flex
  justify-content: flex-end
  gap: 12px

.action :deep(.btn)
  height: 50px
  padding: 0 36px
  border-radius: 999px
  font-weight: 700

.action :deep(.btn.action--checkout)
  background: var(--blue) !important
  color: #fff !important

.divider--bottom
  margin: 3rem 0
  height: .1rem
  width: 100%
  background: rgba(0,0,0,.08)
</style>
