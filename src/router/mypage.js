export const mypageRoutes = [
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/MyPage/Profile.vue"),
  },
  {
    path: "/myCalendar",
    name: "myCalendar",
    component: () => import("@/views/MyPage/MyCalendar.vue"),
  },
  // TODO:::
];
