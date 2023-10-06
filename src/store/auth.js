import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";
import { decodeToken } from "@/utils/token";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const userData = reactive({
      username: "",
      profile: "",
    });

    const token = reactive({
      access: "",
      refresh: "",
    });

    async function login(token) {
      token.access = token.access;
      token.refresh = token.refresh;
    }

    function clearLocalStorage() {
      localStorage.removeItem("auth");
    }

    function logout() {
      clearLocalStorage();
    }

    async function getUserInfo() {
      if (token.access) {
        const decodeData = await decodeToken(token.access);
        Object.entries(JSON.parse(decodeData.user)).forEach(([key, value]) => {
          // if(key === '') {
          // }
        });
      }
    }

    const isLoggedIn = computed(() => {
      return userData.username !== "";
    });

    function isMine(id) {
      return id === userData.username;
    }

    return {
      userData,
      token,
      login,
      clearLocalStorage,
      logout,
      getUserInfo,
      isLoggedIn,
      isMine,
    };
  },
  {
    persist: [
      {
        paths: ["token"],
        storage: sessionStorage,
      },
    ],
  }
);
