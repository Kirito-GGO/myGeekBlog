<template>
  <div class="footer">
    <div class="top-item">
      <div class="introduce">
        <div class="head-portrait"></div>
        <div class="introduce-text">
          <p class="name">滕子健</p>
          <p class="text">热爱前端，关注前端开发技术</p>
        </div>
      </div>
      <div class="celebrated">
        <p class="sentence">实践是最好的老师,但是,如果不能从中学习,再多的实践也没有用.</p>
        <p class="provenance">《人月神话》</p>
      </div>
      <div class="img-box">
        <span class="iconfont">&#xeb02;</span>
        <span class="iconfont iconfont2">&#xe7ba;</span>
      </div>
      <div class="img-box">
        <span class="iconfont">&#xe624;</span>
        <span class="iconfont iconfont2">&#xe610;</span>
      </div>
    </div>
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
    display flex
    flex-direction column
    justify-content flex-start
    .introduce
      height 2rem
      display flex
      justify-content center
      align-items center
      margin-top 1rem
      .head-portrait
        height 2rem
        width 2rem
        background url('/static/images/4.jpeg')
        background-size 100% 100%
        background-position center
        background-repeat no-repeat
        border 0.02rem solid #fff
        border-radius 0.1rem
        box-sizing border-box
      .introduce-text
        height 100%
        padding-left 0.6rem
        display flex
        flex-direction column
        justify-content center
        color #fff
        .name
          font-size 0.6rem
          margin-bottom 0.25rem
        .text
          font-size 0.3rem
    .celebrated
      text-align center
      font-size 0.4rem
      color #fff
      margin-top 0.5rem
      .sentence
        margin-bottom 0.2rem
      .provenance
        font-size 0.3rem
    .img-box
      display flex
      justify-content center
      align-items center
      color #fff
      .iconfont
        font-size 0.7rem
      .iconfont2
        font-size 0.6rem
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
