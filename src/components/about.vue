<template lang="html">
  <div>
    <div class="message">
      {{ message }}
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'About'
      }
    }
  }
</script>

<style lang="css">
  .message {
    color: green;
    font-size: 1.4em;
  }
</style>