import { createRouter, createWebHistory } from "vue-router";
import { studyRoutes } from "@/router/study";
import { projectRoutes } from "@/router/project";
import { communityRoutes } from "@/router/community";
import { mypageRoutes } from "@/router/mypage";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home/HomeView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/Signup/SignupView.vue"),
    },
    ...studyRoutes,
    ...projectRoutes,
    ...communityRoutes,
    ...mypageRoutes,
  ],
});

export default router;
