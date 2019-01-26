<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <!--列表搜索区-->
        <div class="search_zone">
          <el-form :model="searchForm" status-icon class="demo-ruleForm" label-width="33.33%" label-position="right">
            <el-col :span="5">
              <el-form-item label="Unit Type" style="margin:0;">
                <el-select v-model="searchForm.unitType" placeholder="112">
                  <el-option
                    v-for="item in unitOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item label="Created Date" style="margin:0;">
                <el-date-picker
                  style="width:310px;"
                  v-model="searchForm.dateRange"
                  type="daterange"
                  range-separator="to"
                  start-placeholder="Start Date"
                  end-placeholder="End Date">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Data Title" style="margin:0;">
                <el-input
                  clearable
                  type="text"
                  v-model="searchForm.dataTitle"
                  auto-complete="off"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" :offset="1">
              <el-button type="primary" style="width:100%" @click="searchList">Search</el-button>
            </el-col>
          </el-form>
        </div>
        <!--查询结果表格-->
        <el-table :data="tableData" :max-height="tabelHeight" style="width: 100%; margin:30px auto;" stripe>
          <el-table-column prop="dataTitle" label="Data Title"></el-table-column>
          <el-table-column prop="dataType" label="Data Type" width="110"></el-table-column>
          <el-table-column prop="unitType" label="Unit Type" width="100"></el-table-column>
          <el-table-column prop="gmtCreate" label="Creat Time" width="120"></el-table-column>
          <el-table-column prop="gmtModified" label="Modify Time" width="120"></el-table-column>
          <el-table-column label="Operation" width="350">
            <template slot-scope="scope">
              <el-button type="primary" size="small" @click="analysisThisData(scope.row)">Analysis Data</el-button>
              <el-button type="primary" size="small" @click="editThisData(scope.row)">Edit Data</el-button>
              <el-button type="primary" size="small" @click="deleteThisData(scope.row)">Delete Data</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!--分页器-->
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.pageNow"
          :page-size="pagination.pageSize"
          layout="prev, pager, next"
          :total="pagination.total">
        </el-pagination>
      </div>
    </section>
    <Footer :footerFixed="footerFixed"></Footer>
    <!--删除dialog对话框-->
    <el-dialog :visible.sync="dialogVisible" width="35%" top="20vh" :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
      <el-row>
        <el-col class="el-row-h30">Are you sure to delete this data ? The deleted data cannot be recovery.</el-col>
        <el-col class="el-row-h30 f-mart10">Please write in sentence "<b style="color:#266099;">I want to delete this data</b>"</el-col>
        <el-input class="f-mart20" v-model.trim="writeInput"></el-input>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="failDelete()">Cancle</el-button>
        <el-button type="danger" @click="ensureDelete()">Delete</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { UNITTYPE } from '@baseData/baseData'
import { getCookie } from '../utils/cookie'

export default {
  components: {Header, Footer},
  data () {
    return {
      footerFixed: true,
      tabelHeight: '',
      unitOptions: UNITTYPE, //选择单位制
      //搜索提交
      searchForm:{
        unitType:'',
        dateRange:'',
        dataTitle:''
      },
      //返回数据表格
      tableData:[{
        dataTitle: 'this is a title of data a',
        dataType:'PPG',
        unitType:'SI Unit',
        gmtCreate:'2018-11-29',
        gmtModified:'2018-11-30'
      }, {
        dataTitle: 'this is a title of data b',
        dataType:'Polymer',
        unitType:'Field Unit',
        gmtCreate:'2018-11-29',
        gmtModified:'2018-11-30'
      }],
      //分页器
      pagination:{
        total: 100,
        pageNow: 1,
        pageSize: 10
      },
      //确认删除对话框
      dialogVisible: false,
      writeInput: '',
      deleteId:''
    }
  },
  created () {
    this.getTableSize()
  },
  methods:{
    //条件查询
    searchList () {
      console.log('searchForm:',this.searchForm)
      var self = this
      axios.post(self.baseUrl + '/g/list', {
        page: 1,
        limit: 10,
        username: getCookie('loginName'),
        unit: self.searchForm.unitType,
        title: self.searchForm.dataTitle,
        fromTime: self.searchForm.dateRange[0],
        toTime: self.searchForm.dateRange[1]
      }).then(function (res) {
        if (res.code === 0) {
          self.pagination.pageNow = '1'
          self.tableData = res.data
          console.log('search ResData:', res.data)
        }
      })
    },
    handleSizeChange () {
    },
    handleCurrentChange () {
    },
    //分析数据
    analysisThisData (row) {
      this.$router.push({name:'analysisType', params: {dataId: row.dataId, dataTitle: row.dataTitle}})
    },
    // 编辑数据
    editThisData (row) {
      console.log(row)
      if (row.unitType === 'SI Unit') {
        this.$router.push({path:'/addDataSI', query: { dataId: row.dataId }})
      } else if (row.unitType === 'Field Unit') {
        this.$router.push({path:'/addDataField', query: { dataId: row.dataId }})
      }
    },
    // 删除数据
    deleteThisData (row) {
      this.deleteId = row.id
      this.dialogVisible = true
    },
    getTableSize () {
      let docHeight = document.documentElement.clientHeight || document.body.clientHeight
			this.tabelHeight = docHeight - 440
    },
    ensureDelete (row) {
      var self = this
      if (self.writeInput === 'I want to delete this data') {
        axios.post(self.baseUrl + '/s/del', {
          username: getCookie('loginName'),
          id: self.deleteId
        }).then(function (res) {
          if (res.code === 0) {
            //删除成功后再请求一下datalist
            //self.searchList()
            self.writeInput = ''
            self.deleteId = ''
            self.dialogVisible = false
            self.$message.success('Delete Data Success!')
          }
        })
        
      } else {
        this.$message.warning('The sentence you write in is different to the sentence we asked')
      }
    },
    failDelete () {
      this.writeInput = ''
      this.deleteId = ''
      this.dialogVisible = false
    }
  }
}
</script>

<style>
  .search_zone{
    width: 100%;
    display: inline-block;
    height: auto;
    margin: 20px auto;
    padding: 15px;
    background: #FFf;
    box-sizing: border-box;
    border: 1px solid #e5e5e5;
    font-size: 14px;
    margin-bottom: 10px;
  }
</style>
