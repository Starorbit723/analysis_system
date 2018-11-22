import Vue from 'vue'
import Router from 'vue-router'
import Store from '../store/index'
import { Message } from 'element-ui'
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
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。

  const nextRoute = ['myData', 'addData', 'addDataSI', 'addDataField', 'analysisType', 'analysisEcharts']
  // 未登录状态,呼起登录框
  if (getCookie('userName')) {
    Store.state.userLogin.isLogin = true
    Store.state.userLogin.userInfo = {
      userName: getCookie('userName'),
      passWord: getCookie('passWord')
    }
  } else if (nextRoute.indexOf(to.name) >= 0 && (!getCookie('userName'))) {
    Message({
      message: 'Please Login At First !',
      type: 'warning'
    })
    Store.state.userLogin.showLoginPop = true
    return
  }
  next()
})

export default router
