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
                        :disabled="true"
                        type="text"
                        v-model="addDataForm.contactInformation.userName"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Email">
                      <el-input
                        :disabled="true"
                        type="text"
                        v-model="addDataForm.contactInformation.emailAddress"
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
                        v-model="addDataForm.contactInformation.phoneNumber"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Data Title">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.contactInformation.dataTitle"
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
                    <el-select v-model="addDataForm.generalInformation.country" class="el-width-st100" placeholder="Please Choice Country">
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
                    <el-select v-model="addDataForm.generalInformation.EORType" class="el-width-st100" placeholder="Please Choice Type">
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
                      v-model="addDataForm.generalInformation.starDate"
                      type="date"
                      placeholder="Please Choice StarTime"
                      class="el-width-st100">
                    </el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="End Date">
                    <el-date-picker
                      v-model="addDataForm.generalInformation.endDate"
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
                  <el-form-item label="Number of Production Wells:" label-width="55%">
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
                      v-model="addDataForm.reservoirInformation.oilViscosityAtReservoir"
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
                  <el-form-item label="Reservoir Temperature (⁰C)" label-width="55%">
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
                    <el-select v-model="addDataForm.reservoirInformation.formationType" class="el-width-st100" placeholder="Please Choice Type">
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
                    <el-select v-model="addDataForm.reservoirInformation.hydraulicFractured" class="el-width-st100" placeholder="Please Choice Yes or No">
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
                  <el-form-item label="Natually Fractured" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.natuallyFractured" class="el-width-st100" placeholder="Please Choice Yes or No">
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
                      v-model="addDataForm.reservoirInformation.formationWaterSalinity"
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
                        v-model="addDataForm.reservoirInformation.fracturePermeability"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Divalent Cations (ppm)" label-width="55%">
                    <el-input
                      clearable
                      type="text"
                      v-model="addDataForm.reservoirInformation.divalentCations"
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
                        v-model="addDataForm.reservoirInformation.matrixPermeability"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Oil In Place (ton)" label-width="55%">
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
                  <el-form-item label="Gross Thickness (m)" label-width="55%">
                      <el-input
                        clearable
                        type="text"
                        v-model="addDataForm.reservoirInformation.grossThickness"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Drive Mechanism" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.driveMechanism" class="el-width-st100" placeholder="Please Choice Drive Mechanism">
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
                        v-model="addDataForm.reservoirInformation.netThickness"
                        auto-complete="off"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Initial Reservior Pressure (MPa)" label-width="55%">
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
                  <el-form-item label="Present Pressure (MPa)" label-width="55%">
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
                  <el-form-item label="Bubble Point Pressure (MPa)" label-width="55%">
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
                    <el-select v-model="addDataForm.reservoirInformation.sedimentarySequenceDistribution" class="el-width-st100" placeholder="Please Choice Distribution">
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
                        v-model="addDataForm.reservoirInformation.depth"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="Depositional Environment" label-width="55%">
                    <el-select v-model="addDataForm.reservoirInformation.depositionalEnvironment" class="el-width-st100" placeholder="Please Choice Depositional Environment">
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
              <el-table :data="addDataForm.injectionParameter" style="width: 100%" stripe>
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
                <el-table-column label="Strength(Pa)" width="130">
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
                <el-table-column label="Dried PPG Weight(ton)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.driedPPGWeight"></el-input>
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
                    <el-input v-model="scope.row.initialPPGInjectionPressure"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Maximum Injection Pressure(MPa)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.maximumInjectionPressure"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Total Injection Weight(ton)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.totalInjectionWeight"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Total Injection Volume(m3)" width="130">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.totalInjectionVolume"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <el-button class="add_newLine" @click="addNewLine">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</el-button>
              </el-row>
            </el-collapse-item>
            <!--PPG监控-->
            <el-collapse-item title="PPG Monitering" name="5">
              <el-table :data="addDataForm.PPGMonitering" style="width: 100%" stripe>
                <el-table-column fixed type="index" label="Stages" width="80"></el-table-column>
                <el-table-column label="Injection Duration (day)">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.injectionDuration"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="PPG Injection Pressure (MPa)">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.PPGInjectionPressure"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow2(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <el-button class="add_newLine" @click="addNewLine2">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</el-button>
              </el-row>
            </el-collapse-item>
            <!--评估-->
            <el-collapse-item title="Evaluation" name="6">
              <el-row :gutter="20" :offset="1" class="f-width90 f-mart30">
                <el-col :span="12">
                  <el-form-item label="Previous Production">
                    <el-select v-model="addDataForm.evaluation.previousProduction" class="el-width-st100" placeholder="Please Choice Previous Production">
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
                    <el-select v-model="addDataForm.evaluation.projectScope" class="el-width-st100" placeholder="Please Choice Project Scope">
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
                    <el-select v-model="addDataForm.evaluation.projectMaturity" class="el-width-st100" placeholder="Please Choice Project Maturity">
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
                        v-model="addDataForm.evaluation.wellPattern"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Project Evaluation">
                    <el-select v-model="addDataForm.evaluation.projectEvaluation" class="el-width-st100" placeholder="Please Choice Project Evaluation">
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
                        v-model="addDataForm.evaluation.wellSpacing"
                        auto-complete="off"></el-input>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="20" :offset="1" class="f-width90">
                <el-col :span="12">
                  <el-form-item label="Profit">
                    <el-select v-model="addDataForm.evaluation.profit" class="el-width-st100" placeholder="Please Choice Profit">
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
              <el-table :data="addDataForm.afterPPGTreatment" style="width: 100%" stripe>
                <el-table-column label="Well Name">
                  <template slot-scope="scope">
                    <el-input v-model="scope.row.wellName"></el-input>
                  </template>
                </el-table-column>
                <el-table-column label="Before PPG Injection">
                  <el-table-column label="PI(90) (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.beforePI90"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Injection Pressure (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.beforeInjectionPressure"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="After PPG Treatment">
                  <el-table-column label="PI(90) (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.afterPI90"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Injection Pressure (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.afterInjectionPressure"></el-input>
                    </template>
                  </el-table-column>
                </el-table-column>
                <el-table-column label="Difference">
                  <el-table-column label="PI(90) (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.differencePI90"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Injection Pressure (MPa)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.differenceInjectionPressure"></el-input>
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
                <el-button class="add_newLine" @click="addNewLine3">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</el-button>
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
              <el-table :data="addDataForm.waterInjectionProfile" style="width: 100%" stripe>
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
                  <el-table-column label="Water Intake(m3/d)">
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
                  <el-table-column label="Water Intake(m3/d)">
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
                  <el-table-column label="Water Intake(m3/d)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.differenceWaterIntake"></el-input>
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
                <el-button class="add_newLine" @click="addNewLine4">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</el-button>
              </el-row>
            </el-collapse-item>
            <!--生产绩效-->
            <el-collapse-item title="Production Performance" name="9">
              <el-table :data="addDataForm.productionPerformance" style="width: 100%" stripe>
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
                  <el-table-column label="Liquid(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.beforeLiquid"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Oil(ton)">
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
                  <el-table-column label="Liquid(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.afterLiquid"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Oil(ton)">
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
                  <el-table-column label="Liquid(ton)">
                    <template slot-scope="scope">
                      <el-input v-model="scope.row.differenceLiquid"></el-input>
                    </template>
                  </el-table-column>
                  <el-table-column label="Oil(ton)">
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
                <el-table-column label="operation" width="90" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="primary" size="small" @click="deleteThisRow5(scope.$index)">Delete</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-row :span="24" style="margin:40px 0 30px;">
                <el-button class="add_newLine" @click="addNewLine5">+&nbsp;&nbsp;&nbsp;Add&nbsp;&nbsp;New&nbsp;&nbsp;Line&nbsp;&nbsp;At&nbsp;&nbsp;End&nbsp;&nbsp;Of&nbsp;&nbsp;Table</el-button>
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
        unit: 'SI',
        //联系信息
        contactInformation: {
          userName: 'Jonna',
          emailAddress: 'Jonna@163.com',
          phoneNumber:'13801383838',
          dataTitle:''
        },
        //一般信息
        generalInformation: {
          country:'',
          stateProvince:'',
          countyCity:'',
          field:'',
          reservoirBlock: '',
          EORType:'',
          operator:'',
          starDate:'',
          endDate:''
        },
        //水库信息
        reservoirInformation:{
          interestArea:'',
          gravity:'',
          productionWells:'',
          oilViscosityAtReservoir:'',
          injectionWells:'',
          formationWaterViscosity:'',
          payZoneOrFormationName:'',
          reservoirTemperature:'',
          formationType:'',
          initialOilSaturation:'',
          hydraulicFractured:'',
          initialWaterSaturation:'',
          natuallyFractured:'',
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
        //注射参数表格
        injectionParameter:[{
          startInjectionDate:'',
          endInjectionDate:'',
          PPGName:'',
          PPGSize:'',
          temperatureResistance:'',
          swellingRate:'',
          thermalStability:'',
          strength:'',
          salinityResistance:'',
          swellingRatio:'',
          driedPPGWeight:'',
          PPGSuspensionConcentration:'',
          PPGInjectionVolume:'',
          PPGInjectionRate:'',
          initialPPGInjectionPressure:'',
          maximumInjectionPressure:'',
          totalInjectionWeight:'',
          totalInjectionVolume:''
        }],
        //PPG监控参数表格
        PPGMonitering:[{
          injectionDuration:'',
          PPGInjectionPressure:''
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
          beforePI90:'',
          beforeInjectionPressure:'',
          afterPI90:'',
          afterInjectionPressure:'',
          differencePI90:'',
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
      this.addDataForm.injectionParameter.splice(index, 1)
    },
    deleteThisRow2 (index) {
      this.addDataForm.PPGMonitering.splice(index, 1)
    },
    deleteThisRow3 (index) {
      this.addDataForm.afterPPGTreatment.splice(index, 1)
    },
    deleteThisRow4 (index) {
      this.addDataForm.waterInjectionProfile.splice(index, 1)
    },
    deleteThisRow5 (index) {
      this.addDataForm.productionPerformance.splice(index, 1)
    },
    addNewLine () {
      this.addDataForm.injectionParameter.push({
        startInjectionDate:'',
        endInjectionDate:'',
        PPGName:'',
        PPGSize:'',
        temperatureResistance:'',
        swellingRate:'',
        thermalStability:'',
        strength:'',
        salinityResistance:'',
        swellingRatio:'',
        driedPPGWeight:'',
        PPGSuspensionConcentration:'',
        PPGInjectionVolume:'',
        PPGInjectionRate:'',
        initialPPGInjectionPressure:'',
        maximumInjectionPressure:'',
        totalInjectionWeight:'',
        totalInjectionVolume:''
      })
    },
    addNewLine2 () {
      this.addDataForm.PPGMonitering.push({
        injectionDuration:'',
        PPGInjectionPressure:''
      })
    },
    addNewLine3 () {
      this.addDataForm.afterPPGTreatment.push({
        wellName:'',
        beforePI90:'',
        beforeInjectionPressure:'',
        afterPI90:'',
        afterInjectionPressure:'',
        differencePI90:'',
        differenceInjectionPressure:''
      })
    },
    addNewLine4 () {
      this.addDataForm.waterInjectionProfile.push({
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
      this.addDataForm.productionPerformance.push({
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
