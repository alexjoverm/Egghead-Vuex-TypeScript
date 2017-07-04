<template>
  <div id="app">
    <ul>
      <li v-for="todo in todos">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { Todo } from './types'

@Component
export default class App extends Vue {
  @State todos: Todo[]
}
</script>



<style>
html, body {
  font-family: Helvetica;
  font-size: 1.25rem;
}
</style>
