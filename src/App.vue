<template>
  <div id="app">
    <div v-if="login">
      <button v-if="!login.isLoggedIn" @click="loginMutation">Login</button>
      <p v-else>Hello {{ login.user }}</p>
    </div>

    <h4>To do</h4>
    <ul>
      <li v-for="todo in todos">
        <input type="checkbox" :checked="todo.checked" @change="toggleTodo(todo)"> {{ todo.text }}
      </li>
    </ul>

    <h4>Done</h4>
    <ul>
      <li v-for="done in dones">
        <input type="checkbox" :checked="done.checked" @change="toggleTodo(done)"> {{ done.text }}
      </li>
    </ul>

    <p>Add todo: <input type="text" v-model="newTodo.text" @keyup.enter="addTodo(newTodo)"></p>
    <p>Add Async: <input type="text" v-model="id" @keyup.enter="addTodoAsync(id)"></p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { State, Getter, Mutation, Action, namespace } from 'vuex-class'
import { LoginState, Todo } from './types'

const TodoGetter = namespace('todos', Getter)
const TodoMutation = namespace('todos', Mutation)
const TodoAction = namespace('todos', Action)

const LoginMutation = namespace('login', Mutation)

@Component
export default class App extends Vue {
  @State login: LoginState
  @TodoGetter todos: Todo[]
  @TodoGetter dones: Todo[] // getters['todos/dones']

  @LoginMutation('login') loginMutation
  @TodoMutation addTodo // mutations['todos/addTodo']
  @TodoMutation toggleTodo
  @TodoAction addTodoAsync

  newTodo: Todo = {
    text: '',
    checked: false
  }

  id: string = '1'
}
</script>



<style>
html, body {
  font-family: Helvetica;
  font-size: 1.25rem;
}

input {
  font-size: 1.25rem;
}
</style>
