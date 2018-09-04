<template>
  <div>
    <el-container>
      <el-header height="auto">
        <home-header></home-header>
      </el-header>
      <el-main height="auto">
        <home-main></home-main>
      </el-main>
      <el-footer height="auto">
        <home-footer></home-footer>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import homeHeader from './components/Header'
import homeMain from './components/Main'
import homeFooter from './components/Footer'

export default {
  name: 'Home',
  components: {
    homeHeader,
    homeMain,
    homeFooter
  }
}
</script>
<style lang="stylus" scoped>
.el-header
  padding 0
.el-main
  padding 0
.el-footer
  padding 0
</style>
