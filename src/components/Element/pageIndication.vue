<template lang="html">
    <div class="container" @mouseover="hover">
        <div class="line" v-bind:class="isSelected(1)"></div>
        <div class="line" v-bind:class="isSelected(2)"></div>
        <div class="line" v-bind:class="isSelected(3)"></div>
        <div class="line" v-bind:class="isSelected(4)"></div>
    </div>
</template>

<script>
  export default {
    props: [],
    data () {
        return {
            // currentIndex: 1
        }
    },
    props: ['currentIndex'],
    watch: {
        'currentIndex': function(val) {
            // console.log("改變啦----"+val);
        }
    },
    mounted: function() {
        var _this = this;
        $(document).on('index.update', function(e, response) {
            _this.$set('currentIndex', response);
        });
    },
    methods: {
        isSelected: function(i) {
            var condition = this.currentIndex==i;
            return {
                selected: condition
            }
        },
        hover: function() {
            this.currentIndex = 2;
        }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
    @import '~styles/main.sass'

    .container
        position: fixed
        top: 45%
        height: 36px
        width: 40px

    .line
        width: 18px
        height: 4px
        margin-top 16px
        margin-bottom: 16px
        background: $page-color-gray
        // transform-origin: 100% 50%
        transform-origin: 0% 50%
        transition: all 0.8s cubic-bezier(0,1.09,0.56,1)


    .selected
        transform: scale3d(1.4, 1, 1)
        background: white
        // width: 44px

</style>