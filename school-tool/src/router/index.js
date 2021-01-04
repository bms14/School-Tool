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
import Profile from "../views/Profile.vue";
import Forum from "../views/Forum.vue";

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
    component: AddActivity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/list",
    name: "ListActivity",
    component: ListActivity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/activity/:id",
    name: "activity",
    component: Activity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !Store.getters.isLoggedUser) {
    next(to = '/login');
  } else {
    next();
  }
});

export default router;
