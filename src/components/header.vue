<template>
  <header>
    <div class="logo_zone">
      <img src="../assets/images/logo_bg2.png">
    </div>
    <nav>
      <ul class="menu_list">
        <li :class="{'activeNav': item.isActive}" v-for="item in menuList" :key="item.name" @click="toPageUrl(item.path)">{{item.name}}</li>
      </ul>
    </nav>
    <div class="login_nav">
      <div class="login_btn" @click="openLoginPop">Login</div>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      menuList: [{
        name: 'Home',
        path: '/index',
        isActive: false
      }, {
        name: 'Add Data',
        path: '/addData',
        isActive: false
      }, {
        name: 'My Data',
        path: '/myData',
        isActive: false
      }, {
        name: 'About Us',
        path: '/aboutUs',
        isActive: false
      }, {
        name: 'Contact Us',
        path: '/contactUs',
        isActive: false
      }]
    }
  },
  created () {
    this.activeNow()
  },
  methods: {
    ...mapActions(['updateLoginPopVisible']),
    openLoginPop () {
      this.updateLoginPopVisible(true)
    },
    toPageUrl (url) {
      this.$router.push({path: url})
    },
    activeNow () {
      for (let i = 0; i < this.menuList.length; i++) {
        if (this.menuList[i].path === this.$route.path) {
          this.menuList[i].isActive = true
        } else if (this.$route.path === '/') {
          this.menuList[0].isActive = true
        } else if (this.$route.path === '/addData_SI' || this.$route.path === '/addData_Field') {
          this.menuList[1].isActive = true
        } else {
          this.menuList[i].isActive = false
        }
      }
    }
  }
}
</script>

<style>
  header{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 60px;
    z-index: 200;
    line-height: 60px;
    background: #205081;
  }
  .logo_zone{
    float: left;
    padding: 0 10px;
    height: 60px;
    background:#1a3f66;
  }
  .logo_zone img{
    display: block;
    float: left;
    width: 250px;
    height: 60px;
  }
  nav{
    display: block;
    float: left;
    height: 60px;
    color: #FFF;
  }
  .menu_list li{
    display: block;
    float: left;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    width: 130px;
    height: 60px;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }
  .activeNav{
    background: #1a3f66;
    border-bottom: 5px solid #23d8ff;
  }
  .menu_list li:hover{
    background: #1a3f66;
    border-bottom: 5px solid #23d8ff;
  }
  .login_nav{
    float: right;
    width: 15%;
    line-height: 60px;
    color: #FFF;
  }
  .login_btn{
    float: right;
    width: 100px;
    height: 60px;
    font-size: 14px;
    text-align: center;
    cursor: pointer;
  }
  .login_btn:hover{
    color: #23d8ff;
    background: #1a3f66;
  }
</style>
