/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/*{name: 'admin', email: 'admin', password: 'admin'},
  {name: 'student', email: 'student@esmad.ipp.pt', password: 'pass', course: 'Design', birthDate: '2020-01-01',photo: "https://uniarea.com/wp-content/uploads/2019/09/img.jpg" ,type: 'student'},
  {name: 'teacher', email: 'teacher@esmad.ipp.pt', password: 'pass', course: 'Design', birthDate: '2020-01-02',photo: "https://blog.academia.com.br/wp-content/uploads/2019/02/273098-entenda-qual-e-o-papel-do-professor-na-educacao-dos-alunos.jpg", type: 'teacher'}
*/

export default new Vuex.Store({
  state: {
    users: localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [],
    loggedUser: sessionStorage.getItem('loggedUser') ? JSON.parse(sessionStorage.getItem('loggedUser')) : '',
    activityType:[
      {
        id:"1",
        name:"Conferência",
        points:100
      },
      {
        id:"2",
        name:"Workshop",
        points:150
      },
      {
        id:"3",
        name:"Concurso",
        points:150
      },
      {
        id:"4",
        name:"Seminário",
        points:100
      },
      {
        id:"5",
        name:"Projeto Extracurricular",
        points:200
      },
      {
        id:"6",
        name:"Visita a Empresa",
        points:200
      },

    ],
    locals: ["ESMAD", "Online", "Outros"], 
    activities: localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')) : [],
    comments: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [],
    enrollments: localStorage.getItem('enrollments') ? JSON.parse(localStorage.getItem('enrollments')) : []
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => state.loggedUser == '' ? false : true,
    getActivityType: (state) => state.activityType,
    getActivities: (state) => state.activities,
    getEnrollments: (state) => state.enrollments,
    getLocals: (state) => state.locals,
    getInterests: (state) => state.interests,
    getLoggedUserType: (state) => state.loggedUser.type,
    getNextUserId: (state) => {
      return state.users.length == 0
        ? 1
        : state.users[state.users.length - 1].id + 1;
    },
    getNextActivityId: (state) => {
      return state.activities.length > 0
        ? state.activities[state.activities.length - 1].id + 1
        : 1;
    },
    getNumUsers: (state) => { return state.users.length },
    getNumActivities: (state) => { return state.activities.length },
    getNumComments: (state) => { return state.comments.length },

  },
  actions: {
    login(context, payload) {
      if (payload.email == 'admin' && payload.password == 'admin') {
        let user = { name: 'admin', password: 'admin', type: 'admin' }
        context.commit('LOGIN', user)
        sessionStorage.setItem('loggedUser', JSON.stringify(user))
      } else {
        //verificar se user existe
        const user = context.state.users.find(user => user.email === payload.email && user.password === payload.password)
        if (user != undefined && user.blocked != true) {
          //login com sucesso
          context.commit('LOGIN', user)
          sessionStorage.setItem('loggedUser', JSON.stringify(user))
        } else if (user != undefined && user.blocked == true) {
          //login sem sucesso      
          throw Error('User Bloqueado!')
        } else {
          //login sem sucesso      
          throw Error('Login inválido!')
        }
      }
    },
    logout(context) {
      context.commit('LOGOUT')
      sessionStorage.removeItem('loggedUser')
    },
    register(context, payload) {
      //verificar se user existe
      const user = context.state.users.find(user => user.email === payload.email)
      if (user == undefined && payload.password != payload.password2) {
        throw Error('As passwords não são iguais!')
      } else if (user == undefined) {
        context.commit('REGISTER', { id: payload.id, name: payload.name, email: payload.email, password: payload.password, course: payload.course, birthDate: payload.birthDate, photo: payload.photo, type: payload.type, profileType: payload.profileType, points: payload.points, interests: payload.interests, achievements: payload.achievements, certificates: payload.certificates, blocked: payload.blocked })
        localStorage.setItem("users", JSON.stringify(context.state.users))
      } else {
        throw Error('Email já registado!')
      }
    },
    submitActivity(context, payload) {
      const activity = context.state.activities.find(activity => activity.name === payload.name)
      if (activity == undefined) {
        context.commit('ACTIVITY', payload)
        localStorage.setItem("activities", JSON.stringify(context.state.activities))
      } else {
        throw Error('Atividade já inserida!')
      }
    },
    submitEnrollment(context, payload) {
      const activity = context.state.activities.find(activity => activity.id === payload.idActivity)
      const enrollment = context.state.enrollments.find(enrollment => enrollment.idUser === payload.idUser && enrollment.idActivity === payload.idActivity)
      if (enrollment == undefined) {
        let num = 0;
        for (let i = 0; i < context.state.enrollments.length; i++) {
          if (context.state.enrollments[i].idActivity == activity.id) {
            num++
          }
        }
        if (num < activity.numPeople - 1) {
          console.log(num);
          context.commit('ENROLLMENT', payload)
          localStorage.setItem("enrollments", JSON.stringify(context.state.enrollments))
        } else if (num == activity.numPeople - 1) {
         
          context.commit('LASTENROLLMENT', payload)
          localStorage.setItem("enrollments", JSON.stringify(context.state.enrollments))
          localStorage.setItem("activities", JSON.stringify(context.state.activities))
        }
      } else {
        throw Error('Já está Inscrito na atividade!')
      }

    },
     cancelEnrollment(context, payload) {
      
     /*  const enrollment = context.state.enrollments.find(enrollment => enrollment.idUser === payload.idUser && enrollment.idActivity === payload.idActivity)
      if (enrollment != undefined)
      {
       
      } */
      context.commit('CANCEL_ENROLLMENT', payload)
      localStorage.setItem("enrollments", JSON.stringify(context.state.enrollments))
    }, 
    editProfile(context, payload) {
      context.commit('PROFILE', payload)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    updateUser(context, payload) {
      context.commit('UPDATE_USER', payload)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    removeUser(context, id) {
      context.commit('REMOVE_USER', id)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    promoteUser(context, id) {
      context.commit('PROMOTE_USER', id)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    demoteUser(context, id) {
      context.commit('DEMOTE_USER', id)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    blockUser(context, id) {
      context.commit('BLOCK_USER', id)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    unblockUser(context, id) {
      context.commit('UNBLOCK_USER', id)
      localStorage.setItem("users", JSON.stringify(context.state.users))
    },
    removeActivity(context, id) {
      context.commit('REMOVE_ACTIVITY', id)
      localStorage.setItem("activities", JSON.stringify(context.state.activities))
    },
  },
  mutations: {
    SET_ACTIVITIES(state, payload) {
      state.activities = payload.activities;
      localStorage.setItem("activities", JSON.stringify(state.activities));
    },
    LOGIN(state, user) {
      state.loggedUser = user
    },
    LOGOUT(state) {
      state.loggedUser = ''
    },
    REGISTER(state, user) {
      state.users.push(user)
    },
    ACTIVITY(state, activity) {
      state.activities.push(activity)
    },
    ENROLLMENT(state, payload) {
      state.enrollments.push(payload)
      console.log('try');
    },
    CANCEL_ENROLLMENT(state, payload) {
      
      state.enrollments = state.enrollments.filter(enrollment => {
        if(enrollment.idActivity == payload.idActivity){
          if(enrollment.idUser == payload.idUser){
            return false;
          }
          else {
            return true;
          }
        }
        else{
          return true;
        }
      })
    },
    LASTENROLLMENT(state, payload) {
      state.enrollments.push(payload)
      state.activities.map(
        activity => {
          if (activity.id === payload.id) {
            activity.full = true
            console.log(payload.id);
            console.log(activity.id);
          }
        }
      )
    },
    PROFILE(state, payload) {
      state.users.map(
        user => {
          if (user.id === state.loggedUser.id) {
            user.password = payload.frm.password
            user.photo = payload.frm.photo
            console.log(payload.frm.photo);
            user.interests = payload.frm.interests
            sessionStorage.setItem("loggedUser", JSON.stringify(user))
          }
        }
      )
      state.loggedUser.password = payload.frm.password
      state.loggedUser.photo = payload.frm.photo
      state.loggedUser.interests = payload.frm.interests
    },
    UPDATE_USER(state, payload) {
      state.users.map(
        user => {
          if (user.id === payload.id) {
            user.name = payload.name
            user.email = payload.email
            user.course = payload.course
            user.birthDate = payload.birthDate
          }
        }
      )
    },
    REMOVE_USER(state, id) {
      state.users = state.users.filter(user => user.id != id)
    },
    PROMOTE_USER(state, id) {
      state.users.map(
        user => {
          if (user.id === id)
            user.type = 'Docente'
        }
      )
    },
    DEMOTE_USER(state, id) {
      state.users.map(
        user => {
          if (user.id === id)
            user.type = 'Estudante'
        }
      )
    },
    BLOCK_USER(state, id) {
      state.users.map(
        user => {
          if (user.id === id)
            user.blocked = true
        }
      )
    },
    UNBLOCK_USER(state, id) {
      state.users.map(
        user => {
          if (user.id === id)
            user.blocked = false
        }
      )
    },
    REMOVE_ACTIVITY(state, id) {
      state.activities = state.activities.filter(activity => activity.id != id)
    },
  }
});
