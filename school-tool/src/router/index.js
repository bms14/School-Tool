import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store"
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Homepage from "../views/Homepage.vue";
import AddActivity from "../views/AddActivity.vue";
import AddQuiz from "../views/AddQuiz.vue";
import ListActivity from "../views/ListActivity.vue";
import ListQuiz from "../views/ListQuiz.vue";
import Quiz from "../views/Quiz.vue";
import Activity from "../views/Activity.vue";
import Profile from "../views/Profile.vue";
import Forum from "../views/Forum.vue";
import HomeAdmin from "../views/BackOffice/HomeAdmin.vue";
import AdminListUser from "../views/BackOffice/AdminListUser.vue";
import AdminListActivity from "../views/BackOffice/AdminListActivity.vue";
import AdminListComments from "../views/BackOffice/AdminListComments.vue";
import EditUserAdmin from "../views/BackOffice/EditUserAdmin.vue";
import SeeActivityAdmin from "../views/BackOffice/SeeActivityAdmin.vue";
import UpdateActivity from "../views/UpdateActivity.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
    meta: {
      userAuthDone: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      userAuthDone: true
    }
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      userAuthDone: true
    }
  },
  {
    path: "/homepage",
    name: "Homepage",
    component: Homepage,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  {
    path: "/addActivity",
    name: "AddActivity",
    component: AddActivity,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  {
    path: "/addQuiz",
    name: "AddQuiz",
    component: AddQuiz,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  {
    path: "/list",
    name: "ListActivity",
    component: ListActivity,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  
  {
    path: "/activity/:id",
    name: "activity",
    component: Activity,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  {
    path: "/quiz",
    name: "ListQuiz",
    component: ListQuiz,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },

  {
    path: "/quiz/:id",
    name: "quiz",
    component: Quiz,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  {
    path: "/forum",
    name: "Forum",
    component: Forum,
    meta: {
      requiresAuth: true,
      notAdmin: true
    }
  },
  {
    path: "/homeadmin",
    name: "HomeAdmin",
    component: HomeAdmin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/adminlistuser",
    name: "AdminListUser",
    component: AdminListUser,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/adminlistactivity",
    name: "AdminListActivity",
    component: AdminListActivity,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/adminlistcomments",
    name: "AdminListComments",
    component: AdminListComments,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/edituseradmin",
    name: "EditUserAdmin",
    component: EditUserAdmin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/seeactivityadmin",
    name: "SeeActivityAdmin",
    component: SeeActivityAdmin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/updateActivity",
    name: "UpdateActivity",
    component: UpdateActivity,
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
router.beforeEach((to, from, next) => {
  if (to.meta.userAuthDone && Store.getters.isLoggedUser) {
    next(to = '/homepage');
  } else {
    next();
  }
});

export default router;
