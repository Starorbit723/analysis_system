'use strict'

import Vue from 'vue'
import axios from 'axios'
import { Message } from 'element-ui'
import { getCookie } from './cookie.js'
import qs from 'qs'

Vue.prototype.$qs = qs

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
axios.defaults.headers.post['Content-Type'] = 'application/json;chartset=uft-8'

let config = {
  //baseURL: process.env.NODE_ENV === 'development' ? 'https://test-inside-saas.01zhuanche.com' : 'https://inside-saas.01zhuanche.com',
  // timeout: 60 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  function (config) {
    // 请求发送之前执行
    config.headers['Content-Type'] = 'application/json;chartset=uft-8';
    config.headers['e-access-token'] = getCookie('e-access-token') //获取Cookie;
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    if (response.data.code === 0) {
      return response.data
    } else {
      switch (response.data.code) {
        case 401: // 尚未登录
          Message({
            message: '对不起，您的权限不足',
            type: 'error'
          })
          break
        case 500: // 服务器问题
          Message({
            message: '对不起，服务器开小差了，请稍后再试',
            type: 'error'
          })
          break
        default:
          if (response.data.data.errorMsg) {
            Message({
              message: response.data.data.errorMsg,
              type: 'error'
            })
          }
        return response.data
      }
    }
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

Plugin.install = function (Vue) {
  Vue.axios = _axios
  window.axios = _axios
  Object.defineProperties(Vue.prototype, {
    axios: {
      get () {
        return _axios
      }
    },
    $axios: {
      get () {
        return _axios
      }
    }
  })
}

Vue.use(Plugin)

export default Plugin
