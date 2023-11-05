<script setup>
import {
  BaseButton,
  BaseInput,
  BaseInputSubmit,
  BaseCard,
  BaseSelect,
  BaseInputTag,
  BaseInputSelect,
} from "@/components/base";
import Grid from "@/components/layout/Grid.vue";
import DateCheck from "@/components/layout/DateCheck.vue";
import Application from "@/components/layout/Application.vue";
import test1 from "@/assets/image/test.png";
</script>
<template>
  <div style="margin: 20px">
    <BaseButton class="pink">버튼</BaseButton>
  </div>
  <div style="margin: 20px">
    <BaseInput :label="'아이디'" />
  </div>
  <div style="margin: 20px">
    <BaseInputSubmit :label="'비밀번호'" :btnLabel="'확인'" />
  </div>
  <div style="margin: 20px">
    일반 셀렉트 박스
    <BaseSelect />
  </div>
  <div style="margin: 20px">
    입력 가능한 셀렉트 박스
    <BaseInputSelect />
  </div>
  <div style="margin: 20px">
    태그 입력
    <BaseInputTag />
  </div>
  <div style="margin: 20px">
    <BaseCard :bg="test1" />
  </div>
  <div style="margin: 20px">
    <Grid>
      <BaseCard
        v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]"
        :key="index"
      />
    </Grid>
  </div>
  <div style="margin: 20px">
    <DateCheck />
  </div>
  <div style="margin: 20px">
    <Application />
  </div>
</template>
<style lang="scss" scoped></style>
