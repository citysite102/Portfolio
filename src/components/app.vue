<template lang="html">
  <div>
    <headerBar></headerBar>
    <section class="section_about">
      <el-row>
        <el-col :span="10" :offset="2">
          <div id="header-info">
            <h2 id="header-name">
              Hi, I'm Samuel.
            </h2>
            <h3 id="header-software">
              Software developer,
            </h3>
            <h3 id="header-ui">
              UI Designer,
            </h3>
            <h3 id="header-mentor">
              Mentor <span>in Taiwan</span>
            </h3>
          </div>
        </el-col>
        <el-col :span="12">
          <div id="header-picture">
            <h3 id="header-location">
              2017_<br>Sanfrancisco
            </h3>
          </div>
        </el-col>
      </el-row>
    </section>
    <!-- <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button> -->
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
    height: 480px
    width: 100%


  .el-row 
    height: 100%
  .el-col 
    height: 100%
  #header-info
    top: 50%
    transform: translateY(-50%)
    padding-top: 80px
    padding-bottom: 80px

  #header-name

  #header-software
    color: $text-color-software
  #header-ui
    color: $text-color-ui
  #header-mentor
    color: $text-color-mentor
  #header-picture
    +size(560px, 400px)
    top: 50%
    transform: translateY(-50%)
    background-image: url('~assets/images/sample-city.png')
    background-size: cover
    
    #header-location
      position: absolute
      background-color: transparent
      font-size: 16px
      top: 24px
      left: -32px
      text-shadow: 2px 2px 4px black

</style>