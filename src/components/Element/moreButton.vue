<template lang="html">
  <div>
    <div class="more-button" @mouseover="isHover=true" @mouseleave="isHover=false" v-bind:class="{ hover: isHover}">
        <div class="bg-container">
        </div>
        <div class="text">MORE WORKS</div>
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="40px" viewBox="-50 -50 100 100" xml:space="preserve">
                    <!-- <polyline fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="
                    0.375,0.375 45.63,38.087 0.375,75.8 "/> -->
                    <line x1="-44" y1="0" x2="32" y2="0"></line>
                    <polyline fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" points="
                    18.0,-12.0 30,0 18.0,12.0 "/>
                </svg>
            </div>
        </div>
  </div>

</template>

<script>
  export default {
    props: [],
    data () {
        return {
            isHover: false
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '~styles/main.sass'

    svg
        // border: solid 2px white
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1)
        box-sizing: border-box
        height: 56px

        line
            stroke: white
            stroke-width: 6px



    .text
        display: inline-block
        height: 100%
        // width: 100%
        width: auto
        box-sizing: border-box
        vertical-align: top
        line-height: 56px
        margin-left: 18px
        // padding-left: 16px
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1)
        font-size: 22px

        // &:before, &:after
        //     content: '';
        //     position: absolute;
        //     background: $gradient-light-blue;
        //     transition: transform 0.1s;
        //     transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
        //     left: 0;
        //     width: 100%;
        //     height: 4px;
        //     transform: scale3d(0, 1, 1);
        // &:before
        //     // top: 0;
        //     bottom: 0;
        //     -webkit-transform-origin: 0 50%;
        //     transform-origin: 0 50%;
        //     -webkit-transition-delay: 0.1s;
        //     transition-delay: 0.3s;
        // &:after
        //     // bottom: 0;
        //     top: 0;
        //     -webkit-transform-origin: 100% 50%;
        //     transform-origin: 100% 50%;
        //     -webkit-transition-delay: 0.3s;
        //     transition-delay: 0.1s;


    .icon
        display: inline-block
        height: 100%
        width: auto
        box-sizing: border-box
        vertical-align: top
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1) 0.05s

    .more-button
        width: 210px
        height: 56px
        cursor: pointer
        font-size: 22px
        font-weight: 600
        margin-top: 88px
        margin-bottom: 88px
        letter-spacing: 1px
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1)
        vertical-align: top
        border: 4px solid transparent
        border-image: linear-gradient(to bottom right, $gradient-light-blue 0%, $gradient-dark-blue 100%)
        border-image-slice: 1
        white-space: nowrap

        // &:before, &:after
        //     content: '';
        //     position: absolute;
        //     background: $gradient-light-blue;
        //     transition: transform 0.1s;
        //     transition-timing-function: cubic-bezier(1, 0.68, 0.16, 0.9);
        //     top: 0;
        //     width: 4px;
        //     height: 100%;
        //     transform: scale3d(1, 0, 1);
        // &:before
        //     left: 0;
        //     -webkit-transform-origin: 50% 0%;
        //     transform-origin: 50% 0%;
        //     transition-delay: 0.0s
        // &:after
        //     right: 0;
        //     -webkit-transform-origin: 50% 100%;
        //     transform-origin: 50% 100%;
        //     transition-delay: 0.2s

        &:hover
            // &:before, &:after
            //     transform: scale3d(1, 1, 1);
            // .text
            //     &:before, &:after
            //         transform: scale3d(1, 1, 1);
            // background: linear-gradient(to bottom right, $gradient-light-blue, $gradient-dark-blue)

            .text
                transform: translateX(6px)
                text-shadow: 6px 6px 10px #1A5FC0
            .icon
                transform: translateX(12px)
                // filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.8))
            .bg-container
                transform: scale3d(1, 1, 1)

    .bg-container
        // height: 100%
        // width: 100%
        width: 214px
        height: 58px
        margin: 0px
        position: absolute
        top: -1px
        left: -1px
        background: linear-gradient(to bottom right, $gradient-light-blue, $gradient-dark-blue)
        transition: all 0.4s cubic-bezier(0,1.09,0.56,1)
        transform: scale3d(0, 1, 1)
        transform-origin: 0% 50%
    // .hover
    //     &:before
    //         transition-delay: 0.3s
    //     &:after
    //         transition-delay: 0.1s

    //     .text
    //         &:before
    //             transition-delay: 0.0s
    //         &:after
    //             transition-delay: 0.2s


</style>