<template>
  <div class="footer">
    <div class="top-item"></div>
    <div class="bottom-item">
      <p class="text">Designed&nbsp;&amp;&nbsp;Powerd&nbsp;by
        <a href="/">TengZiJian</a>
      </p>
      <a class="num"
         href="http://www.miibeian.gov.cn"
         target='_blank'>京ICP备18045527号-1
      </a>
    </div>
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
  margin-top -7rem
  display flex
  flex-direction column
  clear both
  .top-item
    height 100%
    background-color #131313
  .bottom-item
    height 1rem
    background-color #2b2b2b
    display flex
    flex-direction column
    justify-content center
    align-items center
    font-size 0.2rem
    .text
      color #fff
      margin-bottom 0.08rem
      a
        color #fff
        text-decoration underline
    .num
      color #fff
</style>
