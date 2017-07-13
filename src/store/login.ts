import { Store, GetterTree, MutationTree } from 'vuex'
import { LoginState } from '../types'

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

export const login = {
  state,
  mutations
}

export function load(store: Store<any>) {
  store.registerModule('login', login)
}







