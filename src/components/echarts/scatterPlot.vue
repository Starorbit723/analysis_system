<template>
  <div class="scatterPlot_content" ref="scatterPlot"></div>
</template>

<script>
export default {
  props:['scatterPlotData'],
  data () {
    return {
      echarts:''
    }
  },
  mounted () {
    this.$nextTick(this.echartsInit)
  },
  methods: {
    echartsInit () {
      let self = this
      let initEcharts = self.$refs.scatterPlot
      self.echarts = self.$echarts.init(initEcharts)
      self.echarts.setOption({
				title: {
          text: self.scatterPlotData.title,
          left:'center',
          textStyle:{
            fontSize: '20',
            color: '#266099'
          }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          type: 'scatter',
          data: [120, 200, 150, 80, 70, 110, 130]
        }]
      })
    }
  }
}
</script>

<style>
  .scatterPlot_content{
    width:800px;
    height: 500px;
  }
</style>
