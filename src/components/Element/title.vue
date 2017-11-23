<template lang="html">
  <div>
    <p class="index">
        {{index}}
    </p>
    <h2 class="title">
        {{title}}
    </h2>
    <h3 class="description">
        {{description}}
    </h3>
  </div>

</template>

<script>
  export default {
    props: ["index", "title", "description"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Yrsa:300,400,500');
    @import url('https://fonts.googleapis.com/css?family=Playfair+Display');

    .index
        font-family: 'Playfair Display', serif
        font-style: italic
        font-size: 24px
        font-weight: 300
        letter-spacing: 4px
    .title 
        margin-top: 12px
    .description
        margin-top: -12px


</style>