<template>
  <div class="content">
    <home-list></home-list>
    <home-list></home-list>
    <home-list></home-list>
    <home-list></home-list>
    <el-pagination class="paging"
                   background
                   layout="prev, pager, next"
                   :page-count="3">
    </el-pagination>
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
.content >>> .el-pagination.is-background .el-pager li
  color #909399
.content >>> .el-pager li:hover
  color #909399
.content >>> .el-pagination.is-background .el-pager li:not(.disabled):hover
  color #303133
.content >>> .el-pagination.is-background .el-pager li:not(.disabled).active
  background-color #393939
  color #fff
.content
  max-width 24rem
  margin 0 auto
  margin-top 1rem
  margin-bottom 1rem
  .paging
    text-align center
</style>
