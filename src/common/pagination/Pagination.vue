<template>
  <div class="pagination">
    <el-pagination class="paging"
                   background
                   layout="prev, pager, next"
                   :page-count="3">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'Pagination'
}
</script>
<style lang="stylus" scoped>
.pagination >>> .el-pagination.is-background .el-pager li
  color #909399
.pagination >>> .el-pager li:hover
  color #909399
.pagination >>> .el-pagination.is-background .el-pager li:not(.disabled):hover
  color #303133
.pagination >>> .el-pagination.is-background .el-pager li:not(.disabled).active
  background-color #393939
  color #fff
.paging
  text-align center
</style>
