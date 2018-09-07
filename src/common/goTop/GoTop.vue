<template>
  <transition name="el-fade-in-linear">
    <button class="go-top el-icon-arrow-up"
            :class="{'go-top-white':goTopWhite}"
            ref="gotop"
            :disabled="disabled"
            v-show="goTopShow"
            @click="handleClick"></button>
  </transition>
</template>
<script>
export default {
  name: 'GoTop',
  data () {
    return {
      goTopWhite: false,
      goTopShow: false,
      goTopH: 0,
      // 网页被卷去的高
      scrollT: 0,
      // 上一次网页被卷去的高
      lastScrollT: 0,
      // 用于函数节流
      timer: null,
      // 防止按钮多次点击
      disabled: false
    }
  },
  props: {
    headerDomH: Number,
    footerDomH: Number
  },
  methods: {
    handleClick () {
      this.disabled = true
      this.lastScrollT = document.documentElement.scrollTop
      this.timer = setInterval(() => {
        let speed = Math.floor(this.scrollT / 8)
        if (speed === 0) {
          clearInterval(this.timer)
          this.disabled = false
        }
        document.documentElement.scrollTop -= speed
      }, 16)
    },
    handleScroll () {
      // 网页被卷去的高
      this.scrollT = document.documentElement.scrollTop
      if (this.lastScrollT <= this.scrollT) {
        clearInterval(this.timer)
        this.disabled = false
      } else {
        this.lastScrollT = this.scrollT
      }
      // 网页被卷去的高 < header组件的高度
      if (this.scrollT > this.headerDomH) {
        this.goTopShow = true
        // 获取gotop组件高度
        this.goTopH = this.$refs.gotop.offsetHeight
      } else {
        this.goTopShow = false
        return
      }
      // 网页可见区域高
      let offsetH = document.documentElement.offsetHeight
      // 网页正文全文高(网页正文全文高 - footer组件的高度 + gotop的高度)
      let scrollH = document.documentElement.scrollHeight - this.footerDomH
      // 网页被卷去的高 + 网页可见区域高 > 网页正文全文高(网页正文全文高 - foot组件的高度 + gotop的高度)
      if (this.scrollT + offsetH - this.goTopH > scrollH) {
        this.goTopWhite = true
      } else {
        this.goTopWhite = false
      }
    }
  },
  // 生命周期 dom被挂载到页面上时触发
  mounted () {
    // 绑定在window上的事件需要解绑
    window.addEventListener('scroll', this.handleScroll)
  },
  // 生命周期 当组件将要销毁时
  destroyed () {
    // 解绑事件
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
.go-top
  width 1rem
  height 1rem
  line-height 1rem
  text-align center
  font-size 0.4rem
  position fixed
  right 1rem
  bottom 1rem
  cursor pointer
  color #393939
  border 0.02rem solid #393939
  background rgba(0, 0, 0, 0)
.go-top-white
  color #fff
  border 0.02rem solid #fff
</style>
