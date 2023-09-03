export const projectRoutes = [
  {
    path: "/project",
    children: [
      {
        path: "list",
        name: "projectList",
        component: () => import("@/views/Project/ProjectList.vue"),
      },
      {
        path: "create",
        name: "projectCreate",
        component: () => import("@/views/Project/ProjectWrite.vue"),
      },
    ],
  },
  {
    path: "/project/:id",
    children: [
      {
        path: "",
        name: "projectDetail",
        component: () => import("@/views/Project/ProjectView.vue"),
      },
      {
        path: "modify",
        name: "projectModify",
        component: () => import("@/views/Project/ProjectWrite.vue"),
        meta: {
          isModify: true,
        },
      },
    ],
  },
];
