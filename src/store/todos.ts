import { GetterTree, MutationTree, ActionTree, Module } from 'vuex'
import { RootState, TodoState, Todo } from '../types'

type TodoGetter = GetterTree<TodoState, RootState>

export const state: TodoState = {
  todos: [
    { text: 'Buy milk', checked: false },
    { text: 'Buy salad', checked: true },
    { text: 'Get haircut', checked: true }
  ]
}

export const getters: TodoGetter = {
  // With 3 parameters, you access the root state
  todos: (state, getters, rootState) => state.todos.filter(todo => !todo.checked),
  dones: state => state.todos.filter(todo => todo.checked)
}

export const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    const todoCopy = Object.assign({}, newTodo)
    state.todos.push(todoCopy)
  },
  toggleTodo(state, todo) {
    todo.checked = !todo.checked
  }
}

export const actions: ActionTree<TodoState, RootState> = {
  addTodoAsync({commit, dispatch, rootState}, id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(data => data.json())
      .then(item => {
        const todo: Todo = {
          checked: false,
          text: rootState.login.user + ': ' + item.title
        }

        commit('addTodo', todo)
        commit('login/login', null, { root: true })
        // dispatch('actionName', null, { root: true })
      })
  }
}

export const todos: Module<TodoState, RootState> = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true
}











