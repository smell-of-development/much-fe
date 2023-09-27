<script setup>
import { reactive } from "vue";
import { BaseButton, BaseInput, BaseInputSubmit } from "@/components/base";

const errorMessage = reactive({
  id: false,
  password: false,
  nickname: false,
  authNum: false,
});
const inputValues = reactive({
  id: "",
  password: "",
  passwordCheck: "",
  nickname: "",
  phoneNum: "",
  phoneNumCheck: "",
  position: "",
});
</script>

<template>
  <div class="container">
    <h1 class="title">회원가입</h1>
    {{ inputValues }}
    <div>
      <BaseInputSubmit
        v-model="inputValues.id"
        :label="'아이디'"
        :btnLabel="'중복 확인'"
      />
      <span v-if="errorMessage.id" class="error-message"
        >중복된 아이디가 있습니다.</span
      >
    </div>
    <div class="password">
      <BaseInput
        v-model="inputValues.password"
        :label="'비밀번호'"
        type="password"
      />
      <BaseInput v-model="inputValues.passwordCheck" type="password" />
      <span
        v-if="inputValues.password !== inputValues.passwordCheck"
        class="error-message"
        >비밀번호가 일치하지 않습니다.</span
      >
    </div>
    <div>
      <BaseInputSubmit
        v-model="inputValues.nickname"
        :label="'닉네임'"
        :btnLabel="'중복 확인'"
      />
      <span v-if="errorMessage.nickname" class="error-message"
        >중복된 닉네임이 있습니다.</span
      >
    </div>
    <div class="phone-number">
      <BaseInputSubmit
        v-model="inputValues.phoneNum"
        :label="'전화번호'"
        :btnLabel="'인증번호 전송'"
      />
      <BaseInputSubmit
        v-model="inputValues.phoneNumCheck"
        :btnLabel="'인증번호 확인'"
      />
      <span v-if="errorMessage.authNum" class="error-message"
        >인증번호가 일치하지 않습니다.</span
      >
    </div>
    <div>
      <BaseInput
        v-model="inputValues.position"
        :label="'포지션 설정하기 (선택)'"
      />
    </div>
    <div class="signup-button">
      <div>
        <span>서비스이용약관</span>
        <span> &#124; </span>
        <span>개인정보처리방침</span>
      </div>
      <BaseButton class="pink" :width="360">회원가입</BaseButton>
      <div>
        <span>이미 회원이신가요?</span>
        <button class="login">로그인</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 10px;
  margin: 30px 0;
}
.container {
  @include flex;
  align-items: center;
  padding-bottom: 120px;
}
.title {
  margin: 30px 0 50px 0;
}
.password {
  @include flex;
}
.phone-number {
  @include flex;
}
.signup-button {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  & span {
    font-size: 14px;
  }
}
.login {
  all: unset;
  color: var(--color-main);
  text-decoration: underline;
  font-size: 14px;
  margin: 0 0 0 12px;
}
.error-message {
  color: var(--color-main);
  font-size: 12px;
}
</style>
