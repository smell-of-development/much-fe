<script setup>
import { computed, reactive, watchEffect } from "vue";
const date = reactive({
  mon: false,
  tue: false,
  wed: false,
  thu: false,
  fri: false,
  sat: false,
  sun: false,
  discussion: true,
});

watchEffect(() => {
  if (
    !date.mon &&
    !date.tue &&
    !date.wed &&
    !date.thu &&
    !date.fri &&
    !date.sat &&
    !date.sun
  ) {
    date.discussion = true;
  } else {
    date.discussion = false;
  }
});

function onClickDate(key) {
  date[key] = !date[key];
}

function onClickDiscusstion() {
  date.discussion = !date.discussion;
  if (date.discussion) {
    Object.entries(date).forEach(([key]) => {
      if (key !== "discussion") {
        date[key] = false;
      }
    });
  }
}
</script>
<template>
  <h4 class="title">모임 주기</h4>
  <ul class="date-container">
    <li
      class="date"
      :class="{
        action: date.mon,
      }"
      @click="() => onClickDate('mon')"
    >
      월
    </li>
    <li
      class="date"
      :class="{
        action: date.tue,
      }"
      @click="() => onClickDate('tue')"
    >
      화
    </li>
    <li
      class="date"
      :class="{
        action: date.wed,
      }"
      @click="() => onClickDate('wed')"
    >
      수
    </li>
    <li
      class="date"
      :class="{
        action: date.thu,
      }"
      @click="() => onClickDate('thu')"
    >
      목
    </li>
    <li
      class="date"
      :class="{
        action: date.fri,
      }"
      @click="() => onClickDate('fri')"
    >
      금
    </li>
    <li
      class="date"
      :class="{
        action: date.sat,
      }"
      @click="() => onClickDate('sat')"
    >
      토
    </li>
    <li
      class="date"
      :class="{
        action: date.sun,
      }"
      @click="() => onClickDate('sun')"
    >
      일
    </li>
    <li class="vertical-bar" />
    <li
      class="date"
      :class="{
        action:
          date.discussion &&
          (!date.mon ||
            !date.tue ||
            !date.wed ||
            !date.thu ||
            !date.fri ||
            !date.sat ||
            !date.sun),
      }"
      @click="onClickDiscusstion"
    >
      협의
    </li>
  </ul>
</template>
<style scoped lang="scss">
@mixin flex {
  display: flex;
}
.title {
  margin-bottom: 10px;
  color: #171718;
  font-weight: 400;
}
.date-container {
  @include flex;
  gap: 10px;
}
.date {
  @include flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #696363;
  background-color: #f7f6fa;
  border-radius: 4px;
  cursor: pointer;
  &.action {
    color: #ffffff;
    background-color: #6b71fc;
  }
}
.vertical-bar {
  width: 1px;
  border-left: 1px solid #696363;
}
</style>
