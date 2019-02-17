<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="echart_content">
        <!--Fundamental Analysis-->
        <ScatterPlot v-if="analysisConfig.chartType == 'Scatter Plot'" :scatterPlotData="scatterPlotData"></ScatterPlot>
        <BoxPlot v-if="analysisConfig.chartType == 'BoxPlot'" :boxPlotData="boxPlotData"></BoxPlot>
        <Histogram v-if="analysisConfig.chartType == 'Histogram'" :histogramData="histogramData"></Histogram>
        <!--Advanced Analysis-->
        
      </div>
    </section>
    <Footer :footerFixed="footerFixed"></Footer>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'
import ScatterPlot from '@components/echarts/scatterPlot'
import BoxPlot from '@components/echarts/boxPlot'
import Histogram from '@components/echarts/histogram'

export default {
  components: {Header, Footer, ScatterPlot, BoxPlot, Histogram},
  data () {
    return {
      footerFixed: true,
      // 配置项
      analysisConfig: {},
      scatterPlotData: {
        title: 'this is a title',
        data:[]
      },
      boxPlotData:{
        title: 'this is a title2',
        data:[]
      },
      histogramData:{
        title: 'this is a title3',
        data:[]
      }
    }
  },
  created () {
    console.log('Echart配置', this.$route.params.analysisForm)
    if (this.$route.params.analysisForm) {
      this.analysisConfig = this.$route.params.analysisForm
    } else {
      this.$router.push({path:'/analysisType'})
    }
  },
  mounted () {
    
  },
  methods: {
  }
}
</script>

<style>
.echart_content{
  padding: 50px 0 0 0;
}
</style>
