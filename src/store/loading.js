import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoadingStore = defineStore(
  "loading",
  () => {
    const loadingCount = ref(0);

    function startLoading() {
      loadingCount.value++;
    }

    function endLoading() {
      loadingCount.value--;
    }

    return { loadingCount, startLoading, endLoading };
  },
  {
    persist: true,
  }
);
