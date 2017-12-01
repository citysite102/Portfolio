<template lang="html">
    <div class="container-about">
        <headerBar class="about-header" :showWorks="true"></headerBar>
        <backgroundRope class="background-ropes"></backgroundRope>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-about">
                        About.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="7">
                    <h2 class="intro-title-about">
                        About Me
                    </h2>
                </el-col>
            </transition>
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content-about">
                        Samuel is a believer in hard work, team communication and the power of good design. His career thrives from his solid academic training in NTUST Electrical Engineering to his vast project-based experiences in app development. He values design thinking for great user experience.
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-2">
                <el-col :span="22">
                    <div class="profile-image">
                    </div>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="3" :offset="7">
                <h2 class="intro-title-about">
                    
                </h2>
            </el-col>
            <el-col :span="10" :offset="2">
                <h2 class="intro-content-about">
                    Samuel also cares deeply about giving back to the community. He acts as an active attendee/host of meet-ups across the fields in design and engineering to help bring talents together for the greater good. Chances of sharing his experience also come at him on various platforms. You can find him giving lectures on Hahow (an online learning website) and on campus.<br><br>
Aside from work, Samuel likes to document his life through camera lenses. He often travels to connect with different lifestyles and cultures to make sure he stays updated with the world.

                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="3" :offset="7">
                <h2 class="intro-title-about">
                    Experience
                </h2>
            </el-col>
            <el-col :span="10" :offset="2">
                <h2 class="intro-content-about">
                    
                    <b><a class="work-company">Tickle App</a></b> &nbsp | &nbsp May 2017 - Present<br>
                    Designed merchant pages, a set of consumer-facing websites for people to discover merchants and deals.<br><br>

                    <b><a class="work-company">The Cosign Studio</a></b> &nbsp | &nbsp May 2017 - Present<br>
                    Designed merchant pages, a set of consumer-facing websites for people to discover merchants and deals.<br><br>

                    <b><a class="work-company">Kapi</a></b> &nbsp | &nbsp Jan 2017 - Present<br>
                    Designed merchant pages, a set of consumer-facing websites for people to discover merchants and deals.<br><br>

                    <b><a class="work-company">Hahow</a></b> &nbsp | &nbsp Sep 2016 - Present<br>
                    Designed merchant pages, a set of consumer-facing websites for people to discover merchants and deals.<br><br>

                    <b>M.S in EE, NTUST</b> &nbsp | &nbsp Aug 2013 - Aug 2015<br>
                    It seems that the cycling apps have already got all of the possible functions. You could even feel like a pro by using some of them.It seems that the cycling apps have already got all of the possible functions.<br><br>

                    <b><a class="work-company">iFit</a></b> &nbsp | &nbsp July 2014 - Sep 2014<br>
                    Designed the problem solving experience for Expii, an educational platform designed to empower individualized learning experience.
                </h2>
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
                message: 'About',
                demoFlag: true
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


    .work-company
        font-size: 18px
        font-weight: 700

    .container-about
        width: 100%
        max-width: 2200px
        margin-left: auto
        margin-right: auto
        // height: 1200px
    .header-name-about
        margin-top: 180px
        font-size: 80px

    .intro-title-about
        font-size: 32px
        font-weight: 600
        margin-top: 100px
        margin-bottom: 32px
        margin-left: 0px
        margin-right: 0px
        line-height: 42px
        width: 180px
        // float: right

    .intro-content-about
        font-size: 18px
        font-weight: 300
        margin-top: 106px
        margin-bottom: 32px
        line-height: 28px
        width: 100%
        float: right

    .profile-image
        // width: 100%
        width: 675px
        height: 500px
        background-image: url('~assets/images/profile.png')
        background-size: contain
        background-repeat: no-repeat
        float: right
        margin-top: 48px
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