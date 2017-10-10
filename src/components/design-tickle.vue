<template lang="html">
    <div class="container-about">
        <headerBar class="about-header" :showWorks="true"></headerBar>
        <backgroundRope class="background-ropes"></backgroundRope>
        <el-row :gutter="16">
            <el-col :span="16" :offset="4">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-about">
                        About.
                    </h1>   
                </transition>
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

    .container-about
        width: 100%
        // height: 1200px
    .header-name-about
        margin-top: 180px
        font-size: 100px
    .intro-title
        font-size: 32px
        font-weight: 600
        margin-top: 100px
        margin-bottom: 32px
        line-height: 42px
        width: 180px
        float: right
    .intro-content
        // font-size: 40px
        // font-weight: 700
        // margin-top: 32px
        // margin-bottom: 32px
        // line-height: 52px
        // width: 720px
        font-size: 26px
        font-weight: 400
        margin-top: 100px
        margin-bottom: 32px
        line-height: 42px
        width: 720px
        float: right

    .profile-image
        // width: 100%
        width: 1080px
        height: 800px
        background-image: url('~assets/images/profile.png')
        background-size: contain
        background-repeat: no-repeat
        float: right
        margin-top: 64px
        margin-bottom: 0px
  

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