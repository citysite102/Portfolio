<template lang="html">
    <div class="container-work">
        <headerBar class="work-header" :showWorks="true"></headerBar>
        <backgroundRope class="background-ropes"></backgroundRope>
        <el-row :gutter="16">
            <el-col :span="16" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work">
                        UI Works
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title-element">
                        Daily UI
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content-element">
                        利用時間挑戰了連續 30 天的 Daily UI。過程中透過 Daily UI 嘗試了許多不同類型的介面設計：包含 App Icon、Apple Watch 視覺、計算機、聊天介面、擬物化元件等等，對於介面的熟悉度也因此更加的成熟；從裡面挑選了完成度比較高的作品。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <div class="hero-image-element">
                        <img src="../assets/images/design-element-1.png"/>
                    </div>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-11.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-16.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-2.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-10.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-15.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-12.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-13.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-7.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-14.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-17.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title-element intro-title-element-sub">
                        其他作品
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content-element">
                        除了 Daily UI 的主題，平常也會嘗試一些不同風格的 ICON、Banner、擬物化練習與視覺繪圖設計，透過這些平常的練習來讓自己對於設計的元素更加敏銳。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-3.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-4.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-5.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-6.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-8.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/design-element-9.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
                <el-col :span="3" :offset="2">
                    <h2 class="intro-title-element intro-title-element-sub">
                        Photoshop 視覺合成
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content-element">
                        早期的一些 Photoshop 視覺合成作品。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/photoshop-1.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/photoshop-2.png"/>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="hero-image-element">
                    <img src="../assets/images/photoshop-3.png"/>
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
                    <a class="next-link" href="/#/design-ios">iOS 介面</a>
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
        },

        created() {
            window.moveTo(0, 0); 
            console.log(window.scrollY);
        },
        destroyed() {
            console.log(window.scrollY);
            window.scrollTo(0, window.scrollY);
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
        margin-top: 120px
        margin-bottom: 120px
        font-size: 80px
        letter-spacing: 0px

    .intro-title-element
        font-size: 32px
        font-weight: 700
        margin-top: -4px
        margin-bottom: 18px
        line-height: 42px
        width: 400px
        margin-left: 0px
        margin-right: 0px

    .intro-title-element-sub
        margin-top: 120px

    .intro-content-element
        font-size: 17px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 28px
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

</style>