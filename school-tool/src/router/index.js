import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store"
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Homepage from "../views/Homepage.vue";
import AddActivity from "../views/AddActivity.vue";
import ListActivity from "../views/ListActivity.vue";
import Activity from "../views/Activity.vue";

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
    component: Homepage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/addActivity",
    name: "AddActivity",
    component: AddActivity
  },
  {
    path: "/list",
    name: "ListActivity",
    component: ListActivity
  },
  {
    path: "/activity/:id",
    name: "activity",
    component: Activity
  },

];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth && !Store.getters.isLoggedUser){
    next(to='/login');
  } else {
    next();
  }
});

export default router;
