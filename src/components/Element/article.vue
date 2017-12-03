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
        font-family: 'Noto Sans TC', sans-serif
        font-size: 20px
        font-weight: 500
        line-height: 34px
        margin-top: 8px

    .description
        font-family: 'Noto Sans TC', sans-serif
        margin-top: 4px
        max-width: 400px
        font-size: 14px
        opacity: 0.8
        transition-duration: 0.2s
        &:hover
            opacity: 1.0


</style>