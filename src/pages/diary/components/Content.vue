<template>
  <div class="content">
    <diary-list></diary-list>
    <diary-list></diary-list>
    <diary-list></diary-list>
    <diary-list></diary-list>
    <pagination></pagination>
  </div>
</template>
<script>
import DiaryList from './List'
import Pagination from 'common/pagination/Pagination'
export default {
  name: 'DiaryContent',
  components: {
    DiaryList,
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
