import { setCookie } from '../../utils/cookie'

const state = {
  showLoginPop: false,
  isLogin: false,
  userInfo: {
    loginName:'',
    formalName:'',
    email:'',
    phone:''
  }
}
const mutations = {
  submitLoginPopVisible (state, payload) {
    state.showLoginPop = payload.params
  },
  submitLoginFlag (state, payload) {
    state.isLogin = payload.params
  },
  submitUserInfo (state, payload) {
    state.userInfo = payload.params
    if (payload.params.loginName) {
      setCookie('loginName', payload.params.loginName, 1)
      setCookie('formalName', payload.params.formalName, 1)
      setCookie('email', payload.params.email, 1)
      setCookie('phone', payload.params.phone, 1)
    } else {
      setCookie('loginName', '', 0)
      setCookie('formalName', '', 0)
      setCookie('email', '', 0)
      setCookie('phone', '', 0)
    }
  }
}
const actions = {
  //更新登录框的显示状态
  updateLoginPopVisible: (context, params) => {
    context.commit({
      type: 'submitLoginPopVisible',
      params: params
    })
  },
  //更新是否登陆
  updateLoginFlag: (context, params) => {
    context.commit({
      type: 'submitLoginFlag',
      params: params
    })
  },
  //更新用户登录信息
  updateUserInfo: (context, params) => {
    context.commit({
      type: 'submitUserInfo',
      params: params
    })
  }
}
const getters = {
  getLoginPopVisible: state => {
    return state.showLoginPop
  },
  getLoginFlag: state => {
    return state.isLogin
  },
  getUserInfo: state => {
    return state.userInfo
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
