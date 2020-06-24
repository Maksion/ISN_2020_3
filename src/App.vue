<template>
  <div id="app">
    <TodoList :todos='todos' @delete-todo="deleteTodo"/>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  data(){
    return {
      todos: ['Ремонт', 'Завтрак']
    }
  },
  components: {
    TodoList
  },
  methods: {
    deleteTodo(index){
      this.todos.splice(index, 1);
    }
  }
}
</script>

<style>

</style>
