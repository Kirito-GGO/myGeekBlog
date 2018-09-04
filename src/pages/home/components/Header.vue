<template>
  <div class="header">
    <h1 class="title">Geek Blog</h1>
    <el-menu :default-active="activeIndex"
             class="el-menu-demo"
             mode="horizontal"
             @select="handleSelect">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">前端</el-menu-item>
      <el-menu-item index="3">后端</el-menu-item>
      <el-menu-item index="4">留言</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'homeHeader',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
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
  height 6.66rem
  background url('/static/images/QQ20180905-012725.png')
  background-position 0 -3.03rem
  background-size 100% 171%
  .title
    color #fff
    line-height 5.44rem
    text-align center
    font-size 1rem
    // text-shadow 3px 3px 0 #666666
    text-shadow 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25)
  .el-menu
    display flex
    justify-content center
</style>
