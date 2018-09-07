import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Diary from '@/pages/diary/Diary'
import Classify from '@/pages/classify/Classify'
import LeaveMessage from '@/pages/leaveMessage/LeaveMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/classify',
      name: 'Classify',
      component: Classify
    },
    {
      path: '/leavemessage',
      name: 'LeaveMessage',
      component: LeaveMessage
    }
  ],
  // 每次进入新页面 x轴滚动条初始位置为0 y轴滚动条初始位置为0 也就是页面切换的时候始终保持最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
