<template lang="html">
    <div class="container-ios">
        <headerBar class="ios-header" :showWorks="true"></headerBar>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        iOS Works.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title-first">
                        Howhow
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        Tickle 是一款能夠幫助小朋友或者任何對於寫程式有興趣的人快速上手的學習軟體，除此之外，Tickle 可以讓你輕鬆地透過程式來控制各種不同的機器人和智慧型家電。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <div class="hero-image">
            <img src="../assets/images/hero-howhow.png"/>
        </div>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Waiting
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        Tickle 是一款能夠幫助小朋友或者任何對於寫程式有興趣的人快速上手的學習軟體，除此之外，Tickle 可以讓你輕鬆地透過程式來控制各種不同的機器人和智慧型家電。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <div class="hero-image">
            <img src="../assets/images/hero-waiting.png"/>
        </div>
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