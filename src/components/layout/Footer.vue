<script setup>
import logo from "@/assets/icon/logo.svg";
</script>
<template>
  <footer class="footer">
    <div class="">
      <span class="team-name">개발새발</span>
      <img :src="logo" />
    </div>
  </footer>
</template>
<style scoped lang="scss">
$border-color: #e0dbdb;
.footer {
  width: 100%;
  min-width: 800px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 30px;
  border-top: 1px solid $border-color;
}

.team-name {
  color: var(--color-main);
}
</style>
