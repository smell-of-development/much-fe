import axios from "axios";
import { useLoading } from "@/store/loading";
import { useError } from "@/store/error";

const { handleLoading } = useLoading();
const { handleError } = useError();

const $axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

$axios.interceptors.request.use(
  (config) => {
    // 서버로 보내기 직전
    console.log("axios request : ", config);
    handleLoading(true);
    return config;
  },
  (error) => {
    handleLoading(false);
    // handleError(true);
    return Promise.reject(error);
  }
);

$axios.interceptors.response.use(
  (res) => {
    // 응답 받고
    console.log("axios response : ", res);
    handleLoading(false);
    return res;
  },
  (error) => {
    handleLoading(false);
    // TODO:: error code 500이면 에러 활성화
    // handleError(true);
    return Promise.reject(error);
  }
);

export default $axios;
