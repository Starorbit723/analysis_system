import Vue from 'vue'
import Router from 'vue-router'
import { getCookie } from '../utils/cookie'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@pages/index')), 'index')
const myData = r => require.ensure([], () => r(require('@pages/myData')), 'myData')
const addData = r => require.ensure([], () => r(require('@pages/addData')), 'addData')
const addDataSI = r => require.ensure([], () => r(require('@pages/addDataSI')), 'addDataSI')
const addDataField = r => require.ensure([], () => r(require('@pages/addDataField')), 'addDataField')
const analysisType = r => require.ensure([], () => r(require('@pages/analysisType')), 'analysisType')
const analysisEcharts = r => require.ensure([], () => r(require('@pages/analysisEcharts')), 'analysisEcharts')
const contactUs = r => require.ensure([], () => r(require('@pages/contactUs')), 'contactUs')
const aboutUs = r => require.ensure([], () => r(require('@pages/aboutUs')), 'aboutUs')

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/index',
      name: 'index',
      component: index
    }, {
      path: '/myData',
      name: 'myData',
      component: myData
    }, {
      path: '/addData',
      name: 'addData',
      component: addData
    }, {
      path: '/addDataSI',
      name: 'addDataSI',
      component: addDataSI
    }, {
      path: '/addDataField',
      name: 'addDataField',
      component: addDataField
    }, {
      path: '/analysisType',
      name: 'analysisType',
      component: analysisType
    }, {
      path: '/analysisEcharts',
      name: 'analysisEcharts',
      component: analysisEcharts
    }, {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }, {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    }
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  console.log('navigation-guards')
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  
  console.log('222222222222', getCookie)
  const nextRoute = ['myData', 'addData', 'addDataSI', 'addDataField', 'analysisType', 'analysisEcharts']
  let isLogin = document.cookie
  // 未登录状态；当路由到nextRoute指定页时，跳转至index
  if (nextRoute.indexOf(to.name) >= 0) { 
    if (!isLogin) {
      console.log('what fuck')
      router.push({ name: 'index' })
    }
  }
  
  next()
})

export default router
