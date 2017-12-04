<template lang="html">
    <div class="container-ios">
        <headerBar class="ios-header" :showWorks="true"></headerBar>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        iOS UI Design.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title-first">
                        Moment
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        Moment App 是我基於 KAPI 找咖啡練習的一個概念型介面設計；產品的目標在於發掘、紀錄和收藏每座城市中的好所在，透過客製化的標籤、即時回報系統的功能來滿足使用者找到各地「好所在」的體驗；初步概念的主要目標會在於提供世界各地的咖啡店、選物店和獨立書店的資訊。 
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <div class="hero-image-ios">
                        <img src="../assets/images/design-moment.png"/>
                    </div>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title">
                        Howhow
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        Howhow 是在 Hahow 開設的 「iOS 開發 - 從介面設計到實作」課程中帶著學生從架構建構、Wireframe 開始，到 icon、與視覺化設計的一個完整專案；除了設計相關的㡪容以外，課程的內容同時也包含如何與工程師溝通，如何在設計時考慮工程開發可能需要額外加註的內容來提升工作效率等等。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-ios">
                    <img src="../assets/images/design-howhow-wireframe.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-ios">
                    <img src="../assets/images/hero-howhow.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title">
                        等等（Waiting）
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        等等（Waiting）是針對「等待」這個主題進行設計的社群平台；中國的使用者往往會在例如排隊、塞車等狀況面臨長時間等待的狀況，我們構想了一個基於 LBS，針對「等待」的主題進行討論，提供資訊的平台。考慮在地化「彈幕」的盛行，在聊天的介面上面我們也加入彈幕的概念來提供使用者更熟悉的體驗。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-ios">
                    <img src="../assets/images/hero-waiting.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="next-title">
                    Next Project
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="next-content">
                    <a class="next-link" href="/#/design-web">網頁介面</a>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="-50 -50 100 100" xml:space="preserve">
                        <line x1="-24" y1="0" x2="30" y2="0"></line>
                        <polyline fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" points="
                        18.0,-12.0 30,0 18.0,12.0 "/>
                    </svg>
                </div>
            </el-col>
        </el-row>
        <footerBar></footerBar>
    </div>
</template>

<script>
    import BackgroundRope from './Element/background.vue';
    import HeaderBar from './Element/header.vue';
    import FooterBar from './Element/footer.vue';

    export default {
        data () {
            return {
            }
        },
        components: {
            BackgroundRope,
            HeaderBar,
            FooterBar
        }
  }
</script>

<style scope lang="sass">
    @import '~styles/main.sass'

    .container-ios
        width: 100%
        // max-width: 2200px 
        margin-left: auto
        margin-right: auto
    
    .hero-image-ios
        width: 100%
        height: auto
        margin-top: 40px
        img
            width: 100%
            height: 100%

    .header-name-work
        margin-top: 120px
        margin-bottom: 120px
        font-size: 80px
        letter-spacing: 0px


    .intro-title-first
        font-size: 32px
        font-weight: 700
        margin-top: -4px
        margin-bottom: 18px
        line-height: 42px
        width: 400px
        margin-left: 0px
        margin-right: 0px
        
    .intro-title
        font-size: 32px
        font-weight: 700
        margin-top: 120px
        margin-bottom: 18px
        line-height: 42px
        width: 400px
        margin-left: 0px
        margin-right: 0px

    .intro-content
        font-size: 17px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 28px
        max-width: 800px
  

</style>