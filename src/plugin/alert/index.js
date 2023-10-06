import { createApp } from "vue";

export function useAlert() {
  const alertPopup = ({
    multiple = true,
    message,
    okLabel,
    okCallBack,
    cancelLabel,
    cancelCallBack,
  }) => {
    const $alertWrap = document?.querySelector("#alertWrap");
    const div = document.createElement("div");

    if (multiple) {
      $alertWrap?.appendChild(div);
    }

    const appAlert = createApp(AlertPopup, {
      message: message,
      okLabel: okLabel,
      okCallBack: okCallBack,
      cancelLabel: cancelLabel,
      cancelCallBack: cancelCallBack,
      alertClose: () => {
        if (!multiple) {
          appAlert.unmount();
        } else {
          appAlert.unmount();
          appAlert._container?.remove();
        }
      },
    });

    if (!multiple) {
      if ($alertWrap && $alertWrap?.__vue_app__) {
        return;
      } else {
        if (message) {
          appAlert.mount("#alertWrap");
        }
      }
    } else {
      if (message) {
        appAlert.mount(div);
      }
    }
  };
  return {
    alertPopup,
  };
}
