<script setup>
import { ref, computed } from "vue";
import { ElSelect, ElOption } from "element-plus";

const props = defineProps({
  width: {
    type: Number,
    default: 360,
  },
  placeholder: {
    type: String,
    default: " ",
  },
  options: {
    type: Array,
    default: [
      {
        code: "Option1",
        name: "Option1",
      },
      {
        code: "Option2",
        name: "Option2",
      },
    ],
  },
});
const modelValue = defineModel();

const styleComputed = computed(() => {
  return { width: props.width ? `${props.width}px` : "100%" };
});
</script>
<template>
  <ElSelect
    v-model="modelValue"
    class="baseselect"
    :style="styleComputed"
    :placeholder="placeholder"
    size="large"
  >
    <ElOption
      v-for="item in options"
      :key="item.code"
      :label="item.name"
      :value="item.code"
    />
  </ElSelect>
</template>
<style scoped lang="scss">
.baseselect {
  &::placeholder {
    color: var(--border-gray);
  }
}
</style>
