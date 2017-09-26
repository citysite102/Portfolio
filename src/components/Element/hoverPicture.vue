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
                        MORE
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
  </div>

</template>

<script>
  export default {
    props: ["title", "description", "imageSource"],
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

        &:hover
            .title, .description, .more-button
                opacity: 1.0
                transform: translateY(0px)
            // 因為實際的內容其實在before裡面
            // &:before
            .inner
                filter: brightness(0.4)
                background-size: 150% auto
        
        // &:before
        .inner
            display: block
            position: absolute
            left: 0
            top: 0
            // background-color: red
            // background-image: url('~assets/images/sample-2.png')
            width: 100%
            height: 100%
            background-size: 140% auto
            background-position: center // 置中排列
            transition-duration: 0.5s


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
        border: solid 1px white
        cursor: pointer

        padding-top: 10px
        font-size: 18px
        font-weight: 500
        margin-top: 10px
        margin-bottom: 10px
        margin-left: auto
        margin-right: auto
        letter-spacing: 0px
        line-height: 30px

        opacity: 0
        transform: translateY(50px)
        transition: all 0.8s cubic-bezier(0,1.09,0.56,1)



</style>