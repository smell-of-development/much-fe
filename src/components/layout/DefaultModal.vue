<script setup>
const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 200,
  },
  closeBtn: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(["close"]);

const styleObject = {
  width: `${props.width}px`,
  height: `${props.height}px`,
};
</script>
<template>
  <div class="modal-bg">
    <div class="modal" :style="styleObject">
      <span
        class="material-symbols-outlined close"
        @click="() => emit('close')"
      >
        close
      </span>
      <slot name="contents" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.modal-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
.modal {
  position: relative;
  border-radius: 3px;
  padding: 20px;
  background-color: white;
  box-sizing: border-box;
  & > .close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
    color: var(--border-gray);
  }
}
</style>
