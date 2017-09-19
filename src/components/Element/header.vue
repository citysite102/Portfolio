<template lang="html">
  <div>
    <div class="header">
      <div id="menu"></div>
      <div id="switch"></div>
    </div>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        message: 'header',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import '~styles/main.sass'
  .header
    background-color: $default-background-color
    height: auto
    width: 100%
    z-index: 2
  #menu
    +size(40px, 40px)
    background-color: gray
    display: inline-block
    margin: 20px
    padding: 0px
  #switch
    +size(40px, 40px)
    background-color: gray
    display: inline-block
    float: right
    margin: 20px
    padding: 0px
</style>