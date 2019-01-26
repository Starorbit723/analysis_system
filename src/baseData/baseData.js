/*
  This is the const Data List
  creat by Michael Fang in 2018-11-17
*/

// EOR类型
export const EORTYPE = [
  {label:'Alkaline', value:'Alkaline'},
  {label:'Alkaline + Surfactant + Polymer (ASP)', value:'Alkaline + Surfactant + Polymer (ASP)'},
  {label:'Alkaline + Surfactant (AS)', value:'Alkaline + Surfactant (AS)'},
  {label:'Alkaline + Surfactant + Polymer + CO2 (ASP +CO2)', value:'Alkaline + Surfactant + Polymer + CO2 (ASP +CO2)'},
  {label:'Combustion', value:'Combustion'},
  {label:'CO2 Immiscible', value:'CO2 Immiscible'},
  {label:'CO2 Miscible', value:'CO2 Miscible'},
  {label:'Electrical Heating', value:'Electrical Heating'},
  {label:'Foam', value:'Foam'},
  {label:'Foam + CO2', value:'Foam + CO2'},
  {label:'Gel Treatment', value:'Gel Treatment'},
  {label:'Hot Water', value:'Hot Water'},
  {label:'Hydrocarbon Immiscible', value:'Hydrocarbon Immiscible'},
  {label:'Hydrocarbon Miscible', value:'Hydrocarbon Miscible'},
  {label:'Low Salinity Water', value:'Low Salinity Water'},
  {label:'Micellar', value:'Micellar'},
  {label:'Microbial', value:'Microbial'},
  {label:'Nitrogen Immiscible', value:'Nitrogen Immiscible'},
  {label:'Nitrogen Miscible', value:'Nitrogen Miscible'},
  {label:'Polymer', value:'Polymer'},
  {label:'Polymer + Surfactant', value:'Polymer + Surfactant'},
  {label:'Steam', value:'Steam'},
  {label:'Surfactant', value:'Surfactant'},
  {label:'WAG', value:'WAG'},
  {label:'CO2+WAG', value:'CO2+WAG'},
  {label:'Other', value:'Other'}
]

// 形成类型
export const FORMATIONTYPE = [
  {label:'Conglomerate', value:'Conglomerate'},
  {label:'Dolomite', value:'Dolomite'},
  {label:'Limestone', value:'Limestone'},
  {label:'Sandstone', value:'Sandstone'},
  {label:'Shale', value:'Shale'},
  {label:'Tripolitic', value:'Tripolitic'},
  {label:'Unconsolidated', value:'Unconsolidated'},
  {label:'Other', value:'Other'}
]

// 驱动机制
export const DRIVEMECHANISM = [
  {label:'Solution Gas Drive', value:'Solution Gas Drive'},
  {label:'Depletion Drive', value:'Depletion Drive'},
  {label:'Gas Expansion', value:'Gas Expansion'},
  {label:'Water Drive', value:'Water Drive'},
  {label:'Gravity Drainage Combination', value:'Gravity Drainage Combination'},
  {label:'Water Flooding', value:'Water Flooding'},
  {label:'Alkaline', value:'Alkaline'},
  {label:'Alkaline + Surfactant + Polymer (ASP)', value:'Alkaline + Surfactant + Polymer (ASP)'},
  {label:'Alkaline + Surfactant (AS)', value:'Alkaline + Surfactant (AS)'},
  {label:'Alkaline + Surfactant + Polymer + CO2 (ASP +CO2)', value:'Alkaline + Surfactant + Polymer + CO2 (ASP +CO2)'},
  {label:'Combustion', value:'Combustion'},
  {label:'CO2 Immiscible', value:'CO2 Immiscible'},
  {label:'CO2 Miscible', value:'CO2 Miscible'},
  {label:'Electrical Heating', value:'Electrical Heating'},
  {label:'Foam', value:'Foam'},
  {label:'Foam + CO2', value:'Foam + CO2'},
  {label:'Gel Treatment', value:'Gel Treatment'},
  {label:'Hot Water', value:'Hot Water'},
  {label:'Hydrocarbon Immiscible', value:'Hydrocarbon Immiscible'},
  {label:'Hydrocarbon Miscible', value:'Hydrocarbon Miscible'},
  {label:'Low Salinity Water', value:'Low Salinity Water'},
  {label:'Micellar', value:'Micellar'},
  {label:'Microbial', value:'Microbial'},
  {label:'Nitrogen Immiscible', value:'Nitrogen Immiscible'},
  {label:'Nitrogen Miscible', value:'Nitrogen Miscible'},
  {label:'Polymer', value:'Polymer'},
  {label:'Polymer + Surfactant', value:'Polymer + Surfactant'},
  {label:'Steam', value:'Steam'},
  {label:'Surfactant', value:'Surfactant'},
  {label:'WAG', value:'WAG'},
  {label:'CO2+WAG', value:'CO2+WAG'},
  {label:'Other', value:'Other'}
]

