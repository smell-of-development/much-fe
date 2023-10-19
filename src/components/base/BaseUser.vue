<script setup>
import test1 from "@/assets/image/test1.png";

const props = defineProps({
  image: {
    type: String,
    default: test1,
  },
  username: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["click"]);
</script>
<template>
  <button class="profile" @click="() => emit('click')">
    <img class="profile--img" :src="image" />
    <span class="profile--username">{{ username }}</span>
  </button>
</template>
<style scoped lang="scss">
.profile {
  all: unset;
  display: flex;
  align-items: center;
  column-gap: 15px;
  cursor: pointer;
  &--img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
  &--username {
    font-size: 18px;
  }
}
</style>
