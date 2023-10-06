<script setup>
import { ref, reactive, watchEffect, computed } from "vue";
import {
  BaseButton,
  BaseInput,
  BaseInputSubmit,
  BaseInputSelect,
} from "@/components/base";

import { formattedPhoneNumber, onlyNumber } from "@/utils/common";

const { errorMessage, inputValues, checkNickname, checkId, submitSignup } =
  signupValueControl();
function signupValueControl() {
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

  const inputValuesComp = computed({
    get() {
      const {
        id,
        password,
        passwordCheck,
        nickname,
        phoneNum,
        phoneNumCheck,
        position,
      } = inputValues;
      const returnData = {
        id,
        password,
        passwordCheck,
        nickname,
        phoneNum: onlyNumber(phoneNum),
        phoneNumCheck,
        position,
      };
      return returnData;
    },
    set(value) {},
  });

  async function checkNickname() {
    if (inputValues.nickname === "") {
      alert("닉네임을 입력해주세요.");
      return;
    }
    console.log("닉넴검사");
  }

  async function checkId() {
    if (inputValues.id === "") {
      alert("아이디를 입력해주세요.");
      return;
    }
    console.log("아이디검사");
  }

  async function submitSignup() {
    console.log("회원가입 ");
  }

  watchEffect(() => {
    if (inputValues.passwordCheck !== "") {
      if (inputValues.password !== inputValues.passwordCheck) {
        errorMessage.password = true;
      } else {
        errorMessage.password = false;
      }
    } else {
      errorMessage.password = false;
    }
  });

  return { errorMessage, inputValues, checkNickname, checkId, submitSignup };
}

const { sendAuth, onClickSendAuth, handlePhoneNumber, handleAuthNumber } =
  checkPhoneNumber();
function checkPhoneNumber() {
  const sendAuth = ref(false);

  function handlePhoneNumber() {
    requestAnimationFrame(() => {
      inputValues.phoneNum = formattedPhoneNumber(inputValues.phoneNum);
    });
  }

  function handleAuthNumber() {
    requestAnimationFrame(() => {
      inputValues.phoneNumCheck = onlyNumber(inputValues.phoneNumCheck);
    });
  }

  async function onClickSendAuth() {
    if (inputValues.phoneNum === "") {
      alert("핸드폰 번호를 입력해주세요.");
      return;
    }

    sendAuth.value = true;
  }

  return { sendAuth, onClickSendAuth, handlePhoneNumber, handleAuthNumber };
}

const { loginModal } = login();
function login() {
  const loginModal = ref(false);
  return { loginModal };
}
</script>

<template>
  <div class="container">
    <h1 class="container--title">회원가입</h1>

    <div class="container__inputform">
      <BaseInputSubmit
        v-model="inputValues.id"
        :placeholder="'아이디를 입력하세요.'"
        :label="'아이디'"
        :btnLabel="'중복 확인'"
        @click="checkId"
      />
      <span v-if="errorMessage.id" class="error-message"
        >중복된 아이디가 있습니다.</span
      >
    </div>

    <div class="container__inputform">
      <BaseInput
        v-model="inputValues.password"
        :label="'비밀번호'"
        :placeholder="'비밀번호를 입력하세요.'"
        :width="360"
        type="password"
      />
      <BaseInput
        v-model="inputValues.passwordCheck"
        type="password"
        :width="360"
        :placeholder="'비밀번호를 확인해주세요.'"
      />
      <span v-if="errorMessage.password" class="error-message"
        >비밀번호가 일치하지 않습니다.</span
      >
    </div>
    <div class="container__inputform">
      <BaseInputSubmit
        v-model="inputValues.nickname"
        :label="'닉네임'"
        :placeholder="'닉네임을 입력해주세요.'"
        :btnLabel="'중복 확인'"
        @click="checkNickname"
      />
      <span v-if="errorMessage.nickname" class="error-message"
        >중복된 닉네임이 있습니다.</span
      >
    </div>
    <div class="container__inputform">
      <BaseInputSubmit
        v-model="inputValues.phoneNum"
        @keypress="handlePhoneNumber"
        :btnClass="'white'"
        :label="'핸드폰 번호'"
        :placeholder="'010-1234-5678'"
        :maxLength="13"
        :btnLabel="'인증번호 전송'"
        @click="onClickSendAuth"
      />
      <template v-if="sendAuth">
        <BaseInputSubmit
          v-model="inputValues.phoneNumCheck"
          @keypress="handleAuthNumber"
          :btnLabel="'인증번호 확인'"
        />
        <span v-if="errorMessage.authNum" class="error-message"
          >인증번호가 일치하지 않습니다.</span
        >
      </template>
    </div>
    <div>
      <BaseInputSelect
        v-model="inputValues.position"
        :label="'포지션 설정하기 (선택)'"
      />
    </div>
    <div class="footer">
      <div class="footer__terms">
        <span class="link">서비스이용약관</span>
        <span> &#124; </span>
        <span class="link">개인정보처리방침</span>
      </div>
      <BaseButton class="pink" :width="360" @click="submitSignup"
        >회원가입</BaseButton
      >
      <div>
        <span>이미 회원이신가요?</span>
        <button class="login" @click="loginModal">로그인</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin flex {
  display: flex;
  flex-direction: column;
}

.container {
  @include flex;
  align-items: center;
  padding: 50px 0 120px 0;

  &--title {
    font-weight: 600;
    margin: 0 0 50px 0;
  }
  &__inputform {
    @include flex;
    row-gap: 10px;
    margin-bottom: 20px;
    & > .error-message {
      margin-top: -5px;
    }
  }
}

.footer {
  @include flex;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
  margin-top: 60px;
  & span {
    font-size: 14px;
  }

  &__terms {
    & .link {
      cursor: pointer;
    }
  }
}
.login {
  all: unset;
  color: var(--color-main);
  text-decoration: underline;
  font-size: 14px;
  margin: 0 0 0 12px;
  cursor: pointer;
  &:hover {
    color: #f77d83;
  }
}
.error-message {
  color: var(--color-main);
  font-size: 12px;
}
</style>
