<script setup>
import { computed, ref, watchEffect } from "vue";
import { useAuth } from "@/store/auth";
import { useRoute, useRouter } from "vue-router";
import { debounce } from "lodash";

import logo from "@/assets/icon/logo.svg";

const { isLoggedIn } = useAuth();
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
        <button class="link-btn">로그인</button>
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
        <button class="profile" @click="() => gotoPage('mypage')">
          <img class="profile--img" :src="logo" />
          <span class="profile--username">user</span>
        </button>
      </template>
    </div>
  </header>
</template>
<style scoped lang="scss">
$default-font-size: 18px;

.header {
  width: 100%;
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

.profile {
  all: unset;
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
  &--img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
  &--username {
    font-size: $default-font-size;
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
