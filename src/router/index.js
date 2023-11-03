import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  // {
  //   path: "/dark",
  //   name: "IndexDarkView",
  //   component: IndexDarkView,
  // },
  // {
  //   path: "/intro",
  //   name: "IntroView",
  //   component: IntroView,
  // },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router



