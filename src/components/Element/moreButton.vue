<template lang="html">
  <div>
    <div class="more-button" @mouseover="isHover=true" @mouseleave="isHover=false" v-bind:class="{ hover: isHover}">
        <a class="more-link" :href="directLink">
        <div class="bg-container">
        </div>
        <div class="text">{{title}}
        </div>
        <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60px" height="40px" viewBox="-50 -50 100 100" xml:space="preserve">
                <!-- <polyline fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" points="
                0.375,0.375 45.63,38.087 0.375,75.8 "/> -->
                <line x1="-40" y1="0" x2="32" y2="0"></line>
                <polyline fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" points="
                18.0,-12.0 30,0 18.0,12.0 "/></polyline>
            </svg>
        </div>
        </a>
    </div>
  </div>

</template>

<script>
  export default {
    props: ["title", "directLink"],
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
        height: 48px

        line
            stroke: white
            stroke-width: 6px

    .text
        display: inline-block
        height: 100%
        width: auto
        box-sizing: border-box
        vertical-align: top
        line-height: 48px
        margin-left: 26px
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1)
        font-size: 18px


    .icon
        display: inline-block
        height: 100%
        width: auto
        box-sizing: border-box
        vertical-align: top
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1) 0.05s

    .more-link
        width: 100%
        height: 100%
        display: inline-block
        margin: 0px
        font-size: 16px
        font-weight: 500
        text-decoration: none

    .more-button
        width: 130px
        height: 48px
        cursor: pointer
        font-size: 16px
        font-weight: 500
        margin-top: 88px
        margin-bottom: 88px
        letter-spacing: 1px
        transition: all 1.0s cubic-bezier(0,1.09,0.56,1)
        vertical-align: top
        border: 3px solid transparent
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
        width: 132px
        height: 50px
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