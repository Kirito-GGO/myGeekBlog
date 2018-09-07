<template>
  <div class="header">
    <div class="header-title">
      <h1 class="title">Kirito’s Blog</h1>
      <h1 class="text">Practice is the best of all instructors.</h1>
    </div>
    <!-- default-active="1" 当前激活菜单的index -->
    <el-menu class="el-menu-demo"
             router
             mode="horizontal"
             :default-active="this.$route.path"
             background-color="rgba(0,0,0,0)"
             active-text-color="#fff">
      <el-menu-item index="/">首页</el-menu-item>
      <el-menu-item index="/diary">随笔</el-menu-item>
      <el-menu-item index="/classify">归档</el-menu-item>
      <el-menu-item index="/leavemessage">留言</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style lang="stylus" scoped>
.header >>> .el-menu-item:not(.is-disabled):hover
  background-color rgba(0, 0, 0, 0) !important
.header
  height 10.66rem
  background-image url('/static/images/1.jpg')
  background-repeat no-repeat
  background-size 100% 100%
  .header-title
    height 9.44rem
    display flex
    flex-direction column
    justify-content center
    align-items center
    .title
      color #fff
      text-align center
      font-family HappyKiller
      font-size 0.8rem
      text-shadow 0.08rem 0.08rem 0.02rem #000
      margin-bottom 0.6rem
    .text
      color #fff
      text-align center
      font-family HappyKiller
      font-size 0.4rem
      text-shadow 0.08rem 0.08rem 0.02rem #000
  .el-menu-demo
    display flex
    justify-content center
</style>
