<template lang="html">
  <div>
    <card>      
    </card>
    <ol>
      <li v-for="todo in todoDemo">
        {{todo.text}}
      </li>
    </ol>
  </div>
</template>

<script>
  import Card from './card.vue';

  export default {
    data () {
      return {
        message: 'About',
        todoDemo: [
          {text: "aaa"},
          {text: "baa"},
          {text: "caa"}
        ]
      }
    },
    components: {
      Card
    }
  }
</script>

<style scope lang="sass">
  @import '~styles/main.sass'
  .message 
    color: green
    font-size: 1.4em
    background-color: $default-background-color1
  
</style>