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
  },
  placeholder: {
    type: String,
    default: "",
  },
  label: {
    type: String,
  },
  maxLength: {
    type: Number,
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
  <div class="wrap">
    <label v-if="label">{{ label }} </label>
    <input
      class="baseinput"
      v-model="modelValue"
      :placeholder="placeholder"
      :style="styleComputed"
      :maxlength="maxLength"
      :type="type"
      @input="onInput"
      @blur="onBlur"
      @click="onClick"
      @focus="onFocus"
    />
  </div>
</template>
<style scoped lang="scss">
.wrap {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}
label {
  font-size: 14px;
}
.baseinput {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 0 1px inset var(--border-gray);
  transition: box-shadow 0.3s;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px inset var(--color-main);
  }
  &::placeholder {
    color: var(--border-gray);
  }
}
</style>
