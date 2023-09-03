<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const isModify = route.meta.isModify;
</script>
<template>
  스터디 글
  <template v-if="!isModify"> 작성</template>
  <template v-else>수정</template>
</template>
<style scoped lang="scss"></style>
