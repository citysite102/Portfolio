<template lang="html">
    <div>
        <div class="header">
            <el-row :gutter="16">
                <!-- <el-col :span="10" :offset="1"> -->
                    <!-- <div class="menu"></div> -->
                    <!-- <menuButton></menuButton> -->
                <!-- </el-col> -->
                <el-col :span="21" :offset="3">
                    <ul class="link-container">
                        <li v-if="showWorks" class="link-item">
                            <a class="link" href="/#/">Works
                            </a>
                        </li>
                        <li v-if="showAbout" class="link-item">
                            <a class="link" href="/#/about">About
                            </a>
                        </li>
                        <li class="link-item">
                            <a class="link" href="https://medium.com/@citysite1025">Medium
                            </a>
                        </li>
                        <li class="link-item">
                            <a class="link" href="https://github.com/citysite102">Github
                            </a>
                        </li>
                        <li class="link-item">
                            <a class="link" href="https://www.facebook.com/citysite1025">Facebook
                            </a>
                        </li>
                    </ul>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    import MenuButton from './menuButton.vue';

    export default {
        data () {
            return {
                message: 'header',
            }
        },
        components: {
            MenuButton
        },
        props: {
            showWorks: {
                type: Boolean,
                default: false,
            }, 
            showAbout: {
                type: Boolean,
                default: false,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  
    @import '~styles/main.sass'

    .header
        background-color: clear
        // height: 180px
        width: 100%
        // margin-bottom: -60px
        z-index: 2
        padding-top: 60px

    .menu
        +size(40px, 40px)
        background-color: gray
        display: inline-block
        top: 50%
        transform: translateY(-50%)
        margin-left: 60px

    .link-container
        display: inline-block
        height: 100%
        margin: 0px
        float: right
        text-align: right

    .link-item
        list-style: none
        display: inline-block
        width: auto
        top: 50%
        transform: translateY(-50%)
        margin-right: 56px

        a
            font-size: 16px
            font-weight: 500
            text-decoration: none
            transition-duration: 0.1s

    .link
        color: $text-color-gray-light
        &:hover
            color: white
            &:after
                transform: scale3d(1, 1, 1)

        &:after
            content: ''
            position: absolute
            background: #5EEBA5
            transition: transform 0.2s
            transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9)
            bottom: -6px
            left: -6px
            height: 3px
            width: calc(100% + 12px)
            transform: scale3d(0, 1, 1)
            transform-origin: 0% 50%


        
</style>