<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import _ from "lodash";

import test from "@/assets/image/test.jpeg";
const props = defineProps({
  isSideCard: {
    type: Boolean,
    default: false,
  },
});

const router = useRouter();

const dummydata = {
  id: 0,
  title: "much 프로젝트 인원 모집합니다. much 프로젝트 인원 모집합니다.",
  tags: [
    "figma",
    "react",
    "spring",
    "typescript",
    "java",
    "spring",
    "typescript",
    "java",
  ],
  online: false,
  address: "서울 성동구",
  timesPerWeek: 2,
  viewCount: 100,
  deadlineDDay: 7,
  pick: false,
  imageUrl: test,
  recruit: {
    state: {
      code: "RECRUITING",
      name: "모집중",
    },
    needs: 4,
    recruited: 2,
    positionStatus: null,
    //  [
    //   {
    //     name: "프론트",
    //     needs: 1,
    //     recruited: 1,
    //     state: {
    //       code: "DONE",
    //       name: "모집완료",
    //     },
    //   },
    //   {
    //     name: "백엔드",
    //     needs: 2,
    //     recruited: 1,
    //     state: {
    //       code: "RECRUITING",
    //       name: "모집중",
    //     },
    //   },
    //   {
    //     name: "pm",
    //     needs: 1,
    //     recruited: 0,
    //     state: {
    //       code: "RECRUITING",
    //       name: "모집중",
    //     },
    //   },
    //   {
    //     name: "백엔드",
    //     needs: 2,
    //     recruited: 1,
    //     state: {
    //       code: "RECRUITING",
    //       name: "모집중",
    //     },
    //   },
    //   {
    //     name: "pm",
    //     needs: 1,
    //     recruited: 0,
    //     state: {
    //       code: "RECRUITING",
    //       name: "모집중",
    //     },
    //   },
    //   {
    //     name: "백엔드",
    //     needs: 2,
    //     recruited: 1,
    //     state: {
    //       code: "RECRUITING",
    //       name: "모집중",
    //     },
    //   },
    //   {
    //     name: "pm",
    //     needs: 1,
    //     recruited: 0,
    //     state: {
    //       code: "RECRUITING",
    //       name: "모집중",
    //     },
    //   },
    // ],
  },
};

const isProject = computed(() => {
  if (props.isSideCard) {
    return false;
  }
  return !_.isEmpty(dummydata.recruit.positionStatus);
});

