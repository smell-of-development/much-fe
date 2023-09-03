export const communityRoutes = [
  {
    path: "/community",
    children: [
      {
        path: "list",
        name: "communityList",
        component: () => import("@/views/Community/CommunityList.vue"),
      },
      {
        path: "create",
        name: "communityCreate",
        component: () => import("@/views/Community/CommunityWrite.vue"),
      },
    ],
  },
  {
    path: "/community/:id",
    children: [
      {
        path: "",
        name: "communityDetail",
        component: () => import("@/views/Community/CommunityView.vue"),
      },
      {
        path: "modify",
        name: "communityModify",
        component: () => import("@/views/Community/CommunityWrite.vue"),
        meta: {
          isModify: true,
        },
      },
    ],
  },
];
