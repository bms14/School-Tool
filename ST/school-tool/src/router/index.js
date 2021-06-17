import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store";
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

import HomeAdmin from "../views/BackOffice/HomeAdmin.vue";
import AdminListUser from "../views/BackOffice/AdminListUser.vue";
import AdminListActivity from "../views/BackOffice/AdminListActivity.vue";
import AdminListQuizzes from "../views/BackOffice/AdminListQuizzes.vue";
import EditUserAdmin from "../views/BackOffice/EditUserAdmin.vue";
import SeeActivityAdmin from "../views/BackOffice/SeeActivityAdmin.vue";
import UpdateActivity from "../views/UpdateActivity.vue";

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
      
     
     
    }
  },
  {
    path: "/addActivity",
    name: "AddActivity",
    component: AddActivity,
    meta: {
      requiresAuth: true,
      
    }
  },
  {
    path: "/addQuiz",
    name: "AddQuiz",
    component: AddQuiz,
    meta: {
      requiresAuth: true,
      
    }
  },
  {
    path: "/list",
    name: "ListActivity",
    component: ListActivity,
    meta: {
      requiresAuth: true,
      
    }
  },

  {
    path: "/activity/:activityID",
    name: "activity",
    component: Activity,
    meta: {
      requiresAuth: true,
      
    }
  },
  {
    path: "/quiz",
    name: "ListQuiz",
    component: ListQuiz,
    meta: {
      
      
    }
  },

  {
    path: "/quiz/:quizID",
    name: "quiz",
    component: Quiz,
    meta: {
      requiresAuth: true,
      
    }
  },

  {
    path: "/profile",
    name: "Profile",
    component: Profile,
   
  },
  
  {
    path: "/homeadmin",
    name: "HomeAdmin",
    component: HomeAdmin,
   
  },
  {
    path: "/adminlistuser",
    name: "AdminListUser",
    component: AdminListUser,
    meta: {
     
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
    path: "/adminlistquizzes",
    name: "AdminListQuizzes",
    component: AdminListQuizzes,
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
    next((to = "/login"));
  } else {
    next();
  }
});
/* router.beforeEach((to, from, next) => {
  if (to.meta.userAuthDone && Store.getters.isLoggedUser) {
    next((to = "/homepage"));
  } else {
    next();
  }
}); */

export default router;
