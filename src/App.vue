<template>
  <div id="app">
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
import { Getter, Mutation, Action } from 'vuex-class'
import { Todo } from './types'

@Component
export default class App extends Vue {
  @Getter todos: Todo[]
  @Getter dones: Todo[]

  @Mutation addTodo
  @Mutation toggleTodo
  @Action addTodoAsync

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
