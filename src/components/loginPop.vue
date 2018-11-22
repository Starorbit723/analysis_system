<template>
  <div class="login_content" v-if="showLoginPop">
    <div class="shade_bg" @click="closeLoginPop"></div>
    <div class="login_box">
      <h1>Login</h1>
      <div class="input_group">
        <span>UserName</span>
        <input type="text" v-model="userName" placeholder="Write In UserName">
      </div>
      <div class="input_group">
        <span>Password</span>
        <input type="password" v-model="passWord" placeholder="6~12 Letters And Number" maxlength="12">
      </div>
      <button class="login_button" @click="userLogin">Login</button>
      <button class="register_button" @click="goToRegister">Register</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { setCookie, getCookie, deletCookie } from '../utils/cookie'

export default {
  data () {
    return {
      userName:'',
      passWord:''
    }
  },
  computed:{
    ...mapGetters([
			'getLoginPopVisible'
    ]),
    showLoginPop () {
      return this.getLoginPopVisible
    }
  },
  methods:{
    ...mapActions(['updateLoginPopVisible', 'updateLoginFlag', 'updateUserInfo']),
    userLogin () {
      //模拟登陆请求成功
      var self = this
      if (self.userName === '111' && self.passWord === '111') {
        self.updateUserInfo({
          userName: 'yadong723@bitmain.com',
          passWord: '111'
        })
        self.updateLoginFlag(true)
        self.$message.success('Login Success!')
        console.log('Store:', self.$store.state.userLogin.isLogin, self.$store.state.userLogin.userInfo.userName, self.$store.state.userLogin.userInfo.passWord, 'Cookie:', document.cookie)
      }
      self.updateLoginPopVisible(false)
    },
    closeLoginPop () {
      this.updateLoginPopVisible(false)
    },
    goToRegister () {
      this.updateLoginPopVisible(false)
      this.$router.push({path: '/contactUs'})
    }
  }
}
</script>

<style>
  .login_content{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
  }
  .shade_bg{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3)
  }
  .login_box{
    position: absolute;
    width: 320px;
    height: 280px;
    background: #FFF;
    border-radius: 5px;
    top:50%;
    left:50%;
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
  }
  .login_box h1{
    height:60px;
    line-height: 60px;
    text-align: center;
    font-size:18px;
    color: #1a3f66;
  }
  .input_group{
    width: 80%;
    margin: 0 auto;
    height: 41px;
    margin-bottom: 20px;
    border-bottom: 1px solid #1a3f66;
  }
  .input_group span{
    width: 30%;
    float: left;
    display: block;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #205081;
  }
  .input_group input{
    display: block;
    float: left;
    width: 65%;
    height: 40px;
    font-size: 14px;
    padding-left: 5%;
  }
  .login_box input::-webkit-input-placeholder { /* WebKit browsers */
    color: rgb(184, 184, 184);
    font-size: 12px;
  }
  .login_box input:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: rgb(184, 184, 184);
    font-size: 12px;
  }
  .login_box input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: rgb(184, 184, 184);
    font-size: 12px;
  }
  .login_box input:-ms-input-placeholder { /* Internet Explorer 10+ */
    color: rgb(184, 184, 184);
    font-size: 12px;
  }
  .login_button{
    display: block;
    margin: 15px 10% 0 15%;
    float: left;
    width: 30%;
    height: 40px;
    background: #205081;
    color: #FFF;
    border-radius:4px;
    font-size: 14px;
  }
  .login_button:hover{
    background:#2a69a8;
  }
  .register_button{
    display: block;
    margin: 15px 0 0 0;
    float: left;
    width: 30%;
    height: 40px;
    background: #205081;
    color: #FFF;
    border-radius:4px;
    font-size: 14px;
  }
  .register_button:hover{
    background:#2a69a8;
  }
</style>
