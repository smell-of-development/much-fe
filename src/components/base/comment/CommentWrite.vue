<script setup>
import { ref } from "vue";
import { BaseButton } from "@/components/base";

const props = defineProps({
  isReply: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["close"]);

const comment = ref("");
</script>
<template>
  <div class="wrapper">
    <textarea class="comment-write" v-model="comment" placeholder="댓글 입력" />

    <div class="footer">
      <template v-if="isReply">
        <BaseButton
          class="submit"
          :class="'white'"
          :width="50"
          :height="30"
          @click="emit('close')"
        >
          취소
        </BaseButton>
      </template>
      <BaseButton class="submit" :class="'white'" :width="50" :height="30">
        등록
      </BaseButton>
    </div>
  </div>
</template>
<style scoped lang="scss">
.wrapper {
  /* margin: 30px 0; */
}
.comment-write {
  width: 100%;
  height: 100px;
  padding: 10px;
  resize: none;
  outline: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 0 1px var(--border-gray);
  &:focus {
    box-shadow: 0 0 0 1px var(--color-main);
  }
  &::placeholder {
    color: var(--border-gray);
  }
}

:deep() {
  .basebutton {
    font-size: 12px;
  }
}

.footer {
  display: flex;
  justify-content: end;
  column-gap: 10px;
  margin-top: 10px;
}
</style>
