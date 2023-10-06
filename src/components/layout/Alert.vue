<script setup>
import { nextTick, onMounted } from "vue";
import BaseButton from "@/components/base/BaseButton.vue";

const props = defineProps({
  multiple: {
    type: Boolean,
  },
  alertClose: {
    type: Function,
  },
  message: {
    type: String,
    default: "",
  },
  okLabel: {
    type: String,
    default: "확인",
  },
  okCallBack: {
    type: Function,
  },
  cancelLabel: {
    type: String,
    default: "취소",
  },
  cancelCallBack: {
    type: Function,
  },
});

const $alertDialog = ref(null);

onMounted(async () => {
  await nextTick();
  $alertDialog?.value?.showModal();
});

async function close() {
  $alertDialog?.value?.close();
  await nextTick();
  if (props.alertClose) {
    props.alertClose();
  }
}

async function onClickCancel() {
  if (props.cancelCallBack) {
    await props.cancelCallBack();
  }
  close();
}

async function onClickOk() {
  if (props.okCallBack) {
    await props.okCallBack();
  }
  close();
}
</script>
<template>
  <teleport :to="'body'">
    <dialog class="dialog" ref="$alertDialog" @close="close">
      <article class="alert">
        <div class="alert__body" v-html="props.message"></div>
        <footer class="alert__footer">
          <template v-if="props.cancelCallBack">
            <BaseButton :class="'white'">
              {{ props.cancelLabel }}
            </BaseButton>
          </template>

          <BaseButton :class="'pink'">
            {{ props.okLabel }}
          </BaseButton>
        </footer>
      </article>
    </dialog>
  </teleport>
</template>
<style scoped lang="scss">
@mixin resetDialog {
  box-sizing: border-box;
  max-width: 90vw;
  max-height: 90vh;
  padding: 0;
  border: 0 none;
  background-color: #ffffff;
  overflow: visible;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
:global(html:has(.dialog[open])) {
  overflow: hidden;
}

.dialog {
  @include resetDialog;
  border-radius: 4px;
}

.alert {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 360px;
  padding: 20px;
  &__body {
    padding: 15px 0;

    font: {
      size: 14px;
    }
    text-align: center;
  }
  &__footer {
    display: flex;
    column-gap: 10px;
    margin-top: 20px;
  }
}
</style>
