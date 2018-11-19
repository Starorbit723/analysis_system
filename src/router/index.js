import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const index = r => require.ensure([], () => r(require('@pages/index')), 'index')
const myData = r => require.ensure([], () => r(require('@pages/myData')), 'myData')
const addData = r => require.ensure([], () => r(require('@pages/addData')), 'addData')
const addData_SI = r => require.ensure([], () => r(require('@pages/addData_SI')), 'addData_SI')
const addData_Field = r => require.ensure([], () => r(require('@pages/addData_Field')), 'addData_Field')
const analysisType = r => require.ensure([], () => r(require('@pages/analysisType')), 'analysisType')
const contactUs = r => require.ensure([], () => r(require('@pages/contactUs')), 'contactUs')

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
      path: '/addData_SI',
      name: 'addData_SI',
      component: addData_SI
    }, {
      path: '/addData_Field',
      name: 'addData_Field',
      component: addData_Field
    }, {
      path: '/analysisType',
      name: 'analysisType',
      component: analysisType
    }, {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    }
  ]
})
