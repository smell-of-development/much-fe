<script setup>
import { ref, computed } from "vue";
import { ElSelect, ElOption } from "element-plus";

const props = defineProps({
  width: {
    type: Number,
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
  label: {
    type: String,
  },
});
const modelValue = defineModel();

const styleComputed = computed(() => {
  return { width: props.width ? `${props.width}px` : "100%" };
});
</script>
<template>
  <div class="wrap">
    <label v-if="label">{{ label }} </label>
    <ElSelect
      v-model="modelValue"
      class="baseselect"
      allow-create
      default-first-option
      filterable
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
.baseselect {
  &::placeholder {
    color: var(--border-gray);
  }
}

:deep() {
  .el-input__wrapper {
    transition: box-shadow 0.3s;
    box-shadow: 0 0 0 1px inset var(--border-gray);
  }
  .el-select .el-input.is-focus .el-input__wrapper {
    box-shadow: 0 0 0 1px inset var(--color-main) !important;
  }
}
</style>
