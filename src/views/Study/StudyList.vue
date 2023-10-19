<script setup>
import Grid from "@/components/layout/Grid.vue";
import {
  BaseCard,
  BaseInput,
  BaseInputTag,
  BaseSelect,
  BaseButton,
} from "@/components/base";
</script>
<template>
  <article class="wrapper">
    <div class="search">
      <h1 class="search--title">스터디</h1>
      <div class="search__input">
        <BaseInput />
        <span class="material-symbols-outlined icon"> search </span>
      </div>
      <div class="search__filter">
        <BaseInputTag class="select--tag" :placeholder="'태그 검색'" />
        <BaseSelect class="select--online" :placeholder="'온·오프라인'" />
        <BaseSelect class="select--week" :placeholder="'모임 횟수'" />
      </div>
    </div>
    <h1 class="intro">
      누구나 열고 참여할 수 있는 스터디 모임,<br />바로 시작해보세요!
    </h1>
    <div class="grid-header">
      <div class="grid-header--left">
        <h2 class="grid-header--title">스터디 둘러보기</h2>
        <button class="grid-header--btn">
          <span class="material-symbols-outlined check-icon"> check </span>
          <span class="text">모집중만 보기</span>
        </button>
        <span class="col-line">&#124;</span>
        <button class="grid-header--btn">
          <span class="dot" />
          <span class="text"> 최신순으로 보기</span>
        </button>
        <button class="grid-header--btn">
          <span class="dot" />
          <span class="text"> 정확순으로 보기</span>
        </button>
      </div>
      <div class="grid-header--right">
        <BaseButton :class="'pink'" :width="160">스터디 모집하기</BaseButton>
      </div>
    </div>
    <Grid>
      <BaseCard
        v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="index"
      />
    </Grid>
    <div class="bottom">
      <BaseButton :class="'pink'" :width="100">더보기</BaseButton>
    </div>
  </article>
</template>
<style scoped lang="scss">
@import "@/views/Study/listStyle.scss";

.intro {
  text-align: center;
  margin: 45px 0 85px 0;
  min-width: 640px;
}
</style>
