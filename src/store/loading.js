import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoading = defineStore("loading", () => {
  const isLoading = ref(false);

  function handleLoading(value) {
    isLoading.value = value;
  }

  return { isLoading, handleLoading };
});
