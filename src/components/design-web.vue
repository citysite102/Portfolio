<template lang="html">
    <div class="container-about">
        <headerBar class="about-header" :showWorks="true"></headerBar>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        Web UI Design.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title-first">
                        Tickle Web Version
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        Tickle 是一款能夠幫助小朋友或者任何對於寫程式有興趣的人快速上手的學習軟體，除此之外，Tickle 可以讓你輕鬆地透過程式來控制各種不同的機器人和智慧型家電。<br><br>目前 Tickle App 只有支援 <a class="project-link" href="/#/design-tickle">iOS 版本</a>，但已經著手開始進行網頁版的開發。在介面設計上面，我們維持暗色系的背景與 Tickle 主視覺的藍綠色，保留使用者的視覺體驗一致性，在功能上面也會支援跨平台的專案整合，讓使用者能夠無縫的在不同平台上完成自己的作品。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <div class="hero-image">
                        <img src="../assets/images/web-tickle-dashboard.png"/>
                    </div>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image">
                    <img src="../assets/images/web-tickle-ide.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image">
                    <img src="../assets/images/web-tickle-login.png"/>
                </div>
            </el-col>
        </el-row>

        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title">
                        The Long Web
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        The Long Web 是一個提供使用者自行打造資訊入口的個人工具，透過簡單的操作流程能夠讓你輕鬆掌握自己閱讀的內容，由前輩 Aydan 所開發；這次的 Redesign 單純是個概念的嘗試。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image">
                    <img src="../assets/images/website-longweb-mock.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image">
                    <img src="../assets/images/web-longweb.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title">
                        Cosign Landing Page
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        The Cosign Studio 是和兩位設計師 Money, Gwynne 所共同創辦的跨領域工作團隊；定期舉辦工程師、設計師和 PM 的交流活動，目的在於提供一個場合讓夥伴們分享彼此在專業和工作上面的心得，或者透過工作坊學習相關的基礎技能；除此之外，我們也盡力提供各類型 Side Project 的合作機會，達到媒合，尋找未來夥伴的目標。<br><br>在合作的過程中，我們彼此都會設計各種不同類型的 Landing Page 進行討論，並試著找出 Studio 的核心概念與設計風格。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image">
                    <img src="../assets/images/web-cosign.png"/>
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
                    <a class="next-link" href="/#/design-tickle">Tickle App</a>
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
        font-size: 17px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 28px
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

</style>