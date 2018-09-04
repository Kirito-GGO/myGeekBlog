<template>
  <el-card shadow="hover"
           class="homeList">
    <h2 class="title">使用Intersection Observer API构建无限滚动组件</h2>
    <p class="content">在开发过程中，经常会遇到要处理大量数据的情况，比如列表、搜索记录等，因此你需要一种方法让用户以块状显示这些数据，以便保持应用程序性能和数据的有序性。你可能会使用分页组件来处理，它可以轻松跳转，甚至一次跳转几个页面。当然，元素滚动是分页组件的另一种替代方案，它可以提供更好的用户体验，特别是在移动端和可触摸设备上。当用记在页面上滚动时，它提供了一个透明的分页，给人一种没有结尾列表的感觉。自从Intersection Observer API出现之后，构建无限滚动组件变得更简单。让我们看看如何通过这个API来构建无限滚动组件。自从Intersection Observer API出现之后，构建无限滚动组件变得更简单。让我们看看如何通过这个API来构建无限滚动组件。自从Intersection Observer API出现之</p>
    <div class="box">
      <el-button type="primary"
                 class="btn">阅读全文</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'HomeList'
}
</script>
<style lang="stylus" scoped>
.homeList
  padding 0.4rem
  padding-bottom 0
  background-color #fff
  margin-bottom 0.5rem
  // border 1px solid #409EFF
  border-radius 0.08rem
  .title
    font-size 0.7rem
    margin-bottom 0.5rem
    color #409eff
  .content
    margin-bottom 0.3rem
    color #5e6d82
    line-height 0.44rem
  .box
    display flex
    flex-direction row-reverse
    justify-content space-between
    align-items center
    margin-top 0.4rem
    margin-bottom 0.4rem
    height 0.8rem
    .round
      display inline-block
      width 0.2rem
      height 0.2rem
      background-color #666
      border-radius 50%
</style>
