<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <el-form :model="addDataForm" :rules="addDataFormRules" status-icon ref="addDataForm" class="demo-ruleForm" label-width="33.33%" label-position="right">
          <el-collapse v-model="activeNames">
            <!--用户信息-->
            <el-collapse-item title="Contact Information" name="1">
              <el-row :gutter="20" :offset="1" class="f-width90 f-mart30">
                <el-col :span="12">
                  <el-form-item label="Name of Contact">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Email">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Phone Number">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Title">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <!--一般信息-->
            <el-collapse-item title="General information" name="2">
              <el-row :gutter="20" :offset="1" class="f-mart30">
                <el-col :span="8">
                  <el-form-item label="Country">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Country">
                      <el-option
                        v-for="item in country"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="State/Province">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="County/City">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="8">
                  <el-form-item label="Field">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Reservoir/Block">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="EOR Type">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Type">
                      <el-option
                        v-for="item in EORType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="8">
                  <el-form-item label="Operator">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Start Date">
                    <el-date-picker
                      v-model="addDataForm.starTime"
                      type="date"
                      placeholder="Please Choice StarTime"
                      class="el-width-st100">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="End Date">
                    <el-date-picker
                      v-model="addDataForm.endTime"
                      type="date"
                      placeholder="Please Choice EndTime"
                      class="el-width-st100">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <!--水库信息-->
            <el-collapse-item title="Reservoir Information" name="3">
              <el-row :gutter="20" :offset="1" class="f-mart30">
                <el-col :span="12">
                  <el-form-item label="EOR Interest Area (acres)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Gravity (API)" label-width="55%">
                    <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Number of Production Wells:" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Oil Viscosity at Reservoir (cp)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Number of Injection Wells" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Formation Water Viscosity at Reservoir (cp)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Pay Zone Name/Formation Name" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Reservoir Temperature (⁰C)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Formation Type" label-width="55%">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Type">
                      <el-option
                        v-for="item in formationType"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Oil Saturation(Soi) (%)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Hydraulic Fractured" label-width="55%">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Yes or No">
                      <el-option
                        v-for="item in hydraulicFractured"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Water Saturation(Swi) (%)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Natually Fractured" label-width="55%">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Yes or No">
                      <el-option
                        v-for="item in natuallyFractured"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Formation Water Salinity(TDS) (ppm)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Fracture Permeability (mD)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Divalent Cations (ppm)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Matrix Permeability (mD)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Oil In Place (ton)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Gross Thickness (m)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Drive Mechanism" label-width="55%">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Drive Mechanism">
                      <el-option
                        v-for="item in driveMechanism"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Net Thickness (m)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Reservior Pressure (MPa)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Porosity (%)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Present Pressure (MPa)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Permeability (mD)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Bubble Point Pressure (MPa)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.contantName"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Dykstra-Parsons Coefficient(DPC)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Sedimentary Sequence Distribution" label-width="55%">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Distribution">
                      <el-option
                        v-for="item in sedimentarySequenceDistribution"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Depth (m)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Depositional Environment" label-width="55%">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Depositional Environment">
                      <el-option
                        v-for="item in depositionalEnvironment"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <!--注射参数-->
            <el-collapse-item title="Injection Parameter" name="4">
              <el-table :data="addDataForm.injectionTable" style="width: 100%" stripe>
                <el-table-column fixed type="index" label="Stages" width="80"></el-table-column>
                <el-table-column label="Start Injection Date" width="160">
                  <template slot-scope="scope">
                    <el-date-picker
                      class="el-width-st100"
                      v-model="scope.row.StartInjectionDate"
                      type="date"
                      placeholder="Start Date">
                    </el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column label="End Injection Date" width="160">
                  <template slot-scope="scope">
                    <el-date-picker
                      class="el-width-st100"
                      v-model="scope.row.EndDate"
                      type="date"
                      placeholder="End Date">
                    </el-date-picker>
                  </template>
                </el-table-column>
                <el-table-column label="PPG Name" width="150">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="PPGSize" label="PPG Size(µm)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGSize"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Temperature Resistance(⁰C)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.TemperatureResistance"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Swelling Rate(hour)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.SwellingRate"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Thermal Stability(day)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.ThermalStability"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="Strength" label="Strength(Pa)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.Strength"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Salinity Resistance(ppm)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.SalinityResistance"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Swelling Ratio" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.SwellingRatio"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Dried PPG Weight(ton)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.DriedPPGWeight"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="PPG Suspension Concentration(ppm)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGSuspensionConcentration"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="PPG Injection Volume(m3)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGInjectionVolume"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="PPG Injection Rate(m3/day)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGInjectionRate"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Initial PPG Injection Pressure(MPa)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.InitialPPGInjectionPressure"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Maximum Injection Pressure(MPa)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.MaximumInjectionPressure"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Total Injection Weight(ton)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.TotalInjectionWeight"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Total Injection Volume(m3)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.TotalInjectionVolume"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <button class="add_newLine" @click="addNewLine()">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</button>
              </el-row>
            </el-collapse-item>
            <!--PPG监控-->
            <el-collapse-item title="PPG Monitering" name="5">
              <el-table :data="addDataForm.PPGMoniteringTable" style="width: 100%" stripe>
                <el-table-column fixed type="index" label="Stages" width="80"></el-table-column>
                <el-table-column label="Injection Duration (day)">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.InjectionDuration"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="PPG Injection PRessure (MPa)">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGInjectionPRessure"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow2(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <button class="add_newLine" @click="addNewLine2()">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</button>
              </el-row>
            </el-collapse-item>
            <!--PPG监控-->
            <el-collapse-item title="Evaluation" name="6">
              <el-row :gutter="20" :offset="1" class="f-width90 f-mart30">
                <el-col :span="12">
                  <el-form-item label="Previous Production">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Previous Production">
                      <el-option
                        v-for="item in previousProduction"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Project Scope">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Project Scope">
                      <el-option
                        v-for="item in projectScope"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Project Maturity">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Project Maturity">
                      <el-option
                        v-for="item in projectMaturity"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Well Pattern">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Project Evaluation">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Project Evaluation">
                      <el-option
                        v-for="item in projectEvaluation"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Well Spacing">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contantName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Profit">
                    <el-select v-model="addDataForm.value" class="el-width-st100" placeholder="Please Choice Profit">
                      <el-option
                        v-for="item in profit"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <!--PPG处理后的压力测试结果-->
            <el-collapse-item title="Pressure Test Result After PPG Treatment" name="7">
              <el-table :data="addDataForm.afterPPGTreatmentTable" style="width: 100%" stripe>
                <el-table-column label="Well Name">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.WellName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Before PPG Injection">
                  <el-table-column label="PI(90) (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforePI90"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Injection Pressure (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforeInjectionPressure"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="After PPG Treatment">
                  <el-table-column label="PI(90) (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterPI90"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Injection Pressure (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterInjectionPressure"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="Difference">
                  <el-table-column label="PI(90) (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferencePI90"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Injection Pressure (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferenceInjectionPressure"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow3(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <button class="add_newLine" @click="addNewLine3()">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</button>
              </el-row>
              <el-row :offset="6">
                <el-upload
                  class="upload-demo el-width-st40"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :on-change="handleChange"
                  :file-list="fileList3">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </el-row>
            </el-collapse-item>
            <!--PPG处理前后的注水剖面比较-->
            <el-collapse-item title="Water Injection Profile Comparision Before and After PPG Treatment" name="8">
              <el-table :data="addDataForm.WaterInjectionTable" style="width: 100%" stripe>
                <el-table-column label="Well Name">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.WellName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Target Zone">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.TargetZone"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Before PPG Injection">
                  <el-table-column label="Percentage of Intake Water(%)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforePercentageIntakeWater"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Water Intake(m3/d)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforeWaterIntake"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="After PPG Treatment">
                  <el-table-column label="Percentage of Intake Water(%)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterPercentageIntakeWater"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Water Intake(m3/d)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterWaterIntake"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="Difference">
                  <el-table-column label="Percentage of Intake Water(%)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferencePercentageIntakeWater"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Water Intake(m3/d)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferenceWaterIntake"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow4(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <button class="add_newLine" @click="addNewLine4()">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</button>
              </el-row>
            </el-collapse-item>
            <!--生产绩效-->
            <el-collapse-item title="Production Performance" name="9">
              <el-table :data="addDataForm.ProductionTable" style="width: 100%" stripe>
                <el-table-column label="Well Name">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.WellName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Number of Producers">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.NumberOfProducers"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Before PPG Injection">
                  <el-table-column label="Liquid(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforeLiquid"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Oil(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforeOil"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Water Cut(%)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.BeforeWaterCut"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="After PPG Treatment">
                  <el-table-column label="Liquid(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterLiquid"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Oil(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterOil"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Water Cut(%)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.AfterWaterCut"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="Difference">
                  <el-table-column label="Liquid(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferenceLiquid"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Oil(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferenceOil"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Water Cut(%)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.DifferenceWaterCut"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow5(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <button class="add_newLine" @click="addNewLine5()">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</button>
              </el-row>
            </el-collapse-item>
          </el-collapse>
        </el-form>
        <el-row :gutter="40" style="margin-top:40px;">
          <el-col :span="3" :offset="9">
            <el-button type="primary" style="width:100%">Submit</el-button>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" style="width:100%">Reset</el-button>
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
import { EORTYPE, FORMATIONTYPE, DRIVEMECHANISM, SEDIMENTARYSEQUENCEDISTRIBUTION, DEPOSITIONALENVIRONMENT, PREVIOUSPRODUCTION, PROJECTSCOPE, PROJECTMATURITY, PROJECTEVALUATION, PROFIT } from '@baseData/baseData'
import { COUNTRY } from '@baseData/country'

export default {
  components: {Header, Footer, LoginPop},
  data () {
    return {
      footerFixed: false,
      activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      country: COUNTRY, //国家
      EORType: EORTYPE, //EOR类型
      formationType: FORMATIONTYPE, //形成类型
      hydraulicFractured:[{label: 'yes', value: 'yes'}, {label: 'no', value: 'no'}], //水里压裂
      natuallyFractured:[{label: 'yes', value:'yes'}, {label: 'no', value: 'no'}], //自然破碎
      driveMechanism: DRIVEMECHANISM, //驱动机制
      sedimentarySequenceDistribution: SEDIMENTARYSEQUENCEDISTRIBUTION, //沉积层分布
      depositionalEnvironment: DEPOSITIONALENVIRONMENT, //沉积环境
      previousProduction: PREVIOUSPRODUCTION, //以前的生产
      projectScope: PROJECTSCOPE, // 项目范围
      projectMaturity: PROJECTMATURITY, // 项目成熟度
      projectEvaluation: PROJECTEVALUATION, // 项目评估
      profit: PROFIT, // 利润
      addDataForm:{
        startTime:'',
        endTime:'',
        value: '',
        //注射参数表格
        injectionTable:[{
          startInjectionDate: '',
          EndDate: '',
          PPGName: '',
          PPGSize: '',
          TemperatureResistance: '',
          SwellingRate: '',
          ThermalStability: '',
          Strength: '',
          SalinityResistance: '',
          SwellingRatio: '',
          DriedPPGWeight: '',
          PPGSuspensionConcentration: '',
          PPGInjectionVolume: '',
          PPGInjectionRate: '',
          InitialPPGInjectionPressure: '',
          MaximumInjectionPressure: '',
          TotalInjectionWeight: '',
          TotalInjectionVolume: ''
        }],
        //PPG监控参数表格
        PPGMoniteringTable:[{
          InjectionDuration:'',
          PPGInjectionPRessure:''
        }],
        //PPG处理后的压力测试结果表格
        afterPPGTreatmentTable:[{
          WellName:'',
          BeforePI90:'',
          BeforeInjectionPressure:'',
          AfterPI90:'',
          AfterInjectionPressure:'',
          DifferencePI90:'',
          DifferenceInjectionPressure:''
        }],
        //PPG处理前后的注水剖面表格
        WaterInjectionTable:[{
          WellName:'',
          TargetZone:'',
          BeforePercentageIntakeWater:'',
          BeforeWaterIntake:'',
          AfterPercentageIntakeWater:'',
          AfterWaterIntake:'',
          DifferencePercentageIntakeWater:'',
          DifferenceWaterIntake:''
        }],
        //生产绩效表格
        ProductionTable:[{
          WellName:'',
          NumberOfProducers:'',
          BeforeLiquid:'',
          BeforeOil:'',
          BeforeWaterCut:'',
          AfterLiquid:'',
          AfterOil:'',
          AfterWaterCut:'',
          DiffererceLiquid:'',
          DiffererceOil:'',
          DiffererceWaterCut:''
        }]
      },
      //添加数据Form规则
      addDataFormRules:{},
      //文件上传
      fileList3: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  mounted () {
    console.log(this.$route.query.dataId)
  },
  methods: {
    //文件上传
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    },
    deleteThisRow (index) {
      this.addDataForm.injectionTable.splice(index, 1)
    },
    deleteThisRow2 (index) {
      this.addDataForm.PPGMoniteringTable.splice(index, 1)
    },
    deleteThisRow3 (index) {
      this.addDataForm.afterPPGTreatmentTable.splice(index, 1)
    },
    deleteThisRow4 (index) {
      this.addDataForm.WaterInjectionTable.splice(index, 1)
    },
    deleteThisRow5 (index) {
      this.addDataForm.ProductionTable.splice(index, 1)
    },
    addNewLine () {
      this.addDataForm.injectionTable.push({
        StartInjectionDate: '',
        EndDate: '',
        PPGName: '',
        PPGSize: '',
        TemperatureResistance: '',
        SwellingRate: '',
        ThermalStability: '',
        Strength: '',
        SalinityResistance: '',
        SwellingRatio: '',
        DriedPPGWeight: '',
        PPGSuspensionConcentration: '',
        PPGInjectionVolume: '',
        PPGInjectionRate: '',
        InitialPPGInjectionPressure: '',
        MaximumInjectionPressure: '',
        TotalInjectionWeight: '',
        TotalInjectionVolume: ''
      })
    },
    addNewLine2 () {
      this.addDataForm.PPGMoniteringTable.push({
        InjectionDuration:'',
        PPGInjectionPRessure:''
      })
    },
    addNewLine3 () {
      this.addDataForm.afterPPGTreatmentTable.push({
        WellName:'',
        BeforePI90:'',
        BeforeInjectionPressure:'',
        AfterPI90:'',
        AfterInjectionPressure:'',
        DifferencePI90:'',
        DifferenceInjectionPressure:''
      })
    },
    addNewLine4 () {
      this.addDataForm.WaterInjectionTable.push({
        WellName:'',
        TargetZone:'',
        BeforePercentageIntakeWater:'',
        BeforeWaterIntake:'',
        AfterPercentageIntakeWater:'',
        AfterWaterIntake:'',
        DifferencePercentageIntakeWater:'',
        DifferenceWaterIntake:''
      })
    },
    addNewLine5 () {
      this.addDataForm.ProductionTable.push({
        WellName:'',
        NumberOfProducers:'',
        BeforeLiquid:'',
        BeforeOil:'',
        BeforeWaterCut:'',
        AfterLiquid:'',
        AfterOil:'',
        AfterWaterCut:'',
        DiffererceLiquid:'',
        DiffererceOil:'',
        DiffererceWaterCut:''
      })
    }
  }
}
</script>

<style>
  .add_newLine{
    display: block;
    margin: 0 auto;
    width: 60%;
    height: 40px;
    line-height: 40px;
    background: rgb(243, 243, 243);
    color: #333;
    border:1px solid rgb(228, 228, 228);
    border-radius: 4px;
  }
  .add_newLine:hover{
    background: #205081;
    border: 1px solid #205081;
    color: #FFF;
  }
</style>
