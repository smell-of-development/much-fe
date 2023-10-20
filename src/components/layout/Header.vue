<script setup>
import { computed, ref, reactive } from "vue";
import BaseUser from "@/components/base/BaseUser.vue";
import LoginPopup from "@/components/login/popup/LoginPopup.vue";
import ChangePwPopup from "@/components/login/popup/ChangePwPopup.vue";
import FindAccountPopup from "@/components/login/popup/FindAccountPopup.vue";

import { useAuthStore } from "@/store/auth";
import { useRoute, useRouter } from "vue-router";
import { debounce } from "lodash";

import logo from "@/assets/icon/logo.svg";

const authStore = useAuthStore();
const { isLoggedIn } = authStore;
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

const { searchValue, handleSearch } = search();
function search() {
  const searchValue = ref("");

  async function handleSearch() {
    if (searchValue.value === "") return;

    //TODO :: search api
    console.log(searchValue.value);
  }

  return { searchValue, handleSearch };
}
const { popup, popupHandler } = loginControl();
function loginControl() {
  const popup = reactive({
    login: false,
    changePw: false,
    find: false,
  });

  function popupHandler(popupKey) {
    Object.entries(popup).forEach(([key]) => {
      if (popupKey === key) {
        popup[key] = true;
      } else {
        popup[key] = false;
      }
    });
  }

  return {
    popup,
    popupHandler,
  };
}
</script>
<template>
  <header class="header">
    <div class="btn-wrapper">
      <img
        class="logo"
        :src="logo"
        alt="logo"
        @click="() => gotoPage('home')"
      />
      <button
        class="link-btn"
        :class="{ action: routePath === 'study' }"
        @click="() => gotoPage('studyList')"
      >
        스터디
      </button>
      <button
        class="link-btn"
        :class="{ action: routePath === 'project' }"
        @click="() => gotoPage('projectList')"
      >
        프로젝트
      </button>
      <button
        class="link-btn"
        :class="{ action: routePath === 'community' }"
        @click="() => gotoPage('communityList')"
      >
        커뮤니티
      </button>
    </div>

    <div class="btn-wrapper">
      <template v-if="!isLoggedIn">
        <button class="link-btn" @click="popup.login = true">로그인</button>
        <button
          class="link-btn"
          :class="{ action: routePath === 'signup' }"
          @click="() => gotoPage('signup')"
        >
          회원가입
        </button>
      </template>

      <template v-else>
        <div class="search">
          <input class="search--input" v-model="searchValue" />
          <span
            class="material-symbols-outlined search--icon"
            :class="{ action: searchValue.length !== 0 }"
            @click="handleSearch"
          >
            search
          </span>
        </div>
        <button class="alarm">
          <span class="material-symbols-outlined alarm--icon">
            notifications
          </span>
          <span class="alarm--action" />
        </button>
        <BaseUser :username="'testuser123'" @click="() => gotoPage('mypage')" />
      </template>
    </div>
  </header>
  <template v-if="popup.login">
    <LoginPopup
      @close="popup.login = false"
      @find="popupHandler('find')"
      @changePw="popupHandler('changePw')"
    />
  </template>
  <template v-if="popup.changePw">
    <ChangePwPopup
      @close="popup.changePw = false"
      @login="popupHandler('login')"
    />
  </template>
  <template v-if="popup.find">
    <FindAccountPopup
      @close="popup.find = false"
      @login="popupHandler('login')"
      @changePw="popupHandler('changePw')"
    />
  </template>
</template>
<style scoped lang="scss">
$default-font-size: 18px;

.header {
  /* width: 100%; */
  min-width: 800px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  border-bottom: 1px solid var(--border-gray);
  & .logo {
    cursor: pointer;
  }
}

.btn-wrapper {
  display: flex;
  align-items: center;
  column-gap: 20px;

  & .search {
    position: relative;
    display: flex;
    align-items: center;
    &--input {
      width: 185px;
      height: 35px;
      border: 1px solid var(--border-gray);
      border-radius: 3px;
      padding: 0 30px 0 10px;
      &:focus {
        border: 1px solid var(--color-main);
        outline: 1px solid var(--color-main);
      }
    }
    &--icon {
      position: absolute;
      right: 5px;
      color: var(--border-gray);
      /* pointer-events: none; */
      cursor: pointer;
      &.action {
        color: var(--color-main);
      }
    }
  }
}

.alarm {
  all: unset;
  position: relative;
  cursor: pointer;
  &--icon {
  }
  &--action {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: red;
    right: 0;
    top: 0;
  }
}

.link-btn {
  all: unset;
  font-size: $default-font-size;
  cursor: pointer;
  &.action {
    transition: color 0.2s;
    color: var(--color-main);
  }
}
</style>
