import Vue from "vue";
import Vuex from "vuex";


import { UserService } from '../services/user_service';
import { AuthService } from '../services/auth_service';
import { ActivityService } from '../services/activities.service';
import { QuizzService } from '../services/quizzes_service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedIn: '',
    loggedUser: localStorage.getItem("loggedUser")
      ? JSON.parse(localStorage.getItem("loggedUser"))
      : "",
    activityType: [
      {
        id: "1",
        name: "Conferência",
        points: 200
      },
      {
        id: "2",
        name: "Workshop",
        points: 200
      },
      {
        id: "3",
        name: "Concurso",
        points: 200
      },
      {
        id: "4",
        name: "Seminário",
        points: 200
      },
      {
        id: "5",
        name: "Projeto Extracurricular",
        points: 200
      },
      {
        id: "6",
        name: "Visita a Empresa",
        points: 200
      }
    ],
    locals: [{id:1,name:"ESMAD"}, {id:2,name:"ONLINE"}, {id:3,name:"OUTROS"}],
    activities: [],
    quizzes: [],
    comments: localStorage.getItem("comments")
      ? JSON.parse(localStorage.getItem("comments"))
      : [],
    enrollments: localStorage.getItem("enrollments")
      ? JSON.parse(localStorage.getItem("enrollments"))
      : [],
    concluded_quizzes: []
  },
  getters: {
    getLoggedUser: state => state.loggedUser,
    isLoggedUser: state => (state.loggedUser == "" ? false : true),
    getActivityType: state => state.activityType,
    getActivities: state => state.activities,
    getEnrollments: state => state.enrollments,
    getConcldedQuizzes: state => state.concluded_quizzes,
    getLocals: state => state.locals,
    getInterests: state => state.interests,
    getLoggedUserType: state => state.loggedUser.type,
    getNextUserId: state => {
      return state.users.length == 0
        ? 1
        : state.users[state.users.length - 1].id + 1;
    },
    getNextActivityId: state => {
      return state.activities.length > 0
        ? state.activities[state.activities.length - 1].id + 1
        : 1;
    },
    getNextQuizId: state => {
      return state.quizzes.length > 0
        ? state.quizzes[state.quizzes.length - 1].id + 1
        : 1;
    },
    getActivityTypeById: state => id => {
      return state.activityType.find(type => type.id == id);
    },
    getNumUsers: state => {
      return state.users.length;
    },
    getNumActivities: state => {
      return state.activities.length;
    },
    getNumQuizzes: state => {
      return state.quizzes.length;
    },
    getActivitiesForSelect: state =>
      state.activityType.map(type => ({
        value: type.id,
        text: type.name
      })),

      getActivitiesSelect: state =>
      state.locals.map(local => ({
        value: local.id,
        text: local.name
      }))
  },
  actions: {


    async getAPIRoot({ commit }) {
      const result = await UserService.getPublicContent()
      commit("SET_MESSAGE", result.message);
    },


    async register({ commit }, user) {
      try {
        const response = await AuthService.register(user);
        console.log("REGISTEI");
        // console.log("STORE REGISTER SUCCES: response is...")
        // console.log(response)
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE REGISTER FAILS')
        console.log(error)
        throw error;
      }
    },

    async login({ commit }, user) {
      try {
        const loggedUser = await AuthService.login(user);

        commit('LOGINSUCESS', loggedUser);
        console.log("SUCESSO");
      }
      catch (error) {
        commit('LOGINFAILURE');
        console.log("FALHA");
        throw error;
      }
    },

    async fetchAllUsers({ commit }) {
      try {
        console.log("pedido feito");
        const users = await UserService.fetchAllUsers();
        console.log("STORE users: " + users.length);
        commit("SET_USERS", users);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error");
        commit("SET_USERS", []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },

    async fetchAllActivities({ commit }) {
      try {
        console.log('pedido feito')
        const activities = await ActivityService.fetchAllActivities();

        console.log('STORE activities: ' + activities.length)
        commit('SET_ACTIVITIES', activities);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error")
        commit('SET_ACTIVITIES', []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },



    async fetchAllQuizzes({ commit }) {
      try {
        console.log('pedido feito')
        const quizzes = await QuizzService.fetchAllQuizzes();

        console.log('STORE quizzes: ' + quizzes.length)
        commit('SET_QUIZZES', quizzes);

        //return Promise.resolve(users);
      } catch (error) {
        // console.log('STORE listUsers: ' + error);
        console.log("error")
        commit('SET_QUIZZES', []);
        commit("SET_MESSAGE", error);
        throw error; // Needed to continue propagating the error
        //return Promise.reject(error);
      }
    },



    logout(context) {
      context.commit("LOGOUT");


    },

    async submitActivity({ commit }, activity) {
      try {
        const response = await ActivityService.createActivity(activity);
        console.log("CRIEI");
        // console.log("STORE REGISTER SUCCES: response is...")
        // console.log(response)
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE CREATE FAILS')
        console.log(error)
        throw error;
      }
    },
    

    async submitQuiz({ commit }, quiz) {
      try {
        const response = await QuizzService.createQuiz(quiz);
        console.log("CRIEI");
        // console.log("STORE REGISTER SUCCES: response is...")
        // console.log(response)
        commit('SET_MESSAGE', response.message);
      }
      catch (error) {
        console.log('STORE CREATE FAILS')
        console.log(error)
        throw error;
      }
    },




    async concludedQuiz({ commit }, payload) {
      let quiz = {
        user: payload.idUser,
        quiz: payload.idQuiz
      }
      try {

        const response = await QuizzService.concludedQuiz(quiz)
        console.log("CONCLUI")
        commit('SET_MESSAGE', response.message)
      }
      catch (error) {
        console.log('STORE CONCLUDED FAILS');
        console.log(error);
        throw error;
      }
    },
    async submitEnrollment({ commit }, payload) {

      let enrollment = {
        user: payload.idUser,
        activity: payload.idActivity
      }
      try {

        const response = await ActivityService.newEnrollment(enrollment)
        console.log(enrollment)
        commit('SET_MESSAGE', response.message)
      }
      catch (error) {
        console.log('STORE SUBSCRIBE FAILS');
        console.log(error);
        throw error;
      }
    },

    async cancelEnrollment({ commit }, payload) {
      let enrollment = {
        user: payload.idUser,
        activity: payload.idActivity

      }
      try {

        const response = await ActivityService.cancelEnrollment(enrollment)
        console.log("DESINSCREVI")
        commit('SET_MESSAGE', response.message)
      }
      catch (error) {
        console.log('STORE UNSUBSCRIBE FAILS');
        console.log(error);
        throw error;
      }

    
    },




    concludeActivity(context, id) {
      context.commit("CONCLUDE_ACTIVITY", id);
      localStorage.setItem(
        "activities",
        JSON.stringify(context.state.activities)
      );
    },


    async editProfile({ commit },user) {
      try {
        const response = await UserService.fetchUpdateUser(user);
        // console.log("STORE REGISTER SUCCES: response is...")
       
        console.log(response)
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("user update FAILS");
        console.log(error);
        throw error;
      }
    },


    async updateUser({ commit },user) {
      try {
        const response = await UserService.fetchUpdateUserAdmin(user);
        // console.log("STORE REGISTER SUCCES: response is...")
       console.log(user);
        console.log(response)
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("user update FAILS");
        console.log(error);
        throw error;
      }
    },


    async updateActivity({ commit },activity) {
      try {
        const response = await ActivityService.fetchUpdateActivity(activity);
        // console.log("STORE REGISTER SUCCES: response is...")
       console.log(activity);
        console.log(response)
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("activity update FAILS");
        console.log(error);
        throw error;
      }
    },
   /*  updateUser(context, payload) {
      context.commit("UPDATE_USER", payload);
      localStorage.setItem("users", JSON.stringify(context.state.users));
    }, */
    async removeUser({commit}, id) {
      try {
       
        const response = await UserService.fetchDeleteUser(id);
        
        console.log(response)
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REMOVE FAILS");
        console.log(error);
        throw error;
      }
    },

    async removeActivity({commit}, id) {
      try {
       
        const response = await ActivityService.fetchDeleteActivity(id);
        
        console.log(response)
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REMOVE FAILS");
        console.log(error);
        throw error;
      }
    },

    async removeQuiz({commit}, id) {
      try {
       
        const response = await QuizzService.fetchDeleteQuiz(id);
        
        console.log(response)
        commit("SET_MESSAGE", response.message);
      } catch (error) {
        console.log("STORE REMOVE FAILS");
        console.log(error);
        throw error;
      }
    },

    promoteUser(context, id) {
      context.commit("PROMOTE_USER", id);
      localStorage.setItem("users", JSON.stringify(context.state.users));
    },
    demoteUser(context, id) {
      context.commit("DEMOTE_USER", id);
      localStorage.setItem("users", JSON.stringify(context.state.users));
    },
    blockUser(context, id) {
      context.commit("BLOCK_USER", id);
      localStorage.setItem("users", JSON.stringify(context.state.users));
    },
    unblockUser(context, id) {
      context.commit("UNBLOCK_USER", id);
      localStorage.setItem("users", JSON.stringify(context.state.users));
    },

 
  },
  mutations: {


    SET_MESSAGE(state, payload) {
      state.message = payload
    },

    LOGINSUCESS(state, payload) {
      state.loggedIn = true;
      state.loggedUser = payload;
      /*  localStorage.setItem("loggedUser", JSON.stringify(state.loggedUser)); */

    },

    LOGINFAILURE(state) {
      state.loggedIn = false;
      state.loggedUser = "";
    },

    SET_ACTIVITIES(state, payload) {
      state.activities = payload
      console.log("STORE MUTATION SET_ACTIVITIES: " + payload.length)


    },

    SET_USERS(state,payload){
      console.log("STORE MUTATION SET_USERS: " + payload.length);
      state.users = payload;
    },

    SET_QUIZZES(state, payload) {
      state.quizzes = payload
      console.log("STORE MUTATION SET_QUIZZES: " + payload.length)


    },

    LOGOUT(state) {
      state.loggedUser = "";
      localStorage.removeItem("loggedUser");


    },
    REGISTER(state, user) {
      state.users.push(user);
    },
    ACTIVITY(state, activity) {
      state.activities.push(activity);
    },
    QUIZ(state, quiz) {
      state.quizzes.push(quiz);
    },
    CONCLUDED_QUIZZES(state, payload) {
      state.concluded_quizzes.push(payload);
      state.users.map(user => {
        if (user.id === payload.idUser) {
          user.points = user.points + 250
          sessionStorage.setItem("loggedUser", JSON.stringify(user));
        }
      })
      /*  state.loggedUser.points = state.loggedUser.points + 250 */
    },
    ENROLLMENT(state, payload) {
      state.enrollments.push(payload);
      state.users.map(user => {
        if (user.idUtilizador == payload.idUser) {
          user.pontuacao = user.pontuacao + 200
          localStorage.setItem("loggedUser", JSON.stringify(user));
        }
      })
    },
    CANCEL_ENROLLMENT(state, payload) {
      state.enrollments = state.enrollments.filter(enrollment => {
        if (enrollment.idActivity == payload.idActivity) {
          if (enrollment.idUser == payload.idUser) {
            return false;
          } else {
            return true;
          }
        } else {
          return true;
        }
      });
      state.users.map(user => {
        if (user.idUtilizador == payload.idUser) {
          user.pontuacao = user.pontuacao - 200
          localStorage.setItem("loggedUser", JSON.stringify(user));
        }
      })
    },
    LASTENROLLMENT(state, payload) {
      state.enrollments.push(payload);
      state.activities.map(activity => {
        if (activity.id === payload.id) {
          activity.full = true;
          console.log(payload.id);
          console.log(activity.id);
        }
      });
    },
    PROFILE(state, payload) {
      state.users.map(user => {
        if (user.id === state.loggedUser.id) {
          user.password = payload.frm.password;
          user.photo = payload.frm.photo;
          console.log(payload.frm.photo);
          user.interests = payload.frm.interests;
          sessionStorage.setItem("loggedUser", JSON.stringify(user));
        }
      });
      state.loggedUser.password = payload.frm.password;
      state.loggedUser.photo = payload.frm.photo;
      state.loggedUser.interests = payload.frm.interests;
    },
    CONCLUDE_ACTIVITY(state, id) {
      /* let date1 = new Date(); */
      state.activities.map(activity => {
        if (activity.id === id) {
          activity.concluded = true;
          /* if (date1.getTime() > activity.date) {
              activity.concluded = true
            }
            else {
              activity.concluded = false
              throw Error('Não é possivel concluir a atividade!')
              
            } */
        }
      });
    },
    UPDATE_USER(state, payload) {
      state.users.map(user => {
        if (user.id === payload.id) {
          user.name = payload.name;
          user.email = payload.email;
          user.course = payload.course;
          user.birthDate = payload.birthDate;
        }
      });
    },
    UPDATE_ACTIVITY(state, payload) {
      state.activities.map(activity => {
        if (activity.id === payload.id) {
          activity.name = payload.name;
          activity.date = payload.date;
          activity.hour = payload.hour;
          activity.local = payload.local;
          activity.description = payload.description;
        }
      });
    },
   /*  REMOVE_USER(state, id) {
      state.users = state.users.filter(user => user.id != id);
    }, */
    PROMOTE_USER(state, id) {
      state.users.map(user => {
        if (user.idUtilizador === id) user.idTipo = 2;
      });
    },
    DEMOTE_USER(state, id) {
      state.users.map(user => {
        if (user.idUtilizador === id) user.idTipo = 1;
      });
    },
    BLOCK_USER(state, id) {
      state.users.map(user => {
        if (user.idUtilizador === id) user.blocked = true;
      });
    },
    UNBLOCK_USER(state, id) {
      state.users.map(user => {
        if (user.idUtilizador === id) user.blocked = false;
      });
    },
    

   
  }
});
