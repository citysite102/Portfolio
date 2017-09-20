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
                        <div id="header-info">
                            <h1 id="header-name">
                                Hi, I'm Samuel.
                            </h1>
                            <h2 id="header-software">
                                Software developer,
                            </h2>
                            <h2 id="header-ui">
                                UI Designer,
                            </h2>
                            <h2 id="header-mentor">
                                Mentor <span>in Taiwan</span>
                            </h2>
                        </div>
                    </el-col>
                    <el-col :span="12">
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
                    <el-col :span="10" :offset="2">
                        <h1 id="slogan-1">CREATE<br> MORE</h1>
                        <h1 id="slogan-2">EVERY<br> DAY</h1>
                    </el-col>
                </el-row>  
            </section>
            <section class="section-designer">
                <el-row :gutter="16">
                    <el-col :span="9" :offset="4">
                        <titleContainer index="01" title="Designer" description="User Interace, Graphic Design,
        Commercial Design."></titleContainer>
                    </el-col>
                    <el-col :span="10">
                        <div data-scroll>
                            <div class="work-1-background">
                                </div>
                            <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-1-container work-image-container">
                                <div class="work work-1">
                                </div>
                            </div>
                            <worksContainer class="work-container work-container-1" title="Sample1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></worksContainer>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="9" :offset="3">
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
                    </el-col>
                </el-row>    
            </section>
            <section class="section-motto">
                <el-row :gutter="16">
                    <el-col :span="12" :offset="7">
                        <h1 id="motto">It's all about<br>the way<br>you design.</h1>
                    </el-col>
                </el-row>  
            </section>
            <section class="section-developer">
                <el-row :gutter="16">
                    <el-col :span="10" :offset="3">
                        <titleContainer index="02" title="Developer" description="Swift, ObjectiveC, Html, CSS, Sass, Javascript, JQuery, Vue.js."></titleContainer>
                    </el-col>
                    <el-col :span="11">
                        <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-4-container work-image-container">
                            <div class="work work-4">
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="10" :offset="3">
                        <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-5-container work-image-container">
                            <div class="work work-5">
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div data-tilt data-tilt-perspective="2500" data-tilt-transition="true" class="work-6-container work-image-container">
                            <div class="work work-6">
                            </div>
                        </div>
                    </el-col>
                </el-row>    
            </section>
            <section class="section-educator">
                <el-row :gutter="16">
                    <el-col :span="9" :offset="3">
                        <titleContainer index="03" title="Educator" description="An educator in Hahow, NTU, NTUST, NCCU with more than 500 students in Taiwan."></titleContainer>
                        <div class="contact">
                            <a>Looking for an educator?</a>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="educator-container" :gutter="16">
                    <el-col :span="6" :offset="3">
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
                </el-row>
            </section>

            <section class="section-educator">
                <el-row :gutter="16">
                    <el-col :span="9" :offset="3">
                        <titleContainer index="04" title="Writer" description="A writer with more than 1000 followers and more than 100k view’s count."></titleContainer>
                        <div class="contact">
                            <a>More Article?</a>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="article-container" :gutter="16">
                    <el-col :span="6" :offset="3">
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <el-col :span="6">
                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                    </el-col>
                    <el-col :span="6">
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
                    console.log("GGWP");
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
                perspective: 1200,
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
            $('.work-5-container').tilt({
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
        height: 480px
        width: 100%
    .section-slogan
        margin-top: 40px
        margin-bottom: 40px
    .el-row 
        height: 100%
        background-color: transparent
    .el-col 
        height: 100%
        background-color: transparent
    #header-info
        top: 50%
        transform: translateY(-50%)
        padding-top: 80px
        padding-bottom: 80px

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
        opacity: 1.0
        z-index: 0
        margin-left: auto
        margin-right: auto

    #header-name
        font-size: 64px
        width: 1000px
    #header-software
        font-size: 28px
        font-weight: 700
        margin-top: 0px
        margin-bottom: 0px
        color: $text-color-green
    #header-ui
        font-size: 28px
        font-weight: 700
        margin-top: 16px
        margin-bottom: 0px
        color: $text-color-blue
    #header-mentor
        font-size: 28px
        font-weight: 700
        margin-top: 16px
        margin-bottom: 0px
        color: $text-color-purple
    .header-picture-container
        +size(720px, 560px)
        // top: 10%
        transform-style: preserve-3d
        box-shadow: 16px 16px 50px $shadow-color-black
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
            transform: translateZ(20px)


    #slogan-1
        color: $text-color-green
        text-shadow: 6px 6px 0px $shadow-color-blue
        letter-spacing: 12px
        line-height: 96px

    #slogan-2
        margin-top: 160px
        text-shadow: 16px 24px 50px $shadow-color-black
        letter-spacing: 12px
        line-height: 96px


    .work-container
        position: absolute
        z-index: 3

    .work-container-1
        top: 80px
        right: 0px
    .work-container-2
        top: 50%
        left: -100px
        transform: translateZ(20px)
    .work-container-3
        top: 50%
        right: -40px

    .work-image-container
        box-shadow: 16px 16px 50px $shadow-color-black
    .section-designer
        .work-1-background
            +size(260px, 310px)
            color: transparent
            box-sizing: border-box
            position: absolute
            top: -40px
            left: 36px
            border: 14px solid transparent
            // opacity: 0
            border-image: linear-gradient(to bottom right, $gradient-light-blue 0%, $gradient-dark-blue 100%);
            border-image-slice: 1

        .work-1-container
            +size(260px, 310px)

            .work-1
                background-image: url('~assets/images/sample-2.png')

        .work-2-container
            +size(340px, 480px)
            transform-style: preserve-3d
            .work-2
                background-image: url('~assets/images/sample-1.png')

        .work-3-container
            +size(340px, 480px)
            margin-top: 160px
            .work-3
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
        line-height: 96px

    .section-developer
        .work-4-container
            +size(400px, 440px)
            .work-4
                background-image: url('~assets/images/sample-4.png')

        .work-5-container
            margin-top: -120px
            +size(400px, 440px)
            .work-5
                background-image: url('~assets/images/sample-5.png')

        .work-6-container
            +size(400px, 440px)
            margin-top: 160px
            .work-6
                background-image: url('~assets/images/sample-1.png')

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    .contact
        margin-top: 72px
        margin-bottom: 24px
        a
            color: $text-color-green

    .educator-container
        margin-top: 96px
        text-align: center

    .educator-work-1
        +size(280px, 180px)
        background-image: url('~assets/images/sample-city.png')
        background-size: cover
        margin-bottom: 24px

    .educator-work-2
        +size(280px, 300px)
        background-image: url('~assets/images/sample-city.png')
        background-size: cover
        margin-bottom: 24px

    .educator-work-3
        +size(280px, 220px)
        background-image: url('~assets/images/sample-city.png')
        background-size: cover
        margin-bottom: 24px

    .educator-info
        text-align: left
        width: 280px
        top: 50%

    .article-info
        text-align: left
        margin-top: 24px
        padding-right: 72px

    .hiddenClass 
        transition: all 0.8s ease
        opacity: 0.0
        transform: translateY(30px)
    
    .visibleClass 
        transition: all 0.8s ease
        opacity: 1.0
        transform: translateY(0px)

</style>