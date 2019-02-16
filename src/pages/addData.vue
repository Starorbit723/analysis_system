<template>
  <div class="page_content">
    <Header></Header>
    <section class="fullscreen">
      <div class="content_warpper">
        <div class="tips_zone">Please Select The Appropriate Unit System For Your<br>Data / Project / Target Reservoir</div>
        <el-row>
          <el-col :span="4" :offset="7">
            <el-button type="primary" class="el-width-st100 btn_shadow" @click="openDataTypeDialog(0)" round>SI Unit</el-button>
          </el-col>
          <el-col :span="4" :offset="2">
            <el-button type="primary" class="el-width-st100 btn_shadow" @click="openDataTypeDialog(1)" round>Field Unit</el-button>
          </el-col>
        </el-row>
      </div>
    </section>
    <!--数据选择弹框-->
    <el-dialog title="Please Choose Data Type" width="30%" top="25vh" :visible.sync="dialogVisible">
       <el-row>
          <el-col :span="24">
              <el-radio-group style="width:100%; text-align:center;" v-model="dataType">
                <el-radio style="width:25%;" label="PPG" border>PPG</el-radio>
                <el-radio style="width:25%; margin-left:10%;" label="Polymer" border>Polymer</el-radio>
              </el-radio-group>
          </el-col>
       </el-row>
       <el-row style="margin-top:40px;">
          <el-col :span="5" :offset="6">
            <el-button type="primary" class="el-width-st100" @click="toAddDataPage">Ensure</el-button>
          </el-col>
          <el-col :span="5" :offset="2">
            <el-button type="primary" class="el-width-st100" @click="cancelChoose">Cancel</el-button>
          </el-col>
       </el-row>
    </el-dialog>

    <Footer :footerFixed="footerFixed"></Footer>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  components: {Header, Footer},
  data () {
    return {
      footerFixed: true,
      dialogVisible:false,
      unitType:'',
      dataType:'PPG'
    }
  },
  methods: {
    openDataTypeDialog (type) {
      this.dialogVisible = true
      type === 0 ? this.unitType = 'SI' : this.unitType = 'Field'
    },
    toAddDataPage () {
      if (this.unitType === 'SI') {
        this.$router.push({name:'addDataSI', params: {dataId: 0, dataType: this.dataType}})
      } else {
        this.$router.push({name:'addDataField', params: {dataId: 0, dataType: this.dataType}})
      }
    },
    cancelChoose () {
      this.unitType = ''
      this.dataType = ''
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped>
  .fullscreen{
    width: 100%;
    height: 100%;
    background: url('../assets/images/youtian_bg.png') no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    bottom: 110px;
  }
  .btn_shadow{
    box-shadow: 0 2px 2px #666;
  }
  .tips_zone{
    padding: 130px 0 0 0;
    margin: 0 0 50px 0;
    line-height: 46px;
    color:#FFF;
    text-shadow: 2px 2px 2px #333333;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
</style>
