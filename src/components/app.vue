<template lang="html">
    <div>
        <div class="container">
            <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-headerbar">
                <headerBar :showAbout="true" :showWork="false"></headerBar>
            </transition>
            <backgroundRope class="background-ropes" showcolorline=true></backgroundRope>
            <transition name="slide-fade">
                <pageIndicator v-show="isPageIndicatorShow" class="page-control" :currentIndex="pageIndex"></pageIndicator>
            </transition>
            <section class="section-about">
                <el-row class="center-align" :gutter="16">
                    <el-col :span="10" :offset="2">
                        <div class="header-info">
                            <h1 class="header-background">
                                HELLO
                            </h1>
                            <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-div-1">
                                <div v-cloak class="header-separator">
                                </div>
                            </transition>
                            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-content-1">
                                <h1 class="header-name">
                                    Hello, <br>I'm Samuel.
                                </h1>
                            </transition>
                            <nav>
                                <a class="skill-item" href="#" v-scroll-to="'.section-designer'">
                                    <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-content-3">
                                        <h2 class="skill-item-name skill-item-designer">
                                            UI/UX Designer
                                        </h2>
                                    </transition>
                                    <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-content-3">
                                        <h3 class="skill-item-supplement">
                                            Mobile UI Design, Web UI Design 
                                        </h3>
                                    </transition>
                                </a>
                                <a class="skill-item" href="#" v-scroll-to="'.section-developer'">
                                    <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-content-4">
                                        <h2 class="skill-item-name skill-item-developer">
                                            Software Developer
                                        </h2>
                                    </transition>
                                    <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-content-4">
                                        <h3 class="skill-item-supplement" href="#" >
                                            iOS, Web, Vue.js, Node.js
                                        </h3>
                                    </transition>
                                </a>
                                <a class="skill-item" href="#" v-scroll-to="'.section-educator'">
                                    <transition appear
                                    appear-to-class="fade-enter-content" appear-active-class="fade-enter-active-content-5">
                                        <h2 class="skill-item-name skill-item-educator">
                                            Speaker
                                        </h2>
                                    </transition>
                                    <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-content-5">
                                        <h3 class="skill-item-supplement">
                                            iOS, Web, UI/UX, Communication
                                        </h3>
                                    </transition>
                                </a>
                            </nav>
                        </div>
                    </el-col>
                    <el-col :span="11">
                        <div class="header-picture-container">
                            <div id="header-picture">
                                <transition appear
                            appear-active-class="fade-enter-active-image">
                                    <div class="revealer">
                                    </div>
                                </transition>
                                <h3 id="header-location">
                                    2017_<br>Sanfrancisco
                                </h3>
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row class="section-scroll-hint">
                    <el-col :span="20" :offset="2">
                        <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-scroll" name="slide-fade">
                            <div v-show="isScrollHintShow" class="mouse">
                                <div class="mouse-icon">
                                    <span class="mouse-wheel"></span>
                                </div>
                            </div>
                        </transition>
                        <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-scroll" name="slide-fade">
                            <div v-show="isScrollHintShow" class="scroll-hint">SCROLL&nbsp&nbsp
                            </div>
                        </transition>
                    </el-col>
                </el-row>
            </section>
            <section class="section-designer">
                    <el-row :gutter="16">
                        <transition name="fade-delay-bg">
                            <h1 v-show="isDesignContentShow" class="design-background">
                                DESIGN
                            </h1>
                        </transition>
                        <transition name="fade-delay1">
                            <el-col v-show="isDesignContentShow" :span="8" :offset="2">
                                <titleContainer class="designer-titlecontainer" index="01" title="Designer" description="I am a Mobile/Web UI designer. My daily tasks also include visual design and business content design. Hence, a strong focus is put on design skills learning in my time."></titleContainer>
                                <moreButton>
                                </moreButton>
                                <div v-show="isDesignContentShow" class="ball-2 rellax"></div>
                            </el-col>
                        </transition>
                    <el-col :span="13">
                        <transition name="fade-delay2">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-1-container work-image-container">
                                    <hoverPicture class="work" title="Tickle" description="iOS Development,  Flow Planning, Interface Design, Web Development and Design, Product Planning, Character and Stage Planning and Banner Design." imageSource="../../src/assets/images/design-tickle.png" directLink="design-tickle">
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade-delay3">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-2-container work-image-container">
                                    <hoverPicture class="work" title="Daily UI" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-4.png" directLink="design-element">
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="13" :offset="10">
                        <transition name="fade-delay4">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-3-container work-image-container">
                                    <hoverPicture class="work" title="iOS Interface Design" description=" Wireframe, interface guideline, flow and interface design." imageSource="../../src/assets/images/sample-2.png" directLink="design-ios">
                                        
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade-delay5">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-4-container work-image-container">
                                    <hoverPicture class="work" title="Web Interface Design" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-3.png" directLink="design-web">
                                        
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                </el-row>    
            </section>
            <section class="section-motto">
                <el-row :gutter="16">
                    <div class="ball-3 rellax"></div>
                    <el-col :span="10" :offset="8">
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
                    <el-col :span="11" :offset="3">
                        <!-- <transition name="fade-text" mode="out-in">
                            <h3 class="work-developer-index" :key=projectIndexs[projectIndex]>
                                {{projectIndexs[projectIndex]}}
                            </h3>
                        </transition>
                        <div class="work-developer-separator">
                        </div> -->
                        <transition name="fade-text" mode="out-in">
                            <h3 class="work-developer-subtitle" :key=projectJobs[projectIndex]>
                                2016.8 &nbsp ─ &nbsp 2017.12
                            </h3>
                        </transition>
                        <transition name="fade-text" mode="in-out">
                            <div v-if="projectIndex==0" class="developer-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-2.png"></hoverPicture>
                                <!-- <h3 class="work-developer-subtitle" :key=projectJobs[projectIndex]>
                                    2016/8 - 2017/12
                                </h3> -->
                            </div>
                            <div v-else-if="projectIndex==1" class="developer-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-3.png"></hoverPicture>
                            </div>
                            <div v-else-if="projectIndex==2" class="developer-container work-image-container">
                                <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-4.png"></hoverPicture>
                            </div>
                        </transition>
                    </el-col>
                    <el-col :span="10">
                        <transition name="fade-delay1">
                            <titleContainer v-show="isDeveloperContentShow" class="developer-titlecontainer" index="02" title="Developer" description="In real life, I am a full-time engineer. I code and have project development experiences in Swift, ObjectiveC, Html, CSS, Sass, Javascript, Jquery and Vue.js languages."></titleContainer>
                        </transition>
                        <transition name="fade-delay2">
                            <div v-show="isDeveloperContentShow" class= "developer-project-select">
                                <ul>
                                    <li v-bind:class="{ projectSelected: projectIndex==0}" v-on:click="selectProject(0)">001</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==1}" v-on:click="selectProject(1)">002</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==2}" v-on:click="selectProject(2)">003</li>
                                </ul>
                                <ul>
                                    <li v-bind:class="{ projectSelected: projectIndex==4}" v-on:click="selectProject(4)">004</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==5}" v-on:click="selectProject(5)">005</li>
                                </ul>
                            </div>
                        </transition>
                        <transition name="fade-delay3">
                            <div v-show="isDeveloperContentShow" class="developer-project-content">
                                <!-- <transition name="fade-text" mode="out-in">
                                    <h3 class="project-name" :key=projectTitles[projectIndex]>{{projectTitles[projectIndex]}}
                                    </h3>
                                </transition>
                                <transition name="fade-text" mode="out-in">
                                    <p class="project-description":key=projectDescriptions[projectIndex]>{{projectDescriptions[projectIndex]}}
                                    </p>
                                </transition> -->
                            </div>
                        </transition>

                    </el-col>
                </el-row>
            </section>
            <section class="section-educator">
                <el-row :gutter="16">
                    <h1 class="educator-background">
                        SPEAKER
                    </h1>
                    <transition name="fade-delay1">
                        <el-col v-show="isEducatorContentShow" :span="7" :offset="2">
                            <titleContainer class="educator-titlecontainer" index="03" title="Speaker" description="I teach a co-hosted online course ‘iOS Development and Interface Design’, attended remotely by 350 students approx. I have also been invited as a speaker at Tatung University and NTUST to host seminars/speech. Finally, I am an active host for organising meet-ups and workshops in front-end field."></titleContainer>
                            <div class="contact">
                                <a>Contact Me</a>
                            </div>
                        </el-col>
                    </transition>
                    <transition name="fade-delay3">
                        <el-col v-show="isEducatorContentShow" class="educator-work-1-col" :span="5" :offset="1">
                            <div class="educator-work-1 work-image-container"></div>
                        </el-col>
                    </transition>
                    <transition name="fade-delay2">
                        <el-col v-show="isEducatorContentShow" class="educator-work-2-col" :span="5" :offset="1">
                            <div class="educator-work-2 work-image-container"></div>
                        </el-col>
                    </transition>
                    <transition name="fade-delay4">
                        <el-col v-show="isEducatorContentShow" class="educator-work-3-col" :span="5" :offset="16">
                            <div class="educator-triangle"></div>
                            <div class="ball-1 rellax"></div>
                            <div class="ball-6 rellax"></div>
                            <div class="educator-work-3 work-image-container"></div>
                        </el-col>
                    </transition>
                </el-row>
            </section>
            <section class="section-writer">
                <el-row :gutter="16">
                    <transition name="fade-delay1">
                        <el-col v-show="isWriterContentShow" :span="7" :offset="2">
                            <div class="ball-5 rellax" data-rellax-speed="2"></div>
                            <titleContainer class="writer-titlecontainer" index="04" title="Writer" description=" I am a content contributor, penning my pieces on knowledge in Interface Design and Engineering via Medium, on which I have more than 1500 followers and more than 100k post clicks."></titleContainer>
                            <moreButton>
                            </moreButton>
                        </el-col>
                    </transition>
                    <el-col v-show="isWriterContentShow" class="article-container" :span="12" :offset="2">
                        <el-row :gutter="16">
                            <transition name="fade-delay2">
                                <el-col v-show="isWriterContentShow" class="writer-container" :span="24" :offset="0">
                                    <div class="writer-work writer-work-1">
                                    </div>
                                    <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="If you’re a newcomer to design, here’s the right place!! If you’re a newcomer to design, here’s the right place!! "></articleContainer>
                                </el-col>
                            </transition>
                            <transition name="fade-delay3">
                                <el-col v-show="isWriterContentShow" class="writer-container" :span="24" :offset="0">
                                    <div class="writer-work writer-work-2">
                                    </div>
                                    <articleContainer class="article-info" title="Name Card Printing Basic" description="名片再送印前其實有許多第一次可能會犯的錯誤，作者透過自身慘痛的經驗來告訴你再送印前，我們還需要特別注意些什麼事情！"></articleContainer>
                                </el-col>
                            </transition>
                            <transition name="fade-delay4">
                                <el-col v-show="isWriterContentShow" class="writer-container" :span="24" :offset="0">
                                    <div class="writer-work writer-work-3">
                                    </div>
                                    <articleContainer class="article-info" title="Presentation Layout" description="Often bugged by the arranging the perfect layout for your slides? This article is to give you some insight on how to build up a nice layout by using grid system step-by-step."></articleContainer>
                                    <div class="ball-7 rellax"></div>
                                </el-col>
                            </transition>
                        </el-row>
                    </el-col>
                </el-row>
            </section>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import HeaderBar from './Element/header.vue';
    import FooterBar from './Element/footer.vue';
    import PageIndicator from './Element/pageIndication.vue';
    import BackgroundRope from './Element/background.vue';
    import HoverPicture from './Element/hoverPicture.vue';
    import TitleContainer from './Element/title.vue';
    import WorksContainer from './Element/works.vue';
    import ArticleContainer from './Element/article.vue';
    import MoreButton from './Element/moreButton.vue';
    import ScrollTrigger from 'scrolltrigger-classes';
    import ScrollTo from 'vue-scrollto';
    import Rellax from 'rellax';
    import tilt from 'tilt.js';


    var VueScrollTo = require('vue-scrollto');
    var scrollFunction;

    Vue.use(VueScrollTo, {
        container: "body",
        duration: 1000,
        easing: [0.14, 1.08, 0.31, 0.98],
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
                isScrollHintShow: true,
                isDesignContentShow: false,
                isDeveloperContentShow: false,
                isEducatorContentShow: false,
                isWriterContentShow: false,
                isPageIndicatorShow: false,
                pageIndex: 1,
                projectIndex: 0,
                projectTitles: ['Tickle', 'Kapi', 'Cosign'],
                projectTimes: ['2016.1-2017.1', '2016.2-2017.2', '2016.3-2017.3'],
                projectDescriptions: ['1Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet', '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet', '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet'],
                projectJobs: ['Engineer, UI Deisgn and Script','Cofounder, iOS developement','Cofunder, web developement'],
                projectIndexs: ['001','002','003'],
                projectImages: ['../../src/assets/images/sample-2.png', '../../src/assets/images/sample-3.png', '../../src/assets/images/sample-4.png']
            }
        },
        methods: {
            selectProject: function(index) {
                console.log("Select");
                // var projectName = document.getElementsByClassName("project-name");
                // console.log(projectName);
                // console.log(projectName[0]);
                // projectName[0].innerHTML="123";
                this.projectIndex = index;
            },
            handleScroll: function(event) {
                let obj = document.querySelector('.section-developer');
                let {top,bottom} = obj.getBoundingClientRect();
            },
            triggerEvent: function(instance) {
                console.log(instance);
                console.log("已加入");

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

                console.log("已加入" + trigger);

                var callback = function(scrollLeft, scrollTop, width, height){
                    console.log("Left:"+scrollLeft+ " Top:"+ scrollTop);
                    // console.log(instance.pageIndex);
                    // console.log($(document))

                    if (scrollTop > 100) {
                        instance.isScrollHintShow = false;
                    } else {
                        instance.isScrollHintShow = true;
                    }

                    if (scrollTop > 500) {
                        instance.isPageIndicatorShow = true;
                    } else {
                        instance.isPageIndicatorShow = false;
                    }

                    if (scrollTop > 500 && scrollTop < 2800) {
                        instance.pageIndex = 1;
                    } else if (scrollTop > 2800 && scrollTop < 3400) {
                        instance.pageIndex = 2;
                    } else if (scrollTop > 3400 && scrollTop < 4400) {
                        instance.pageIndex = 3;
                    } else if (scrollTop > 4400) {
                        instance.pageIndex = 4;
                    }


                    if (scrollTop > 200) {
                        instance.isDesignContentShow = true;
                        // if (scrollTop < 4300) {
                            // instance.pageIndex = 2;
                            // $(document).trigger('index.update', [2]);
                        // }
                    }
                    if (scrollTop > 2000) {
                        instance.isDeveloperContentShow = true;
                    }
                    if (scrollTop > 3000) {
                        instance.isEducatorContentShow = true;
                        // if (scrollTop < 5300) {
                            // instance.pageIndex = 3;
                            // $(document).trigger('index.update', [3]);
                        // }
                    }
                    if (scrollTop > 3800) {
                        instance.isWriterContentShow = true;
                        // instance.pageIndex = 4;
                        // $(document).trigger('index.update', [4]);
                    }
                };

                trigger.attach(callback);
            },
            setWindowHeight: function() {
                // var windowHeight = window.innerHeight;
                // document.body.style.height = windowHeight + "px";
                // console.log(document.body.style.height);
                // var aboutSection = document.getElementsByClassName("section-about");
                // console.log(aboutSection);
                // if (windowHeight > 1200) {
                    // aboutSection[0].style.height = windowHeight-320 + 'px';
                    // aboutSection[0].style.marginTop = (windowHeight-1200)*0.5+64 + 'px';
                // } else {
                    // aboutSection[0].style.height = 720 + 'px';
                    // aboutSection[0].style.marginTop = 64 + 'px';

                // }
            }
        },
        created() {
            // window.addEventListener('scroll', this.handleScroll);
            var instance = this;
            document.addEventListener('DOMContentLoaded', this.triggerEvent(this));
            window.addEventListener("resize", this.setWindowHeight);
        },
        destroyed() {
            // 記得要移除掉 Evenet Listener，否則再下一次進來這個 Component 時就會不運作
            var instance = this;
            document.removeEventListener('DOMContentLoaded', this.triggerEvent(instance))
            // window.removeEventListener('scroll', this.handleScroll);
        },
        mounted() { 
            console.log(this.isDesignContentShow);
            this.isDesignContentShow = false;
            this.isEducatorContentShow = false;
            this.isWriterContentShow = false;
            this.setWindowHeight()
            $('.header-picture-container').tilt({
                // glare: true,
                scale: 1.05,
                perspective: 1500,
                transition: true,
                speed: 2000
            });
            $('.work-1-container').tilt({
                scale: 1.1,
                maxGlare: .5,
                perspective: 1500,
                transition: true
            });
            $('.work-2-container').tilt({
                scale: 1.1,
                perspective: 1500,
                transition: true
            });
            $('.work-3-container').tilt({
                scale: 1.1,
                perspective: 1500,
                transition: true
            });
            $('.work-4-container').tilt({
                scale: 1.1,
                perspective: 1500,
                transition: true
            });
            $('.developer-container').tilt({
                scale: 1.02,
                perspective: 3000,
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
                speed: 4,
                center: false,
                round: true,
            });
        },
        components: {
            HeaderBar,
            FooterBar,
            TitleContainer,
            WorksContainer,
            ArticleContainer,
            BackgroundRope,
            HoverPicture,
            MoreButton,
            PageIndicator
        }
    }
