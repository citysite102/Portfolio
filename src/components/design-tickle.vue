<template lang="html">
    <div class="container-work">
        <headerBar class="work-header" :showWorks="true"></headerBar>
        <!-- <backgroundRope class="background-ropes"></backgroundRope> -->
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        Tickle.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        About Tickle
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions : )
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <div class="hero-image"></div>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions : )
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-1"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Interface
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="10" :offset="3">
                <h2 class="intro-content">
                    It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions : )<br><br>It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="22" :offset="1">
                <div class="tickle-work tickle-ui-1">
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <h2 class="intro-content-center">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions : )
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="tickle-work tickle-ui-2"></div>
                <!-- <div class="tickle-work tickle-ui-3"></div> -->
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        Design.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="3" :offset="3">
                <h2 class="intro-title">
                    Visual
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="10" :offset="3">
                <h2 class="intro-content">
                    It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions : )<br><br>It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="24" :offset="0" class="col-visual">
                <div class="tickle-work tickle-visual"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions : )
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="16" :offset="4">
                <div class="tickle-work tickle-icon"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="3" :offset="3">
                <h2 class="intro-title">
                    AR Experience
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="10" :offset="3">
                <h2 class="intro-content">
                    It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions : )<br><br>It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.
                </h2>
            </el-col>
        </el-row>
        <!-- <el-row :gutter="16">
            <el-col :span="16" :offset="4" class="ar-icon-container">
                <div class="tickle-work ar-icon"></div>
                <div class="tickle-work scenekit-icon"></div>
                <div class="tickle-work sprite-icon"></div>
            </el-col>
        </el-row> -->
        <el-row :gutter="16">
            <el-col :span="18" :offset="2">
                <div class="tickle-work tickle-ar"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Flow
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="tickle-work tickle-flow-0"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions : )<br><br>It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="22" :offset="1">
                <div class="tickle-work tickle-flow-1"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions.It seems that the cycling apps have already got all of the possible functions.
                    </h2>
                </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="22" :offset="1">
                <div class="tickle-work tickle-flow-2"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions.It seems that the cycling apps have already got all of the possible functions.
                    </h2>
                </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="22" :offset="1">
                <div class="tickle-work tickle-flow-3"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Code+Analytics
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions.
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16" class="container-logo">
            <el-col :span="3" :offset="3">
                <div class="tickle-work tickle-code">
                    <img src="../assets/images/xcode-logo.png"/>
                </div>
            </el-col>
            <el-col :span="6" :offset="1">
                <div class="tickle-work tickle-analytics-1">
                    <img src="../assets/images/ga-logo.png"/>
                </div>
            </el-col>
            <el-col :span="3" :offset="2">
                <div class="tickle-work tickle-analytics-2">
                    <img src="../assets/images/am-logo.png"/>
                </div>
            </el-col>
            <!-- <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-4"></div>
            </el-col> -->
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Marketing
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions.
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16" class="section-banner">
            <el-col :span="18" :offset="3">
                <div class="tickle-work tickle-banner banner-1"></div>
                <div class="tickle-work tickle-banner-right banner-2"></div>
            </el-col>
            <el-col :span="18" :offset="3">
                <div class="tickle-work tickle-banner banner-3"></div>
                <div class="tickle-work tickle-banner-right banner-4"></div>
            </el-col>
            <el-col :span="18" :offset="3">
                <div class="tickle-work tickle-banner banner-5"></div>
                <div class="tickle-work tickle-banner-right banner-6"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title">
                        Assets
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them. It seems that the cycling apps have already got all of the possible functions.
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3" class="section-asset">
                <div class="tickle-work tickle-assets assets-1"></div>
                <div class="tickle-work tickle-assets assets-2"></div>
                <div class="tickle-work tickle-assets assets-3"></div>
                <div class="tickle-work tickle-assets assets-4"></div>
                <div class="tickle-work tickle-assets assets-5"></div>
            </el-col>
            <el-col :span="18" :offset="3" class="section-asset-left">
                <div class="tickle-work tickle-assets assets-12"></div>
                <div class="tickle-work tickle-assets assets-13"></div>
                <div class="tickle-work tickle-assets assets-14"></div>
                <div class="tickle-work tickle-assets assets-15"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    It seems that the cycling apps have already got all of the possible functions.
                </h2>
            </el-col>
            <el-col :span="18" :offset="3" class="section-asset-left">
                <div class="tickle-work tickle-assets-l assets-6"></div>
                <div class="tickle-work tickle-assets-l assets-7"></div>
                <div class="tickle-work tickle-assets-l assets-8"></div>
                <div class="tickle-work tickle-assets-l assets-9"></div>
                <div class="tickle-work tickle-assets-l assets-10"></div>
                <div class="tickle-work tickle-assets-l assets-11"></div>
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


    .container-work
        width: 100%
        max-width: 2200px 
        margin-left: auto
        margin-right: auto
    
    .hero-image
        width: 100%
        height: 1200px
        margin-top: 40px
        background-image: url('~assets/images/design-header.png')
        background-size: cover
        background-position: center
        // background-attachment: fixed
        // height: 100%
        // width: 100%

    .header-name-work
        margin-top: 180px
        margin-bottom: 40px
        font-size: 120px
        letter-spacing: 0px


    .intro-title
        font-size: 40px
        font-weight: 700
        margin-top: 120px
        margin-bottom: 16px
        line-height: 42px
        width: 400px
        margin-left: 0px
        margin-right: 0px

    .intro-content
        font-size: 26px
        font-weight: 300
        margin-top: 24px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 36px
        max-width: 800px

    .intro-content-center
        font-size: 26px
        font-weight: 400
        margin-top: 100px
        margin-bottom: 32px
        margin-left: auto
        margin-right: auto
        line-height: 42px
        width: 720px
        text-align: center


    .tickle-work
        margin-top: 64px
        margin-bottom: 16px

    .tickle-1
        width: 1200px
        height: 600px
        background-image: url('~assets/images/hero-tickle5.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto
        margin-top: 180px
        margin-bottom: 80px
        // float: right

    .tickle-ui-1
        width: 100%
        height: 920px
        margin-top: 60px
        margin-bottom: 60px
        background-image: url('~assets/images/design-tickle-iphone.png')
        background-size: cover
        background-position: center


    .tickle-ui-2
        width: 1600px
        height: 1400px
        // background: #222222
        // display: inline-block
        background-image: url('~assets/images/design-tickle-ipad.png')
        background-size: cover
        background-position: center
        // margin-left: auto
        // margin-right: auto
        float: right
        margin-top: 100px


    .tickle-ui-3
        width: 800px
        height: 600px
        // background: #222222
        // margin-top: 15%
        // display: inline-block
        background-image: url('~assets/images/hero-tickle3.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto
        margin-top: 80px
        // float: right


    .container-logo
        vertical-align: center
        display: flex
        align-items: center
        margin-top: 60px
        margin-bottom: 60px

    .tickle-code
        width: 100%
        height: 200px
        display: inline-block
        img
            height: 100%
            width: auto

    .tickle-analytics-1
        width: 100%
        height: 200px
        display: inline-block
        img
            height: 100%
            width: auto

    .tickle-analytics-2
        width: 100%
        height: 100px
        display: inline-block
        img
            height: 100%
            width: auto


    .col-visual
        margin-top: 0px
        // background-color: #141414

    .tickle-visual
        width: 50%
        height: 720px
        margin-bottom: 0px
        margin-top: 120px
        background-size: cover
        background-position: center
        background-image: url('~assets/images/design-tickle-guide.png')
        margin-left: auto
        margin-right: auto

    .tickle-icon
        width: 960px
        height: 400px
        margin-bottom: 60px
        margin-top: 0px
        // float: right
        background-size: cover
        background-position: center
        background-image: url('~assets/images/design-tickle-icon.png')
        margin-left: auto
        margin-right: auto

    .ar-icon-container
        margin-top: 120px
        margin-bottom: 120px
        display: flex
        justify-content: center
        align-content: flex-start
    .ar-icon
        width: 256px
        height: 256px
        margin: 60px
        background-size: cover
        background-position: center
        background-image: url('~assets/images/icon-ar.png')
    .scenekit-icon
        width: 256px
        height: 256px
        margin: 60px
        background-size: cover
        background-position: center
        background-image: url('~assets/images/icon-scene.png')
    .sprite-icon
        width: 256px
        height: 256px
        margin: 60px
        background-size: cover
        background-position: center
        background-image: url('~assets/images/icon-sprite.png')
    .tickle-ar
        width: 1800px
        height: 1100px
        margin-bottom: 60px
        margin-top: 60px
        background-size: cover
        background-position: center
        background-image: url('~assets/images/design-tickle-ar-3d2.png')
        margin-left: auto
        margin-right: auto

    .tickle-flow-0
        width: 1340px
        height: 320px
        // max-width: 2400px
        margin-top: 60px
        margin-bottom: 60px
        background-image: url('~assets/images/design-tickle-flow-0.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto

    .tickle-flow-1
        width: 100%
        height: 840px
        // max-width: 2400px
        margin-top: 60px
        margin-bottom: 60px
        background-image: url('~assets/images/design-tickle-flow-1.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto
        // float: right
    .tickle-flow-2
        width: 1440px
        height: 600px
        // max-width: 2400px
        margin-top: 60px
        margin-bottom: 60px
        background-image: url('~assets/images/design-tickle-devices.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto

    .tickle-flow-3
        width: 100%
        height: 840px
        // max-width: 2400px
        margin-top: 60px
        margin-bottom: 60px
        background-image: url('~assets/images/design-tickle-sphero-tutorial.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto


    .section-banner
        margin-top: 60px

    .tickle-banner
        height: 240px
        width: 49%
        background: #222222
        display: inline-block
        margin: 0px
        margin-bottom: 32px
        background-size: cover
        background-position: center

    .tickle-banner-right
        height: 240px
        width: 49%
        background: #222222
        display: inline-block
        float: right
        margin: 0px
        margin-bottom: 32px
        background-size: cover
        background-position: center

    .banner-1
        background-image: url('~assets/images/design-banner-1.png')
    .banner-2
        background-image: url('~assets/images/design-banner-2.png')
    .banner-3
        background-image: url('~assets/images/design-banner-3.png')
    .banner-4
        background-image: url('~assets/images/design-banner-4.png')
    .banner-5
        background-image: url('~assets/images/design-banner-5.png')
    .banner-6
        background-image: url('~assets/images/design-banner-6.png')
    
    .section-asset
        display: inline-flex
        flex-wrap: wrap
        justify-content: space-between
        align-content: flex-start

    .section-asset-left
        display: inline-flex
        flex-wrap: wrap
        justify-content: flex-start
        align-content: flex-start

    .tickle-assets
        width: 280px
        height: 280px
        margin-right: 24px
        margin-top: 24px
        background-size: cover
        background-position: center

    .tickle-assets-l
        width: 360px
        height: 360px
        margin-right: 28px
        margin-top: 24px
        background-size: cover
        background-position: center

    .assets-1
        background-image: url('~assets/images/design-asset-1.png')
    .assets-2
        background-image: url('~assets/images/design-asset-2.png')
    .assets-3
        background-image: url('~assets/images/design-asset-3.png')
    .assets-4
        background-image: url('~assets/images/design-asset-4.png')
    .assets-5
        background-image: url('~assets/images/design-asset-5.png')
    .assets-6
        background-image: url('~assets/images/design-asset-6.png')
    .assets-7
        background-image: url('~assets/images/design-asset-7.png')
    .assets-8
        background-image: url('~assets/images/design-asset-8.png')
    .assets-9
        background-image: url('~assets/images/design-asset-9.png')
    .assets-10
        background-image: url('~assets/images/design-asset-10.png')
    .assets-11
        background-image: url('~assets/images/design-asset-11.png')
    .assets-12
        background-image: url('~assets/images/design-asset-12.png')
    .assets-13
        background-image: url('~assets/images/design-asset-13.png')
    .assets-14
        background-image: url('~assets/images/design-asset-14.png')
    .assets-15
        width: 400px
        background-image: url('~assets/images/design-asset-15.png')
    .assets-16
        background-image: url('~assets/images/design-asset-16.png')


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