<template>
  <div class="content">
    <classify-list></classify-list>
    <pagination></pagination>
  </div>
</template>
<script>
import ClassifyList from './List'
import Pagination from 'common/pagination/Pagination'

export default {
  name: 'ClassifyContent',
  components: {
    ClassifyList,
    Pagination
  }
}
</script>
<style lang="stylus" scoped>
.content
  max-width 20rem
  margin 0 auto
  margin-top 1rem
  margin-bottom 1rem
</style>