</script>

<style scope lang="sass">
    @import '~styles/main.sass'

    [v-cloak]
        display: none;
    
    .container
        max-width: 1600px
        margin-left: auto
        margin-right: auto

    .section-about
        background-color: transparent
        margin-top: 32px
        width: 100%
        height: auto
        padding-top: 0px
        
    .section-slogan
        margin-top: 60px
        margin-bottom: 60px

    .el-row 
        background-color: transparent
    .el-col 
        background-color: transparent
    .header-info
        z-index: 5

    .background-ropes
        top: -160px
        left: 0px
        height: 100%
        width: 100%

    .page-control
        position: fixed
        width: 100px
        left: 24px

    .slide-fade-enter
        opacity: 0
        // transform: translateY(140px)
    .slide-fade-enter-active
        transition: all 0.5s ease 0.05s
    .slide-fade-enter-to
        opacity: 1
        transform: translateY(0px)
    .slide-fade-leave-active
        transition: all 0.5s ease 0.05s
    .slide-fade-leave-to
        opacity: 0

    .header-background
        position: absolute
        opacity: 0.05
        font-size: 180px
        font-weight: 800
        letter-spacing: 8px
        line-height: 150px
        left: -20%
        top: -42%

    .design-background
        position: absolute
        opacity: 0.04
        font-size: 200px
        font-weight: 800
        letter-spacing: 0px
        line-height: 150px
        left: -2%
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
        left: 6%
        top: -43%

    .header-separator
        position: absolute
        +size(200px, 16px)
        // background-color: white
        top: 118px
        left: 80px
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
        font-weight: 500

    .skill-item
        display: block
        width: 300px
        text-decoration: none
        cursor: pointer

    .skill-item-name
        font-size: 24px
        font-weight: 700
        display: inline-block
        margin-bottom: 2px
        letter-spacing: 1px
        transition: transform 0.5s
        transition-timing-function: cubic-bezier(0.2,1,0.3,1)
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.6)
        padding-right: 8px
        
        &:before
            content: ''
            position: absolute
            z-index: -1
            bottom: 0
            left: -4px
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
        font-size: 14px
        color: $text-color-gray
        margin-bottom: 8px
        margin-top: 2px
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
        height: 520px
        transform-style: preserve-3d
        margin-top: 24px
        box-shadow: 16px 16px 50px $shadow-color-black

        #header-picture
            background-image: url('~assets/images/sample-city.png')
            background-size: cover
            min-height: 520px
            height: 100%
            width: 100%
            z-index: 3
            opacity: 0
            animation: imageFadeIn 0.8s ease-out 1.2s forwards

            .revealer
                width: calc(100% + 20px)
                height: 600px
                transform: scale3d(0,1,1)
                background-color: $default-background-color

        #header-location
            position: absolute
            background-color: transparent
            font-size: 16px
            top: 24px
            left: -32px
            text-shadow: 2px 2px 4px black
            transform: translateZ(20px)

    .section-scroll-hint
        bottom: 64px
        right: 80px
        position: fixed
        height: 88px

    .scroll-hint
        font-size: 12px
        // font-weight: 300
        letter-spacing: 1px
        margin: 16px auto 
        text-align: center

    .scroll-line
        width: 3px
        height: 80px
        background: white
        margin: 24px auto

    .mouse
        margin-top: 64px
        margin-bottom: 10px
        margin-left: auto
        margin-right: auto
        
    .mouse-icon
        width: 20px
        height: 36px
        border: 2px solid white
        border-radius: 15px
        cursor: pointer
        position: relative
        text-align: center
        margin-left: auto
        margin-right: auto

    .mouse-wheel
        height: 4px
        width: 4px
        margin: 2px auto 0
        display: block
        background-color: white
        // border-radius: 50%
        animation: 1.6s ease infinite wheel-up-down


    @keyframes wheel-up-down
        0%
            transform: translateY(4px)
            opacity: 0
        40%
            opacity: 1
        80%
            transform: translateY(24px)
            opacity: 0
        100%
            opacity: 0

    #separator-3
        // +size(480px, 2px)
        background-color: white
        margin-top: 40px
        margin-bottom: 16px

    #slogan-small
        // font-family: 'Playfair Display', serif
        font-size: 36px
        line-height: 48px
        margin-left: auto
        margin-right: auto
        text-align: center

    .work-image-container
        box-shadow: 16px 16px 50px $shadow-color-black

    .section-designer
        margin-left: auto
        margin-right: auto
        margin-top: 180px
        margin-bottom: 0px
        height: 820px

        .designer-titlecontainer
            max-width: 400px

        .inline-container
            display: inline-block

        .work-1-container
            +size(320px, 320px)
            top: -160px
            display: inline-block

        .work-2-container
            +size(320px, 320px)
            top: -40px
            margin-left: 60px
            display: inline-block

        .work-3-container
            +size(320px, 320px)
            top: -200px

        .work-4-container
            +size(320px, 320px)
            margin-left: 60px
            top: -80px

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    .section-motto
        margin-top: 60px
        margin-bottom: 0px

        #motto
            margin-left: auto
            margin-right: auto
            letter-spacing: 2px
            line-height: 96px
            font-size: 72px
            text-shadow: 6px 10px 20px rgba(0, 0, 0, 0.5)

        .motto-bg
            +size(208px, 190px)
            opacity: 0.1
            left: -64px
            top: -32px
            position: absolute
            background-image: url('~assets/images/moto-icon.png')
            background-size: contain
            background-repeat: no-repeat

        .motto-separator
            +size(320px, 20px)
            top: 220px
            left: 0px
            position: absolute
            background: linear-gradient(to right, $gradient-light-purple, $gradient-dark-purple)
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4)

    .section-developer
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        margin-top: 180px

        .developer-titlecontainer
            max-width: 440px

        .developer-square
            +size(36vw, 36vw)
            position: absolute
            top: -4%
            left: 16%
            max-width: 600px
            max-height: 600px 
            box-shadow: 16px 16px 50px $shadow-color-black
            background: linear-gradient(to bottom right, $gradient-light-blue, $gradient-dark-blue)

        .developer-container
            margin-top: 24px
            width: 36vw
            height: 36vw
            max-width: 600px
            max-height: 600px


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
            font-size: 16px
            position: absolute
            transform: rotate(-90deg) translateX(40%)
            bottom: 10%
            left: -15% 
            text-align: right
            line-height: 28px
            letter-spacing: 1px
            font-weight: 500
            // opacity: 0.8
            // font-weight: 700
            // font-size: 140px
            // left: -8%
            // bottom: 12%
            // text-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3)
            // z-index: 5

        .developer-project-select
            font-size: 36px
            margin-top: 64px
            margin-bottom: 96px   

            ul
                padding: 0px
            li 
                font-family: 'Playfair Display', serif
                font-size: 26px
                font-style: italic
                color: $text-color-gray
                text-decoration: none
                display: inline-block
                margin-right: 40px
                cursor: pointer
                transition: all 0.2s cubic-bezier(1, 0.68, 0.16, 0.9)
                &:hover
                    color: white


            .projectSelected
                transition: all 0.2s cubic-bezier(1, 0.68, 0.16, 0.9)
                color: white
                animation:
                &:after
                    content: ''
                    position: absolute
                    background: white
                    bottom: -8px
                    left: -6px
                    height: 2px
                    width: calc(100% + 12px)
                    transform: scale3d(1, 1, 1)
                    transform-origin: 0% 50%
                    animation: selectFadeIn 0.3s ease-in forwards

        .developer-project-content
            width: 480px
            .project-name
                font-size: 26px
                font-weight: 600
                margin-bottom: 14px
            .project-time
                font-size: 20px
                font-weight: 500
                margin-bottom: 8px
            .project-description
                font-size: 18px
                font-weight: 300
            

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    .section-educator
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        margin-top: 200px
        margin-bottom: -80px
        height: 720px

        .educator-titlecontainer
            max-width: 400px

        .contact
            margin-top: 16px
            margin-bottom: 32px
            a
                color: $text-color-green
                cursor: pointer
                font-weight: 500
                &:hover
                    &:after
                        transform: scale3d(1, 1, 1)
                &:after
                    content: ''
                    position: absolute
                    background: #5EEBA5
                    transition: transform 0.4s
                    transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9)
                    bottom: -8px
                    left: -6px
                    height: 3px
                    width: calc(100% + 12px)
                    transform: scale3d(0, 1, 1)
                    transform-origin: 0% 50%
            

        .educator-container
            margin-top: 96px
            text-align: center

        .educator-work-1-col
            height: 360px
        .educator-work-1
            +size(100%, 100%)
            background-image: url('~assets/images/sample-e-1.png')
            background-size: cover
            margin-bottom: 40px

        .educator-work-2-col
            height: 400px
        .educator-work-2
            +size(100%, 100%)
            background-image: url('~assets/images/sample-e-2.png')
            background-size: cover
            top: -180px
            margin-bottom: 40px

        .educator-work-3-col
            top: 320px
            height: 240px
        .educator-work-3
            +size(280px, 280px)
            background-image: url('~assets/images/sample-e-3.png')
            background-size: cover
            top: -420px
            margin-bottom: 40px

        .educator-triangle
            +size(280px, 280px)
            position: absolute
            top: -400px
            left: 32px
            background: linear-gradient(to bottom right, $gradient-light-yellow 20%, $gradient-dark-yellow 100%)

        .educator-info
            text-align: left
            width: 280px
            top: 50%


    .section-writer
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        height: 720px

        .writer-titlecontainer
            margin-top: 80px
            max-width: 400px

        .article-container
            margin-top: 0px

        .writer-work
            +size(140px, 140px)
            background-size: cover
            margin: 32px 24px
            margin-left: 0px
            display: inline-block
            vertical-align: middle

        .writer-work-1
            background-image: url('~assets/images/article-1.png')

        .writer-work-2
            background-image: url('~assets/images/article-2.png')

        .writer-work-3
            background-image: url('~assets/images/article-3.png')

        .article-info
            vertical-align: middle
            text-align: left
            margin-left: 24px
            display: inline-block

    .ball-1
        +size(160px, 160px)
        left: -200%
        top: 250%
        position: absolute
        filter: drop-shadow(0px 0px 6px rgba(116, 231, 255, 0.4))
        background-image: url('~assets/images/circle-blue-blur.png')
        background-size: contain
        background-repeat: no-repeat
    .ball-2
        +size(160px, 160px)
        left: 50%
        bottom: 50%
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
        top: 200%
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
        bottom: -240%
        position: absolute
        filter: drop-shadow(0px 0px 6px rgba(116, 231, 255, 0.4))
        background-image: url('~assets/images/circle-blue.png')
        background-size: contain
        background-repeat: no-repeat

    .hiddenClass 
        transition: all 0.8s ease
        opacity: 0.0
        transform: translateY(120px)
    
    .visibleClass 
        transition: all 0.8s ease
        opacity: 1.0
        transform: translateY(0px)


    .fade-text-enter-active, .fade-text-leave-active 
        transition: opacity 0.3s ease

    .fade-text-enter, .fade-text-leave-active
        opacity: 0


    .fade-delay-bg-enter
        opacity: 0.04
        transform: translateY(240px)
    .fade-delay-bg-enter-active
        transition: all 0.8s cubic-bezier(0.22, 0.86, 0.72, 0.99)
    .fade-delay-bg-enter-to
        opacity: 0.04
        transform: translateY(0px)

    .fade-delay1-enter
        opacity: 0
        transform: translateY(200px)
    .fade-delay1-enter-active
        transition: all 0.8s cubic-bezier(0.22, 0.86, 0.72, 0.99)
    .fade-delay1-enter-to
        opacity: 1
        transform: translateY(0px)

    .fade-delay2-enter
        opacity: 0
        transform: translateY(200px)
    .fade-delay2-enter-active
        transition: all 0.8s cubic-bezier(0.22, 0.86, 0.72, 0.99) 0.15s
    .fade-delay2-enter-to
        opacity: 1
        transform: translateY(0px)

    .fade-delay3-enter
        opacity: 0
        transform: translateY(200px)
    .fade-delay3-enter-active
        transition: all 0.8s cubic-bezier(0.22, 0.86, 0.72, 0.99) 0.3s
    .fade-delay3-enter-to
        opacity: 1
        transform: translateY(0px)

    .fade-delay4-enter
        opacity: 0
        transform: translateY(200px)
    .fade-delay4-enter-active
        transition: all 0.8s cubic-bezier(0.22, 0.86, 0.72, 0.99) 0.45s
    .fade-delay4-enter-to
        opacity: 1
        transform: translateY(0px)


    .fade-delay5-enter
        opacity: 0
        transform: translateY(200px)
    .fade-delay5-enter-active
        transition: all 0.8s cubic-bezier(0.22, 0.86, 0.72, 0.99) 0.6s
    .fade-delay5-enter-to
        opacity: 1
        transform: translateY(0px)


    .fade-enter-active-image
        transform-origin: 100% 50%;
        animation: imageIn 0.8s cubic-bezier(0.23,1.02,0.34,0.9) 1.1s forwards
    .fade-enter-content
        opacity: 0
        transition: all 0.0s
    .fade-enter-active-headerbar
        animation: headerBarIn 1.0s cubic-bezier(1,0.01,0.38,1) 0.6s forwards
    .fade-enter-active-scroll
        animation: scrollIconIn 1.0s cubic-bezier(1,0.01,0.38,1) 0.6s forwards
    .fade-enter-active-div-1
        animation: divSlideIn 0.4s cubic-bezier(1,0.01,0.38,1) 0.5s forwards
    .fade-enter-active-content-1
        animation: contentIn 0.4s ease-out 0.3s forwards
    .fade-enter-active-content-2
        animation: contentIn 0.4s ease-out 0.5s forwards
    .fade-enter-active-content-3
        animation: contentIn 0.4s ease-out 0.7s forwards
    .fade-enter-active-content-4
        animation: contentIn 0.5s ease-out 0.9s forwards
    .fade-enter-active-content-5
        animation: contentIn 0.5s ease-out 1.1s forwards
    .fade-enter-active-content
        animation: contentIn 0.8s ease-out 0.5s forwards

    @keyframes imageIn 
        0%
            transform: scale3d(1,1,1)
            transform-origin: 100% 50%
        100%
            transform: scale3d(0,1,1)
            transform-origin: 100% 50%

    @keyframes headerBarIn
        0%
            transform: translateY(-140px)
            opacity: 1.0
        100%
            transform: translateY(0px)
            opacity: 1.0

    @keyframes scrollIconIn
        0%
            transform: translateY(120px)
            opacity: 0.0
        100%
            transform: translateY(0px)
            opacity: 1.0

    @keyframes divSlideIn 
        0%
            transform: scale3d(0,1,1)
            transform-origin: 0% 50%
            opacity: 1.0
        100%
            transform: scale3d(1,1,1)
            transform-origin: 0% 50%
            opacity: 1.0

    @keyframes imageFadeIn 
        0%
            opacity: 0
        100%
            opacity: 1.0

    @keyframes selectFadeIn 
        0%
            opacity: 0
            // transform: translateY(10px)
            transform: scale3d(0,1,1)
            transform-origin: 0% 50%
        100%
            opacity: 1.0
            // transform: translateY(0px)
            transform: scale3d(1,1,1)
            transform-origin: 0% 50%

    @keyframes contentIn 
        0%
            transform: translateY(60px)
            opacity: 0
        100%
            transform: translateY(0px)
            opacity: 1.0

</style>