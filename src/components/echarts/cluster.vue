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
                        nameGap:5
                       // type: 'value'
                    },
                    yAxis: {
                        //type: 'value'
                    },
                    series: [{
                        type: 'scatter'
                    }],
                    toolbox: {
						show: true,
						itemSize:20,
						feature: {
							saveAsImage: {
								show:true,
								icon:'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzE5RkNBN0JFRDY1MTFFODlERENFQkI2NzlBRjNBREIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzE5RkNBN0NFRDY1MTFFODlERENFQkI2NzlBRjNBREIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTlGQ0E3OUVENjUxMUU4OUREQ0VCQjY3OUFGM0FEQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MTlGQ0E3QUVENjUxMUU4OUREQ0VCQjY3OUFGM0FEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpilXBsAAAKFSURBVHja7Jo7SBxBGMd3c2cKtbGwsBRRAykkjeminu9CwjUJRLGIpEpjQAM2p14lqKCNhCCCSCKY4tIFREGIj9ZwXAwkeE2K+KoiHj7O9T84xRV6t+M6szOz88GP5e6+293fzuzsN3NnO45jBSkeWAELI2yEjbDaEfa6g8povFBKMfgIWujxLoFNP3PoRc+CLdAHjliOn07ExAq7iA+g20Xec3px2umFULZLNzLkPtXhHv7PmGurLnzJkOvo0MKWEb49ikAoaC3sBEnY1mHQMi2sey19wZCbZcyXUriYIbdE9RZuAtUM+WXgldSzJUQdqKEXL3fAqQLxO4y6n0At+JmzP5tWbL/Btm/CmBqOYhPj0BD59jkO3gvv0pB9zEm2UAyCej/u4XIfny4VfghvgB8+yJL7eFm4cDoRO8emDWQEyp6CiJdjenosQXofm1aBwuRYf/1+DpOu3S9A9i34LkvhMQ0WOcrOghnZKi1SISU5yJJWfSNraRmhA8t9xYF1vZ4tbS19CDrucX8N4Ez2ycOal9IvJ6JgR5XZEql3v3j4/gD4qtr08AVI3eF7ZLSfVHU+3AzOGfJTvOfDvIX3QKfL3BO6YKD0igeJVTDksmw80EGYxBhYyvM5+V14U8SJiFymfQl+3fD+FJgTdRKi16XJPfon5/Vn8E7kCYQFC/8Dj0AXOAYrolcPRAuTyPIqKmTs0r6Hfdt/LSuj8WfW9epgSDEnIpRMJ2LfXAtDthebecUbcxTSI2679IQGvXeY5R5+qIHwKYtwRgPhMzNK5xEOaeBmswiXaCBcyiK8roHwLktp2QMWwBOL89+IOAX5we01U6UVtEHLCBthI2yEpYwrAQYAnOZ5kFe4xNEAAAAASUVORK5CYII=',
								excludeComponents :['toolbox'],
								pixelRatio: 2,
								title:'Save'
            	            }
						}
                    }
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
