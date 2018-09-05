<template>
  <div class="footer">
    <div class="top-item"></div>
    <div class="bottom-item"></div>
  </div>
</template>
<script>
export default {
  name: 'Footer'
}
</script>
<style lang="stylus" scoped>
.footer
  height 7rem
  display flex
  flex-direction column
  .top-item
    height 100%
    background-color #131313
  .bottom-item
    height 1.2rem
    background-color #2b2b2b
</style>
