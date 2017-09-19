<template lang="html">
  <div class="container">
    <h3 class="title">
        {{title}}
    </h3>
    <p class="description">
        {{description}}
    </p>
  </div>

</template>

<script>
  export default {
    props: ["title", "description"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    .container
        width: 240px
    .title 
        margin-top: 4px
        margin-bottom: 4px
</style>