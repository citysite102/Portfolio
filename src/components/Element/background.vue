<template lang="html">
    <div class="container">
        <div class="ropes">
            <el-row :gutter="16">
                <el-col :span="4">
                    <div class="rope"></div>
                    <div v-show="showcolorline"class="rope-line rope-line-1-1  rellax" data-rellax-speed="2"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-2-1 rellax" data-rellax-speed="2"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-2-2 rellax" data-rellax-speed="3"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-2-3 rellax" data-rellax-speed="4"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-3-1 rellax" data-rellax-speed="5"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-3-2 rellax" data-rellax-speed="4"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-3-3 rellax" data-rellax-speed="3"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-4-1 rellax" data-rellax-speed="3"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-4-2 rellax" data-rellax-speed="3"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-4-3 rellax" data-rellax-speed="1"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-5-1 rellax" data-rellax-speed="3"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div v-show="showcolorline" class="rope-line rope-line-6-1"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'header',
      }
    },
    props: ["showcolorline"]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '~styles/main.sass'

    .el-row 
        height: 100%
        background-color: transparent
    .el-col 
        height: 100%
        background-color: transparent
        
    .container
        position: absolute
    .ropes
        position: absolute
        top: 160px
        left: 0px
        height: 100%
        width: 100%
    .rope
        background-color: #222222
        width: 2px
        height: 100%
        opacity: 0.3
        z-index: 0
        margin-left: auto
        margin-right: auto

    .rope-line
        position: absolute
        width: 2px
        left: 50%
        opacity: 0.5
        transform: translateX(-50%)

    .rope-line-1-1
        height: 80px
        top: 56%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)

    .rope-line-2-1
        height: 120px
        top: 36%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-2-2
        // height: 80px
        // top: 56%
        // background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-2-3
        height: 240px
        top: 90%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)

    .rope-line-3-1
        height: 200px
        top: 48%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-3-2
        height: 120px
        top: 20%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-3-3
        height: 200px
        top: 68%
        background: linear-gradient(to bottom, $gradient-light-purple, $gradient-dark-purple)

    .rope-line-4-1
        height: 200px
        top: 20%
        background: linear-gradient(to bottom, $gradient-light-green, $gradient-dark-green)
    
    .rope-line-4-3
        height: 160px
        top: 90%
        // background: linear-gradient(to bottom, $gradient-light-yellow, $gradient-dark-yellow)
        background: linear-gradient(to bottom, $gradient-light-green, $gradient-dark-green)

    .rope-line-5-1
        height: 200px
        top: 50%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-6-1


</style>