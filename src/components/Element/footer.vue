<template lang="html">
    <div>
        <div class="unavailable-footer">
            <div class="footer-container">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/citysite1025?ref=bookmarks" class="icon facebook"></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/samuel-kao-87972482/" class="icon linkedin"></a>
                    </li>
                    <li>
                        <a href="https://medium.com/@citysite1025" class="icon medium"></a>
                    </li>
                    <li>
                        <a href="https://github.com/citysite102" class="icon github"></a>
                    </li>
                </ul>
                <p class="copy-right">© Copyright 2017 Samuel Kao - All Rights Reserved</p>
            </div>
        </div>
        <div class="footer">
            <el-row :gutter="16">
                <el-col :span="20" :offset="2">
                    <!-- <p class="first-title">citysite1025@gmail.com</p> -->
                    <!-- <p>+886 938-126-399</p> -->
                    <div class="footer-container">
                        <p class="copy-right">© Copyright 2017 Samuel Kao - All Rights Reserved</p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/citysite1025?ref=bookmarks" class="icon facebook"></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/samuel-kao-87972482/" class="icon linkedin"></a>
                            </li>
                            <li>
                                <a href="https://medium.com/@citysite1025" class="icon medium"></a>
                            </li>
                            <li>
                                <a href="https://github.com/citysite102" class="icon github"></a>
                            </li>
                        </ul>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        message: 'Card',
      }
    }
  }
</script>

<style scoped lang="sass">
    @import '~styles/main.sass';

    .unavailable-footer    
        background: $default-footer-color
        margin-left: auto
        margin-right: auto

        @include pc-width
            display: none

        h3
            font-family: 'Graphik'
            font-weight: 600
            margin-top: 40px
            color: $text-color-gray-light
        p
            display: inline-block
            font-weight: 300
            font-size: 16px
            color: $text-color-gray-light

        ul
            display: inline-block
            padding: 0px
            li
                display: inline-block

        .copy-right
            display: block

        .icon 
            width: 32px
            height: 32px
            border-radius: 20px
            margin-right: 12px
            display: block
            background-size: cover
            cursor: pointer
            opacity: 0.9
            transition-duration: 0.2s

    .footer
        background: $default-footer-color
        padding-bottom: 48px
        height: 72px
        width: 100%
        margin-left: auto
        margin-right: auto
        display: none
        max-width: 1600px

        @include pc-width
            display: block

        .footer-container
            display: flex
            align-items: center
            justify-content: space-between


        h3
            font-family: 'Graphik'
            font-weight: 600
            margin-top: 40px
            color: $text-color-gray-light
        p
            display: inline-block
            font-weight: 300
            font-size: 16px
            color: $text-color-gray-light

        ul
            display: inline-block
            li
                display: inline-block

        .copy-right
            float: left

        .first-title
            margin-top: 32px

        .icon 
            width: 32px
            height: 32px
            border-radius: 20px
            margin-left: 12px
            display: block
            background-size: cover
            cursor: pointer
            opacity: 0.9
            transition-duration: 0.2s
        

            &:hover 
                opacity: 1.0
    

    .facebook 
        background-image: url('~assets/images/icon_facebook.png')
    

    .github 
        background-image: url('~assets/images/icon_github.png')
    

    .linkedin 
        background-image: url('~assets/images/icon_linkedin.png')

    .medium
        background-image: url('~assets/images/icon_medium.png')    

</style>