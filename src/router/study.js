export const studyRoutes = [
  {
    path: "/study",
    children: [
      {
        path: "list",
        name: "studyList",
        component: () => import("@/views/Study/StudyList.vue"),
      },
      {
        path: "create",
        name: "studyCreate",
        component: () => import("@/views/Study/StudyWrite.vue"),
      },
    ],
  },
  {
    path: "/study/:id",
    children: [
      {
        path: "",
        name: "studyDetail",
        component: () => import("@/views/Study/StudyView.vue"),
      },
      {
        path: "modify",
        name: "studyModify",
        component: () => import("@/views/Study/StudyWrite.vue"),
        meta: {
          isModify: true,
        },
      },
    ],
  },
];
