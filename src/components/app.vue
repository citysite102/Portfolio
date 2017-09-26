<template lang="html">
    <div>
        <headerBar></headerBar>
        <div id="container">
            <backgroundRope class="background-ropes"></backgroundRope>
            <section class="section-about">
                <el-row :gutter="16">
                    <el-col :span="10" :offset="2">
                        <div class="header-info">
                            <h1 class="header-background">
                                ABOUT
                            </h1>
                            <div class="header-separator">
                            </div>
                            <h1 class="header-name">
                                Hello, <br>I'm Samuel.
                            </h1>
                            <nav>
                                <a class="skill-item" href="#" v-scroll-to="'.section-designer'">
                                    <h2 class="skill-item-name skill-item-developer">
                                        UI Designer
                                    </h2>
                                    <h3 class="skill-item-supplement">
                                        Mobile UI Design, Web UI Design 
                                    </h3>
                                </a>
                                <a class="skill-item" href="#" v-scroll-to="'.section-developer'">
                                    <h2 class="skill-item-name skill-item-designer">
                                        Developer
                                    </h2>
                                    <h3 class="skill-item-supplement" href="#" v-scroll-to="'.section-designer'">
                                        iOS, Web, Node.js
                                    </h3>
                                </a>
                                <a class="skill-item" href="#" v-scroll-to="'.section-educator'">
                                    <h2 class="skill-item-name skill-item-educator">
                                        Educator
                                    </h2>
                                    <h3 class="skill-item-supplement">
                                        GUI, UI, iOS Coding, Coworking
                                    </h3>
                                </a>
                            </nav>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <transition
                            name="custom-classes-transition"
                            enter-active-class="fadeInUp"
                            >
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="header-picture-container">
                                <div id="header-picture">
                                    <h3 id="header-location">
                                        2017_<br>Sanfrancisco
                                    </h3>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                </el-row>
            </section>
            <section class="section-slogan">
                <el-row :gutter="16">
                    <div class="ball-4 rellax" data-rellax-speed="2"></div>
                    <div class="ball-1 rellax"></div>
                    <el-col :span="10" :offset="2">
                        <div id="separator-1"></div>
                        <h1 id="slogan-1">CREATE</h1>
                        <h1 id="slogan-2">MORE</h1>
                        <h1 id="slogan-1">EVERYDAY.</h1>
                    </el-col>
                </el-row> 
                <el-row :gutter="16">
                    <el-col :span="22" :offset="2">
                        <div id="separator-2"></div>
                        <h3 id="slogan-small">I'm always looking for great idea, awesome partner<br>please contact me if your are same as me.</h3>
                        <div id="separator-3"></div>
                    </el-col>
                </el-row>  
            </section>
            <section class="section-designer">
                <el-row :gutter="16">
                    <h1 class="design-background">
                        DESIGN
                    </h1>
                    <div class="ball-2 rellax"></div>
                    <el-col :span="8" :offset="2">
                        <titleContainer class="designer-titlecontainer" index="01" title="Designer" description="User Interace, Graphic Design, Commercial Design, and some cool stuff Design. User Interace, Graphic Design, Commercial Design."></titleContainer>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-1-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-2.png"></hoverPicture>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-2-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-4.png"></hoverPicture>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="6" :offset="10">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-3-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-1.png"></hoverPicture>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-4-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-3.png"></hoverPicture>
                            </div>
                        </div>
                    </el-col>
                </el-row>    
            </section>
            <section class="section-motto">
                <el-row :gutter="16">
                    <div class="ball-3 rellax"></div>
                    <el-col :span="10" :offset="9">
                        <div class="motto-bg"></div>
                        <div class="motto-separator"></div>
                        <h1 id="motto">It's all about<br>the way<br>you design.</h1>
                    </el-col>
                </el-row>  
            </section>
            <section class="section-developer">
                <el-row :gutter="16">
                    <h1 class="developer-background">
                        CODING
                    </h1>
                    <div class="developer-square">
                    </div>
                    <el-col :span="12" :offset="2">
                        <h3 class="work-developer-index">
                            001
                        </h3>
                        <div class="work-developer-separator">
                        </div>
                        <h3 class="work-developer-subtitle">
                            iOS, Deisgn, Web and Script
                        </h3>
                        <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="developer-container work-image-container">
                            <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-2.png"></hoverPicture>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <titleContainer class="developer-titlecontainer" index="02" title="Developer" description="Swift, ObjectiveC, Html, CSS, Sass, Javascript, JQuery, Vue.js, Swift, ObjectiveC, Html, CSS, Sass, Javascript, JQuery, Vue.js."></titleContainer>
                    </el-col>
                </el-row>
            </section>
            <section class="section-educator">
                <el-row :gutter="16">
                    <h1 class="educator-background">
                        EDUCATOR
                    </h1>
                    <el-col :span="7" :offset="2">
                        <titleContainer class="educator-titlecontainer" index="03" title="Educator" description="An educator in Hahow, NTU, NTUST, NCCU with more than 500 students in Taiwan."></titleContainer>
                        <div class="contact">
                            <a>Looking for an educator?</a>
                        </div>
                    </el-col>
                    <el-col :span="5" :offset="1">
                        <div class="educator-work-1 work-image-container"></div>
                    </el-col>
                    <el-col :span="5">
                        <div class="educator-work-2 work-image-container"></div>
                    </el-col>
                    <el-col :span="5" :offset="15">
                        <div class="educator-triangle"></div>
                        <div class="ball-6 rellax"></div>
                        <div class="educator-work-3 work-image-container"></div>
                    </el-col>
                </el-row>
            </section>
            <section class="section-writer">
                <el-row :gutter="16">
                    <div class="ball-5 rellax" data-rellax-speed="2"></div>
                    <el-col :span="10" :offset="2">
                        <titleContainer class="writer-titlecontainer" index="04" title="Writer" description="A writer with more than 1000 followers and more than 100k view’s count. A writer with more than 1000 followers and more than 100k view’s count."></titleContainer>
                        <div class="contact">
                            <a>Read more article?</a>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="article-container" :gutter="0">
                    <el-col class="writer-container" :span="6" :offset="2">
                        <div class="writer-work-1">
                        </div>
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <el-col class="writer-container" :span="6" :offset="1">
                        <div class="writer-work-2">
                        </div>
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <el-col class="writer-container" :span="6" :offset="1">
                        <div class="writer-work-3">
                        </div>
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <div class="ball-7 rellax"></div>
                </el-row>
            </section>
        </div>

      </div>
