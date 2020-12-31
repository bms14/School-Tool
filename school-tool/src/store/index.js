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
    loggedUser: localStorage.getItem('loggedUser') ? JSON.parse(localStorage.getItem('loggedUser')) : '',
    activityType: ["Conferência", "Workshop", "Concurso", "Seminário","Projeto Extracurriculare", "Visita a Empresa "],
    locals: ["ESMAD", "Online", "Outros"],
    activities: localStorage.getItem('activities') ? JSON.parse(localStorage.getItem('activities')) : []
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => state.loggedUser == '' ? false : true,
    getActivityType: (state) => state.activityType,
    getLocals: (state) => state.locals
  },
  actions: {
    login(context, payload){
      //verificar se user existe
      const user = context.state.users.find( user => user.email === payload.email && user.password === payload.password)
      if(user !=undefined){
        //login com sucesso
        context.commit('LOGIN', user)
        localStorage.setItem('loggedUser', JSON.stringify(user))
      } else {
        //login sem sucesso      
        throw Error ('Login inválido!')
      }
    },
    logout(context){
      context.commit('LOGOUT')
      localStorage.removeItem('loggedUser')
    },
    register(context, payload){
       //verificar se user existe
       const user = context.state.users.find( user => user.email === payload.email)
        if(user == undefined ){
          context.commit('REGISTER', {name: payload.name, email: payload.email, password: payload.password, course: payload.course, birthDate: payload.birthDate, photo: payload.photo ,type: payload.type})
          localStorage.setItem("users",JSON.stringify(context.state.users))
        } else if(user == undefined && payload.password != payload.password2) {
          throw Error ('As passwords não são iguais!')
        } else {
          throw Error ('Email já registado!')
        }
    } ,
    submitActivity(context, payload){
      const activity = context.state.activities.find( activity => activity.name === activity.name)
        if(activity == undefined){
          context.commit('ACTIVITY', payload)
          localStorage.setItem("activities",JSON.stringify(context.state.activities))
        } else {
          throw Error ('Atividade já inserida!')
        }
    }   
  },
  mutations: {
    LOGIN(state, user) {
      state.loggedUser  = user
    },
    LOGOUT(state) {
      state.loggedUser = ''
    },
    REGISTER (state, user) {
      state.users.push(user)
    },
    ACTIVITY (state, activity){
      state.activities.push(activity)
    }  
  }
});
