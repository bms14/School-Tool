import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Homepage from "../views/Homepage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: Homepage
  }
];

const router = new VueRouter({
  routes
});

export default router;
