<template lang="html">
    <div>
        <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-headerbar">
            <headerBar :showAbout="true" :showWork="false"></headerBar>
        </transition>
        <div class="container">
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
                                            UI Designer
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
                                            Developer
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
                                            Educator
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
                        <!-- <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-scroll" name="slide-fade">
                            <div v-show="isScrollHintShow" class="scroll-hint">SCROLL
                            </div>
                        </transition>
                        <transition appear appear-to-class="fade-enter-content"
                                    appear-active-class="fade-enter-active-scroll" name="slide-fade">
                            <div v-show="isScrollHintShow" class="scroll-line">
                            </div>
                        </transition> -->
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
                        <h3 id="slogan-small">I am on constant search for interesting ideas and great teammates. <br>If you are on the same hunt, send me a shoutout on Facebook/via email! <br>Let’s brain storming on some cool side projects together.</h3>
                        <div id="separator-3"></div>
                    </el-col>
                </el-row>  
            </section>
            <section class="section-designer">
                    <el-row :gutter="16">
                        <!-- <transition name="fade-delay-bg"> -->
                            <h1 v-show="isDesignContentShow" class="design-background">
                                DESIGN
                            </h1>
                        <!-- </transition> -->
                        <transition name="fade-delay1">
                            <el-col v-show="isDesignContentShow" :span="8" :offset="2">
                                <titleContainer class="designer-titlecontainer" index="01" title="Designer" description="User Interace, Graphic Design, Commercial Design, and some cool stuff Design. User Interace, Graphic Design."></titleContainer>
                                <moreButton>
                                </moreButton>
                                <div v-show="isDesignContentShow" class="ball-2 rellax"></div>
                            </el-col>
                        </transition>
                    <el-col :span="6">
                        <transition name="fade-delay2">
                            <div v-show="isDesignContentShow">
                                <div class="work-1-container work-image-container">
                                    <hoverPicture class="work" title="TICKLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/design-tickle.png" directLink="design-tickle">
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                    <el-col :span="6">
                        <transition name="fade-delay3">
                            <div v-show="isDesignContentShow">
                                <div class="work-2-container work-image-container">
                                    <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-4.png">
                                        
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                </el-row>
                <el-row :gutter="16">
                    <el-col :span="6" :offset="10">
                        <transition name="fade-delay4">
                            <div v-show="isDesignContentShow">
                                <div class="work-3-container work-image-container">
                                    <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-1.png">
                                        
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                    </el-col>
                    <el-col :span="6">
                        <transition name="fade-delay5">
                            <div v-show="isDesignContentShow">
                                <div class="work-4-container work-image-container">
                                    <hoverPicture class="work" title="SAMPLE" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet, consectetur adipisicing elit." imageSource="../../src/assets/images/sample-3.png">
                                        
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
                    <el-col :span="10" :offset="4">
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
                            <titleContainer v-show="isDeveloperContentShow" class="developer-titlecontainer" index="02" title="Developer" description="A developer with Swift, ObjectiveC, Html, CSS, Sass, Javascript, JQuery, Vue.js experience."></titleContainer>
                        </transition>
                        <transition name="fade-delay2">
                            <div v-show="isDeveloperContentShow" class= "developer-project-select">
                                <ul>
                                    <li v-bind:class="{ projectSelected: projectIndex==0}" v-on:click="selectProject(0)">001</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==1}"v-on:click="selectProject(1)">002</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==2}"v-on:click="selectProject(2)">003</li>
                                </ul>
                            </div>
                        </transition>
                        <transition name="fade-delay3">
                            <div v-show="isDeveloperContentShow" class="developer-project-content">
                                <transition name="fade-text" mode="out-in">
                                    <h3 class="project-name" :key=projectTitles[projectIndex]>{{projectTitles[projectIndex]}}
                                    </h3>
                                </transition>
                                <!-- <transition name="fade-text" mode="out-in">
                                    <p class="project-time" :key=projectTimes[projectIndex]>{{projectTimes[projectIndex]}}
                                    </p>
                                </transition> -->
                                <transition name="fade-text" mode="out-in">
                                    <p class="project-description":key=projectDescriptions[projectIndex]>{{projectDescriptions[projectIndex]}}
                                    </p>
                                </transition>
                            </div>
                        </transition>

                    </el-col>
                </el-row>
            </section>
            <section class="section-educator">
                <el-row :gutter="16">
                    <h1 class="educator-background">
                        EDUCATOR
                    </h1>
                    <transition name="fade-delay1">
                        <el-col v-show="isEducatorContentShow" :span="7" :offset="2">
                            <titleContainer class="educator-titlecontainer" index="03" title="Educator" description="An educator in Hahow, NTU, NTUST, NCCU with more than 500 students in Taiwan."></titleContainer>
                            <div class="contact">
                                <a>Looking for an educator?</a>
                            </div>
                        </el-col>
                    </transition>
                    <transition name="fade-delay3">
                        <el-col v-show="isEducatorContentShow" class="educator-work-1-col" :span="5" :offset="1">
                            <div class="educator-work-1 work-image-container"></div>
                        </el-col>
                    </transition>
                    <transition name="fade-delay2">
                        <el-col v-show="isEducatorContentShow" class="educator-work-2-col" :span="5">
                            <div class="educator-work-2 work-image-container"></div>
                        </el-col>
                    </transition>
                    <transition name="fade-delay4">
                        <el-col v-show="isEducatorContentShow" class="educator-work-3-col" :span="5" :offset="15">
                            <div class="educator-triangle"></div>
                            <div class="ball-6 rellax"></div>
                            <div class="educator-work-3 work-image-container"></div>
                        </el-col>
                    </transition>
                </el-row>
            </section>
            <section class="section-writer">
                <el-row :gutter="16">
                    <transition name="fade-delay1">
                        <el-col v-show="isWriterContentShow" :span="10" :offset="2">
                            <div class="ball-5 rellax" data-rellax-speed="2"></div>
                            <titleContainer class="writer-titlecontainer" index="04" title="Writer" description="A writer with more than 1000 followers and more than 100k view’s count. A writer with more than 1000 followers and more than 100k view’s count."></titleContainer>
                            <div class="contact">
                                <a>Read more article?</a>
                            </div>
                        </el-col>
                    </transition>
                </el-row>
                <el-row class="article-container" :gutter="0">
                    <transition name="fade-delay2">
                        <el-col v-show="isWriterContentShow" class="writer-container" :span="6" :offset="2">
                            <div class="writer-work-1">
                            </div>
                            <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="If you’re a newcomer to design, here’s the right place!! "></articleContainer>
                        </el-col>
                    </transition>
                    <transition name="fade-delay3">
                        <el-col v-show="isWriterContentShow" class="writer-container" :span="6" :offset="1">
                            <div class="writer-work-2">
                            </div>
                            <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                        </el-col>
                    </transition>
                    <transition name="fade-delay4">
                        <el-col v-show="isWriterContentShow" class="writer-container" :span="6" :offset="1">
                            <div class="writer-work-3">
                            </div>
                            <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."></articleContainer>
                            <div class="ball-7 rellax"></div>
                        </el-col>
                    </transition>
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

                    if (scrollTop > 1800) {
                        instance.isPageIndicatorShow = true;
                    } else {
                        instance.isPageIndicatorShow = false;
                    }

                    if (scrollTop > 1800 && scrollTop < 3800) {
                        instance.pageIndex = 1;
                    } else if (scrollTop > 3800 && scrollTop < 4800) {
                        instance.pageIndex = 2;
                    } else if (scrollTop > 4800 && scrollTop < 6000) {
                        instance.pageIndex = 3;
                    } else if (scrollTop > 6000) {
                        instance.pageIndex = 4;
                    }


                    if (scrollTop > 1400) {
                        instance.isDesignContentShow = true;
                        // if (scrollTop < 4300) {
                            // instance.pageIndex = 2;
                            // $(document).trigger('index.update', [2]);
                        // }
                    }
                    if (scrollTop > 3400) {
                        instance.isDeveloperContentShow = true;
                    }
                    if (scrollTop > 4300) {
                        instance.isEducatorContentShow = true;
                        // if (scrollTop < 5300) {
                            // instance.pageIndex = 3;
                            // $(document).trigger('index.update', [3]);
                        // }
                    }
                    if (scrollTop > 5500) {
                        instance.isWriterContentShow = true;
                        // instance.pageIndex = 4;
                        // $(document).trigger('index.update', [4]);
                    }
                };

                trigger.attach(callback);
            },
            setWindowHeight: function() {
                var windowHeight = window.innerHeight;
                document.body.style.height = windowHeight + "px";
                console.log(document.body.style.height);
                var aboutSection = document.getElementsByClassName("section-about");
                console.log(aboutSection);
                if (windowHeight > 1200) {
                    aboutSection[0].style.height = windowHeight-320 + 'px';
                    aboutSection[0].style.marginTop = (windowHeight-1200)*0.5+64 + 'px';
                } else {
                    aboutSection[0].style.height = 720 + 'px';
                    // aboutSection[0].style.marginTop = 64 + 'px';

                }
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
    
    .section-about
        background-color: transparent
        margin-top: 64px
        width: 100%
        height: auto
        padding-top: 0px
        // padding-bottom: 0px
    .section-slogan
        margin-top: 120px
        margin-bottom: 120px

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
        left: 6%
        top: -43%

    .header-separator
        position: absolute
        +size(280px, 20px)
        // background-color: white
        top: 150px
        left: 120px
        background: linear-gradient(to right, $gradient-light-blue, $gradient-dark-blue)
        // box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.4)

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
        width: 400px
        text-decoration: none
        cursor: pointer

    .skill-item-name
        font-size: 30px
        font-weight: 700
        display: inline-block
        margin-bottom: 6px
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
        font-size: 22px
        color: $text-color-gray
        margin-bottom: 8px
        margin-top: 1px
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
            opacity: 0
            animation: imageFadeIn 0.8s ease-out 1.2s forwards

            .revealer
                width: calc(100% + 20px)
                height: 720px
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
        bottom: 72px
        right: 104px
        // left: 50%
        // transform: translateX(-50%)
        position: fixed
        height: 100px

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
        // display: inline-block
    .mouse-icon
        width: 25px
        height: 45px
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

    #separator-1
        +size(124px, 12px)
        background-color: white
        margin-bottom: 36px

    #separator-2
        +size(124px, 12px)
        background-color: white
        margin-top: 32px
        margin-bottom: 16px

    #separator-3
        // +size(480px, 2px)
        background-color: white
        margin-top: 40px
        margin-bottom: 16px

    #slogan-1
        font-size: 96px
        letter-spacing: 12px
        line-height: 112px
        margin-top: 16px
        margin-bottom: 16px

    #slogan-2
        font-size: 96px
        text-shadow: 16px 24px 50px $shadow-color-black
        letter-spacing: 12px
        line-height: 112px
        margin-top: 16px
        margin-bottom: 16px

    #slogan-small
        font-size: 24px
        line-height: 32px
        margin-top: 36px
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
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        margin-top: 480px
        height: 720px

        .designer-titlecontainer
            max-width: 400px

        .work-1-container
            +size(400px, 400px)
            top: -200px

        .work-2-container
            +size(400px, 400px)
            top: -60px

        .work-3-container
            +size(400px, 400px)
            top: -220px

        .work-4-container
            +size(400px, 400px)
            top: -80px

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
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        margin-top: 480px

        .developer-titlecontainer
            max-width: 440px

        .developer-square
            +size(36vw, 36vw)
            position: absolute
            top: -2.5vw
            left: 18vw
            max-width: 640px
            max-height: 640px 
            background: linear-gradient(to bottom right, $gradient-light-blue, $gradient-dark-blue)

        .developer-container
            width: 36vw
            height: 36vw
            max-width: 640px
            max-height: 640px


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
            left: -13% 
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
                // color: $text-color-gray
                font-size: 20px
                font-weight: 500
                margin-bottom: 8px
            .project-description
                font-size: 20px
                font-weight: 500
                // font-weight: 300
            

        .work
            height: 100%
            width: 100%
            background-size: cover
            z-index: 3


    .section-educator
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        margin-top: 480px
        height: 720px

        .educator-titlecontainer
            max-width: 400px

        .contact
            margin-top: 48px
            margin-bottom: 32px
            a
                color: $text-color-green
                cursor: pointer
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
            height: 280px
        .educator-work-1
            +size(320px, 420px)
            background-image: url('~assets/images/sample-e-1.png')
            background-size: cover
            margin-bottom: 40px

        .educator-work-2-col
            height: 400px
        .educator-work-2
            +size(400px, 400px)
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
        max-width: 1920px
        margin-left: auto
        margin-right: auto
        margin-top: -200px
        min-height: 840px

        .writer-titlecontainer
            max-width: 560px
        .contact
            margin-top: 48px
            margin-bottom: 80px
            a
                color: $text-color-green
                cursor: pointer
                &:hover
                    &:after
                        transform: scale3d(1, 1, 1)
                &:after
                    content: ''
                    position: absolute
                    background: #5EEBA5
                    transition: transform 0.2s
                    transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9)
                    bottom: -6px
                    left: -6px
                    height: 3px
                    width: calc(100% + 12px)
                    transform: scale3d(0, 1, 1)
                    transform-origin: 0% 50%

        .writer-container
            // border: solid 1px white
            // padding: 16px

        .writer-work-1
            +size(100%, 360px)
            background-image: url('~assets/images/article-1.png')
            background-size: cover
            margin-bottom: 24px

        .writer-work-2
            +size(100%, 360px)
            background-image: url('~assets/images/article-2.png')
            background-size: cover
            margin-bottom: 24px

        .writer-work-3
            +size(100%, 360px)
            background-image: url('~assets/images/article-3.png')
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
        transform: translateY(200px)
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
        // animation: imageIn 0.5s cubic-bezier(1,0.01,0.38,1) 1.2s forwards
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