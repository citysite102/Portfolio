<template lang="html">
    <div>
        <div class="header">
            <el-row :gutter="16">
                <el-col :span="10" :offset="1">
                    <div class="menu"></div>
                </el-col>
                <el-col :span="10" :offset="2">
                    <ul class="link-container">
                        <li class="link-item">Medium</li>
                        <li class="link-item">Github</li>
                        <li class="link-item">Facebook</li>
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
    font-size: 22px
    list-style: none
    display: inline-block
    top: 50%
    transform: translateY(-50%)
    margin-right: 60px
    // margin: 40px
</style>