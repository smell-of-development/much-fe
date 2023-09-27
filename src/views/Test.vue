<script setup>
import {
  BaseButton,
  BaseInput,
  BaseInputSubmit,
  BaseCard,
  BaseSelect,
  BaseInputTag,
} from "@/components/base";
import Grid from "../components/layout/Grid.vue";
import test1 from "@/assets/image/test.png";
</script>
<template>
  <div style="margin: 20px">
    <BaseButton class="pink">이것</BaseButton>
  </div>
  <div style="margin: 20px">
    <BaseInput />
  </div>
  <div style="margin: 20px">
    <BaseInputSubmit />
  </div>
  <div style="margin: 20px">
    <BaseCard :bg="test1" />
  </div>
  <div style="margin: 20px">
    <BaseSelect />
  </div>
  <div style="margin: 20px">
    <Grid />
  </div>
  <div style="margin: 20px">
    <BaseInputTag />
  </div>
</template>
<style lang="scss" scoped></style>