const { more, positionModal, detailPage } = cardHandler();
function cardHandler() {
  const more = ref(false); //더보기
  const positionModal = ref(false); // 프로젝트 포지션 모달

  // 카드 클릭시 상세 페이지로 이동
  function detailPage(e) {
    if (isProject.value) {
      console.log(isProject.value, "프젝");
      router.push({ name: "projectDetail", params: { id: 123 } });
    } else {
      console.log(isProject.value, "스터디");
      router.push({ name: "studyDetail", params: { id: 123 } });
    }
  }

  return { more, positionModal, detailPage };
}
</script>
<template>
  <div class="card" :class="{ 'no-image': isSideCard }" @click="detailPage">
    <template v-if="!isSideCard">
      <div class="card--dday">D - {{ dummydata.deadlineDDay }}</div>
      <div class="card--pick" @click.stop="">
        <span
          class="material-symbols-outlined"
          :class="{ action: dummydata.pick }"
        >
          bookmark
        </span>
      </div>
      <img class="card--bg" :src="dummydata.imageUrl" />
    </template>
    <div class="card__info">
      <span class="card__info--online">{{
        dummydata.online ? "온라인" : "오프라인"
      }}</span>
      <span> &bull; </span>
      <span class="card__info--address">{{ dummydata.address }}</span>
    </div>
    <div class="card--title">
      {{ dummydata.title }}
    </div>
    <div class="card__tags">
      <template v-if="!more && dummydata.tags.length > 4">
        <span
          class="card__tags--tag"
          v-for="(item, index) in dummydata.tags.slice(0, 4)"
          :key="index"
        >
          {{ item }}
        </span>
      </template>
      <template v-else>
        <span
          class="card__tags--tag"
          v-for="(item, index) in dummydata.tags"
          :key="index"
        >
          {{ item }}
        </span>
      </template>
    </div>
    <div class="card__footer">
      <template v-if="dummydata.tags.length > 4">
        <div
          class="card__footer--more"
          v-if="dummydata.tags.length > 1"
          @click.stop="more = !more"
        >
          <template v-if="!more">
            <span class="material-symbols-outlined"> expand_more </span>
          </template>
          <template v-else>
            <span class="material-symbols-outlined"> expand_less </span>
          </template>
        </div>
      </template>

      <button
        class="card__footer--recruit"
        :class="{ project: isProject }"
        @click.stop="
          () => {
            if (isProject) {
              positionModal = true;
            }
          }
        "
      >
        <span>
          {{ dummydata.recruit.state.name }}
        </span>
        <span>
          {{ dummydata.recruit.recruited }} / {{ dummydata.recruit.needs }}
        </span>
        <template v-if="isProject">
          <span class="material-symbols-outlined arrow">
            arrow_forward_ios
          </span>
        </template>
      </button>
      <div class="card__footer--view">
        <span class="material-symbols-outlined"> visibility </span>
        <span>
          {{ dummydata.viewCount }}
        </span>
      </div>
    </div>
    <template v-if="positionModal">
      <div class="position" @click.stop="">
        <div class="position__contents">
          <div class="position__contents__header">
            <h3>모집현황</h3>
            <button @click.stop="positionModal = false">
              <span class="material-symbols-outlined"> close </span>
            </button>
          </div>
          <div class="position__contents__outer">
            <ul>
              <li
                v-for="(item, index) in dummydata.recruit.positionStatus"
                :key="index"
                :class="{ done: item.state.code === 'DONE' }"
              >
                <span class="position__contents__outer--name">{{
                  item.name
                }}</span>
                <span class="position__contents__outer--number"
                  >{{ item.recruited }} / {{ item.needs }}</span
                >
                <span class="position__contents__outer--tag">
                  <!-- <template v-if="item.state.code === 'DONE'">
                    <span class="material-symbols-outlined"> check_small </span>
                  </template> -->
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<style scoped lang="scss">
@mixin hover {
  transition: 0.2s;
  color: gray;
}
.card {
  width: 302px;
  min-height: 360px;
  position: relative;
  border: 1px solid var(--border-gray);
  padding: 20px 20px 0 20px;
  overflow: hidden;
  cursor: pointer;

  &.no-image {
    min-height: 102px;
  }

  &--bg {
    width: 300px;
    height: 200px;
    object-fit: cover;
    object-position: 50% 50%;
    margin: -20px 0 0 -20px;
  }
  &--dday {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 20px;
    left: 20px;
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 20px;
    padding: 3px 0;
  }
  &--pick {
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--color-white);
    font-variation-settings: "FILL" 0, "wght" 100, "GRAD" 0, "opsz" 24;

    user-select: none;
    & .material-symbols-outlined {
      font-size: 35px;
    }
    & .action {
      font-variation-settings: "FILL" 10, "wght" 400, "GRAD" 0, "opsz" 24;
    }
  }
  &__info {
    font-size: 12px;
    color: var(--color-font-light);
    margin-top: 11px;
    &--address {
    }
    &--online {
    }
  }
  &--title {
    font-size: 16px;
    margin: 5px 0 11px 0;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    column-gap: 5px;
    row-gap: 8px;
    margin-bottom: 18px;
    &--tag {
      font-size: 12px;
      padding: 2px 12px;
      border-radius: 30px;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &__footer {
    width: calc(100% + 40px);
    height: 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    padding: 0 20px;
    margin-left: -20px;
    background-image: linear-gradient(white, rgb(234, 234, 234));
    &--more {
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -12px;
      left: calc(50% - 15px);
      border-radius: 50%;
      user-select: none;
      &:hover {
        @include hover;
      }
    }
    &--recruit {
      all: unset;
      width: 85px;
      height: 24px;
      display: flex;
      align-items: center;
      column-gap: 2px;
      position: relative;
      border-radius: 3px;
      font-size: 12px;
      padding: 0 0 0 10px;
      box-sizing: border-box;

      & .arrow {
        position: absolute;
        right: 3px;
        font-size: 12px;
      }
      &.project {
        &:hover {
          @include hover;
        }
        cursor: pointer;
      }
    }
    &--view {
      display: flex;
      align-items: center;
      font-size: 12px;
      column-gap: 2px;
      & > .material-symbols-outlined {
        font-size: 16px;
      }
    }
  }

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
}
.position {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  z-index: 1;

  &__contents {
    width: 90%;
    height: 258px;
    position: absolute;
    left: calc(50% - 135px);
    top: calc(50% - 129px);
    background-color: var(--color-white);
    padding: 15px 0;
    overflow-y: auto;
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: sticky;
      padding: 0 15px;
      top: 0;
      & h3 {
        font-size: 20px;
        font-weight: 600;
      }
      & button {
        all: unset;
        &:hover {
          @include hover;
        }
      }
    }
    &__outer {
      overflow: hidden;
      height: 170px;
      padding: 0 0 0 15px;
      margin-top: 20px;
      ::-webkit-scrollbar {
        width: 20px;
      }
      ::-webkit-scrollbar-thumb {
        width: 5px;
        border-radius: 30px;
        border: 6px solid white;
        background-color: var(--border-gray);
      }
      & ul {
        height: 100%;
        list-style-type: none;
        overflow: auto;
        padding: 10px 0;
        & li + li {
          border-top: 1px solid #f0f0f0;
        }
        & li {
          padding: 12px 0;
          display: flex;
          align-items: center;
        }
      }
      &--name {
      }
      &--number {
        margin-left: auto;
        font-size: 12px;
      }
      &--tag {
        font-size: 12px;
        margin: 0 0 0 15px;
        border-radius: 3px;
      }
    }
  }
}
.done {
  color: lightgray;
}
</style>
