<script setup>
import { RouterView } from "vue-router";
import Loading from "@/components/layout/Loading.vue";
import Error from "@/components/layout/Error.vue";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Alert from "@/components/layout/Alert.vue";

import { useLoadingStore } from "@/store/loading";
import { useErrorStore } from "@/store/error";

const { isLoading } = useLoadingStore();
const { isError } = useErrorStore();
// const {alert}
</script>
<template>
  <Header />
  <body class="body">
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

  <!-- <Alert /> -->
</template>
<style scoped lang="scss">
.body {
  min-height: calc(100vh - 70px);
}
</style>
