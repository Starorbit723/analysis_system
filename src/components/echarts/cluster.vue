<template>
    <div class="cluster_content" ref="cluster"></div>
</template>

<script>
import ecStat from 'echarts-stat'

export default {
    props:['clusterData', 'analysisConfig'],
    data () {
        return {
            echarts:'',
            option: {},
            result: {}
        }
    },
    watch: {
        clusterData(val) {
            var self = this
            //监听到数据变化
            console.log('监听到数据变化', 'clusterData', self.clusterData, 'analysisConfig', self.analysisConfig, 'clusterNumber', parseInt(self.analysisConfig.numberOfClusters))

            var clusterNumber = parseInt(self.analysisConfig.numberOfClusters)
            //var step = ecStat.clustering.hierarchicalKMeans(self.clusterData.all, clusterNumber, false)
            let allData = self.clusterData.all
            let contrastNum = self.clusterData.contrastCount
            allData.forEach((arr, index) => {
                arr.standard = !(index < contrastNum)
            })
            var result = ecStat.clustering.hierarchicalKMeans(allData, clusterNumber, false)
            //console.log('step', step)
            
            self.option = {
                timeline: {
                    top: 'center',
                    right: 0,
                    height: 300,
                    width: 10,
                    inverse: true,
                    playInterval: 1500,
                    symbol: 'none',
                    orient: 'vertical',
                    axisType: 'category',
                    autoPlay: true,
                    label: {normal: {show: false}},
                    data: []
                },
                baseOption: {
                    xAxis: {
                        type: 'value'
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        type: 'scatter'
                    }]
                },
                options: []
            }
            // for (let i = 0; !(self.result = step.next()).isEnd; i++) {
            //     console.log('result', self.result)
            //     self.option.options.push(self.getOption(self.result, clusterNumber))
            //     self.option.timeline.data.push(i + '')
            // }
            console.log('result', result)
            self.option.options.push(self.getOption(result, clusterNumber))
            self.echartsInit()
        }
    },    
    methods: {
        echartsInit () {
            let self = this
            let initEcharts = self.$refs.cluster
            self.echarts = self.$echarts.init(initEcharts)
            self.echarts.setOption(self.option)
        },
        getOption (result, k) {
            var clusterAssment = result.clusterAssment
            var centroids = result.centroids
            var ptsInCluster = result.pointsInCluster
            var color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3']
            var color2 = ['#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000']
            var series = []
            for (let i = 0; i < k; i++) {
                series.push({
                    name: 'scatter' + i,
                    type: 'scatter',
                    label: {
                        emphasis: {
                            show: true
                        }
                    },
                    animation: false,
                    data: ptsInCluster[i].filter(ele => ele.standard),
                    markPoint: {
                        symbolSize: 29,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true,
                                position: 'top',
                                formatter: function (params) {
                                    return Math.round(params.data.coord[0] * 100) / 100 + '  ' + Math.round(params.data.coord[1] * 100) / 100 + ' '
                                },
                                textStyle: {
                                    color: '#000'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.7
                            },
                            color: color[i]
                        },
                        data: [{
                            coord: centroids[i]
                        }]
                    }
                })

                series.push({
                    name: 'effectScatter' + i,
                    type: 'effectScatter',
                    label: {
                        emphasis: {
                            show: true
                        }
                    },
                    symbolSize: 20,
                    animation: false,
                    data: ptsInCluster[i].filter(ele => !(ele.standard)),
                    markPoint: {
                        symbolSize: 29,
                        label: {
                            normal: {
                                show: false
                            },
                            emphasis: {
                                show: true,
                                position: 'top',
                                formatter: function (params) {
                                    return Math.round(params.data.coord[0] * 100) / 100 + '  ' + Math.round(params.data.coord[1] * 100) / 100 + ' '
                                },
                                textStyle: {
                                    color: '#000'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                opacity: 0.7
                            },
                            color: color2[i]
                        },
                        data: [{
                            coord: centroids[i]
                        }]
                    }
                })
            }

            return {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                series: series               
            }
        }
    }
}
</script>

<style>
  .cluster_content{
    width:800px;
    height: 500px;
    margin: 0 auto;
  }
</style>
