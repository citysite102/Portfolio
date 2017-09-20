<template lang="html">
  <div>
    <p class="title">
        {{title}}
    </p>
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
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');

    .title
        font-family: 'Playfair Display', serif
        font-style: italic
        font-size: 20px
        font-weight: 300
        letter-spacing: 4px
        line-height: 30px

    .description
        margin-top: 16px
        max-width: 400px


</style>