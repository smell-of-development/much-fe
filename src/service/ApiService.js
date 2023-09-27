import { useAuth } from "@/store/auth";
import $axios from "@/service/config";
const { auth, isLoggedIn } = useAuth();

export default function authHeader(token) {
  if (isLoggedIn) {
    $axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    return {};
  }
}
