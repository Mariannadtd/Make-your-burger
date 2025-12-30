<script setup>
import Button from "@/components/UI/Button.vue";

const props = defineProps({
  data: { type: Object, default: () => ({}) },
});

const emit = defineEmits(["ok"]);
</script>

<template>
  <div class="success">
    <div class="check">✓</div>

    <div class="thanks">
      <div class="big">Thank you for the order,</div>
      <div class="big">споыкег!</div>
    </div>

    <div class="info">
      <div>Phone Number: {{ props.data?.phone }}</div>
      <div>Shipping Address: {{ props.data?.address }}</div>
      <div>Time to Delivery: {{ props.data?.delivery }}</div>
    </div>

    <div class="actions">
      <Button third class="action action--ok" @click="emit('ok')">
        <template #third>OK</template>
      </Button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.success
  display: grid
  place-items: center
  text-align: center
  gap: 14px
  padding: 24px 0 8px

.check
  width: 86px
  height: 86px
  border-radius: 999px
  border: 6px solid #0a8a1f
  color: #0a8a1f
  font-size: 56px
  line-height: 74px
  font-weight: 800
  display: grid
  place-items: center

.thanks .big
  font-size: 22px
  font-weight: 800

.info
  text-align: left
  width: min(420px, 100%)
  font-size: 14px
  line-height: 1.5
  color: #1d1d2a

.actions
  margin-top: 12px

.actions :deep(.btn)
  height: 40px
  padding: 0 28px
  border-radius: 999px
  font-weight: 800

.actions :deep(.btn.action--ok)
  background: #6b5ae6 !important
  color: #fff !important
</style>
