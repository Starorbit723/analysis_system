<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <div class="tips_zone">Please Choice The Unit Of Your Data<br>Different Unit Maybe Lead To Different Analysis Result</div>
        <el-row>
          <el-col :span="4" :offset="7">
            <el-button type="primary" class="el-width-st100" @click="toAddDataPage(0)" round>SI Unit</el-button>
          </el-col>
          <el-col :span="4" :offset="2">
            <el-button type="primary" class="el-width-st100" @click="toAddDataPage(1)" round>Field Unit</el-button>
          </el-col>
        </el-row>
      </div>
    </section>
    <Footer :footerFixed="footerFixed"></Footer>
    <LoginPop></LoginPop>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'
import LoginPop from '@components/loginPop'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: {Header, Footer, LoginPop},
  data () {
    return {
      footerFixed: true
    }
  },
  methods: {
    toAddDataPage (type) {
      type === 0 ? this.$router.push({path:'/addData_SI'}) : this.$router.push({path:'/addData_Field'})
    }
  }
}
</script>

<style scoped>
  .tips_zone{
    margin: 160px 0 50px 0;
    line-height: 40px;
    color:#205081;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
</style>
