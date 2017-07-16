import { Store, Module } from 'vuex'
import { HistoryState, RootState } from '../types'

const historyModule: Module<HistoryState, RootState> = {
  state: {
    history: []
  },
  mutations: {
    add(state, mutation) {
      state.history.push(mutation)
    }
  },
  namespaced: true
}

export const history = (store: Store<RootState>) => {
    store.registerModule('history', historyModule)

    store.subscribe((mutation: Payload, state) => {
      if (mutation.type !== 'history/add') {
        console.log(mutation)
        store.commit('history/add', mutation)
      }
    })
  }