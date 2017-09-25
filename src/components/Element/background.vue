<template lang="html">
    <div class="container">
        <div class="ropes">
            <el-row :gutter="16">
                <el-col :span="4">
                    <div class="rope"></div>
                    <div class="rope-line rope-line-1-1"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div class="rope-line rope-line-2-1 rellax" data-rellax-speed="2"></div>
                    <div class="rope-line rope-line-2-2 rellax" data-rellax-speed="3"></div>
                    <div class="rope-line rope-line-2-3 rellax" data-rellax-speed="4"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div class="rope-line rope-line-3-1 rellax" data-rellax-speed="5"></div>
                    <div class="rope-line rope-line-3-2 rellax" data-rellax-speed="4"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div class="rope-line rope-line-4-1 rellax" data-rellax-speed="3"></div>
                    <div class="rope-line rope-line-4-2 rellax" data-rellax-speed="2"></div>
                    <div class="rope-line rope-line-4-3 rellax" data-rellax-speed="1"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div class="rope-line rope-line-5-1 rellax" data-rellax-speed="3"></div>
                </el-col>
                <el-col :span="4">
                    <div class="rope"></div>
                    <div class="rope-line rope-line-6-1"></div>
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '~styles/main.sass'

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
        opacity: 0.35
        z-index: 0
        margin-left: auto
        margin-right: auto

    .rope-line
        position: absolute
        width: 2px
        left: 50%
        opacity: 0.15
        transform: translateX(-50%)

    .rope-line-1-1

    .rope-line-2-1
        height: 120px
        top: 24%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-2-2
        height: 200px
        top: 52%
        background: linear-gradient(to bottom, $gradient-light-yellow, $gradient-dark-yellow)
    .rope-line-2-3
        height: 240px
        top: 90%
        background: linear-gradient(to bottom, $gradient-light-green, $gradient-dark-green)

    .rope-line-3-1
        height: 200px
        top: 48%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-3-2


    .rope-line-4-1
        height: 120px
        top: 12%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-4-2
        height: 200px
        top: 20%
        background: linear-gradient(to bottom, $gradient-light-green, $gradient-dark-green)
    .rope-line-4-3
        height: 200px
        top: 68%
        background: linear-gradient(to bottom, $gradient-light-purple, $gradient-dark-purple)

    .rope-line-5-1
        height: 200px
        top: 60%
        background: linear-gradient(to bottom, $gradient-light-blue, $gradient-dark-blue)
    .rope-line-6-1


</style>