<template>
  <div class="diary-box">
    <diary-header ref="headerdom"></diary-header>
    <diary-content class="content"></diary-content>
    <diary-footer ref="footerdom"></diary-footer>
    <go-top :headerDomH="headerDomH"
            :footerDomH="footerDomH"></go-top>
  </div>
</template>
<script>
import DiaryHeader from 'common/header/Header'
import DiaryFooter from 'common/footer/Footer'
import DiaryContent from './components/Content'
import GoTop from 'common/goTop/GoTop'
export default {
  name: 'Diary',
  data () {
    return {
      headerDomH: 0,
      footerDomH: 0
    }
  },
  components: {
    DiaryHeader,
    DiaryFooter,
    DiaryContent,
    GoTop
  },
  mounted () {
    // 获取头部和页脚的dom高度
    this.headerDomH = this.$refs.headerdom.$el.offsetHeight
    this.footerDomH = this.$refs.footerdom.$el.offsetHeight
  }
}
</script>
<style lang="stylus" scoped>
.diary-box
  height 100%
  .content
    min-height calc(100% - 883px)
    padding-bottom 7rem
</style>
