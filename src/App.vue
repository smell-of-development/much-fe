<script setup>
import { onMounted } from "vue";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import "element-plus/dist/index.css";

// import { useAuthStore } from "@/store/auth";
// import { useLoadingStore } from "@/store/loading";

// const authStore = useAuthStore();
// const loadingStore = useLoadingStore();

onMounted(() => {});

function create() {
  // if (localStorage.getItem("auth")) {
  //   setAuth();
  // }
  // if (localStorage.getItem("userData")) {
  //   setUserData();
  // }
}
create();
</script>

<template>
  <div>
    <DefaultLayout />
  </div>

  <!-- <template v-if="loadingStore.loadingCount > 0">
    <Loading :isLoading="loadingStore.loadingCount > 0" />
  </template> -->
</template>
<style scoped></style>
