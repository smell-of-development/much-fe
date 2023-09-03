import { ref } from "vue";
import { defineStore } from "pinia";

export const useError = defineStore("error", () => {
  const isError = ref(false);

  function handleError(value) {
    isLoading.value = value;
  }

  return { isError, handleError };
});
