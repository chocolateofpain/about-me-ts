import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { path: "/home", redirect: "/" },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  // TODO: clean up & unify names of section
  { path: "/about me", redirect: "/about" },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Projects.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/random",
    name: "Random",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Random.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
//# sourceMappingURL=index.js.map
