import { GetterTree, MutationTree } from 'vuex'
import { State } from '../types'

type TodoGetter = GetterTree<State, any>

export const state: State = {
  todos: [
    { text: 'Buy milk', checked: false },
    { text: 'Buy salad', checked: true },
    { text: 'Get haircut', checked: true }
  ]
}

export const getters: TodoGetter = {
  todos: state => state.todos.filter(todo => !todo.checked),
  dones: state => state.todos.filter(todo => todo.checked)
}

export const mutations: MutationTree<State> = {
  addTodo(state, newTodo) {
    const todoCopy = Object.assign({}, newTodo)
    state.todos.push(todoCopy)
  }
}








