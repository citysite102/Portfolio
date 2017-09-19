<template lang="html">
  <div>
    <headerBar></headerBar>
    <div class="ropes">
        <div class="rope"></div>
        <div class="rope"></div>
        <div class="rope"></div>
        <div class="rope"></div>
        <div class="rope"></div>
    </div>
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
            <el-col :span="12" id="apps">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="header-picture-container">
                    <div id="header-picture">
                        <h3 id="header-location">
                            2017_<br>Sanfrancisco
                        </h3>
                    </div>
                </div>
            </el-col>
        </el-row>
    </section>
    <section class="section_slogan">
        <el-row>
            <el-col :span="10" :offset="2">
                <h1 id="slogan-1">CREATE<br> MORE</h1>
                <h1 id="slogan-2">EVERY<br> DAY</h1>
            </el-col>
        </el-row>  

    </section>>
    <section class="section_slogan">
      

    </section>>

  </div>
</template>

<script>
  import HeaderBar from './Element/header.vue';
  import tilt from 'tilt.js';

  export default {
    data () {
      return {
        message: 'Helo, Vue.js 2.0.1'
      }
    },
    mounted() { 
      $('#header-picture-container').tilt({
        glare: true,
        maxGlare: .5
      });
    },
    methods: {

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
        margin-top: 80px
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

    .ropes
        position: absolute
        top: 0px
        left: 0px
        height: 100%
        width: 100%
    .rope
        position: absolute
        background-color: white
        width: 1px
        height: 100%
        opacity: 0.1
        z-index: 1

    .ropes .rope:nth-child(1)
        margin-left: calc(100%/6)
    .ropes .rope:nth-child(2)
        margin-left: calc(200%/6)
    .ropes .rope:nth-child(3)
        margin-left: calc(300%/6)
    .ropes .rope:nth-child(4)
        margin-left: calc(400%/6)
    .ropes .rope:nth-child(5)
        margin-left: calc(500%/6)
    

    #header-name

    #header-software
        color: $text-color-green
    #header-ui
        color: $text-color-blue
    #header-mentor
        color: $text-color-purple
    #header-picture-container
        +size(560px, 400px)
        top: 20%
        // transform: translateY(-50%)
        #header-picture
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            height: 100%
            width: 100%
            z-index: 2
        #header-location
            position: absolute
            background-color: transparent
            font-size: 16px
            top: 24px
            left: -32px
            text-shadow: 2px 2px 4px black


    #slogan-1
        color: $text-color-green
        text-shadow: 6px 6px 0px $shadow-color-blue
        letter-spacing: 12px
        line-height: 96px

    #slogan-2
        margin-top: 160px
        text-shadow: 6px 6px 4px black
        letter-spacing: 12px
        line-height: 96px
</style>