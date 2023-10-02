<script setup>
import Grid from "@/components/layout/Grid.vue";
import {
  BaseCard,
  BaseInput,
  BaseInputTag,
  BaseSelect,
} from "@/components/base";
</script>
<template>
  <article>
    <div class="search">
      <h1 class="search--title">스터디</h1>
      <div class="search__input">
        <BaseInput />
        <span class="material-symbols-outlined icon"> search </span>
      </div>
      <div class="search__filter">
        <BaseInputTag :width="386" />
        <BaseSelect :width="215" />
        <BaseSelect :width="228" />
      </div>
    </div>
    <h1 class="">
      누구나 열고 참여할 수 있는 스터디 모임,<br />바로 시작해보세요!
    </h1>
    <Grid>
      <BaseCard
        v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="index"
      />
    </Grid>
  </article>
</template>
<style scoped lang="scss">
@mixin flex {
  display: flex;
  flex-direction: column;
  align-items: center;
}
article {
  @include flex;
  margin: 80px 0;
}
.search {
  width: 90%;
  max-width: 843px;

  &--title {
    text-align: center;
    margin-bottom: 25px;
  }
  &__input {
    position: relative;
    & > .icon {
      position: absolute;
      right: 16px;
      top: 7px;
    }
  }
  &__filter {
    display: flex;
    margin-top: 25px;
    & :deep {
      .baseselecttag {
        margin-right: 13px;
      }
    }
  }

  /* & :deep {
    .baseinput {
      width: 100%;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      &:focus {
        transition: box-shadow 0.3s;
        border: 1px solid var(--border-gray);
      }
    }
  } */
}
</style>
