<script setup>
import DefaultModal from "@/components/layout/DefaultModal.vue";

const emit = defineEmits(["close"]);
</script>
<template>
  <DefaultModal :width="440" :height="510" @close="emit('close')">
    <template #contents> </template>
  </DefaultModal>
</template>
<style scoped lang="scss"></style>
