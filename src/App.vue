<template>
  <div id="app">

    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>          <!--当showFooter的值为true时，底部导航栏才会显示-->
  </div>
</template>

<script>

  import  FooterGuide from './components/FooterGuide/FooterGuide.vue'

  export  default {

    //异步显示数据
    mounted(){
      this.$store.dispatch("getAddress")
    },
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
