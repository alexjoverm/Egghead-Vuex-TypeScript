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

@Component
export default class App extends Vue {
  todos = [{ text: "Buy milk" }]
}
</script>



<style>
html, body {
  font-family: Helvetica;
  font-size: 1.25rem;
}
</style>
