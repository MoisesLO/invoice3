import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      email: '',
      loggedIn: ''
    }
  },
  getters: {
    getUser(state){
      return state.user;
    }
  },
  mutations: {
    login(state, user) {
      // console.log(user);
      state.user.name = user.name;
      state.user.email = user.email;
      state.user.loggedIn = 'si';
    },
    logout(state) {
      state.user.name = '';
      state.user.email = '';
      state.user.loggedIn = '';
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()]
})
