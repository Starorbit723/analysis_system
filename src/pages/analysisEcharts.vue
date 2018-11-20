<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
      </div>
    </section>
    <Footer :footerFixed="footerFixed"></Footer>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'

export default {
  components: {Header, Footer},
  data () {
    return {
      footerFixed: true
    }
  },
  mounted () {
    console.log(this.$route.params.analysisForm)
  }
}
</script>

<style>

</style>
