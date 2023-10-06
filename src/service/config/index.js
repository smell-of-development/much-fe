import axios from "axios";
import { useLoadingStore } from "@/store/loading";
import { useErrorStore } from "@/store/error";
import { useAuthStore } from "@/store/auth";
import _ from "lodash";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {},
});

apiClient.interceptors.request.use(
  (config) => {
    // 서버로 보내기 직전
    useLoadingStore().startLoading();
    setConfig(config);
    return config;
  },
  (error) => {
    useLoadingStore().endLoading();
    useErrorStore().setError({ ...error, type: "request" });
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  async (res) => {
    // 응답 받고
    useLoadingStore().endLoading();
    const { config, data } = res;

    if (config.responseType === "blob") {
      return res;
    }

    if (data && data.code === 401) {
      const newTokenData = await getNewToken();

      if (!newTokenData || newTokenData.code !== 200) {
        await failRefreshToken(newTokenData);

        return newTokenData;
      }
      const authStore = useAuthStore();
      const newToken = newTokenData.data.access;
      authStore.login(newTokenData.data);

      config.headers.Authorization = `Bearer ${newToken}`;

      const resultRetry = await apiClient.request(config);

      return resultRetry;
    }

    if (data && data.code === 403) {
      alert(data.message);
      return;
    }

    return res;
  },
  async (error) => {
    useLoadingStore().endLoading();
    useErrorStore().setError({ ...error, type: "response" });
    if (error.response.status === 401) {
      window.location.href = "/";
    } else if (error.response.status === 403) {
      alert(
        "403, 로그인 정보가 만료되었습니다.\n다시 로그인 해주시기 바랍니다."
      );
      window.location.href = "/";
    } else if (error.response.status === 404) {
      alert("404, 페이지를 찾을 수 없습니다. 네트워크 상태를 확인해주세요.");
    } else if (error.response.status === 500) {
      alert("500, 서버에서 오류가 발생했습니다. 관리자에게 문의해주세요.");
    }
    // handleError(true);
    return Promise.reject(error);
  }
);

async function getNewToken() {
  const auth = JSON.parse(localStorage.getItem("auth") || "{}");
  if (_.isEmpty(auth)) {
    alert("로그인 시간이 만료되었습니다.");
    window.location.href = "/";
    return;
  }

  const config = {
    headers: {
      Authorization: `Bearer ${auth.token.refresh}`,
    },
  };

  // TODO::: 새토큰 발급 api 붙이기
  // const result = await axios
  //   .post(`/api${apiPath.TOKEN}`, {}, config)
  //   .then((response) => {
  //     console.log("%c====> 토큰 재발급", "font-size:50px", response);
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     console.log("getNewTokenError", error);
  //     return error;
  //   });
  // console.log("getNewToken", result);
  // return result;
}

async function failRefreshToken(newTokenData) {
  if (newTokenData.code === 401) {
    alert("로그인 시간이 만료되었습니다.");
  }
  window.location.href = "/";
}

function setConfig(config) {
  const { contentType, isNeedAuth } = config;

  config.headers = {
    "Content-Type": contentType || "application/json",
  };
  if (isNeedAuth === false) return;
  const auth = JSON.parse(localStorage.getItem("auth") || "{}");
  if (auth && auth.token) {
    config.headers.Authorization = `Bearer ${auth.token.access}`;
  }
}

export default apiClient;
