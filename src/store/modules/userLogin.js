import { setCookie } from '../../utils/cookie'

const state = {
  showLoginPop: false,
  isLogin: false,
  userInfo: {
    userName: '',
    passWord: ''
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
    if (payload.params.userName) {
      setCookie('userName', payload.params.userName, 7)
      setCookie('passWord', payload.params.passWord, 7)
    } else {
      setCookie('userName', '', 0)
      setCookie('passWord', '', 0)
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
