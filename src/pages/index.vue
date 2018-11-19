<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <!--图片-->
      <div class="headadv">
        <div class="content_warpper">
          11
        </div>
      </div>
      <div class="content_warpper">
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
  }
}
</script>

<style>
  .headadv{
    height: 400px;
    background: -webkit-linear-gradient(left,#70addc, #bed9ee,#70addc);
    background: -o-linear-gradient(left,#70addc, #bed9ee,#70addc);
    background: -moz-linear-gradient(left,#70addc, #bed9ee,#70addc);
    background: linear-gradient(to right,#70addc, #bed9ee,#70addc);
  }
</style>
