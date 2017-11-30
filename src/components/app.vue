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
                                            移動裝置介面設計, 網頁介面設計
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
                                            iOS/Web 開發 , UI/UX, 跨領域溝通
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
                                <titleContainer class="designer-titlecontainer"更多作品 index="01" title="Designer" description="2015 年開始接觸介面設計；目前是一位專注在「移動裝置」和「前端網頁」的介面設計師；工作的範圍涵蓋產品主視覺、介面設計、視覺設計以及部分商業設計的內容（素材、Banner）。"></titleContainer>
                                <moreButton title="更多作品" directLink="https://www.facebook.com/citysite1025?ref=bookmarks">
                                </moreButton>
                                <div v-show="isDesignContentShow" class="ball-2 rellax"></div>
                            </el-col>
                        </transition>
                    <el-col :span="13">
                        <transition name="fade-delay2">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-1-container work-image-container">
                                    <hoverPicture class="work" title="Tickle App" description="在團隊中負責 Tickle App iOS、Web 整體的流程與介面設計；根據決策團隊的需求完成產品功能的設計，角色場景繪製以及支援行銷團隊的素材設計。" imageSource="../../src/assets/images/design-tickle.png" directLink="design-tickle">
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade-delay3">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-2-container work-image-container">
                                    <hoverPicture class="work" title="介面視覺元件" description="App Icon、擬物化光影練習與 Daily UI 等介面視覺元件。" imageSource="../../src/assets/images/design-element.png" directLink="design-element">
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
                                    <hoverPicture class="work" title="iOS 介面" description="iOS 設計專案：包含 Moment 的 Redesign 概念、Hahow 課程示範的 Howhow 與中國投資人合作提案的「等等」。" imageSource="../../src/assets/images/design-ios.png" directLink="design-ios">
                                        
                                    </hoverPicture>
                                </div>
                            </div>
                        </transition>
                        <transition name="fade-delay5">
                            <div class="inline-container" v-show="isDesignContentShow">
                                <div class="work-4-container work-image-container">
                                    <hoverPicture class="work" title="網頁介面" description="Web 設計專案：包含 Tickle 網頁版介面（持續開發中），The Long Web 的 Redesign 概念與 Cosign 的視覺提案。" imageSource="../../src/assets/images/design-web.png" directLink="design-web">
                                        
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
      <!--                   <transition name="fade-text" mode="out-in">
                            <h3 class="work-developer-index" :key=projectIndexs[projectIndex]>
                                {{projectIndexs[projectIndex]}}
                            </h3>
                        </transition>
                        <div class="work-developer-separator">
                        </div>
                        <transition name="fade-text" mode="out-in">
                            <h3 class="work-developer-subtitle" :key=projectTimes[projectIndex]>
                                {{projectTimes[projectIndex]}}
                            </h3>
                        </transition> -->
                        <transition name="fade-text" mode="in-out">
                            <div v-if="projectIndex==0" class="developer-container work-image-container">
                                <hoverPictureLarge class="work" title="Tickle" time="2015.9 ─ 現在" description="擔任資深 iOS 工程師與介面設計師，負責 iOS 主產品開發：包含 API 的設計與規劃、會員系統、商城系統、課程系統、ARKit、Device 藍芽傳輸、客製化 UI 等等。" directLink="https://itunes.apple.com/us/app/tickle-app-learn-to-code/id1063639403?mt=8" imageSource="../../src/assets/images/design-tickle.png"></hoverPictureLarge>
                                <!-- <h3 class="work-developer-subtitle" :key=projectJobs[projectIndex]>
                                    2016/8 - 2017/12
                                </h3> -->
                            </div>
                            <div v-else-if="projectIndex==1" class="developer-container work-image-container">
                                <hoverPictureLarge class="work" title="KAPI 找咖啡" time="2017.1 ─ 現在" description="與夥伴共同開發/創辦「KAPI 找咖啡」這個 Side Project。在團隊中負責 iOS 版本的開發、介面的互動設計與粉絲團經營。KAPI 找咖啡的主要目的在於快速的幫助使用者找到最適合自己的咖啡店，上架一週內即突破千次下載。" directLink="https://itunes.apple.com/tw/app/kapi%E6%89%BE%E5%92%96%E5%95%A1/id1261224197?mt=8" imageSource="../../src/assets/images/design-kapi.png"></hoverPictureLarge>
                            </div>
                            <div v-else-if="projectIndex==2" class="developer-container work-image-container">
                                <hoverPictureLarge class="work" title="The Cosign Studio" time="2017.8 ─ 現在" description="與兩位夥伴 Money, Gwynne 共同創辦 The Cosign Studio，在團隊中負責網頁開發，活動企劃以及前端開發的工作坊講師；The Cosign Studio 定期舉辦工程師與設計師的交流活動，目的在於提供一個場合讓夥伴們分享彼此在專業和工作上面的心得，或者透過工作坊學習相關的基礎技能。" directLink="https://www.facebook.com/groups/207617269772052/" imageSource="../../src/assets/images/design-cosign.png"></hoverPictureLarge>
                            </div>
                            <div v-else-if="projectIndex==3" class="developer-container work-image-container">
                                <hoverPictureLarge class="work" title="TalkUX" time="2017.4 ─ 2017.8" description="Talk UX 是一個國際型的 UX 組織，於2017年加入擔任 TalkUX Web Team 的志工前端工程師；在團隊中支援 Talk UX 台北場的網頁開發，以及視覺優化的內容。" directLink="http://www.talk-ux.com/" imageSource="../../src/assets/images/design-talkux.png"></hoverPictureLarge>
                            </div>
                            <div v-else-if="projectIndex==4" class="developer-container work-image-container">
                                <hoverPictureLarge class="work" title="Fetus Care" time="2015.1 ─ 2015.8" description="Fetus Care 是 2015 年 Reddot Design Award 的得獎作品，同時也是碩士時期的國科會計畫；在團隊中負責 Android App 的產品開發、藍牙/Wifi 通訊、Arduino 電路設計以及胎心音偵測感測器實作。" directLink="http://www.red-dot.sg/en/" imageSource="../../src/assets/images/design-fetus.png"></hoverPictureLarge>
                            </div>
                        </transition>
                    </el-col>
                    <el-col :span="10">
                        <transition name="fade-delay1">
                            <titleContainer v-show="isDeveloperContentShow" class="developer-titlecontainer" index="02" title="Software Developer" description="畢業於 NTUST 積體電路所，目前是一位資深軟體工程師（主要開發 iOS ）；具有 iOS（Swift, ObjectiveC）， 前端（Html, CSS, Sass, Javascript 和 Vue.js） ，Arduino 和嵌入式系統等平台開發經驗。"></titleContainer>
                        </transition>
                        <transition name="fade-delay2">
                            <div v-show="isDeveloperContentShow" class= "developer-project-select">
                                <ul>
                                    <li v-bind:class="{ projectSelected: projectIndex==0}" v-on:click="selectProject(0)">001</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==1}" v-on:click="selectProject(1)">002</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==2}" v-on:click="selectProject(2)">003</li>
                                </ul>
                                <ul>
                                    <li v-bind:class="{ projectSelected: projectIndex==3}" v-on:click="selectProject(3)">004</li>
                                    <li v-bind:class="{ projectSelected: projectIndex==4}" v-on:click="selectProject(4)">005</li>
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
                            <titleContainer class="educator-titlecontainer" index="03" title="Speaker" description="2016 年與 David 在 Hahow 開設「iOS 入門-從介面設計到開發」的線上課程，負責介面設計與部分程式開發的課程，目前已經有超過 380 位的學生；曾受邀擔任大同大學介面體驗客座講師、NTUST 客座講師與 NTU 資工系客座講師。同時持續的在國內舉辦與前端領域、跨領域相關的小型工作坊。"></titleContainer>
                            <div class="contact">
                                <a class="contact-link" href="mailto:citysite1025@gmail.com">聯絡我</a>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="-50 -50 100 100" xml:space="preserve">
                    <line x1="-24" y1="0" x2="30" y2="0"></line>
                    <polyline fill="none" stroke="#5EEBA5" stroke-width="5" stroke-linecap="round" points="
                    18.0,-12.0 30,0 18.0,12.0 "/>
                </svg>
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
                            <titleContainer class="writer-titlecontainer" index="04" title="Writer" description="熱愛透過文字分享經驗；目前是一位持續透過 Medium 分享和介面設計、工程開發、跨領域溝通相關知識的 Content Creator；在 Medium 有著 1500 位的 Follower 以及超過 20 萬的文章點閱數量。"></titleContainer>
                            <moreButton title="更多文章" directLink="https://medium.com/@citysite1025">
                            </moreButton>
                        </el-col>
                    </transition>
                    <el-col v-show="isWriterContentShow" class="article-container" :span="12" :offset="2">
                        <el-row :gutter="16">
                            <transition name="fade-delay2">
                                <el-col v-show="isWriterContentShow" class="writer-container" :span="24" :offset="0">
                                    <a href="https://medium.com/as-a-product-designer/%E5%AF%AB%E7%B5%A6%E4%B8%8D%E6%98%AF%E8%A8%AD%E8%A8%88%E5%B8%AB%E7%9A%84-%E6%BC%B8%E5%B1%A4%E9%85%8D%E8%89%B2-%E4%B8%8A-b1f9771dd803">
                                        <div class="writer-work writer-work-1">
                                        </div>
                                        <articleContainer class="article-info" title="Gradient Color 101 - Part1" description="如果你是一位對於設計、顏色沒有完整概念的夥伴，這篇文章就是專門為你而準備的！漸層系列的文章會帶著你一步一步的理解「漸層」在介面上是如何被應用的。 "></articleContainer>
                                    </a>
                                </el-col>
                            </transition>
                            <transition name="fade-delay3">
                                <el-col v-show="isWriterContentShow" class="writer-container" :span="24" :offset="0">
                                    <a href="https://medium.com/@citysite1025/%E5%AF%AB%E7%B5%A6%E4%B8%8D%E6%98%AF%E8%A8%AD%E8%A8%88%E5%B8%AB%E7%9A%84-%E5%90%8D%E7%89%87%E8%A3%BD%E4%BD%9C-2187cd29e227">
                                        <div class="writer-work writer-work-2">
                                        </div>
                                        <articleContainer class="article-info" title="Name Card Printing Basic" description="名片在送印前其實有許多第一次可能會犯的錯誤；這篇文章透過自身慘痛的經驗來告訴你再送印名片之前，我們       還需要特別注意些什麼事情！"></articleContainer>
                                    </a>
                                </el-col>
                            </transition>
                            <transition name="fade-delay4">
                                <el-col v-show="isWriterContentShow" class="writer-container" :span="24" :offset="0">
                                    <a href="https://medium.com/@citysite1025/%E7%B0%A1%E5%A0%B1%E5%9F%BA%E7%A4%8E%E6%8E%92%E7%89%88-a0ef7d4606ec">
                                        <div class="writer-work writer-work-3">
                                        </div>
                                        <articleContainer class="article-info" title="Presentation Layout" description="對於簡報排版總是感到苦惱嗎？這篇文章會一步一步的帶著你透過格線系統來進行高效率的版面規劃，同時也會補充許多簡報排版時應該要注意到的細節。"></articleContainer>
                                        <div class="ball-7 rellax"></div>
                                    </a>
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
    import HoverPictureLarge from './Element/hoverPictureLarge.vue';
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
                projectTimes: ['2015.8 ─ 現在', '2017.1 ─ 現在', '2017.4 ─ 2017.10', '2017.8 ─ 現在', '2015.1 ─ 2015.8'],
                projectDescriptions: ['1Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet', '2Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet', '3Lorem ipsum dolor sit amet, consectetur adipisicing elit, Lorem ipsum dolor sit amet'],
                projectJobs: ['Engineer, UI Deisgn and Script','Cofounder, iOS developement','Cofunder, web developement'],
                projectIndexs: ['Tickle','KAPI','Cosign','TalkUX','Fetus'],
                projectImages: ['../../src/assets/images/design-tickle.png', '../../src/assets/images/sample-3.png', '../../src/assets/images/sample-4.png']
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
            HoverPictureLarge,
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
        font-size: 180px
        font-weight: 800
        letter-spacing: 0px
        line-height: 150px
        left: 2%
        top: -56%

    .developer-background
        position: absolute
        opacity: 0.04
        font-size: 180px
        font-weight: 800
        letter-spacing: 0px
        line-height: 150px
        right: 0%
        top: -48%

    .educator-background
        position: absolute
        opacity: 0.04
        font-size: 240px
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
            bottom: -2%
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
            margin-top: 64px
            margin-bottom: 32px
            display: flex
            align-items: center
            &:hover
                svg
                    transform: translateX(8px)
                // a:after
                //     transform: scale3d(1, 1, 1)

            .contact-link
                text-decoration: none
            a
                color: $text-color-green
                cursor: pointer
                font-weight: 300
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
            background-image: url('~assets/images/speaker-1.png')
            background-size: cover
            margin-bottom: 40px

        .educator-work-2-col
            height: 400px
        .educator-work-2
            +size(100%, 100%)
            background-image: url('~assets/images/speaker-2.png')
            background-size: cover
            top: -180px
            margin-bottom: 40px

        .educator-work-3-col
            top: 320px
            height: 240px
        .educator-work-3
            +size(280px, 280px)
            background-image: url('~assets/images/speaker-ios.png')
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

        svg
            transition: all 1.5s cubic-bezier(0,1.09,0.56,1)
            box-sizing: border-box

        line
            stroke: $text-color-green
            stroke-width: 5px
            stroke-linecap: round


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
            cursor: pointer

        .writer-work-1
            background-image: url('~assets/images/article-1.png')

        .writer-work-2
            background-image: url('~assets/images/article-2.png')

        .writer-work-3
            background-image: url('~assets/images/article-3.png')

        .article-info
            cursor: pointer
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