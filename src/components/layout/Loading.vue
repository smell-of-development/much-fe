<script setup>
import { computed, onMounted, ref, watchEffect } from "vue";

const $loadingDialog = ref(null);
const props = defineProps({
  isLoading: { type: Boolean, default: false },
});

const isShow = ref(false);

watchEffect(async () => {
  if (props.isLoading) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});

const target = computed(() => {
  if (!document.querySelector("dialog")) {
    return "body";
  } else {
    return "dialog";
  }
});

// onMounted(() => {
//   if(isShow.value)
// })
</script>
<template>
  <Teleport :to="target">
    <div ref="$loadingDialog" v-if="isShow" tabindex="-1" class="loading">
      loading...
    </div>
  </Teleport>
</template>
<style scoped lang="scss">
.loading {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9999;
}
</style>
