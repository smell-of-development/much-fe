<script setup>
import { onMounted } from "vue";
import DefaultLayout from "@/components/layout/DefaultLayout.vue";
import "element-plus/dist/index.css";

import { useAuth } from "@/store/auth";

const { userData, auth, setAuth, setUserData } = useAuth();

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
</template>

<style scoped></style>
