<template>
  <div class="leave-box">
    <home-header></home-header>
    <div class="content">留言</div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import HomeHeader from 'common/header/Header'
import HomeFooter from 'common/footer/Footer'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeFooter
  }
}
</script>
<style lang="stylus" scoped>
.leave-box
  height 100%
  .content
    min-height calc(100% - 883px)
    padding-bottom 7rem
</style>
