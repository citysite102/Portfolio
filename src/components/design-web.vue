<template lang="html">
    <div class="container-about">
        <headerBar class="about-header" :showWorks="true"></headerBar>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        Web UI Design
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title-first">
                        Tickle Web Version
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        Tickle 是一款能夠幫助小朋友或者任何對於寫程式有興趣的人快速上手的學習軟體，除此之外，Tickle 可以讓你輕鬆地透過程式來控制各種不同的機器人和智慧型家電。<br><br>目前 Tickle App 只有支援 <a class="project-link" href="/#/design-tickle">iOS 版本</a>，於 2017 年開始規劃網頁版的開發。在介面設計上面，我們透過維持暗色系與 Tickle 主視覺的藍綠色，保留使用者的設計視覺體驗，同時也支援跨平台專案的整合，讓使用者能夠無縫的在不同平台上完成自己的作品。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image">
                    <img src="../assets/images/web-tickle-dashboard.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image">
                    <img src="../assets/images/web-tickle-ide.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image">
                    <img src="../assets/images/web-tickle-login.png"/>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        The Long Web
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        The Long Web 是一個提供使用者自行打造資訊入口的個人工具，透過簡單的操作流程能夠讓你輕鬆掌握自己閱讀的內容，由前輩 Aydan 所開發；這次的 Redesign 單純是個概念的嘗試。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image">
                    <img src="../assets/images/web-longweb.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Cosign Landing Page
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        The Cosign Studio 是我和兩位設計師 Money, Gwynne 所共同創辦；定期舉辦工程師、設計師和 PM 的交流活動，目的在於提供一個場合讓夥伴們分享彼此在專業和工作上面的心得，或者透過工作坊學習相關的基礎技能；除此之外，我們也盡力提供各類型 Side Project 的合作機會，達到媒合，尋找未來夥伴的目標。<br><br>在合作的過程中，我們彼此都會設計各種不同類型的 Landing Page 進行討論，並試著找出 Studio 的核心概念與設計風格。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image">
                    <img src="../assets/images/web-cosign.png"/>
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
    
    .hero-image
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
        font-size: 18px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 30px
        max-width: 800px

    .project-link
        font-size: 18px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 30px
        max-width: 800px
        transition-duration: 0.2s
        &:hover
            color: $text-color-green

  

    .fade-enter-content
        opacity: 0
        transition: all 0.0s
    .fade-enter-active-profile-title
        animation: aboutTitleIn 0.4s ease-out 0.3s forwards
    .fade-enter-active-profile-content
        animation: aboutTitleIn 0.4s ease-out 0.4s forwards
    .fade-enter-active-profile-content-1
        animation: aboutTitleIn 0.4s ease-out 0.5s forwards
    .fade-enter-active-profile-content-2
        animation: aboutTitleIn 0.4s ease-out 0.6s forwards
    @keyframes aboutTitleIn 
        0%
            transform: translateY(60px)
            opacity: 0
        100%
            transform: translateY(0px)
            opacity: 1.0

</style>