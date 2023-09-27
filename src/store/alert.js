import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useAlert = defineStore("alertStore", () => {
  const alertOpen = ref(false);
  const alert = reactive({
    message: "",
    okFunc: () => {},
    okBtn: "확인",
    cancelFunc: () => {
      handleAlert(false);
    },
    cancelBtn: "닫기",
  });

  function handleAlert(value) {
    alert.value = value;
  }

  return { alertOpen, alert, handleAlert };
});
