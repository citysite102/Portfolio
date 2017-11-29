<template lang="html">
  <div>
    <p class="title">
        {{title}}
    </p>
    <h3 class="description">
        {{description}}
    </h3>
  </div>

</template>

<script>
  export default {
    props: ["title", "description"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

    .title
        font-family: 'Yrsa', serif
        font-style: italic
        font-size: 28px
        font-weight: 300
        letter-spacing: 1px
        line-height: 34px

    .description
        margin-top: 8px
        max-width: 400px


</style>