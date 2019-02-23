<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <el-form :model="addDataForm" :rules="addDataFormRules" status-icon ref="addDataForm" class="demo-ruleForm" label-width="33.33%" label-position="right">
          <el-collapse v-model="activeNames">
            <!--1.用户信息-->
            <el-collapse-item title="Contact Information" name="1">
              <el-row :gutter="20" :offset="1" class="f-width90 f-mart30">
                <el-col :span="12">
                  <el-form-item label="Name of Contact">
                      <el-input
                        :disabled="true"
                        type="text"
                        v-model="addDataForm.contactInformation.formalName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col> 
                <el-col :span="12">
                  <el-form-item label="Email">
                      <el-input
                        :disabled="true"
                        type="text"
                        v-model="addDataForm.contactInformation.email"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Phone Number">
                      <el-input
                        :disabled="true"
                        type="text"
                        v-model="addDataForm.contactInformation.phone"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <!--2.一般信息-->
            <el-collapse-item title="General Information" name="2">
              <el-row :gutter="20" :offset="1" class="f-mart30">
                <el-col :span="24">
                  <el-form-item label="Data Title" label-width="10.7%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.generalInformation.dataTitle"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="8">
                  <el-form-item label="Country">
                    <el-select v-model="addDataForm.generalInformation.countryCity" class="el-width-st100" placeholder="Please Choose Country">
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
                        v-model="addDataForm.generalInformation.stateProvince"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="County/City">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.generalInformation.countyCity"
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
                        v-model="addDataForm.generalInformation.field"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Reservoir/Block">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.generalInformation.reservoirBlock"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="EOR Type">
                    <el-select v-model="addDataForm.generalInformation.EORType" class="el-width-st100" placeholder="Please Choose Type">
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
                        v-model="addDataForm.generalInformation.operator"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="Start Date">
                    <el-date-picker
                      v-model="addDataForm.generalInformation.startDate"
                      type="date"
                      placeholder="Please Select StartDate"
                      class="el-width-st100">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="End Date">
                    <el-date-picker
                      v-model="addDataForm.generalInformation.endDate"
                      type="date"
                      placeholder="Please Select EndDate"
                      class="el-width-st100">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>
            <!--3.水库信息-->
            <el-collapse-item title="Reservoir Information" name="3">
              <el-row :gutter="20" :offset="1" class="f-mart30">
                <el-col :span="12">
                  <el-form-item label="EOR Interest Area (acres)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.interestArea"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Gravity (API)" label-width="55%">
                    <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.gravity"
                        auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Number of Production Wells" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.productionWells"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Oil Viscosity at Reservoir (cp)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.oilViscosity"
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
                        v-model="addDataForm.reservoirInformation.injectionWells"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Formation Water Viscosity at Reservoir (cp)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.formationWaterViscosity"
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
                        v-model="addDataForm.reservoirInformation.payZoneOrFormationName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Reservoir Temperature (F)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.reservoirTemperature"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Formation Type" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.formationType" class="el-width-st100" placeholder="Please Choose Type">
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
                      v-model="addDataForm.reservoirInformation.initialOilSaturation"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Hydraulic Fractured" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.hydraulicFractured" class="el-width-st100" placeholder="Please Choose Yes or No">
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
                      v-model="addDataForm.reservoirInformation.initialWaterSaturation"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Depth (ft)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.depth"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Formation Water Salinity(TDS) (ppm)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.formationWaterSalinity"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">   
                <el-col :span="12">
                  <el-form-item label="Divalent Cations (ppm)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.divalentCations"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Oil In Place (bbl)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.initialOilInPlace"
                      auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1">
                <el-col :span="12">
                  <el-form-item label="Gross Thickness (ft)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.grossThickness"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Drive Mechanism" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.driveMechanism" class="el-width-st100" placeholder="Please Choose Drive Mechanism">
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
                  <el-form-item label="Net Thickness (ft)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.netThickness"
                        auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Reservior Pressure (psi)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.initialReserviorPressure"
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
                        v-model="addDataForm.reservoirInformation.porosity"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Present Pressure (psi)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.presentPressure"
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
                        v-model="addDataForm.reservoirInformation.permeability"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Bubble Point Pressure (psi)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.bubblePointPressure"
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
                        v-model="addDataForm.reservoirInformation.dykstraParsonsCoefficient"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Sedimentary Sequence Distribution" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.sedimentarySequenceDistribution" class="el-width-st100" placeholder="Please Choose Distribution">
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
                  <el-form-item label="Naturally Fractured" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.naturallyFractured" class="el-width-st100" placeholder="Please Choose Yes or No">
                      <el-option
                        v-for="item in naturallyFractured"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Depositional Environment" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.depositionalEnvironment" class="el-width-st100" placeholder="Please Choose Depositional Environment">
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
              <!--业务逻辑：Naturally Fractured 为'yes'时才会出现以下两个选择-->
              <el-row :gutter="20" :offset="1" v-if="addDataForm.reservoirInformation.naturallyFractured == 'yes'">
                <el-col :span="12">
                  <el-form-item label="Fracture Permeability (mD)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.fracturePermeability"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Matrix Permeability (mD)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.matrixPermeability"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
            </el-collapse-item>

            <!--__________________________PPG相关参数开始__________________________-->
            <div class="different_data" v-if="showDataType == 'PPG'">
                <h1>PPG Data</h1>
                <!--4.注射参数-->
                <el-collapse-item title="Injection Parameter" name="4">
                  <el-table :data="addDataForm.ppg.injectionParameter" style="width: 100%" stripe>
                    <el-table-column fixed type="index" label="Stages" width="80"></el-table-column>
                    <el-table-column label="Start Injection Date" width="160">
                      <template slot-scope="scope">
                        <el-date-picker
                          class="el-width-st100"
                          v-model="scope.row.startInjectionDate"
                          type="date"
                          placeholder="Start Date">
                        </el-date-picker>
                      </template>
                    </el-table-column>
                    <el-table-column label="End Injection Date" width="160">
                      <template slot-scope="scope">
                        <el-date-picker
                          class="el-width-st100"
                          v-model="scope.row.endInjectionDate"
                          type="date"
                          placeholder="End Date">
                        </el-date-picker>
                      </template>
                    </el-table-column>
                    <el-table-column label="PPG Name" width="150">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ppgName"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column prop="PPG Size" label="PPG Size(µm)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ppgSize"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Temperature Resistance(⁰F)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.temperatureResistance"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Swelling Rate(hour)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.swellingRate"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Thermal Stability(day)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.thermalStability"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Strength(psi)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.strength"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Salinity Resistance(ppm)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.salinityResistance"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Swelling Ratio" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.swellingRatio"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Dried PPG Weight(lb)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.driedPPGWeight"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="PPG Suspension Concentration(ppm)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ppgSuspensionConcentration"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="PPG Injection Volume(ft3)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ppgInjectionVolume"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="PPG Injection Rate(ft3/day)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ppgInjectionRate"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Initial PPG Injection Pressure(psi)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.initialPPGInjectionPressure"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Maximum Injection Pressure(psi)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.maximumInjectionPressure"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Total Injection Weight(lb)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.totalInjectionWeight"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Total Injection Volume(ft3)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.totalInjectionVolume"></el-input>
                      </template>
                    </el-table-column>
                      <el-table-column label="Operation" width="100" fixed="right">
                        <template slot-scope="scope">
                          <el-button type="primary" size="small" @click="deleteThisRow(scope.$index)">Delete</el-button>
                        </template>
                      </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>
                <!--5.PPG监控-->
                <el-collapse-item title="PPG Monitering" name="5">
                  <el-table :data="addDataForm.ppg.ppgMonitoring" style="width: 100%" stripe>
                    <el-table-column fixed type="index" label="Stages" width="80"></el-table-column>
                    <el-table-column label="Injection Duration (day)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.injectionDuration"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="PPG Injection Pressure (psi)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ppgInjectionPressure"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow2(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine2">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>
                <!--6.评估-->
                <el-collapse-item title="Evaluation" name="6">
                  <el-row :gutter="20" :offset="1" class="f-width90 f-mart30">
                    <el-col :span="12">
                      <el-form-item label="Previous Production">
                        <el-select v-model="addDataForm.ppg.evaluation.previousProduction" class="el-width-st100" placeholder="Please Choose Previous Production">
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
                        <el-select v-model="addDataForm.ppg.evaluation.projectScope" class="el-width-st100" placeholder="Please Choose Project Scope">
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
                        <el-select v-model="addDataForm.ppg.evaluation.projectMaturity" class="el-width-st100" placeholder="Please Choose Project Maturity">
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
                            v-model="addDataForm.ppg.evaluation.wellPattern"
                            auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20" :offset="1" class="f-width90">
                    <el-col :span="12">
                      <el-form-item label="Project Evaluation">
                        <el-select v-model="addDataForm.ppg.evaluation.projectEvaluation" class="el-width-st100" placeholder="Please Choose Project Evaluation">
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
                            v-model="addDataForm.ppg.evaluation.wellSpacing"
                            auto-complete="off"></el-input>
                        </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20" :offset="1" class="f-width90">
                    <el-col :span="12">
                      <el-form-item label="Profit">
                        <el-select v-model="addDataForm.ppg.evaluation.profit" class="el-width-st100" placeholder="Please Choose Profit">
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
                <!--7.PPG处理后的压力测试结果-->
                <el-collapse-item title="Pressure Test Result After PPG Treatment" name="7">
                  <el-table :data="addDataForm.ppg.afterPPGTreatment" style="width: 100%" stripe>
                    <el-table-column label="Well Name">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.wellName"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Before PPG Injection">
                      <el-table-column label="PI(90) (psi)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforePi90"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Injection Pressure (psi)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforeInjectionPressure"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="After PPG Treatment">
                      <el-table-column label="PI(90) (psi)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterPi90"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Injection Pressure (psi)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterInjectionPressure"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="Difference">
                      <el-table-column label="PI(90) (psi)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differencePi90"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Injection Pressure (psi)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differenceInjectionPressure"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow3(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine3">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                  <el-row :offset="6">
                    <el-upload
                      class="upload-demo el-width-st40"
                      action="https://jsonplaceholder.typicode.com/posts/"
                      :on-change="handleChange"
                      :file-list="fileList3">
                      <el-button size="small" type="primary">Upload Files</el-button>
                      <div slot="tip" class="el-upload__tip">not exceeding 1M</div>
                    </el-upload>
                  </el-row>
                </el-collapse-item>
                <!--8.PPG处理前后的注水剖面比较-->
                <el-collapse-item title="Water Injection Profile Copsirision Before and After PPG Treatment" name="8">
                  <el-table :data="addDataForm.ppg.waterInjectionProfile" style="width: 100%" stripe>
                    <el-table-column label="Well Name">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.wellName"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Target Zone">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.targetZone"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Before PPG Injection">
                      <el-table-column label="Percentage of Intake Water(%)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforePercentageIntakeWater"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Water Intake(ft3/day)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforeWaterIntake"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="After PPG Treatment">
                      <el-table-column label="Percentage of Intake Water(%)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterPercentageIntakeWater"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Water Intake(ft3/day)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterWaterIntake"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="Difference">
                      <el-table-column label="Percentage of Intake Water(%)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differencePercentageIntakeWater"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Water Intake(ft3/day)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differenceWaterIntake"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow4(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine4">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>
                <!--9.生产绩效-->
                <el-collapse-item title="Production Performance" name="9">
                  <el-table :data="addDataForm.ppg.productionPerformance" style="width: 100%" stripe>
                    <el-table-column label="Well Name">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.wellName"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Number of Producers">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.numberOfProducers"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Before PPG Injection">
                      <el-table-column label="Liquid(lb)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforeLiquid"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Oil(lb)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforeOil"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Water Cut(%)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.beforeWaterCut"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="After PPG Treatment">
                      <el-table-column label="Liquid(lb)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterLiquid"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Oil(lb)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterOil"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Water Cut(%)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.afterWaterCut"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="Difference">
                      <el-table-column label="Liquid(lb)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differenceLiquid"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Oil(lb)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differenceOil"></el-input>
                        </template>
                      </el-table-column>
                      <el-table-column label="Water Cut(%)">
                        <template slot-scope="scope">
                          <el-input v-model="scope.row.differenceWaterCut"></el-input>
                        </template>
                      </el-table-column>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow5(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine5">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>
            </div>
            <!--__________________________PPG相关参数结束__________________________-->

            <!--__________________________Polymer相关参数开始__________________________-->
            <div class="different_data" v-if="showDataType == 'Polymer'">
                <h1>Polymer Data</h1>
                <!--判断是否是Preflush-->
                <el-row style="margin-bottom:30px;">
                  <el-col :span="6" class="Choose_preflush">Please Choose Preflush Or Not ?</el-col>
                  <el-col :span="6">
                    <el-switch
                      v-model="addDataForm.polymer.preflush"
                      active-text="Yes"
                      inactive-text="No">
                  </el-switch></el-col>
                </el-row>

                <!--10.前置水组分   只有当ifPreflush为true时才显示-->
                <el-collapse-item title="Preflush Water Composition" name="10" v-if="addDataForm.polymer.preflush">
                  <el-table :data="addDataForm.polymer.preflushWaterComposition" style="width: 100%" stripe>
                    <el-table-column label="Na+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.na"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Mg2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.mg2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="K+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.k"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="SO42-">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.so4"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Ca2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ca2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Fe2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.fe2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Cl-">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.cl"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="TDS">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.tds"></el-input>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-collapse-item>
                <!--11.地层水组分formationWaterComposition-->
                <el-collapse-item title="Formation Water Composition" name="11">
                  <el-table :data="addDataForm.polymer.formationWaterComposition" style="width: 100%" stripe>
                    <el-table-column label="Na+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.na"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Mg2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.mg2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="K+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.k"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="SO42-">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.so4"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Ca2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ca2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Fe2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.fe2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Cl-">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.cl"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="TDS">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.tds"></el-input>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-collapse-item>

                <!--12.注入水组分injectionWaterComposition-->
                <el-collapse-item title="Injection Water Composition" name="12">
                  <el-table :data="addDataForm.polymer.injectionWaterComposition" style="width: 100%" stripe>
                    <el-table-column label="Na+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.na"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Mg2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.mg2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="K+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.k"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="SO42-">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.so4"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Ca2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.ca2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Fe2+">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.fe2"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Cl-">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.cl"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="TDS">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.tds"></el-input>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-collapse-item>
                
                <!--13.聚合物设计 polymerDesign-->
                <el-collapse-item title="Polymer Design" name="13">
                  <el-table :data="addDataForm.polymer.polymerDesign" style="width: 100%" stripe>
                    <el-table-column label="Slug Size (PV)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.slugSize"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Start Time" width="160">
                      <template slot-scope="scope">
                        <el-date-picker
                          class="el-width-st100"
                          v-model="scope.row.startTime"
                          type="date"
                          placeholder="Start Date">
                        </el-date-picker>  
                      </template>
                    </el-table-column>
                    <el-table-column label="End Time" width="160">
                      <template slot-scope="scope">
                        <el-date-picker
                          class="el-width-st100"
                          v-model="scope.row.endTime"
                          type="date"
                          placeholder="End Date">
                        </el-date-picker>  
                      </template>
                    </el-table-column>
                    <el-table-column label="Polymer Name" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.polymerName"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Polymer Type" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.polymerType"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Average Molecular Weight (10^4 dalton)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.averageMolecularWeight"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Hydrolysis Degree (%)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.hydrolysisDegree"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Average Polymer Concentration (ppm)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.averagePolymerConcentration"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Average Polymer VisCosity (6RPM,cp)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.averagePolymerViscosity"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Injected Water Salinity (ppm)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.injectedWaterSalinity"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Start Injecting Pressure (psi)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.startInjectingPressure"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="End Injecting Pressure (psi)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.endInjectingPressure"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Injection Rate (PV/a)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.injectionRate"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Total Injection Volume (PV)" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.totalInjectionVolume"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Number Of Injection Wells" width="130">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.numberOfInjectionWells"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow6(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine6">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>

                <!--14.注入压力 injectionPressure-->
                <el-collapse-item title="Injection Pressure" name="14">
                  <el-table :data="addDataForm.polymer.injectionPressure" style="width: 100%" stripe>
                    <el-table-column label="Time">
                      <template slot-scope="scope">
                        <el-date-picker style="width:100%" v-model="scope.row.time" type="datetime"> </el-date-picker>
                      </template>
                    </el-table-column>
                    <el-table-column label="Pressure (psi)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.pressure"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow7(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine7">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>

                <!--15.聚合物粘度 polymerViscosity-->
                <el-collapse-item title="Polymer Viscosity" name="15">
                  <el-table :data="addDataForm.polymer.polymerViscosity" style="width: 100%" stripe>
                    <el-table-column label="Shear Rate (RPM)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.shearRate"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Temperature (F)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.temperature"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Brine Salinity (ppm)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.brineSalinity"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Polymer Concentration (ppm)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.polymerConcentration"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Polymer Viscosity (cp)">
                      <template slot-scope="scope">
                        <el-input v-model="scope.row.polymerViscosity"></el-input>
                      </template>
                    </el-table-column>
                    <el-table-column label="Operation" width="100" fixed="right">
                      <template slot-scope="scope">
                        <el-button type="primary" size="small" @click="deleteThisRow8(scope.$index)">Delete</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                  <el-row :span="24" style="margin:40px 0 30px;">
                    <el-button class="add_newLine" @click="addNewLine8">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line</el-button>
                  </el-row>
                </el-collapse-item>

            </div>
            <!--__________________________Polymer相关参数结束__________________________-->

          </el-collapse>
        </el-form>
        <!--按钮提交区-->
        <el-row :gutter="40" style="margin-top:40px;">
          <el-col :span="4" :offset="8">
            <el-button type="primary" style="width:100%" @click="submitAll">Submit</el-button>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" style="width:100%">Reset</el-button>
          </el-col>
        </el-row>
      </div>
    </section>
    <Footer :footerFixed="footerFixed"></Footer>
  </div>
</template>

<script>
import Header from '@components/header'
import Footer from '@components/footer'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
import { EORTYPE, FORMATIONTYPE, DRIVEMECHANISM, SEDIMENTARYSEQUENCEDISTRIBUTION, DEPOSITIONALENVIRONMENT, PREVIOUSPRODUCTION, PROJECTSCOPE, PROJECTMATURITY, PROJECTEVALUATION, PROFIT } from '@baseData/baseData'
import { COUNTRY } from '@baseData/country'
import { getCookie } from '../utils/cookie'

export default {
  components: {Header, Footer},
  data () {
    return {
      footerFixed: false,
      activeNames: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'],
      country: COUNTRY, //国家
      EORType: EORTYPE, //EOR类型
      formationType: FORMATIONTYPE, //形成类型
      hydraulicFractured:[{label: 'yes', value: 'yes'}, {label: 'no', value: 'no'}], //水里压裂
      naturallyFractured:[{label: 'yes', value:'yes'}, {label: 'no', value: 'no'}], //自然破碎
      driveMechanism: DRIVEMECHANISM, //驱动机制
      sedimentarySequenceDistribution: SEDIMENTARYSEQUENCEDISTRIBUTION, //沉积层分布
      depositionalEnvironment: DEPOSITIONALENVIRONMENT, //沉积环境
      previousProduction: PREVIOUSPRODUCTION, //以前的生产
      projectScope: PROJECTSCOPE, // 项目范围
      projectMaturity: PROJECTMATURITY, // 项目成熟度
      projectEvaluation: PROJECTEVALUATION, // 项目评估
      profit: PROFIT, // 利润
      showDataType: '', //根据地址参数判断显示哪个数据类型
      addDataForm:{
        unit: 'Field',
        //联系信息
        contactInformation: {
          email: '',
          formalName: '',
          id: '',
          loginName: '',
          pass: '',
          phone: ''
        },
        //一般信息
        generalInformation: {
          unitType: '', //单位类型
          dataType:'', //数据类型--不显示PPG/Polymer
          id: '', //当前数据的id
          gmtCreate: '', //不显示
          gmtModified: '', //不显示
          username: '',
          ifPreflush: '', //polymer的参数判断0:否,1:是
          countryCity:'',
          dataTitle:'',
          startDate:'',
          endDate:'',
          EORType:'',
          field:'',
          operator:'',
          stateProvince:'',
          reservoirBlock: ''
        },
        reservoirInformation:{
          interestArea:'',
          gravity:'',
          productionWells:'',
          oilViscosity:'',
          injectionWells:'',
          formationWaterViscosity:'',
          payZoneOrFormationName:'',
          reservoirTemperature:'',
          formationType:'',
          initialOilSaturation:'',
          hydraulicFractured:'',
          initialWaterSaturation:'',
          naturallyFractured:'',
          formationWaterSalinity:'',
          fracturePermeability:'',
          divalentCations:'',
          matrixPermeability:'',
          initialOilInPlace:'',
          grossThickness:'',
          driveMechanism:'',
          netThickness:'',
          initialReserviorPressure:'',
          porosity:'',
          presentPressure:'',
          permeability:'',
          bubblePointPressure:'',
          dykstraParsonsCoefficient:'',
          sedimentarySequenceDistribution:'',
          depth:'',
          depositionalEnvironment:''
        },
        // PPG相关的参数
        ppg:{
          //注射参数表格
          injectionParameter:[{
            startInjectionDate:'',
            endInjectionDate:'',
            ppgName:'',
            ppgSize:'',
            temperatureResistance:'',
            swellingRate:'',
            thermalStability:'',
            strength:'',
            salinityResistance:'',
            swellingRatio:'',
            driedPPGWeight:'',
            ppgSuspensionConcentration:'',
            ppgInjectionVolume:'',
            ppgInjectionRate:'',
            initialPPGInjectionPressure:'',
            maximumInjectionPressure:'',
            totalInjectionWeight:'',
            totalInjectionVolume:''
          }],
          //PPG监控参数表格
          ppgMonitoring:[{
            injectionDuration:'',
            ppgInjectionPressure:''
          }],
          //评估
          evaluation:{
            previousProduction:'',
            projectScope:'',
            projectMaturity:'',
            wellPattern:'',
            projectEvaluation:'',
            wellSpacing:'',
            profit:''
          },
          //PPG处理后的压力测试结果表格
          afterPPGTreatment:[{
            wellName:'',
            beforePi90:'',
            beforeInjectionPressure:'',
            afterPi90:'',
            afterInjectionPressure:'',
            differencePi90:'',
            differenceInjectionPressure:''
          }],
          //PPG处理前后的注水剖面表格
          waterInjectionProfile:[{
            wellName:'',
            targetZone:'',
            beforePercentageIntakeWater:'',
            beforeWaterIntake:'',
            afterPercentageIntakeWater:'',
            afterWaterIntake:'',
            differencePercentageIntakeWater:'',
            differenceWaterIntake:''
          }],
          //生产绩效表格
          productionPerformance:[{
            wellName:'',
            numberOfProducers:'',
            beforeLiquid:'',
            beforeOil:'',
            beforeWaterCut:'',
            afterLiquid:'',
            afterOil:'',
            afterWaterCut:'',
            differerceLiquid:'',
            differerceOil:'',
            differerceWaterCut:''
          }]
        },
        // Polymer相关的参数
        polymer:{
          preflush: true,
          //前置水组分
          preflushWaterComposition: [{
            na:'',
            mg2:'',
            k:'',
            so4:'',
            ca2:'',
            fe2:'',
            cl:'',
            tds:''
          }],
          //地层水组分
          formationWaterComposition: [{
            na:'',
            mg2:'',
            k:'',
            so4:'',
            ca2:'',
            fe2:'',
            cl:'',
            tds:''
          }],
          //注入水组分
          injectionWaterComposition: [{
            mg2:'',
            k:'',
            so4:'',
            ca2:'',
            fe2:'',
            cl:'',
            tds:''
          }],
          //聚合物设计
          polymerDesign: [{
            slugSize:'',
            startTime:'',
            endTime:'',
            polymerName:'',
            polymerType:'',
            averageMolecularWeight:'',
            hydrolysisDegree:'',
            averagePolymerConcentration:'',
            averagePolymerViscosity:'',
            injectedWaterSalinity:'',
            startInjectingPressure:'',
            endInjectingPressure:'',
            injectionRate:'',
            totalInjectionVolume:'',
            numberOfInjectionWells:''
          }],
          //注入压力
          injectionPressure: [{
            time:'',
            pressure:''
          }],
          //聚合物粘度
          polymerViscosity:[{
            shearRate:'',
            temperature:'',
            brineSalinity:'',
            polymerConcentration:'',
            polymerViscosity:''
          }]
        }
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
  created () {
    //根据地址中的参数dataType判断显示的数据类型
    if (this.$route.params.dataType) {
      this.showDataType = this.$route.params.dataType
      this.addDataForm.generalInformation.dataType = this.$route.params.dataType
    } else {
      this.$router.go(-1)
    }
  },
  mounted () {
    console.log('dataId:', this.$route.params.dataId, 'dataType:', this.$route.params.dataType)
    var self = this
    this.addDataForm.contactInformation.formalName = getCookie('formalName')
    this.addDataForm.contactInformation.email = getCookie('email')
    this.addDataForm.contactInformation.phone = getCookie('phone')
    this.addDataForm.contactInformation.loginName = getCookie('loginName')
    if (this.$route.params.dataId !== 0 && this.$route.params.dataId !== undefined) {
      //有dataId代表修改数据
      console.log('dataId:', this.$route.params.dataId)
      axios.post(self.baseUrl + '/g/item', {
        id: self.$route.params.dataId,
        username: self.addDataForm.contactInformation.loginName
      }).then(function (res) {
        if (res.code === 0) {
          console.log('请求本页数据返回结果', res)
          self.addDataForm = res.data
        }
      })
    }
  },
  methods: {
    //提交全部数据
    submitAll () {
      var self = this
      axios.post(self.baseUrl + '/s/polymer', self.addDataForm).then(function (res) {
        if (res.code === 0) {
          console.log('提交返回结果', res)
          self.$message.success('Submit Data Success!')
          self.$router.go(-1)
        }
      })
    },
    //文件上传
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    },
    deleteThisRow (index) {
      this.addDataForm.ppg.injectionParameter.splice(index, 1)
    },
    deleteThisRow2 (index) {
      this.addDataForm.ppg.ppgMonitoring.splice(index, 1)
    },
    deleteThisRow3 (index) {
      this.addDataForm.ppg.afterPPGTreatment.splice(index, 1)
    },
    deleteThisRow4 (index) {
      this.addDataForm.ppg.waterInjectionProfile.splice(index, 1)
    },
    deleteThisRow5 (index) {
      this.addDataForm.ppg.productionPerformance.splice(index, 1)
    },
    deleteThisRow6 (index) {
      this.addDataForm.polymer.polymerDesign.splice(index, 1)
    },
    deleteThisRow7 (index) {
      this.addDataForm.polymer.injectionPressure.splice(index, 1)
    },
    deleteThisRow8 (index) {
      this.addDataForm.polymer.polymerViscosity.splice(index, 1)
    },
    addNewLine () {
      this.addDataForm.ppg.injectionParameter.push({
        startInjectionDate:'',
        endInjectionDate:'',
        ppgName:'',
        ppgSize:'',
        temperatureResistance:'',
        swellingRate:'',
        thermalStability:'',
        strength:'',
        salinityResistance:'',
        swellingRatio:'',
        driedPPGWeight:'',
        ppgSuspensionConcentration:'',
        ppgInjectionVolume:'',
        ppgInjectionRate:'',
        initialPPGInjectionPressure:'',
        maximumInjectionPressure:'',
        totalInjectionWeight:'',
        totalInjectionVolume:''
      })
    },
    addNewLine2 () {
      this.addDataForm.ppg.ppgMonitoring.push({
        injectionDuration:'',
        ppgInjectionPressure:''
      })
    },
    addNewLine3 () {
      this.addDataForm.ppg.afterPPGTreatment.push({
        wellName:'',
        beforePi90:'',
        beforeInjectionPressure:'',
        afterPi90:'',
        afterInjectionPressure:'',
        differencePi90:'',
        differenceInjectionPressure:''
      })
    },
    addNewLine4 () {
      this.addDataForm.ppg.waterInjectionProfile.push({
        wellName:'',
        targetZone:'',
        beforePercentageIntakeWater:'',
        beforeWaterIntake:'',
        afterPercentageIntakeWater:'',
        afterWaterIntake:'',
        differencePercentageIntakeWater:'',
        differenceWaterIntake:''
      })
    },
    addNewLine5 () {
      this.addDataForm.ppg.productionPerformance.push({
        wellName:'',
        numberOfProducers:'',
        beforeLiquid:'',
        beforeOil:'',
        beforeWaterCut:'',
        afterLiquid:'',
        afterOil:'',
        afterWaterCut:'',
        differerceLiquid:'',
        differerceOil:'',
        differerceWaterCut:''
      })
    },
    addNewLine6 () {
      this.addDataForm.polymer.polymerDesign.push({
        slugSize:'',
        startTime:'',
        endTime:'',
        polymerName:'',
        polymerType:'',
        averageMolecularWeight:'',
        hydrolysisDegree:'',
        averagePolymerConcentration:'',
        averagePolymerViscosity:'',
        injectedWaterSalinity:'',
        startInjectingPressure:'',
        endInjectingPressure:'',
        injectionRate:'',
        totalInjectionVolume:'',
        numberOfInjectionWells:''
      })
    },
    addNewLine7 () {
      this.addDataForm.polymer.injectionPressure.push({
        time:'',
        pressure:''
      })
    },
    addNewLine8 () {
      this.addDataForm.polymer.polymerViscosity.push({
        shearRate:'',
        temperature:'',
        brineSalinity:'',
        polymerConcentration:'',
        polymerViscosity:''
      })
    }
  }
}
</script>

<style>
  .different_data{
    width: 100%;
    height: auto;
    padding: 40px 0 0;
  }
  .different_data h1{
    margin: 0 0 40px 0;
    height: 40px;
    line-height: 40px;
    font-size: 26px;
    color: #205081;
    text-align: center;
  }
  .add_newLine{
    display: block;
    margin: 0 auto;
    width: 60%;
    height: 40px;
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
  .Choose_preflush{
    font-weight: 600;
    line-height: 20px;
  }
</style>
