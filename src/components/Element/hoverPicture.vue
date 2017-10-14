<template lang="html">
  <div>
    <div v-on:mouseover= "mouseOver" class="image">
        <div class="inner" :style="{'background-image': 'url(' + imageSource + ')'}">
        </div>
        <div class="text-container">
            <el-row class="title-container" type="flex" justify="center">
                  <el-col :span="18">
                    <h3 class="title">
                        {{title}}
                    </h3>
                  </el-col>
            </el-row>
            <el-row class="description-container" type="flex" justify="center">
                <el-col :span="22">
                    <h3 class="description">
                        {{description}}
                    </h3>
                </el-col>
            </el-row>
            <el-row class="button-container" type="flex" justify="center">
                <el-col :span="18">
                    <div class="more-button">
                        <a class="link" :href="'/#/' + directLink">MORE</a>
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ["title", "description", "imageSource", "directLink"],
    methods: {
        mouseOver: function(){
            // this.style.color = 'red';
            // this.style.background-image = url('~assets/images/sample-2.png')
        }
    },
    data () {
        return {
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '~styles/main.sass'

    .image
        height: 100%
        width: 100%
        text-align: center
        overflow: hidden

        &:hover
            .title, .description, .more-button
                opacity: 1.0
                transform: translateY(0px)
            // 因為實際的內容其實在before裡面
            // &:before
            .inner
                filter: brightness(0.4)
                transform: scale3d(1.2,1.2,1)
                // background-size: 180% auto
        
        // &:before
        .inner
            display: block
            position: absolute
            left: 0
            top: 0
            width: 100%
            height: 100%
            // background-size: 140% auto
            background-size: cover
            background-position: center // 置中排列
            transition: all 0.5s, background 0.4s ease-in, transform 0.5s
            


    .text-container
        top: 50%
        transform: translateY(-50%)
    .title-container
        height: auto
    .description-container
        height: auto
    .button-container
        height: auto

    .title
        font-size: 28px
        font-weight: 700
        margin-bottom: 0px
        letter-spacing: 1px

        opacity: 0
        transform: translateY(50px)
        transition: all 0.8s cubic-bezier(0,1.09,0.56,1)


    .description
        font-size: 18px
        line-height: 24px
        opacity: 0
        transform: translateY(50px)
        transition: all 0.8s cubic-bezier(0,1.09,0.56,1)

    .more-button
        width: 140px
        height: 36px
        border: solid 3px white
        cursor: pointer

        font-size: 18px
        font-weight: 600
        margin-top: 10px
        margin-bottom: 10px
        margin-left: auto
        margin-right: auto
        letter-spacing: 1px
        line-height: 36px

        opacity: 0
        transform: translateY(50px)
        transition: all 0.8s cubic-bezier(0,1.09,0.56,1)

        a
            text-decoration: none
            font-size: 18px
            font-weight: 600
            display: block
            width: 100%
            height: 100%
            margin: 0px
            margin-top: 2px
            &:hover
                color: $default-background-color


        &:hover
            background-color: white
            color: $default-background-color
            border-color: transparent




</style>