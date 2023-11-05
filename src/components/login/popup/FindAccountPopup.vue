<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DefaultModal from "@/components/layout/DefaultModal.vue";
import { BaseInputSubmit, BaseButton } from "@/components/base";

const emit = defineEmits(["close", "changePw", "login"]);

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

function login() {
  emit("login");
  emit("close");
}

function changePw() {
  emit("close");
  emit("changePw");
}
</script>
<template>
  <DefaultModal :width="440" :height="420" @close="emit('close')">
    <template #contents>
      <div class="container">
        <h1 class="container--title">내 계정 찾기</h1>
        <div class="info">
          <span class="info--text"
            >본인 인증 시 메세지를 통해 임시 비밀번호가 발급됩니다.</span
          >
          <span class="info--text"
            >로그인 후 마이페이지에서 새로운 비밀번호로 변경 바랍니다.</span
          >
        </div>
        <div class="container__inputform">
          <BaseInputSubmit
            type="password"
            :label="'전화번호'"
            :placeholder="'01012345678'"
            :width="360"
            :btnLabel="'인증번호 전송'"
          />
          <BaseInputSubmit
            type="password"
            :width="360"
            :placeholder="'인증번호 입력'"
          />
        </div>
        <div class="account-container">
          <span
            class="link"
            :class="{ action: routePath === 'signup' }"
            @click="
              () => {
                emit('close');
                gotoPage('signup');
              }
            "
            >회원가입</span
          >
          <span class="vertical-bar"> &#124; </span>
          <span
            class="link"
            @click="
              () => {
                emit('close');
              }
            "
          >
            뒤로 가기
          </span>
        </div>
      </div>
    </template>
  </DefaultModal>

  <!-- 내 계정 찾기(아이디 찾기 완료) -->
  <!-- <DefaultModal :width="440" :height="420" @close="emit('close')">
    <template #contents>
      <div class="container">
        <h1 class="container--title">내 계정 찾기</h1>
        <div class="info">
          <span class="info--text"
            >010-0000-0000와 일치하는 계정은 아래와 같습니다.
          </span>
          <span class="info--text">
            비밀번호를 분실한 경우 계정과 동일한 번호로 임시 비밀번호를 발급해
            드립니다.
          </span>
        </div>
        <div class="user-card">유저 아이디</div>
        <div class="btn-container">
          <BaseButton class="pink" :width="360" @click="login">
            로그인 하기
          </BaseButton>
          <BaseButton class="pink" :width="360" @click="changePw">
            새 비밀번호로 변경하기
          </BaseButton>
        </div>
      </div>
    </template>
  </DefaultModal> -->
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
    margin: 10px 0 20px 0;
  }
  &__inputform {
    @include flex;
    row-gap: 10px;
  }
}

.info {
  @include flex;
  align-items: center;
  margin-bottom: 24px;
  &--text {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #696363;
    margin: 0 2px 0 2px;
  }
}

.account-container {
  margin-top: 80px;
  & span {
    font-size: 14px;
    font-weight: 300;
    color: #696363;
    margin: 0 2px 0 2px;
  }

  &__terms {
    .link {
      cursor: pointer;
    }
    .vertical-bar {
      color: var(--border-gray);
    }
  }
}

/* 왜 안 먹히지 */
.user-card {
  width: 360px;
  height: 60px;
  border: solid 1px var(--border-gray);
}
.btn-container {
  @include flex;
  margin-top: 25px;
  gap: 12px;
}
</style>
