<template>
    <div class="page_content">
        <Header></Header>
        <section class="main_body">
        <div class="echart_content">
            <!--Fundamental Analysis-->
            <ScatterPlot v-if="(analysisConfig.analysisType == 'Fundamental Analysis') && (analysisConfig.chartType == 'Scatter Plot')" :scatterPlotData="scatterPlotData" :scatterPlotX="analysisConfig.scatterPlotX"  :scatterPlotY="analysisConfig.scatterPlotY" :scatterPlotTitle="scatterPlotTitle"></ScatterPlot>
            <BoxPlot v-if="(analysisConfig.analysisType == 'Fundamental Analysis') && (analysisConfig.chartType == 'Box Plot')" :boxPlotData="boxPlotData" :boxPlotY="analysisConfig.boxPlotY" :boxPlotTitle="boxPlotTitle"></BoxPlot>
            <Histogram v-if="(analysisConfig.analysisType == 'Fundamental Analysis') && (analysisConfig.chartType == 'Histogram')" :histogramData="histogramData" :histogramX="analysisConfig.histogramX" :histogramTitle="histogramTitle"></Histogram>
            <!--Advanced Analysis-->
            <Cluster v-if="analysisConfig.analysisType == 'Advanced Analysis'" :clusterData="clusterData" :clusterTitle="clusterTitle" :analysisConfig="analysisConfig"></Cluster>
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
            scatterPlotTitle:'',
            scatterPlotData: [],
            boxPlotTitle: '',
            boxPlotData: [],
            histogramTitle: '',
            histogramData: [],
            clusterTitle: '',
            clusterData:[]
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
                    self.scatterPlotTitle = self.analysisConfig.dataTitle
                break
                case 'Box Plot':
                    self.reqUrl = '/a/boxplot'
                    self.boxPlotTitle = self.analysisConfig.dataTitle
                break
                case 'Histogram':
                    self.reqUrl = '/a/histogram'
                    self.histogramTitle = self.analysisConfig.dataTitle
                break
            }
        } else if (self.analysisConfig.analysisType === 'Advanced Analysis') {
            self.reqUrl = '/a/cluster'
            self.clusterTitle = self.analysisConfig.dataTitle
        }
        //开始分类请求
        let data = JSON.stringify({
            generalId: self.analysisConfig.id,
            axis: self.analysisConfig.histogramX,
            attributes:self.analysisConfig.clusteringList
        })
        axios.post(self.baseUrl + self.reqUrl, data).then(function (res) {
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
