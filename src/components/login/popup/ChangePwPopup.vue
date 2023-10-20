<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DefaultModal from "@/components/layout/DefaultModal.vue";
import { BaseInput, BaseButton } from "@/components/base";

const emit = defineEmits(["close"]);

const router = useRouter();
const route = useRoute();

const { routePath, gotoPage } = routeHandler();

function routeHandler() {
  const routePath = computed(() => {
    return route.path.split("/")[1];
  });

  function gotoPage(pageName) {
    router.push({ name: pageName });
  }
  return { routePath, gotoPage };
}
</script>
<template>
  <DefaultModal :width="440" :height="420" @close="emit('close')">
    <template #contents>
      <div class="container">
        <h1 class="container--title">비밀번호 변경</h1>
        <div class="container__inputform">
          <BaseInput type="password" :label="'새로운 비밀번호'" :width="360" />
          <BaseInput
            type="password"
            :label="'비밀번호 확인'"
            :placeholder="'************'"
            :width="360"
          />
          <span class="error-msg">일치하지 않습니다.</span>
        </div>
      </div>
      <div class="button-container">
        <BaseButton class="pink" :width="360"
          >새 비밀번호로 변경하기</BaseButton
        >
      </div>
    </template>
  </DefaultModal>
</template>
<style scoped lang="scss">
@mixin flex {
  display: flex;
  flex-direction: column;
}

.container {
  @include flex;
  align-items: center;
  padding: 20px;

  &--title {
    font-weight: 500;
    font-size: 24px;
    margin: 0 0 20px 0;
  }
  &__inputform {
    @include flex;
    row-gap: 10px;
  }
}
.error-msg {
  font-size: 12px;
  color: var(--color-main);
}
.button-container {
  @include flex;
  align-items: center;
  margin-top: 10px;
}
</style>
