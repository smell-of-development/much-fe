<script setup>
import { computed } from "vue";
import { BaseInput, BaseButton } from "@/components/base";

const props = defineProps({
  label: {
    type: String,
    default: "인증번호 확인",
  },
  width: {
    type: Number,
    default: 360,
  },
});
const emit = defineEmits(["click"]);

const styleComputed = computed(() => {
  return { width: props.width ? `${props.width}px` : "100%" };
});
</script>
<template>
  <div class="inputbtn-wrapper" :style="styleComputed">
    <BaseInput :width="240" />
    <BaseButton class="purple" :width="110" @click="emit('click')">{{
      label
    }}</BaseButton>
  </div>
</template>
<style lang="scss" scoped>
.inputbtn-wrapper {
  display: flex;
  column-gap: 10px;
  & > .baseinput {
    &:focus {
      outline: 0.5px solid var(--color-black);
      border: 0.5px solid var(--color-black);
    }
  }
}
</style>
