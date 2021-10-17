import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Map from "../views/Map.vue";
import EventMenu from "../views/EventMenu.vue";
import ProfileMenu from "../views/ProfileMenu.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Login",
    name: "Login",
    component: Login,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: ProfileMenu,
    props: true,
  },
  {
    path: "/map",
    name: "Map",
    component: Map,
    props: true,
  },
  {
    path: "/eventMenu",
    name: "EventMenu",
    component: EventMenu,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   if(to.name !== "Login" && !store.state.user)
//   next({ name: "Login"});
//   else next();
// });

router.beforeEach((to, from, next) => {
  if (to.path !== "/Login" && !store.state.user.detail) next({ path: "/Login" });
  else next();
});

export default router;
