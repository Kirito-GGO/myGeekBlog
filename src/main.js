// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Menu, MenuItem, Pagination } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// reset.css 重置基本样式 保证各种浏览器显示效果一致
import 'styles/reset.css'
// 字体
import 'styles/fonts.css'
// 引入iconfont
import 'styles/iconfont.css'

Vue.config.productionTip = false

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Pagination)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
