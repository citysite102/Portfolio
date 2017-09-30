<template lang="html">
    <div class="footer">
        <el-row :gutter="16">
            <el-col :span="20" :offset="2">
                <!-- <h3>CONTACT ME</h3> -->
                <p class="first-title">citysite1025@gmail.com</p>
                <p>+886 938-126-399</p>
                <p>© Copyright 2017 Samuel Kao - All Rights Reserved</p>
            </el-col>
        </el-row>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import url('https://fonts.googleapis.com/css?family=Yrsa:300,400,500');
    @import '~styles/main.sass';

    .footer
        background: $default-footer-color
        padding-bottom: 80px
        height: 72px
        text-align: center
        h3
            font-family: 'Graphik'
            font-weight: 600
            margin-top: 40px
            color: $text-color-gray-light
        p
            font-family: 'Yrsa', serif
            font-weight: 300
            font-size: 20px
            color: $text-color-gray-light

    .first-title
        margin-top: 32px

</style>