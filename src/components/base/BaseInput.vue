<script setup>
import { computed } from "vue";

const modelValue = defineModel();
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
  width: {
    type: Number,
    default: 360,
  },
  placeholder: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["input", "blur", "click", "focus"]);

function onInput(e) {
  emit("input", e);
}

function onBlur() {
  emit("blur");
}

function onClick() {
  emit("click");
}

function onFocus() {
  emit("focus");
}

const styleComputed = computed(() => {
  return { width: props.width ? `${props.width}px` : "100%" };
});
</script>
<template>
  <input
    class="baseinput"
    v-model="modelValue"
    :placeholder="placeholder"
    :style="styleComputed"
    :type="type"
    @input="onInput"
    @blur="onBlur"
    @click="onClick"
    @focus="onFocus"
  />
</template>
<style scoped lang="scss">
.baseinput {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 3px;
  border: 1px solid var(--border-gray);
  transition: border 0.3s;
  &:focus {
    outline: none;
    border: 1px solid var(--color-main);
  }
  &::placeholder {
    color: var(--border-gray);
  }
}
</style>