</template>

<script>
    import Vue from 'vue';
    import HeaderBar from './Element/header.vue';
    import BackgroundRope from './Element/background.vue';
    import HoverPicture from './Element/hoverPicture.vue';
    import TitleContainer from './Element/title.vue';
    import WorksContainer from './Element/works.vue';
    import ArticleContainer from './Element/article.vue';
    import ScrollTrigger from 'scrolltrigger-classes';
    import ScrollTo from 'vue-scrollto';
    import Rellax from 'rellax';
    import tilt from 'tilt.js';


    var VueScrollTo = require('vue-scrollto');
    Vue.use(VueScrollTo, {
        container: "body",
        duration: 1000,
        easing: "ease",
        offset: -240,
        cancelable: true,
        onDone: false,
        onCancel: false,
        x: false,
        y: true
    });

    export default {
        data () {
            return {
                message: 'Helo, Vue.js 2.0.1'
            }
        },
        methods: {
            handleScroll: function(event) {
                console.log('123123123');
                let obj = document.querySelector('.section-developer');
                let {top,bottom} = obj.getBoundingClientRect();
                console.log('上:'+top+'下:'+bottom);
                // let height = document.documentElement.clientHeight;
                // this.scrolled = top < height && bottom >0;
                // this.scrolled = window.scrollY > 100;
            }
        },
        created() {
            // window.addEventListener('scroll', this.handleScroll);
            document.addEventListener('DOMContentLoaded', function(){
                var trigger = new ScrollTrigger({
                  toggle: {
                    visible: 'visibleClass',
                    hidden: 'hiddenClass'
                  },
                  offset: {
                    x: 0,
                    y: -80
                  },
                  addHeight: true,
                  once: true
                }, document.body, window);

                var callback = function(scrollLeft, scrollTop, width, height){
                    // console.log("GGWP");
                };

                trigger.attach(callback);
            });
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() { 
            $('.header-picture-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 1500,
                transition: true,
                speed: 2000
            });
            $('.work-1-container').tilt({
                scale: 1.05,
                maxGlare: .5,
                perspective: 900,
                transition: true
            });
            $('.work-2-container').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.work-3-container').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.work-4-container').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.developer-container').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.educator-work-1').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.educator-work-2').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.educator-work-3').tilt({
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            var rellax = new Rellax('.rellax', {
                speed: 3,
                center: false,
                round: true,
            });
        },
        components: {
            HeaderBar,
            TitleContainer,
            WorksContainer,
            ArticleContainer,
            BackgroundRope,
            HoverPicture
        }
    }
