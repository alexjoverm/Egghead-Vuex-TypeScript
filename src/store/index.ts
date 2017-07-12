import Vue from 'vue'
import Vuex from 'vuex'
import { todos } from './todos'
import { login } from './login'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    todos,
    login
  }
})