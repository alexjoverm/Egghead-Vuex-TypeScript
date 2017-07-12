import { GetterTree, MutationTree, ActionTree } from 'vuex'
import { TodoState, Todo } from '../types'

type TodoGetter = GetterTree<TodoState, any>

export const state: TodoState = {
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

export const mutations: MutationTree<TodoState> = {
  addTodo(state, newTodo) {
    const todoCopy = Object.assign({}, newTodo)
    state.todos.push(todoCopy)
  },
  toggleTodo(state, todo) {
    console.log(todo)
    todo.checked = !todo.checked
  }
}

export const actions: ActionTree<TodoState, any> = {
  addTodoAsync({commit}, id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      .then(data => data.json())
      .then(item => {
        const todo: Todo = {
          checked: false,
          text: item.title
        }

        commit('addTodo', todo)
      })
  }
}

export const todos = {
  state,
  getters,
  mutations,
  actions
}









