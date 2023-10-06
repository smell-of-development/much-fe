<script setup>
import { computed } from "vue";

/**
 * ex.
 * <BaseButton :class="'black'">label</BaseButton>
 */
const props = defineProps({
  width: {
    type: Number,
    default: 300,
  },
  height: {
    type: Number,
    default: 40,
  },
});
const emit = defineEmits(["click"]);

const styleComputed = computed(() => {
  return { width: `${props.width}px`, height: `${props.height}px` };
});
</script>

<template>
  <button class="basebutton" :style="styleComputed" @click="emit('click')">
    <slot />
  </button>
</template>
<style scoped lang="scss">
.basebutton {
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 400;
  border-radius: 3px;
  transition: background-color 0.2s;
  cursor: pointer;
  &.white {
    border: 1px solid var(--border-gray);
    background-color: var(--color-white);
    &:hover {
      background-color: #fafafa;
    }
    &:active {
      background-color: #eeeeee;
    }
  }
  &.black {
    background-color: var(--color-black);
    color: var(--color-white);
    &:hover {
      background-color: #222222;
    }
    &:active {
      background-color: #343434;
    }
  }
  &.pink {
    background-color: var(--color-main);
    color: var(--color-white);
    &:hover {
      background-color: #fd6c73;
    }
    &:active {
      background-color: #ff787f;
    }
  }
  &.purple {
    background-color: #6b71fc;
    color: var(--color-white);
    &:hover {
      background-color: #7579fc;
    }
    &:active {
      background-color: #8287fe;
    }
  }
}
</style>
