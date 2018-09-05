<template>
  <div class="header">
    <h1 class="title">Geek Blog</h1>
    <!-- default-active="1" 当前激活菜单的index -->
    <el-menu class="el-menu-demo"
             mode="horizontal"
             default-active="home"
             active-text-color="#fff"
             background-color="#000"
             @select="handleSelect">
      <el-menu-item index="home">首页</el-menu-item>
      <el-menu-item index="web">前端</el-menu-item>
      <el-menu-item index="node">后端</el-menu-item>
      <el-menu-item index="leave">留言</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang="stylus" scoped>
.header
  height 10.66rem
  background-color #000
  .title
    color #fff
    line-height 9.44rem
    text-align center
    font-size 1rem
    text-shadow 0.06rem 0.06rem 0 #666
  .el-menu-demo
    display flex
    justify-content center
</style>
