<script setup>
import { ref } from "vue";
import BaseUser from "@/components/base/BaseUser.vue";
import CommentWrite from "@/components/base/comment/CommentWrite.vue";
import { BaseButton } from "@/components/base";

const reply = ref(false);
</script>
<template>
  <div class="wrapper">
    <div class="comment-view">
      <div class="header">
        <BaseUser :username="'test1234'" />
        <span class="header__date">1시간 전</span>
      </div>

      <p class="contents">sldjflsdjflskdjf</p>

      <div class="footer">
        <template v-if="true">
          <BaseButton
            :class="'white'"
            :width="50"
            :height="30"
            @click="() => (reply = true)"
            >답글</BaseButton
          >
        </template>
        <template v-if="true">
          <BaseButton :class="'white'" :width="50" :height="30"
            >수정</BaseButton
          >
        </template>
        <template v-if="true">
          <BaseButton :class="'white'" :width="50" :height="30"
            >삭제</BaseButton
          >
        </template>
      </div>
    </div>
    <template v-if="reply">
      <div class="comment-view reply">
        <CommentWrite :isReply="true" @close="() => (reply = false)" />
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  margin-bottom: 20px;
}

.comment-view {
  padding: 20px;
  margin-bottom: 20px;
  border: {
    bottom: 1px solid var(--border-gray);
    top: 1px solid var(--border-gray);
    right: 1px solid var(--border-gray);
    left: 1px solid var(--border-gray);
  }

  &.reply {
    border: {
      top: none;
    }
    margin-top: -20px;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  &__date {
    font-size: 12px;
  }
}

.footer {
  display: flex;
  justify-content: end;
  column-gap: 10px;
}

.contents {
  margin: 20px 0;
}

:deep() {
  .profile--username {
    font-size: 16px;
  }

  .basebutton {
    font-size: 12px;
  }
}
</style>
