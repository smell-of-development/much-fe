<script setup>
import CommentView from "@/components/base/comment/CommentView.vue";
import CommentWrite from "@/components/base/comment/CommentWrite.vue";
</script>
<template>
  <div class="comment-write">
    <CommentWrite />
  </div>
  <template v-for="(item, index) in [1, 2, 3]" :key="index">
    <CommentView />
  </template>
</template>
<style scoped lang="scss">
.comment-write {
  margin-bottom: 20px;
}
</style>
