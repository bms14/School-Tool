import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {name: 'admin', email: 'admin', password: 'admin'}
    ],
    loggedUser: ''
  },
  getters: {},
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
    } 
  },
  mutations: {
    LOGIN(state, user){
      state.loggedUser  = user
    },
    LOGOUT(state){
      state.loggedUser = ''
    }
  }
});
