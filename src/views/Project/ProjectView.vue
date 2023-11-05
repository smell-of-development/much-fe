<script setup>
import { inject } from "vue";
import BaseUser from "@/components/base/BaseUser.vue";
import { BaseButton, BaseCard } from "@/components/base";
import Comment from "@/components/base/comment/Comment.vue";

import test1 from "@/assets/image/test1.png";

const width = inject("width");
</script>
<template>
  <div class="wrapper">
    <article class="detail">
      <div class="header">
        <h1 class="header--title">{{ "프로젝트 제목입니다" }}</h1>
        <div class="header__btns">
          <button class="header--btn">
            <span class="material-symbols-outlined"> share </span>
          </button>
          <button class="header--btn">
            <span class="material-symbols-outlined"> bookmark </span>
          </button>
        </div>
      </div>

      <div class="user">
        <BaseUser :username="'usertest123'" />

        <div class="user__btns">
          <BaseButton :class="'white'" :width="133" :height="40"
            >참가 신청하기</BaseButton
          >
          <template v-if="false">
            <BaseButton :class="'white'" :width="133" :height="40"
              >프로젝트 룸으로 이동</BaseButton
            >
          </template>
          <template v-if="false">
            <BaseButton :class="'white'" :width="133" :height="40"
              >모집 종료하기</BaseButton
            >
          </template>
        </div>
      </div>

      <div class="summary">
        <img class="summary--img" :src="test1" />
        <div class="summary__contents">
          <div class="summary__row">
            <span class="title">진행방식</span>
            <span class="content">오프라인 서울 성동구</span>
          </div>
          <div class="summary__row">
            <span class="title">모임일정</span>
            <span class="content">2023.05.01 ~ 2023.12.31 (90일)</span>
          </div>
          <div class="summary__row">
            <span class="title">모임주기</span>
            <span class="content">화, 금</span>
          </div>
          <div class="summary__row">
            <span class="title">모임대상</span>
            <span class="content">전체</span>
          </div>
          <div class="summary__row">
            <span class="title">모집마감</span>
            <span class="content">2023.05.01</span>
          </div>
        </div>
      </div>

      <div class="summary">
        <div class="summary__column">
          <span class="title">모집현황</span>
          <ul class="content">
            <li class="recruit" v-for="(item, index) in [1, 2]" :key="index">
              <span>{{ "모집중" }}</span> <span>{{ "0/1" }}</span>
            </li>
          </ul>
        </div>
        <div class="summary__column">
          <span class="title">사용언어</span>
          <span class="content">
            <ul class="tags">
              <li
                class="tag"
                v-for="(item, index) in ['react', 'java', 'figma']"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
          </span>
        </div>
      </div>

      <div class="summary">
        <p class="text">slkdjfslkdjflskdjflskdjfslkdjfskldjflk</p>
      </div>

      <div class="summary">
        <div class="right-btn">
          <BaseButton :class="'white'" :width="70">수정</BaseButton>
          <BaseButton :class="'pink'" :width="70">삭제</BaseButton>
        </div>
      </div>
      <Comment />
    </article>

    <aside class="side">
      <h3 class="side__title">비슷한 모임 둘러보기</h3>
      <div class="side__items">
        <template v-for="(item, index) in [1, 2, 3]" :key="index">
          <BaseCard :isSideCard="true" />
        </template>
      </div>
    </aside>
  </div>
</template>
<style scoped lang="scss">
@import "@/views/Study/viewStyle.scss";
</style>
