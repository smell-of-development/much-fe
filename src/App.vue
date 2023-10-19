<script setup>
import { onBeforeUnmount, onMounted, ref, provide } from "vue";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import "element-plus/dist/index.css";

// import { useAuthStore } from "@/store/auth";
// import { useLoadingStore } from "@/store/loading";

// const authStore = useAuthStore();
// const loadingStore = useLoadingStore();

const width = ref(1024);

function handleResize(event) {
  width.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});

provide("width", width);

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
