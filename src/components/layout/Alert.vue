<script setup>
import Modal from "@/components/layout/DefaultModal.vue";
import BaseButton from "@/components/base/BaseButton.vue";
import { useAlert } from "@/store/alert.js";

const { alertOpen, alert, handleAlert } = useAlert();

function handleOk() {
  alert.okFunc();
  handleAlert(false);
}
</script>
<template>
  <Modal :closeBtn="false">
    <template #contents>
      <div>{{ alert.message }}</div>
    </template>
    <template v-if="cancelFunc">
      <BaseButton @click="alert.okFunc">취소</BaseButton>
    </template>
    <template v-if="okFunc">
      <BaseButton @click="handleOk">확인</BaseButton>
    </template>
  </Modal>
</template>
<style scoped lang="scss"></style>
