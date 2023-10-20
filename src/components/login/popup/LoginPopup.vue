<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import DefaultModal from "@/components/layout/DefaultModal.vue";
import { BaseButton, BaseInput } from "@/components/base";
import kakao from "@/assets/login/kakao.svg";
import google from "@/assets/login/google.svg";
import FindAccountPopup from "@/components/login/popup/FindAccountPopup.vue";

const router = useRouter();
const route = useRoute();

const emit = defineEmits(["close"]);

const { routePath, gotoPage } = routeHandler();
const { findAccountPopup, findAccountPopupHandler } = findAccountControl();

function routeHandler() {
  const routePath = computed(() => {
    return route.path.split("/")[1];
  });

  function gotoPage(pageName) {
    router.push({ name: pageName });
  }
  return { routePath, gotoPage };
}
function findAccountControl() {
  const findAccountPopup = ref(false);

  function findAccountPopupHandler() {
    console.log("계정 뜨니");
    findAccountPopup.value = !findAccountPopup.value;
    if (findAccountPopup.value) {
      //여기서 로그인 모달을 닫아야 할 것 같은데
      console.log("어떻게 닫지");
    }
  }
  return { findAccountPopup, findAccountPopupHandler };
}
</script>
<template>
  <DefaultModal :width="440" :height="510" @close="emit('close')">
    <template #contents>
      <div class="container">
        <h1 class="container--title">로그인</h1>
        <div class="container__inputform">
          <BaseInput
            :placeholder="'아이디를 입력하세요.'"
            :label="'아이디'"
            :width="360"
          />
          <BaseInput
            :placeholder="'비밀번호를 입력하세요.'"
            :label="'비밀번호'"
            :width="360"
            type="password"
          />
          <!-- <span class="error-message">존재하지 않는 아이디입니다.</span> -->
        </div>
        <div class="login-container">
          <BaseButton class="pink" :width="360">로그인</BaseButton>
          <div class="login-container__terms">
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
            <span class="link" @click="findAccountPopupHandler">
              아이디/비밀번호 찾기
            </span>
          </div>
        </div>
        <div class="footer">
          <div class="footer--img">
            <div class="kakao-container">
              <img :src="kakao" />
            </div>
            <div class="google-container">
              <img :src="google" />
            </div>
          </div>
          <span>연동된 소셜 계정으로 로그인</span>
        </div>
      </div>
      <template v-if="findAccountPopup">
        <FindAccountPopup @close="findAccountPopupHandler" />
      </template>
    </template>
  </DefaultModal>
</template>
<style scoped lang="scss">
@mixin flex {
  display: flex;
  flex-direction: column;
}

button {
  all: unset;
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

.login-container {
  @include flex;
  align-items: center;
  row-gap: 10px;
  margin-top: 36px;
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

.footer {
  @include flex;
  align-items: center;
  margin-top: 30px;
  & span {
    font-size: 14px;
    font-weight: 300;
    color: #696363;
  }

  &--img {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 20px;
    cursor: pointer;
  }
}
.kakao-container {
  @include flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #ffe747;
  border-radius: 8px;
}
.google-container {
  @include flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border: solid 1px var(--border-gray);
  border-radius: 8px;
}
</style>
