<script setup>
import { ref } from "vue";
import { BaseButton } from "@/components/base";
import arrowDown from "@/assets/arrowDown.svg";
</script>
<template>
  <h3>도착한 신청서</h3>
  <section class="app-container">
    <details>
      <summary class="header-container">
        <div class="header">
          <div class="user-img"></div>
          <div class="user-name">jay</div>
        </div>
        <img :src="arrowDown" class="test" />
      </summary>
      <div class="info">
        <div class="user-position-container">
          <div>포지션</div>
          <div>UI/UX</div>
        </div>
        <p class="user-info">신청서 내용</p>
        <div class="bottom">
          <div class="bottom--time">3시간 전</div>
          <BaseButton :class="'pink'" :width="58" :height="28">수락</BaseButton>
        </div>
      </div>
    </details>
    <details>
      <summary class="header-container">
        <div class="header">
          <div class="user-img"></div>
          <div class="user-name">jay</div>
        </div>
        <img :src="arrowDown" class="test" />
      </summary>
      <p class="user-info">신청서 내용</p>
      <div class="bottom">
        <div class="bottom--time">3시간 전</div>
        <BaseButton :class="'pink'" :width="58" :height="28">수락</BaseButton>
      </div>
    </details>
    <details>
      <summary class="header-container">
        <div class="header">
          <div class="user-img"></div>
          <div class="user-name">jay</div>
        </div>
        <img :src="arrowDown" class="test" />
      </summary>
      <p class="user-info">신청서 내용</p>
      <div class="bottom">
        <div class="bottom--time">3시간 전</div>
        <BaseButton :class="'pink'" :width="58" :height="28">수락</BaseButton>
      </div>
    </details>
    <!-- 수락을 했을 때 -->
    <details class="disabled">
      <summary class="header-container">
        <div class="header">
          <div class="user-img"></div>
          <div class="user-name">jay</div>
        </div>
        <img :src="arrowDown" class="test" />
      </summary>
      <p class="user-info">신청서 내용</p>
      <div class="bottom">
        <div class="bottom--time">3시간 전</div>
        <BaseButton :class="'pink'" :width="58" :height="28">수락</BaseButton>
      </div>
    </details>
  </section>
</template>
<style scoped lang="scss">
@mixin flex {
  display: flex;
  flex-direction: column;
}
details {
  border-bottom: 1px solid var(--border-gray);
  cursor: pointer;

  &[open] .test {
    transform: rotate(180deg);
  }
}
summary {
  &:hover {
    background-color: #fafafa;
  }
  &:active {
    background-color: #eeeeee;
  }
}
.app-container {
  width: 300px;
  height: 705px;
  border: 1px solid var(--border-gray);
  margin-top: 18px;
}
.header-container {
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
}
.header {
  display: flex;
  align-items: center;
}
.user-img {
  width: 40px;
  height: 40px;
  background-color: lightgray;
  border-radius: 50px;
  margin: 16px 20px 16px 16px;
}
.user-position-container {
  display: flex;
  margin: 0 0 14px 20px;
  gap: 14px;
}
.user-info {
  width: 270px;
  height: 130px;
  background-color: lightgray;
  margin: 0 15px 0 15px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 15px 12px 15px;
}
.bottom--time {
  font-size: 12px;
}
.disabled {
  background-color: #f7f6fa;
  div {
    color: #c4c3ca;
  }
}
</style>
