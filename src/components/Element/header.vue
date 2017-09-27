<template lang="html">
    <div>
        <div class="header">
            <el-row :gutter="16">
                <el-col :span="10" :offset="1">
                    <div class="menu"></div>
                </el-col>
                <el-col :span="10" :offset="2">
                    <ul class="link-container">
                        <li class="link-item"><a href="https://medium.com/@citysite1025">Medium</a></li>
                        <li class="link-item"><a href="https://github.com/citysite102">Github</a></li>
                        <li class="link-item"><a href="https://www.facebook.com/citysite1025">Facebook</a></li>
                    </ul>
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

    .header
        background-color: clear
        height: 180px
        width: 100%
        margin-bottom: -100px
        z-index: 2

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

    .link-item
        list-style: none
        display: inline-block
        top: 50%
        transform: translateY(-50%)
        margin-right: 60px
        font-size: 22px

        a
            font-size: 22px
            text-decoration: none


        
</style>