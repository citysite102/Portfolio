<template lang="html">
    <div>
        <headerBar></headerBar>
        <div class="ropes">
            <el-row :gutter="16">
                <el-col :span="4">
                    <div class="rope"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                </el-col>
            </el-row>
        </div>
        <div id="container">
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
                            <h2 class="header-skill">
                                Developer
                            </h2>
                            <h3 class="header-supplement">
                                iOS, Web, Node.js 
                            </h3>
                            <h2 class="header-skill">
                                UI Designer
                            </h2>
                            <h3 class="header-supplement">
                                Mobile UI Design, Web UI Design 
                            </h3>
                            <h2 class="header-skill">
                                Educator
                            </h2>
                            <h3 class="header-supplement">
                                GUI, UI, iOS Coding, Coworking 
                            </h3>
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
                    <el-col :span="7" :offset="3">
                        <titleContainer class="designer-titlecontainer" index="01" title="Designer" description="User Interace, Graphic Design, Commercial Design, and some cool stuff Design. User Interace, Graphic Design, Commercial Design."></titleContainer>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-1-container work-image-container">
                                <div class="work work-1">
                                </div>
                            </div>
                        </div>
                        <!-- <div data-scroll>
                            <div class="work-1-background">
                                </div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-1-container work-image-container">
                                <div class="work work-1">
                                </div>
                            </div>
                            <worksContainer class="work-container work-container-1" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                        </div> -->
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-2-container work-image-container">
                                <div class="work work-2">
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="6" :offset="10">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-3-container work-image-container">
                                <div class="work work-3">
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-4-container work-image-container">
                                <div class="work work-4">
                                </div>
                            </div>
                        </div>
                    </el-col>
                    <!-- <el-col :span="9" :offset="3">
                        <div data-scroll>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-2-container work-image-container">
                                <div class="work work-2">
                                </div>
                                <worksContainer class="work-container work-container-2" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div data-scroll>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-3-container work-image-container">
                                <div class="work work-3">
                                </div>
                            </div>
                            <worksContainer class="work-container work-container-3" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                        </div>
                    </el-col> -->
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
                        <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="developer-container work-image-container">
                            <div class="work work-developer">
                            </div>
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
                    <el-col :span="6" :offset="3">
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
                        <div class="educator-work-3 work-image-container"></div>
                    </el-col>

                </el-row>
                <!-- <el-row class="educator-container" :gutter="16">
                    <el-col :span="6" :offset="2">
                        <div class="educator-work-1">
                            
                        </div>
                        <worksContainer class="educator-info" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                    </el-col>
                    <el-col :span="6">
                        <div class="educator-work-2">
                            
                        </div>
                        <worksContainer class="educator-info" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                    </el-col>
                    <el-col :span="6">
                        <div class="educator-work-3">
                            
                        </div>
                        <worksContainer class="educator-info" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                    </el-col>
                </el-row> -->
            </section>

            <section class="section-writer">
                <el-row :gutter="16">
                    <el-col :span="10" :offset="3">
                        <titleContainer class="writer-titlecontainer" index="04" title="Writer" description="A writer with more than 1000 followers and more than 100k view’s count. A writer with more than 1000 followers and more than 100k view’s count."></titleContainer>
                        <div class="contact">
                            <a>Read more article?</a>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="article-container" :gutter="16">
                    <el-col :span="6" :offset="3">
                        <div class="writer-work-1">
                        </div>
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <el-col :span="6">
                        <div class="writer-work-2">
                        </div>
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <el-col :span="6">
                        <div class="writer-work-3">
                        </div>
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                </el-row>
            </section>
        </div>

      </div>
</template>

<script>
    import HeaderBar from './Element/header.vue';
    import TitleContainer from './Element/title.vue';
    import WorksContainer from './Element/works.vue';
    import ArticleContainer from './Element/article.vue';
    import ScrollTrigger from 'scrolltrigger-classes'
    import Rellax from 'rellax'
    import tilt from 'tilt.js';
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
                // glare: true,
                scale: 1.05,
                maxGlare: .5,
                perspective: 900,
                transition: true
            });
            $('.work-2-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.work-3-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.work-4-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.developer-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.work-6-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.educator-work-1').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.educator-work-2').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 900,
                transition: true
            });
            $('.educator-work-3').tilt({
                // glare: true,
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
            ArticleContainer
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

    .ropes
        position: absolute
        top: 32px
        left: 0px
        height: 100%
        width: 100%
    .rope
        background-color: #222222
        width: 1px
        height: 100%
        opacity: 0.9
        z-index: 0
        margin-left: auto
        margin-right: auto

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
        line-height: 96px
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
            .work-1
                background-image: url('~assets/images/sample-2.png')

        .work-2-container
            +size(340px, 340px)
            .work-2
                background-image: url('~assets/images/sample-4.png')

        .work-3-container
            +size(340px, 340px)
            margin-top: 60px
            top: -160px
            transform-style: preserve-3d
            .work-3
                background-image: url('~assets/images/sample-1.png')

        .work-4-container
            +size(340px, 340px)
            margin-top: 60px
            .work-4
                background-image: url('~assets/images/sample-3.png')

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
            max-width: 360px

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
            .work-developer
                background-image: url('~assets/images/sample-2.png')

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

        .writer-work-1
            +size(320px, 220px)
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            margin-bottom: 24px

        .writer-work-2
            +size(320px, 220px)
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            margin-bottom: 24px

        .writer-work-3
            +size(320px, 220px)
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
        background-image: url('~assets/images/circle-blue.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-2
        +size(160px, 160px)
        left: 25%
        bottom: 20%
        position: absolute
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

    .hiddenClass 
        transition: all 0.8s ease
        opacity: 0.0
        transform: translateY(30px)
    
    .visibleClass 
        transition: all 0.8s ease
        opacity: 1.0
        transform: translateY(0px)

</style>