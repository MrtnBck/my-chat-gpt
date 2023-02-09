import { createRouter, createWebHistory } from "vue-router";
import ViewHome from "@/views/ViewHome.vue";
import ViewNotFound from "@/views/ViewNotFound.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: ViewHome },
    { path: "/:notFound(.*)", component: ViewNotFound },
    /*     { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: CoachesList },
    {
      path: "/coaches/:id",
      component: CoachDetail,
      props: true,
      children: [
        { path: "contact", component: ContactCoach }, //coaches/c1/contact
      ],
    },
    { path: "/register", component: CoachRegistration, meta: { requiresAuth: true } },
    { path: "/requests", component: RequestReceived, meta: { requiresAuth: true } },
    { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
    { path: "/:notFound(.*)", component: NotFound }, */
  ],
});
/* router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next("/auth");
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
}); */

export default router;
