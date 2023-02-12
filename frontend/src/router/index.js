import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue";
import ViewNotFound from "@/views/ViewNotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: ViewHome },
    { path: "/:notFound(.*)", component: ViewNotFound },
  ],
});
export default router;
