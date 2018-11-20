import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@pages/index')), 'index')
const myData = r => require.ensure([], () => r(require('@pages/myData')), 'myData')
const addData = r => require.ensure([], () => r(require('@pages/addData')), 'addData')
const addDataSI = r => require.ensure([], () => r(require('@pages/addDataSI')), 'addDataSI')
const addDataField = r => require.ensure([], () => r(require('@pages/addDataField')), 'addDataField')
const analysisType = r => require.ensure([], () => r(require('@pages/analysisType')), 'analysisType')
const contactUs = r => require.ensure([], () => r(require('@pages/contactUs')), 'contactUs')
const aboutUs = r => require.ensure([], () => r(require('@pages/aboutUs')), 'aboutUs')

export default new Router({
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
