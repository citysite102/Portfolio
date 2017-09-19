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
    <section class="section-about">
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
    <section class="section-slogan">
        <el-row>
            <el-col :span="10" :offset="2">
                <h1 id="slogan-1">CREATE<br> MORE</h1>
                <h1 id="slogan-2">EVERY<br> DAY</h1>
            </el-col>
        </el-row>  
    </section>>
    <section class="section-designer">
        <el-row>
            <el-col :span="10" :offset="4">
                <titleContainer index="01" title="Designer" description="User Interace, Graphic Design,
Commercial Design."></titleContainer>
            </el-col>
            <el-col :span="10">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="work-1-container">
                    <div class="work work-1">
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="10" :offset="3">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="work-2-container">
                    <div class="work work-2">
                    </div>
                </div>
            </el-col>
            <el-col :span="11">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="work-3-container">
                    <div class="work work-3">
                    </div>
                </div>
            </el-col>
        </el-row>    
    </section>
    <section class="section-motto">
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 id="motto">It's all about<br>the way<br>you design.</h1>
            </el-col>
        </el-row>  
    </section>>
    <section class="section-developer">
        <el-row>
            <el-col :span="11" :offset="3">
                <titleContainer index="02" title="Developer" description="Swift, ObjectiveC, Html, CSS, Sass, Javascript, JQuery, Vue.js."></titleContainer>
            </el-col>
            <el-col :span="10">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="work-4-container">
                    <div class="work work-4">
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="11" :offset="3">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="work-5-container">
                    <div class="work work-5">
                    </div>
                </div>
            </el-col>
            <el-col :span="10">
                <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" id="work-6-container">
                    <div class="work work-6">
                    </div>
                </div>
            </el-col>
        </el-row>    
    </section>
    <section class="section-educator">
        <el-row>
            <el-col :span="10" :offset="4">
                <titleContainer index="03" title="Educator" description="An educator in Hahow, NTU, NTUST, NCCU with more than 500 students in Taiwan."></titleContainer>
            </el-col>
        </el-row>
    </section>

  </div>
</template>

<script>
  import HeaderBar from './Element/header.vue';
  import TitleContainer from './Element/title.vue';
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
      $('#work-1-container').tilt({
        glare: true,
        maxGlare: .5
      });
      $('#work-2-container').tilt({
        glare: true,
        maxGlare: .5
      });
      $('#work-3-container').tilt({
        glare: true,
        maxGlare: .5
      });
      $('#work-4-container').tilt({
        glare: true,
        maxGlare: .5
      });
      $('#work-5-container').tilt({
        glare: true,
        maxGlare: .5
      });
      $('#work-6-container').tilt({
        glare: true,
        maxGlare: .5
      });
    },
    methods: {

    },
    components: {
      HeaderBar,
      TitleContainer
    }
  }
</script>

<style lang="sass">
    @import '~styles/main.sass'
    
    .section-about
        background-color: $default-background-color
        margin-top: 80px
        height: 480px
        width: 100%
    .section-slogan
        margin-top: 40px
        margin-bottom: 40px


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
        background-color: #222222
        width: 1px
        height: 100%
        opacity: 0.5
        z-index: 0

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




    .section-designer
        #work-1-container
            +size(250px, 310px)
            .work-1
                background-image: url('~assets/images/sample-city.png')

        #work-2-container
            +size(340px, 470px)
            .work-2
                background-image: url('~assets/images/sample-city.png')

        #work-3-container
            +size(340px, 450px)
            margin-top: 160px
            .work-3
                background-image: url('~assets/images/sample-city.png')

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    #motto
        margin-left: auto
        margin-right: auto
        letter-spacing: 2px
        line-height: 96px

    .section-developer
        #work-4-container
            +size(400px, 440px)
            .work-4
                background-image: url('~assets/images/sample-city.png')

        #work-5-container
            margin-top: -120px
            +size(400px, 440px)
            .work-5
                background-image: url('~assets/images/sample-city.png')

        #work-6-container
            +size(400px, 440px)
            margin-top: 160px
            .work-6
                background-image: url('~assets/images/sample-city.png')

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3

</style>