// 沉积层分布
export const SEDIMENTARYSEQUENCEDISTRIBUTION = [
  {label:'Positive Rhythm', value:'Positive Rhythm'},
  {label:'Negative Rhythm', value:'Negative Rhythm'},
  {label:'Compounding Rhythm', value:'Compounding Rhythm'}
]

// 沉积环境
export const DEPOSITIONALENVIRONMENT = [
  {label:'Continental', value:'Continental'},
  {label:'Transitional', value:'Transitional'},
  {label:'Marine', value:'Marine'},
  {label:'Others', value:'Others'}
]

// 以前的生产
export const PREVIOUSPRODUCTION = [
  {label:'Gas Injection', value:'Gas Injection'},
  {label:'Hot Water', value:'Hot Water'},
  {label:'Hydrocarbon', value:'Hydrocarbon'},
  {label:'Primary', value:'Primary'},
  {label:'Waterflood', value:'Waterflood'},
  {label:'Other', value:'Other'}
]

//项目范围
export const PROJECTSCOPE = [
  {label:'Expansion Likely', value:'Expansion Likely'},
  {label:'Expansion Unlikely', value:'Expansion Unlikely'},
  {label:'Field-wide', value:'Field-wide'},
  {label:'Lease-wide', value:'Lease-wide'},
  {label:'Pilot Project', value:'Pilot Project'},
  {label:'Reservoir-wide', value:'Reservoir-wide'},
  {label:'Other', value:'Other'}
]

// 项目成熟度
export const PROJECTMATURITY = [
  {label:'Completed', value:'Completed'},
  {label:'Deleted', value:'Deleted'},
  {label:'Half Finish', value:'Half Finish'},
  {label:'Just Started', value:'Just Started'},
  {label:'Nearing Completion', value:'Nearing Completion'},
  {label:'Postponed', value:'Postponed'},
  {label:'Temporarily Suspended', value:'Temporarily Suspended'},
  {label:'Terminated', value:'Terminated'},
  {label:'Other', value:'Other'}
]

// 项目评估
export const PROJECTEVALUATION = [
  {label:'Discouraging', value:'Discouraging'},
  {label:'Not Evaluated', value:'Not Evaluated'},
  {label:'Promising', value:'Promising'},
  {label:'Successful', value:'Successful'},
  {label:'Too Early to Tell', value:'Too Early to Tell'},
  {label:'Other', value:'Other'}
]

// 利润
export const PROFIT = [
  {label:'Break Even', value:'Break Even'},
  {label:'Good', value:'Good'},
  {label:'Marginal', value:'Marginal'},
  {label:'Yes', value:'Yes'},
  {label:'No', value:'No'},
  {label:'Promising', value:'Promising'},
  {label:'Too Early to Tell', value:'Too Early to Tell'},
  {label:'Other', value:'Other'}
]

// 单位类型
export const UNITTYPE = [
  {label: 'All', value: ''},
  {label: 'SI Unit', value: 'SI'},
  {label: 'Field Unit', value: 'Field'}
]

// 分析类型
export const ANALYSISTYPE = [
  {label: 'Fundamental Analysis', value: 'Fundamental Analysis'},
  {label: 'Advanced Analysis', value: 'Advanced Analysis'}
]

// 图表类型
export const CHARTTYPE = [
  {label: 'Scatter Plot', value: 'ScatterPlot'},
  {label: 'Box Plot', value: 'BoxPlot'},
  {label: 'Histogram', value: 'Histogram'}
]

export const CHARTXY = [
  {label: 'Depth', value: 'Depth'},
  {label: 'Net_Thickness', value: 'Net_Thickness'},
  {label: 'Initial_Oil_Saturation', value: 'Initial_Oil_Saturation'},
  {label: 'Permeability', value: 'Permeability'},
  {label: 'Porosity', value: 'Porosity'},
  {label: 'Reservoir_Temperature_F', value: 'Reservoir_Temperature_F'},
  {label: 'Oil_Viscosity_at_Reservoir_cp', value: 'Oil_Viscosity_at_Reservoir_cp'}
]

export const CLUSTERING = [
  {label: 'Net_Thickness ', value: 'Net_Thickness '},
  {label: 'Depth ', value: 'Depth '},
  {label: 'Permeability ', value: 'Permeability '},
  {label: 'Porosity', value: 'Porosity'},
  {label: 'Residual oil Saturation', value: 'Residual oil Saturation'},
  {label: 'Reservoir Temperature', value: 'Reservoir Temperature'},
  {label: 'Oil Viscosity at Reservoir', value: 'Oil Viscosity at Reservoir'}
]
