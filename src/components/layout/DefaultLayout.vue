<script setup>
import { RouterView } from "vue-router";
import Loading from "@/components/layout/Loading.vue";
import Error from "@/components/layout/Error.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

import { useLoading } from "@/store/loading";
import { useError } from "@/store/error";

const { isLoading } = useLoading();
const { isError } = useError();
</script>
<template>
  <Header />
  <body>
    <template v-if="!isError">
      <RouterView />
    </template>
    <!-- 서버에러 -->
    <template v-else>
      <Error />
    </template>

    <!-- 로딩 -->
    <template v-if="isLoading">
      <Loading />
    </template>
  </body>
  <Footer />
</template>
<style scoped lang="scss"></style>
