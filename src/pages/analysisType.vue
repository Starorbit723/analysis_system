<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <!--选择分析前的类型及展现方式-->
        <div class="choose_type">
          <el-row class="el-row-h70">
            <el-col :span="6" class="el-align-right">Data Id</el-col>
            <el-col :span="16" :offset="2">
              <el-input v-model="analysisForm.dataId" :disabled="true"></el-input>
            </el-col>
          </el-row>
          <el-row class="el-row-h70">
            <el-col :span="6" class="el-align-right">Data Title</el-col>
            <el-col :span="16" :offset="2">
              <el-input v-model="analysisForm.dataTitle" :disabled="true"></el-input>
            </el-col>
          </el-row>
          <el-row class="el-row-h70">
            <el-col :span="6" class="el-align-right">Analysis Type</el-col>
            <el-col :span="16" :offset="2">
              <el-radio-group v-model="analysisForm.analysisType">
                <el-radio v-for="item in analysisType" :key="item.label" :label="item.label">{{item.value}}</el-radio>
              </el-radio-group>
            </el-col>
          </el-row>
          <!--基础分析选项开始-->
          <div class="fundamental" v-if="analysisForm.analysisType === 'Fundamental Analysis'">
            <el-row class="el-row-h70">
              <el-col :span="6" class="el-align-right">Chart Type</el-col>
              <el-col :span="16" :offset="2">
                <el-radio-group v-model="analysisForm.chartType">
                  <el-radio v-for="item in chartType" :key="item.label" :label="item.label"></el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <!--散点图XY轴-->
            <el-row class="el-row-h70" v-if="analysisForm.chartType === 'Scatter Plot'">
              <el-col :span="6" class="el-align-right">Coordinate Axis — X</el-col>
              <el-col :span="16" :offset="2">
                <el-select v-model="analysisForm.scatterPlotX" class="el-width-st40">
                  <el-option
                    v-for="item in chartXY"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row class="el-row-h70" v-if="analysisForm.chartType === 'Scatter Plot'">
              <el-col :span="6" class="el-align-right">Coordinate Axis — Y</el-col>
              <el-col :span="16" :offset="2">
                <el-select v-model="analysisForm.scatterPlotY" class="el-width-st40">
                  <el-option
                    v-for="item in chartXY"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <!--箱线图Y轴-->
            <el-row class="el-row-h70" v-if="analysisForm.chartType === 'Box Plot'">
              <el-col :span="6" class="el-align-right">Coordinate Axis — Y</el-col>
              <el-col :span="16" :offset="2">
                <el-select v-model="analysisForm.boxPlotY" class="el-width-st40">
                  <el-option
                    v-for="item in chartXY"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <!--柱状图X轴-->
            <el-row class="el-row-h70" v-if="analysisForm.chartType === 'Histogram'">
              <el-col :span="6" class="el-align-right">Coordinate Axis — X</el-col>
              <el-col :span="16" :offset="2">
                <el-select v-model="analysisForm.histogramX" class="el-width-st40">
                  <el-option
                    v-for="item in chartXY"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
          </div>
          <!--基础分析选项结束-->
          <!--高级分析选项开始-->
          <div class="advanced" v-if="analysisForm.analysisType === 'Advanced Analysis'">
            <el-row class="el-row-h70">
              <el-col :span="6" class="el-align-right">Clustering</el-col>
              <el-col :span="16" :offset="2">
                <el-checkbox-group v-model="analysisForm.clusteringList">
                  <el-checkbox v-for="item in clustering" :label="item.label" :key="item.label"></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row class="el-row-h70">
              <el-col :span="6" class="el-align-right">Number Of Clusters</el-col>
              <el-col :span="16" :offset="2">
                <el-input class="el-width-st30" v-model="analysisForm.numberOfClusters"></el-input>
              </el-col>
            </el-row>
          </div>
          <!--高级分析选项结束-->
        </div>
        <!--提交按钮-->
        <el-row class="f-mart50 clearfix">
          <el-col :span="3" :offset="8">
            <el-button type="primary" class="el-width-st100" @click="toDataEcharts">Analysis</el-button>
          </el-col>
          <el-col :span="3" :offset="2">
            <el-button type="primary" class="el-width-st100" @click="backToDataList">Back</el-button>
          </el-col>
        </el-row>
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
import { ANALYSISTYPE, CHARTTYPE, CHARTXY, CLUSTERING } from '@baseData/baseData'

export default {
  components: {Header, Footer, LoginPop},
  data () {
    return {
      footerFixed: true,
      analysisType: ANALYSISTYPE, // 分析类型
      chartType: CHARTTYPE, // 图表类型
      chartXY: CHARTXY, // 图表XY轴
      clustering: CLUSTERING, // 集群
      analysisForm: {
        dataId: '',
        dataTitle: '',
        analysisType:'Fundamental Analysis',
        chartType:'Scatter Plot',
        scatterPlotX:'Depth',
        scatterPlotY:'Depth',
        boxPlotY:'Depth',
        histogramX: 'Depth',
        clusteringList: [],
        numberOfClusters: ''
      }
    }
  },
  mounted () {
    this.analysisForm.dataId = this.$route.params.dataId
    this.analysisForm.dataTitle = this.$route.params.dataTitle
    console.log(this.$route.params.dataId, this.$route.params.dataTitle)
  },
  methods: {
    toDataEcharts () {
      this.$router.push({name:'analysisEcharts',params:{analysisForm:this.analysisForm}})
    },
    backToDataList () {
      this.$router.push({path:'/myData'})
    }
  }
}
</script>

<style scoped>

  .choose_type{
    width: 100%;
    margin: 120px 0 0 0;
    font-size: 16px!important;
  }
  .advanced .el-checkbox{
    margin:0 10px 0 0!important;
    font-size: 16px!important;
    width: 30%!important;
  }
  .advanced .el-checkbox__label{
    font-size: 16px!important;
  }
</style>
