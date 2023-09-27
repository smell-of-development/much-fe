<script setup>
import { nextTick, onMounted, ref, computed } from "vue";

import { BaseInput } from "@/components/base";
import { ElSelect, ElOption } from "element-plus";
import { debounce } from "lodash";

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

const list = ref([]);
const options = ref([]);
const value = ref([]);
const loading = ref(false);

onMounted(() => {
  list.value = states.map((item) => {
    return { value: `${item}`, label: `${item}` };
  });
});

const remoteMethod = (query) => {
  if (query) {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      options.value = list.value.filter((item) => {
        return item.label.toLowerCase().includes(query.toLowerCase());
      });
    }, 200);
  } else {
    options.value = [];
  }
};

const states = [
  "react",
  "spring",
  "java",
  "typescript",
  "figma",
  "node.js",
  "vue",
];
const styleComputed = computed(() => {
  return { width: props.width ? `${props.width}px` : "100%" };
});
</script>
<template>
  <ElSelect
    class="baseinputtag"
    :style="styleComputed"
    v-model="value"
    multiple
    filterable
    remote
    reserve-keyword
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading"
  >
    <ElOption
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </ElSelect>
</template>
<style scoped lang="scss">
:deep() {
  .el-input__wrapper {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 3px;
    transition: border 0.3s;
    &::placeholder {
      color: var(--border-gray);
    }
  }
  .el-input {
    /* box-shadow: none; */
    &:focus {
      box-shadow: 0 0 0 1px solid var(--color-main);
    }
  }
}
.is-focus {
  box-shadow: none;
  all: none;
}
</style>
