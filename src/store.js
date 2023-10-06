import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";

import { useLoadingStore } from "@/store/loading";
import { useAuthStore } from "@/store/auth";

const pinia = createPinia();

export default {
  async install(app) {
    app.use(pinia);
    pinia.use(
      createPersistedState({
        storage: sessionStorage,
      })
    );
    useLoadingStore().loadingCount = 0;

    const authStore = useAuthStore();
    // authStore.install(app);

    (async () => {
      if ((authStore.token.access && authStore, authStore.token.refresh)) {
        await authStore.getUsesrInfo();
      }
    })();
  },
};

export { pinia };
