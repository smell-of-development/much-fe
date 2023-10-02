<script setup>
import { computed } from "vue";
import { BaseInput, BaseButton } from "@/components/base";

const modelValue = defineModel();
const props = defineProps({
  btnLabel: {
    type: String,
    default: "인증번호 확인",
  },
  width: {
    type: Number,
    default: 360,
  },
  label: {
    type: String,
  },
  btnClass: {
    default: "purple",
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  maxLength: {
    type: Number,
  },
});
const emit = defineEmits(["click"]);

const styleComputed = computed(() => {
  return { width: props.width ? `${props.width}px` : "100%" };
});
</script>
<template>
  <div class="inputbtn-wrapper" :style="styleComputed">
    <BaseInput
      v-model="modelValue"
      :label="label"
      :placeholder="placeholder"
      :width="240"
      :type="type"
      :maxLength="maxLength"
    />
    <BaseButton :class="btnClass" :width="110" @click="emit('click')">{{
      btnLabel
    }}</BaseButton>
  </div>
</template>
<style lang="scss" scoped>
.inputbtn-wrapper {
  display: flex;
  column-gap: 10px;
  align-items: flex-end;
  & > .baseinput {
    &:focus {
      outline: 0.5px solid var(--color-black);
      border: 0.5px solid var(--color-black);
    }
  }
}
</style>
