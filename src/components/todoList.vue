<template>
<div>
  <ul>
    <li
      v-for="todo in todos"
      v-bind:key="todo.id"
    >
      <slot v-bind:todo="todo">
      {{todo.text}}
      </slot>
    </li>
  </ul>
  <p>{{this.message}}</p>
</div>
</template>
<script>
export default {
  props: ['todos'],
  data () {
    return {
      message: 'hello world!'
    }
  }
}
</script>

