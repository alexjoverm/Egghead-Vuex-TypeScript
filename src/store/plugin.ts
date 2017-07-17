import { Store, Module } from 'vuex'
import { HistoryState, PluginOptions, RootState } from '../types'

const historyModule: Module<HistoryState, RootState> = {
  state: {
    history: []
  },
  mutations: {
    add(state, mutation) {
      state.history.push(mutation)
    },
    load(state) {
      state.history = JSON.parse(localStorage.getItem('history') || '[]')
    }
  },
  namespaced: true
}

export const history = (options: PluginOptions = {}) =>
  (store: Store<RootState>) => {
    store.registerModule('history', historyModule)

    if (options.persist) {
      store.commit('history/load')
    }

    store.subscribe((mutation, state) => {
      if (mutation.type !== 'history/add') {
        console.log(mutation)
        store.commit('history/add', mutation)

        if (options.persist) {
          localStorage.setItem('history', JSON.stringify(state.history.history))
        }
      }
    })
  }