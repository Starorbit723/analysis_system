<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <ScatterPlot :scatterPlotData="scatterPlotData"></ScatterPlot>
      </div>
    </section>
    <Footer :footerFixed="footerFixed"></Footer>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'
import ScatterPlot from '@components/echarts/scatterPlot'

export default {
  components: {Header, Footer, ScatterPlot},
  data () {
    return {
      footerFixed: true,
      scatterPlotData: {
        title: 'this is a title',
        data:[]
      }
    }
  },
  mounted () {
    console.log(this.$route.params.analysisForm)
  },
  methods: {
  }
}
</script>

<style>

</style>