</script>

<style scope lang="sass">
    @import '~styles/main.sass'
    
    .section-about
        background-color: transparent
        margin-top: 80px
        width: 100%
    .section-slogan
        margin-top: 120px
        margin-bottom: 120px
    .el-row 
        height: 100%
        background-color: transparent
    .el-col 
        height: 100%
        background-color: transparent
    .header-info
        z-index: 5

    .demo-picture
        +size(200px, 200px)
        background: red
    .background-ropes
        top: -160px
        left: 0px
        height: 100%
        width: 100%

    .header-background
        position: absolute
        opacity: 0.05
        font-size: 200px
        font-weight: 800
        letter-spacing: 8px
        line-height: 150px
        left: -24%
        top: -42%

    .design-background
        position: absolute
        opacity: 0.04
        font-size: 200px
        font-weight: 800
        letter-spacing: 0px
        line-height: 150px
        left: -8%
        top: -56%

    .developer-background
        position: absolute
        opacity: 0.04
        font-size: 200px
        font-weight: 800
        letter-spacing: 0px
        line-height: 150px
        right: 0%
        top: -48%

    .educator-background
        position: absolute
        opacity: 0.04
        font-size: 300px
        font-weight: 800
        letter-spacing: 0px
        line-height: 150px
        left: -2%
        top: -43%
    .header-separator
        position: absolute
        +size(280px, 20px)
        // background-color: white
        top: 150px
        left: 120px
        background: linear-gradient(to right, $gradient-light-blue, $gradient-dark-blue)
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4)

    .header-name
        width: 1000px
        font-weight: 800
        text-shadow: 6px 6px 10px rgba(0, 0, 0, 0.6)

    .skill-item:hover .skill-item-name::before
        transform: scale3d(1,1,1)
    .skill-item:hover .skill-item-supplement
        color: white
        transform: translateX(8px)
    .skill-item
        display: block
        width: 400px
        text-decoration: none
        cursor: pointer
    .skill-item-name
        font-size: 28px
        font-weight: 700
        display: inline-block
        margin-bottom: 8px
        letter-spacing: 1px
        transition: transform 0.5s
        transition-timing-function: cubic-bezier(0.2,1,0.3,1)
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6)
        padding-right: 16px
        
        &:before
            content: ''
            position: absolute
            z-index: -1
            bottom: 0
            left: -8px
            width: 100%
            height: 50%
            opacity: 1.0
            transform: scale3d(0,1,1)
            transform-origin: 0% 50%
            transition: transform 0.5s
            transition-timing-function: cubic-bezier(0.2,1,0.3,1)
    .skill-item-developer
        &:before
            background: linear-gradient(to right, $gradient-dark-purple, $gradient-light-purple)
    .skill-item-designer
        &:before
            background: linear-gradient(to right, $gradient-dark-purple, $gradient-light-purple)
    .skill-item-educator
        &:before
            background: linear-gradient(to right, $gradient-dark-purple, $gradient-light-purple)

    .skill-item-supplement
        font-size: 20px
        color: $text-color-gray
        margin-bottom: 8px
        transition: all 0.5s
        transition-timing-function: cubic-bezier(0.2,1,0.3,1)

    .header-skill
        font-size: 28px
        font-weight: 700
        margin-bottom: 8px
        letter-spacing: 1px
    .header-supplement
        font-size: 20px
        color: $text-color-gray
        margin-bottom: 8px
    .header-picture-container
        width: 100%
        height: 100%
        min-height: 720px
        transform-style: preserve-3d
        box-shadow: 16px 16px 50px $shadow-color-black
        #header-picture
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            min-height: 720px
            height: 100%
            width: 100%
            z-index: 3
        #header-location
            position: absolute
            background-color: transparent
            font-size: 16px
            top: 24px
            left: -32px
            text-shadow: 2px 2px 4px black
            transform: translateZ(20px)


    #separator-1
        +size(124px, 16px)
        background-color: white
        margin-bottom: 36px

    #separator-2
        +size(640px, 2px)
        background-color: white
        margin-top: 40px
        margin-bottom: 16px

    #separator-3
        +size(480px, 2px)
        background-color: white
        margin-top: 40px
        margin-bottom: 16px

    #slogan-1
        // color: $text-color-green
        // text-shadow: 6px 6px 0px $shadow-color-blue
        font-size: 84px
        letter-spacing: 12px
        line-height: 120px
        margin-top: 0px
        margin-bottom: 0px

    #slogan-2
        font-size: 84px
        text-shadow: 16px 24px 50px $shadow-color-black
        letter-spacing: 12px
        line-height: 96px
        margin-top: 0px
        margin-bottom: 0px

    #slogan-small
        font-size: 24px
        line-height: 40px
        margin-bottom: -24px


    .work-container
        position: absolute
        z-index: 3

    .work-container-1
        top: 80px
        right: -10px
    .work-container-2
        top: 50%
        left: -100px
        transform: translateZ(20px)
    .work-container-3
        top: 50%
        right: -60px

    .work-image-container
        box-shadow: 16px 16px 50px $shadow-color-black
    .section-designer
        max-width: 1600px
        margin-left: auto
        margin-right: auto
        margin-top: 480px

        .designer-titlecontainer
            max-width: 360px

        .work-1-container
            +size(340px, 340px)
            top: -160px

        .work-2-container
            +size(340px, 340px)

        .work-3-container
            +size(340px, 340px)
            margin-top: 60px
            top: -160px
            transform-style: preserve-3d

        .work-4-container
            +size(340px, 340px)
            margin-top: 60px

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    #motto
        margin-left: auto
        margin-right: auto
        letter-spacing: 2px
        line-height: 108px
        font-size: 84px

    .motto-bg
        +size(260px, 240px)
        opacity: 0.1
        left: -64px
        top: -32px
        position: absolute
        background-image: url('~assets/images/moto-icon.png')
        background-size: contain
        background-repeat: no-repeat

    .motto-separator
        +size(280px, 20px)
        top: 250px
        left: 0px
        position: absolute
        background: linear-gradient(to right, $gradient-light-purple, $gradient-dark-purple)
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4)

    .section-developer
        max-width: 1600px
        margin-left: auto
        margin-right: auto
        margin-top: 480px

        .developer-titlecontainer
            max-width: 440px

        .developer-square
            +size(36vw, 36vw)
            position: absolute
            top: -3.5vw
            left: 11vw
            max-width: 600px
            max-height: 600px 
            background: linear-gradient(to bottom right, $gradient-light-blue, $gradient-dark-blue)

        .developer-container
            // margin-top: 120px
            width: 36vw
            height: 36vw
            max-width: 600px
            max-height: 600px
            // +size(400px, 480px)


        .work-developer-index
            font-family: 'Playfair Display', serif
            font-style: italic
            font-size: 28px
            font-weight: 300
            position: absolute
            left: -10%


        .work-developer-separator
            +size(80px, 2px)
            position: absolute
            background-color: white
            left: -12%
            top: 10%
        

        .work-developer-subtitle
            position: absolute
            transform: rotate(-90deg) translateX(40%)
            bottom: 0px
            left: -18%    

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    .section-educator
        max-width: 1600px
        margin-left: auto
        margin-right: auto
        margin-top: 480px

        .educator-titlecontainer
            max-width: 320px

        .contact
            margin-top: 48px
            margin-bottom: 24px
            a
                color: $text-color-green

        .educator-container
            margin-top: 96px
            text-align: center

        .educator-work-1
            +size(280px, 400px)
            background-image: url('~assets/images/sample-e-1.png')
            background-size: cover
            margin-bottom: 40px

        .educator-work-2
            +size(400px, 400px)
            background-image: url('~assets/images/sample-e-2.png')
            background-size: cover
            top: -180px
            margin-bottom: 40px

        .educator-work-3
            +size(240px, 240px)
            background-image: url('~assets/images/sample-e-3.png')
            background-size: cover
            top: -170px
            margin-bottom: 40px

        .educator-triangle
            +size(240px, 240px)
            position: absolute
            top: -140px
            left: 32px
            background: linear-gradient(to bottom right, $gradient-light-yellow 20%, $gradient-dark-yellow 100%)
            // color: transparent
            // box-sizing: border-box
            // border: 8px solid transparent
            // border-image: linear-gradient(to bottom right, $gradient-light-yellow 0%, $gradient-dark-yellow 100%)
            // border-image-slice: 1

        .educator-info
            text-align: left
            width: 280px
            top: 50%

    .section-writer
        max-width: 1600px
        margin-left: auto
        margin-right: auto
        margin-top: -200px

        .writer-titlecontainer
            max-width: 560px
        .contact
            margin-top: 48px
            margin-bottom: 40px
            a
                color: $text-color-green

        .writer-container
            // border: solid 1px white
            // padding: 16px

        .writer-work-1
            +size(100%, 280px)
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            margin-bottom: 24px

        .writer-work-2
            +size(100%, 280px)
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            margin-bottom: 24px

        .writer-work-3
            +size(100%, 280px)
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            margin-bottom: 24px

        .article-info
            text-align: left
            margin-top: 24px
            padding-right: 72px



    .ball-1
        +size(200px, 200px)
        left: 75%
        top: 20%
        position: absolute
        filter: drop-shadow(0px 0px 6px rgba(116, 231, 255, 0.4))
        background-image: url('~assets/images/circle-blue.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-2
        +size(160px, 160px)
        left: 25%
        bottom: 20%
        position: absolute
        filter: drop-shadow(0px 0px 6px rgba(97, 250, 255, 0.4))
        background-image: url('~assets/images/circle-green.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-3
        +size(180px, 180px)
        left: 60%
        top: 200%
        position: absolute
        background-image: url('~assets/images/circle-yellow.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-4
        +size(100px, 100px)
        left: 60%
        top: 200%
        position: absolute
        filter: drop-shadow(0px 0px 8px rgba(255, 237, 75, 0.5))
        background-image: url('~assets/images/circle-yellow.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-5
        +size(100px, 100px)
        left: 38%
        top: 100%
        position: absolute
        background-image: url('~assets/images/circle-green-blur.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-6
        +size(140px, 140px)
        left: 70%
        bottom: 0%
        position: absolute
        filter: drop-shadow(0px 4px 6px rgba(182, 117, 255, 0.4))
        background-image: url('~assets/images/circle-purple.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-7
        +size(140px, 140px)
        left: 73%
        bottom: -150%
        position: absolute
        filter: drop-shadow(0px 0px 6px rgba(116, 231, 255, 0.4))
        background-image: url('~assets/images/circle-blue.png')
        background-size: contain
        background-repeat: no-repeat

    .hiddenClass 
        transition: all 0.8s ease
        opacity: 0.0
        transform: translateY(30px)
    
    .visibleClass 
        transition: all 0.8s ease
        opacity: 1.0
        transform: translateY(0px)

</style>