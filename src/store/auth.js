import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export const useAuth = defineStore(
  "auth",
  () => {
    const isLoggedIn = ref(false);
    const userData = reactive({
      username: "",
      profile: "",
    });

    const auth = reactive({
      access: "",
      refresh: "",
    });

    function setUserData(token) {
      // TODO :: decoding
    }

    function setAuth() {
      const auth = localStorage.getItem("auth");
      const { access, refresh } = auth;
      auth.access = access;
      auth.refresh = refresh;
    }

    return { userData, setUserData, auth, setAuth, isLoggedIn };
  },
  {
    paths: ["userData", "auth", "isLoggedIn"],
    persist: true,
    storage: sessionStorage,
  }
);
