<script setup>
import { BaseCard } from "@/components/base";
</script>
<template>
  <section>
    <BaseCard v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8]" :key="index" />
  </section>
</template>
<style scoped lang="scss">
section {
  width: 1298px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 30px;
  row-gap: 40px;
  align-items: flex-start;
  justify-items: center;
  margin: auto;

  @media (max-width: 1300px) {
    width: 970px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1000px) {
    width: 640px;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
