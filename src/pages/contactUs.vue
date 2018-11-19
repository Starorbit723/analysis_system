<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        联系我们
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

</style>
