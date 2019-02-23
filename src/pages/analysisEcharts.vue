<template>
    <div class="page_content">
        <Header></Header>
        <section class="main_body">
        <div class="echart_content">
            <!--Fundamental Analysis-->
            <ScatterPlot v-if="(analysisConfig.analysisType == 'Fundamental Analysis') && (analysisConfig.chartType == 'Scatter Plot')" :scatterPlotData="scatterPlotData"></ScatterPlot>
            <BoxPlot v-if="(analysisConfig.analysisType == 'Fundamental Analysis') && (analysisConfig.chartType == 'Box Plot')" :boxPlotData="boxPlotData"></BoxPlot>
            <Histogram v-if="(analysisConfig.analysisType == 'Fundamental Analysis') && (analysisConfig.chartType == 'Histogram')" :histogramData="histogramData"></Histogram>
            <!--Advanced Analysis-->
            <Cluster v-if="analysisConfig.analysisType == 'Advanced Analysis'" :clusterData="clusterData"></Cluster>
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
import Cluster from '@components/echarts/cluster'

export default {
    components: {Header, Footer, ScatterPlot, BoxPlot, Histogram, Cluster},
    data () {
        return {
            footerFixed: true,
            // 配置项
            analysisConfig: {},
            reqUrl:'',
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
            },
            clusterData:{
                title: 'this is a title4',
                data:[]
            }
        }
    },
    created () {
        var self = this
        console.log('Echart配置', self.$route.params.analysisForm)
        if (self.$route.params.analysisForm) {
            self.analysisConfig = self.$route.params.analysisForm
        } else {
            self.$router.push({path:'/analysisType'})
        }
        if (self.analysisConfig.analysisType === 'Fundamental Analysis') {
            switch (self.analysisConfig.chartType) {
                case 'Scatter Plot':
                    self.reqUrl = '/a/scatterplot'
                break
                case 'Box Plot':
                    self.reqUrl = '/a/boxplot'
                break
                case 'Histogram':
                    self.reqUrl = '/a/histogram'
                break
            }
        } else if (self.analysisConfig.analysisType === 'Advanced Analysis') {
            self.reqUrl = '/a/cluster'
        }
        //开始分类请求
        axios.post(self.baseUrl + self.reqUrl, {
            generalId: self.analysisConfig.id
        }).then(function (res) {
            if (res.code === 0) {
                if (self.analysisConfig.analysisType === 'Fundamental Analysis') {
                    switch (self.analysisConfig.chartType) {
                        case 'Scatter Plot':
                            self.scatterPlotData = res.data
                        break
                        case 'Box Plot':
                            self.boxPlotData = res.data
                        break
                        case 'Histogram':
                            self.histogramData = res.data
                        break
                    }
                } else if (self.analysisConfig.analysisType === 'Advanced Analysis') {
                    self.clusterData = res.data
                }
            }
        })
    }
}
</script>

<style>
.echart_content{
  padding: 50px 0 0 0;
}
</style>
