<template>
  <div class="list"
       @mouseenter="wireTransitionCome"
       @mouseleave="wireTransitionEnter">
    <div class="title-img"
         :class="imgMagnify"></div>
    <h2 class="title">世间安得双全法， 不负如来不负卿。</h2>
    <div class="box">
      <button class="btn">阅读全文</button>
      <div class="wire"
           :class="wireWidth"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DiaryList',
  data () {
    return {
      wireWidth: '',
      imgMagnify: ''
    }
  },
  methods: {
    wireTransitionCome () {
      this.wireWidth = 'wire-transition-come'
      this.imgMagnify = 'img-magnify-come'
    },
    wireTransitionEnter () {
      this.wireWidth = 'wire-transition-enter'
      this.imgMagnify = 'img-magnify-enter'
    }
  }
}
</script>
<style lang="stylus" scoped>
.list
  margin-bottom 1rem
  .title-img
    height 6.5rem
    margin-bottom 0.6rem
    background url('/static/images/3.jpeg')
    background-size 100% 100%
    background-position center
    background-repeat no-repeat
    box-shadow 0 2px 12px 0 rgba(0, 0, 0, 0.7)
  .img-magnify-come
    background-size 110% 110%
    transition all 0.7s ease-in-out
  .img-magnify-enter
    background-size 100% 100%
    transition all 0.4s ease-in-out
  .title
    font-size 0.6rem
    margin-bottom 0.4rem
    color #000
  .box
    display flex
    flex-direction column
    justify-content center
    align-items flex-end
    .btn
      height 0.6rem
      line-height 0.6rem
      color #fff
      padding 0 0.6rem
      border-radius 0
      background-color #393939
      border-color #393939
      margin-bottom 0.3rem
      cursor pointer
    .btn:hover
      background-color rgba(57, 57, 57, 0.9)
      transition all 0.5s
    .wire
      width 1rem
      height 0.06rem
      background-color #f80000
    .wire-transition-come
      width 100%
      transition width 1s ease-out
    .wire-transition-enter
      width 1rem
      transition width 1s ease-out
</style>
