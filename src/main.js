import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
//import axios from 'axios'
import './utils/axios'
import ElementUI from 'element-ui'
import './assets/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.prototype.baseUrl = 'http://118.89.220.76:8888'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
