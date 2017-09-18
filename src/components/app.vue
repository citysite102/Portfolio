<template lang="html">
  <div>
    <headerBar></headerBar>
    <section class="section_about">
      <div id="info"></div>
        <h2>
          Hi, I'm Samuel.
        </h2>
        <h3>
          Software developer,
        </h3>
        <h3>
          UI Designer,
        </h3>
        <h3>
          Mentor in Taiwan
        </h3>
      <div id="picture"></div>
    </section>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
  </div>
</template>

<script>
  import HeaderBar from './Element/header.vue';

  export default {
    data () {
      return {
        message: 'Helo, Vue.js 2.0.1'
      }
    },
    components: {
      HeaderBar,
    }
  }
</script>

<style lang="sass">
  @import '~styles/main.sass'
  .section_about
    background-color: $default-background-color
    height: 960px
    width: 100%
</style>