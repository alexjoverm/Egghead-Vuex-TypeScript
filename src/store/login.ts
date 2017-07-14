import { Store, GetterTree, MutationTree, Module } from 'vuex'
import { RootState, LoginState } from '../types'

const state: LoginState = {
  user: '',
  isLoggedIn: false
}

const mutations: MutationTree<LoginState> = {
  login(state) {
    state.isLoggedIn = true
    state.user = 'Alex'
  }
}

export const login: Module<LoginState, RootState> = {
  state,
  mutations,
  namespaced: true
}

export function load(store: Store<any>) {
  store.registerModule('login', login)
}







