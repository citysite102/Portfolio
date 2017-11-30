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
                <el-col :span="10" :offset="2">
                    <h2 class="intro-title">
                        關於 Tickle
                    </h2>
                </el-col>
            </transition>
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content">
            <el-col :span="5" :offset="5">
                <h2 class="info-content-time">
                    2015-2018 <br>Mobile & Web
                </h2>
            </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="10" :offset="2">
                    <h2 class="intro-content">
                        Tickle 是一款能夠幫助小朋友或者任何對於寫程式有興趣的人快速上手的學習軟體；除此之外，Tickle 也可以讓你輕鬆地透過程式來控制各種不同的機器人和控制器。
                    </h2>
                </el-col>
            </transition>
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
            <el-col :span="5" :offset="5">
                <h3 class="info-content-job">
                    Senior Software Developer<br>
                    UI Designer
                </h3>
            </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <div class="hero-image">
                        <img src="../assets/images/design-header.png"/>
                    </div>
                </el-col>
            </transition>
        </el-row>
        <!-- <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    在團隊中，我主要負責的工作內容包含 iOS 的產品開發以及不同平台產品的介面設計（包含 iOS 與 Web）；我需要持續的確保產品視覺的一制性，調整與優化使用者的操作流程，同時考慮使用者的需求與行銷團隊的需求來規劃介面上的平衡點。

                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-1"></div>
            </el-col>
        </el-row> -->
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    介面設計
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <h2 class="intro-content-center">
                        在 Tickle 團隊中，我主要負責 iOS 的產品開發以及不同平台產品的介面設計（包含 iPad, iPhone 與 Web）；我需要持續的確保產品視覺的一制性，調整與優化使用者的操作流程，同時考慮使用者與行銷團隊的需求來進行介面設計。<br><br>由於同時作為團隊的工程師與設計師，在設計與規劃的過程中，我需要同時考慮程式開發的可行性，並評估在時限內該如何完成各種不同的挑戰。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="24">
                <img class="tickle-work tickle-ui-1" src="../assets/images/design-tickle-iphone.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-content-1">
                <el-col :span="20" :offset="2">
                    <h2 class="intro-content-center">
                        Tickle 的設計不單純只有角色、介面等視覺上面的內容，由於它是一個架構和功能都相當複雜的產品，這樣的因素也大幅度的提升不同螢幕尺寸設計上的困難度。如何在開發或規劃新功能時兼顧操作性、可讀性和娛樂性，一直都是我在 Tickle 團隊中相當具有挑戰性的過程。
                    </h2>
                </el-col>
            </transition>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <img class="tickle-work tickle-ui-2" src="../assets/images/design-tickle-ipad.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work-center">
                        Design.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    視覺規範
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    Tickle 的主要設計規範是由前輩 Sean 所設計與規劃，在後期由我負責接手進行。Tickle 的標準字是 Helvetica Neue，預計會在近期的改版中調整為 San Francisco；在暗色系背景上的配色基本以明亮色系為主，標準色沿用舊版本的海洋藍綠色。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="16" :offset="4" class="col-visual">
                <img class="tickle-work tickle-visual" src="../assets/images/design-tickle-guide.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    由於 Tickle App 目前的使用者大部分是孩童（學生），在設計 icon 時的第一原則就是確保它的可辨識性，如何快速的讓使用者瞭解按鈕的用途一直是我持續努力的目標。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="16" :offset="4">
                <div class="tickle-work tickle-icon"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    AR / 3D
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    Tickle 在 5.0 版本以前搭配 iOS 的 SpriteKit 做出了相當令人驚豔的 2D 操作介面，讓使用者可以透過拖拉程式區塊來做出自己的 2D 遊戲，在新版本的 Tickle 中，我們進一步的支援了 3D 和 AR 的功能。<br><br>對於使用者而言，從 2D 轉移到 3D 甚至是 AR 肯定是一個截然不同的操作體驗；對於我們而言，從地板材質的選擇、程式運作的效能、角色與使用者的互動到照相機的視角等等，每一個環節都是介面設計上一個新的嘗試。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <img class="tickle-work tickle-ar" src="../assets/images/design-tickle-ar-3d2.png"/>

            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    流程規劃
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    在 Tickle 這個團隊中，新功能的迭代或者需求上的修改都是相當頻繁的。從確定新功能開始，我會著手開始進行流程上的規劃，同時持續和團隊成員討論確定有沒有開發上的困難或者步驟上的遺漏；由於人力分配和時間的因素，通常我們不會進行 Prototype 的測試， 而是直接進入視覺設計與開發的步驟。<br><br>視覺設計與程式開發的階段是一個相當彈性的合作過程；由於同時作為團隊的設計師與其中一位工程師，我能夠清楚的瞭解不同組件或者客製化介面所需的開發時間，並進一步決定應該要先完成哪些畫面的視覺內容。

                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <img class="tickle-work tickle-flow-0" src="../assets/images/design-tickle-flow-0.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    通常在視覺完成到一定程度後，我們會透過流程圖的方式再次檢視是否有遺漏的部分；舉例來說，由於 Tickle 有大量來自學校的學生使用者，在會員註冊的流程裡面就需要另外加入家長認證的步驟，除此之外，我們也在不停的嘗試透過用字、流程的改善來提升會員註冊的成功率。<br><br>
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="24">
                <img class="tickle-work tickle-flow-1" src="../assets/images/design-tickle-flow-1.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    機器人與裝置
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    Tickle 是一個整合了許多不一樣的機器人或裝置的平台；不同的裝置可能會因為連線方式的差異（Wifi，Bluetooth，BLE），或是產品性質的不同而需要另外設計一套完全不同的連線流程。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3">
                <img class="tickle-work tickle-flow-2" src="../assets/images/design-tickle-devices.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    以下面的流程圖為例，Sphero 是一個透過藍牙連線的機器人，使用者必須要先從設定畫面中的藍芽與 Sphero 進行配對後才能在 Tickle 中連線使用，因此我們另外設計了一套教學流程提供給使用者。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="24">
                <img class="tickle-work tickle-flow-3" src="../assets/images/design-tickle-sphero-tutorial.png"/>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    介面素材
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    除了介面設計以外，我也會需要配合行銷團隊的需求來製作一些行銷使用的 Banner 或者素材。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3" class="section-asset">
                <div class="tickle-work tickle-assets-l assets-6"></div>
                <div class="tickle-work tickle-assets-l assets-7"></div>
                <div class="tickle-work tickle-assets-l assets-8"></div>
                <div class="tickle-work tickle-assets-l assets-9"></div>
                <div class="tickle-work tickle-assets-l assets-10"></div>
                <div class="tickle-work tickle-assets-l assets-11"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="18" :offset="3" class="section-asset">
                <div class="tickle-work tickle-assets assets-1"></div>
                <div class="tickle-work tickle-assets assets-2"></div>
                <div class="tickle-work tickle-assets assets-3"></div>
                <div class="tickle-work tickle-assets assets-4"></div>
                <div class="tickle-work tickle-assets assets-5"></div>
                <div class="tickle-work tickle-assets assets-12"></div>
                <div class="tickle-work tickle-assets assets-13"></div>
                <div class="tickle-work tickle-assets assets-14"></div>
                <div class="tickle-work tickle-assets assets-15"></div>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <transition appear appear-to-class="fade-enter-content"
                                appear-active-class="fade-enter-active-profile-title">
                    <h1 class="header-name-work-center">
                        Marketing.
                    </h1>   
                </transition>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    程式與分析
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    數據一直都是一個介面調整上相當重要的考量因素，Tickle 透過 Google Analytic 和 Amplitude 持續觀察使用者的操作行為，不同流程的完成狀況等等來作為後續更新的依據。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="container-logo">
            <el-col :span="3" :offset="3">
                <div class="tickle-code">
                    <img src="../assets/images/xcode-logo.png"/>
                </div>
            </el-col>
            <el-col :span="6" :offset="1">
                <div class="tickle-analytics-1">
                    <img src="../assets/images/ga-logo.png"/>
                </div>
            </el-col>
            <el-col :span="3" :offset="2">
                <div class="tickle-analytics-2">
                    <img src="../assets/images/am-logo.png"/>
                </div>
            </el-col>
            <!-- <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-4"></div>
            </el-col> -->
        </el-row>
        <el-row :gutter="16" class="title-container-tickle">
            <el-col :span="20" :offset="2">
                <h2 class="intro-title-center">
                    行銷資源
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <h2 class="intro-content-center">
                    除了介面設計以外，我也會需要配合行銷團隊的需求來製作一些行銷使用的 Banner 或者素材。
                </h2>
            </el-col>
        </el-row>
        <el-row :gutter="16" class="section-banner">
            <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-banner banner-1"></div>
                <div class="tickle-work tickle-banner-right banner-2"></div>
            </el-col>
            <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-banner banner-3"></div>
                <div class="tickle-work tickle-banner-right banner-4"></div>
            </el-col>
            <el-col :span="20" :offset="2">
                <div class="tickle-work tickle-banner banner-5"></div>
                <div class="tickle-work tickle-banner-right banner-6"></div>
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
                    <a class="next-link" href="/#/design-element">介面視覺元件</a>
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
        max-width: 1600px 
        margin-left: auto
        margin-right: auto
    
    .hero-image
        width: 100%
        height: auto
        margin-top: 40px
        margin-bottom: 120px
        img
            width: 100%
            height: 100%

    .header-name-work
        margin-top: 120px
        margin-bottom: 120px
        font-size: 80px
        letter-spacing: 0px

    .header-name-work-center
        margin-top: 120px
        margin-bottom: 120px
        font-size: 80px
        letter-spacing: 0px
        text-align: center

    .intro-title
        font-size: 30px
        font-weight: 700
        margin-top: -4px
        margin-bottom: 18px
        line-height: 42px
        width: 400px
        margin-left: 0px
        margin-right: 0px

    .intro-title-center
        font-size: 30px
        font-weight: 700
        margin: 0px
        line-height: 42px
        margin-left: 0px
        text-align: center

    .intro-content
        font-size: 18px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 30px
        max-width: 800px

    .info-content-time
        font-size: 20px
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 30px
        max-width: 800px
        font-weight: 700
        text-align: right

    .info-content-job
        font-size: 16px
        font-weight: 300
        margin-top: 0px
        margin-bottom: 24px
        margin-left: 0px
        margin-right: 0px
        line-height: 24px
        max-width: 800px
        text-align: right

    .intro-content-center
        font-size: 16px
        font-weight: 300
        margin: 16px auto
        line-height: 30px
        max-width: 720px
        text-align: left

    .tickle-work
        margin-top: 64px
        margin-bottom: 16px

    .tickle-1
        width: 800px
        height: 400px
        background-image: url('~assets/images/hero-tickle5.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto
        margin-top: 180px
        margin-bottom: 80px

    .tickle-ui-1
        width: 100%
        height: auto
        margin-top: 40px
        margin-bottom: 40px

    .tickle-ui-2
        width: 100%
        height: auto
        margin-left: auto
        margin-right: auto
        margin-top: 40px
        margin-bottom: -40px


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
        margin-top: 48px
        margin-bottom: 120px

    .tickle-code
        width: 100%
        height: 140px
        display: inline-block
        img
            height: 100%
            width: auto

    .tickle-analytics-1
        width: 100%
        height: 140px
        display: inline-block
        img
            height: 100%
            width: auto

    .tickle-analytics-2
        width: 100%
        height: 80px
        display: inline-block
        img
            height: 100%
            width: auto


    .col-visual
        margin-top: 0px
        // background-color: #141414

    .tickle-visual
        width: 100%
        height: auto
        margin-bottom: 0px
        margin-top: 48px
        margin-left: auto
        margin-right: auto

    .tickle-icon
        width: 720px
        height: 300px
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

    .tickle-ar
        width: 80%
        height: auto
        margin: 48px auto
        display: block


    .tickle-flow-0
        width: 100%
        height: auto
        margin-top: 48px
        margin-bottom: 48px

    .tickle-flow-1
        width: 100%
        height: auto
        margin-top: 48px
        margin-bottom: 48px
        
    .tickle-flow-2
        width: 100%
        height: auto
        margin-top: 48px
        margin-bottom: 48px

    .tickle-flow-3
        width: 100%
        height: auto
        margin-top: 48px
        margin-bottom: 48px
        background-image: url('~assets/images/design-tickle-sphero-tutorial.png')
        background-size: cover
        background-position: center
        margin-left: auto
        margin-right: auto


    .section-banner
        margin-top: 60px

    .tickle-banner
        height: 200px
        width: 49%
        background: #222222
        display: inline-block
        margin: 0px
        margin-bottom: 32px
        background-size: cover
        background-position: center

    .tickle-banner-right
        height: 200px
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
        justify-content: center
        align-content: flex-start

    .section-asset-left
        display: inline-flex
        flex-wrap: wrap
        justify-content: flex-start
        // align-content: flex-start

    .tickle-assets
        width: 180px
        height: 180px
        margin-right: 24px
        margin-top: 24pxxx
        background-size: cover
        background-position: center

    .tickle-assets-l
        width: 220px
        height: 220px
        margin-right: 30px
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
        width: 260px
        background-image: url('~assets/images/design-asset-15.png')
    .assets-16
        background-image: url('~assets/images/design-asset-16.png')

</style>