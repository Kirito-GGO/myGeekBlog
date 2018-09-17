<template>
  <div class="classify-box">
    <classify-header ref="headerdom"></classify-header>
    <classify-content class="content"></classify-content>
    <classify-footer ref="footerdom"></classify-footer>
    <go-top :headerDomH="headerDomH"
            :footerDomH="footerDomH"></go-top>
  </div>
</template>
<script>
import ClassifyHeader from 'common/header/Header'
import ClassifyFooter from 'common/footer/Footer'
import ClassifyContent from './components/Content'
import GoTop from 'common/goTop/GoTop'

export default {
  name: 'Classify',
  data () {
    return {
      headerDomH: 0,
      footerDomH: 0
    }
  },
  components: {
    ClassifyHeader,
    ClassifyFooter,
    ClassifyContent,
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
.classify-box
  height 100%
  .content
    min-height calc(100% - 883px)
    padding-bottom 7rem
</style>
