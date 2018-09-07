<template>
  <div class="list"
       @mouseenter="wireTransitionCome"
       @mouseleave="wireTransitionEnter">
    <div class="title-img"
         :class="imgMagnify"></div>
    <h2 class="title">使用Intersection Observer API构建无限滚动组件</h2>
    <p class="content">在开发过程中，经常会遇到要处理大量数据的情况，比如列表、搜索记录等，因此你需要一种方法让用户以块状显示这些数据，以便保持应用程序性能和数据的有序性。你可能会使用分页组件来处理，它可以轻松跳转，甚至一次跳转几个页面。当然，元素滚动是分页组件的另一种替代方案，它可以提供更好的用户体验，特别是在移动端和可触摸设备上。当用记在页面上滚动时，它提供了一个透明的分页，给人一种没有结尾列表的感觉。自从Intersection Observer API出现之后，构建无限滚动组件变得更简单。让我们看看如何通过这个API来构建无限滚动组件。自从Intersection Observer API出现之后，构建无限滚动组件变得更简单。让我们看看如何通过这个API来构建无限滚动组件。自从Intersection Observer API出现之</p>
    <div class="box">
      <button class="btn">阅读全文</button>
      <div class="wire"
           :class="wireWidth"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeList',
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
    background url('/static/images/2.jpeg')
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
  .content
    margin-bottom 0.4rem
    color #626262
    line-height 0.44rem
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
