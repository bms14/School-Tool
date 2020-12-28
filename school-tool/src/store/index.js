import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {name: 'admin', email: 'admin', password: 'admin'},
      {name: 'student', email: 'student@esmad.ipp.pt', password: 'pass', course: 'Design', birthDate: '2020-01-01', type: 'student'},
      {name: 'teacher', email: 'teacher@esmad.ipp.pt', password: 'pass', course: 'Design', birthDate: '2020-01-02', type: 'teacher'}
    ],
    loggedUser: ''
  },
  getters: {
    getLoggedUser: (state) => state.loggedUser,
    isLoggedUser: (state) => state.loggedUser == '' ? false : true
  },
  actions: {
    login(context, payload){
      //verificar se user existe
      const user = context.state.users.find( user => user.email === payload.email && user.password === payload.password)
      if(user !=undefined){
        //login com sucesso
        context.commit('LOGIN', user)
      } else {
        //login sem sucesso      
        throw Error ('Login inválido!')
      }
    },
    logout(context){
      context.commit('LOGOUT')

    },
    register(context, payload){
       //verificar se user existe
       const user = context.state.users.find( user => user.email === payload.email)
       if(user == undefined && payload.password === payload.password2){
         //registo com sucesso
         context.commit('REGISTER', {name: payload.name, email: payload.email, password: payload.password, course: payload.course, birthDate: payload.birthDate, type: payload.type})
        } else if(user == undefined && payload.password !== payload.password2) {
          throw Error ('As passwords não são iguais!')
        } else {
          throw Error ('Email já registado!')
        }
    }
  },
  mutations: {
    LOGIN(state, user){
      state.loggedUser  = user
    },
    LOGOUT(state){
      state.loggedUser = ''
    },
    REGISTER (state, user){
      state.users.push(user)
    }
  }
});
