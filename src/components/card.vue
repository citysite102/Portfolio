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
        message: 'Card',
        testMessage: 'test_message',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
  .message {
    height: 500px;
    color: purple;
    font-size: 1.4em;
  }
</style>