<template lang="html">
    <div class="container-work">
        <headerBar class="about-header" :showWorks="true"></headerBar>
        <backgroundRope class="background-ropes"></backgroundRope>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        Works
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title-element">
                        Daily UI
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content-element">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions : )
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-1.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-11.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-2.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-10.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-12.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-13.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-7.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-14.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="3">
                    <h2 class="intro-title-element intro-title-element-sub">
                        Other Works
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="3">
                    <h2 class="intro-content-element">
                        It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions : )
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-3.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-4.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-5.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-6.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-8.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-9.png"/>
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

    .container-work
        width: 100%
        // max-width: 2200px 
        margin-left: auto
        margin-right: auto

    .header-name-work
        margin-top: 180px
        margin-bottom: 120px
        font-size: 120px
        letter-spacing: 0px

    .intro-title-element
        font-size: 40px
        font-weight: 700
        margin-top: 60px
        margin-bottom: 16px
        line-height: 42px
        width: 400px
        margin-left: 0px
        margin-right: 0px

    .intro-title-element-sub
        margin-top: 200px

    .intro-content-element
        font-size: 26px
        font-weight: 300
        margin-top: 24px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 36px
        max-width: 800px

    .hero-image-element
        width: 100%
        height: auto
        margin-top: 40px
        margin-left: auto
        margin-right: auto
        padding-top: 12px
        padding-bottom: 12px
        img
            width: 100%
            height: 100%
  

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