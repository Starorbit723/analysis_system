const state = {
  showLoginPop: false
}
const mutations = {
  submitLoginPopVisible (state, payload) {
    state.showLoginPop = payload.params
  }
}
const actions = {
  //更新登录框的显示状态
  updateLoginPopVisible: (context, params) => {
    context.commit({
      type: 'submitLoginPopVisible',
      params: params
    })
  }
}
const getters = {
  getLoginPopVisible: state => {
    return state.showLoginPop
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
