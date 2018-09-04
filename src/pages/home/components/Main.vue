<template>
  <div class="homeMainBox">
    <home-list></home-list>
    <home-list></home-list>
    <home-list></home-list>
  </div>
</template>
<script>
import HomeList from './List'
export default {
  name: 'homeMain',
  components: {
    HomeList
  }
}
</script>
<style lang="stylus" scoped>
.homeMainBox
  max-width 24rem
  margin 0 auto
  margin-top 1rem
  // background-color #fff
</style>
