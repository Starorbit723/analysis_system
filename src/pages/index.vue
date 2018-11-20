<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <!--图片-->
      <div class="headadv">
        <img src="../assets/images/headimg.png">
      </div>
      <div class="content_warpper">
        <!--网站目标-->
        <div class="introduce_box">
          <h1 class="title_level1">Objectives</h1>
          <ul>
            <li>•	Collect and organize the worldwide EOR projects from varied sources</li>
            <li>•	Provide a customized platform to collect new project data for each EOR technology</li>
            <li>•	Apply fundamental statistical methods to display the existing project distributions, ranges, and relationships for different EOR technologies</li>
            <li>•	Utilize advanced data analytical techniques for project analogous analysis and visualizations, the main methods include clustering analysis and principal component analysis</li>
          </ul>          
        </div>
        <!--网站功能-->
        <div class="introduce_list">
          <h1 class="title_level1">Functions</h1>
          <ul>
            <li>
              <div class="text_box el-fl">
                <h2 class="title_level2">Data Acquisition</h2>
                <p>EOR project data have been collected from variety of data sources, which lay the foundation for further analysis. Table below illustrated the number of projects and main reservoir parameters that our research group have been collected for various EOR techniques, each EOR technique has customized format for data collection.</p>
                <p>The primary function of this website is the customization of data acquisition system based on our valuable experience for data collection from various sources. Currently, we have the full-design for polymer flooding and preformed particle gels, and the design for other EOR technologies are undergoing. Customers could provide and use their EOR project information for further comparison and analysis.</p>
              </div>
              <img class="list_img" src="../assets/images/souji.png">
            </li>
            <li>
              <img class="list_img2" src="../assets/images/fenxi.png">
              <div class="text_box el-fr">
                <h2 class="title_level2">Data Analysis</h2>
                <p>Various data analysis methods have been reported or utilized in different research publications. However, this website provides the first online data analysis platform with the integration of fundamental statistics and advanced machine learning algorithms. For the fundamental statistics, boxplots are used to display the reservoir/fluid ranges; histograms are utilized to illustrates the distributions; and the scatterplots are presented to detect the relationships between each paired reservoir/fluid properties. The purpose of implementing the advanced data analysis methods is to reveal the hidden pattern and relationships between projects which we could not found by fundamental data analysis. With the user-friendly website design, the output of the data analysis result is customized based on customers’ selection of target property and the input for analysis and visualizations (eg. number of clusters)</p>
              </div>
            </li>
            <li>
              <div class="text_box2" style="padding:0 10% 0 0">
                <h2 class="title_level2">Data Visualization</h2>
                <p>Data visualization is luxury since humans are only able to see 2 or 3 dimensions. Dimensionality reduction techniques have been utilized to reduce the multi-dimensional dataset to 2D or 3D.</p>
              </div>
              <img class="list_img3" src="../assets/images/see.png">
            </li>
            <li>
              <div class="text_box2" style="padding:0 0 0 10%">
                <h2 class="title_level2">Data Storage and Share</h2>
                <p>Your input project information will be stored and shared with your permission. Therefore, reservoir engineers around the world could not only gain the useful information from your project, but also create an opportunity for communication and solving the technical problems together.</p>
              </div>
              <img class="list_img4" src="../assets/images/share.png">
            </li>
          </ul>
        </div>
        <!--网站使命-->
        <h1 class="title_level1">Mission</h1>
        <div class="introduce_flexbox">
          <section>
            <h3 class="title_level3">EOR Types Investigated</h3>
            <ul>
              <li>•	Polymer flooding</li>
              <li>•	Steam flooding</li>
              <li>•	Preformed particle gels</li>
              <li>•	CO2 miscible flooding</li>
              <li>•	CO2 immiscible flooding</li>
              <li>•	Alkaline injection</li>
              <li>•	Low salinity water flooding</li>
            </ul>
          </section>
          <section>
            <h3 class="title_level3">Data Analysis Methods Studied and Applied</h3>
            <ul>
              <li>•	Basic statistics</li>
              <li>•	Logistic regression</li>
              <li>•	Data mining</li>
              <li>•	Exploratory data mining</li>
              <li>•	Clustering and analogous analysis</li>
            </ul>
          </section>
          <section>
            <h3 class="title_level3">Data Sources Coverage</h3>
            <ul>
              <li>•	Biannual EOR Survey from Oil & Gas Journal</li>
              <li>•	SPE publications</li>
              <li>•	Technical Reports</li>
              <li>•	Major languages covered: English, Chinese</li>
            </ul>
          </section>    
        </div>
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

export default {
  components: {Header, Footer, LoginPop},
  data () {
    return {
      footerFixed: false
    }
  }
}
</script>

<style>
  .headadv{
    height: 400px;
    background: url('../assets/images/headpic.png') no-repeat;
    background-size: 100% 400px;
  }
  .headadv img{
    display: block;
    width: 400px;
    height: 400px;
    margin: 0 auto;
  }
  .introduce_box{
    clear: both;
    display: inline-block;
    position: relative;
    margin:50px 0 60px;
  }
  .title_level1{
    width: 100%;
    display: block;
    font-size: 22px;
    color: #1d4b79;
    height: 30px;;
    line-height: 30px;
    margin-bottom: 40px;
    text-align: center;
  }
  .title_level2{
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    margin-bottom: 10px;
    color: #333;
  }
  .title_level3{
    text-align: center;
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-bottom: 10px;
    color: #333;
  }
  .introduce_box ul{
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  .introduce_box ul li{
    display: inline-block;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
  }
  .introduce_box:last-child::after{
    content: '';
    clear: both;
    position: absolute;
    bottom: 0;
  }
  .imgbox img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .introduce_list{
    clear: both;
    display: inline-block;
    margin-bottom: 60px;
  }
  .introduce_list ul{
    display: inline-block;
  }
  .introduce_list ul li{
    display: inline-block;
    position: relative;
    width: 100%;
    margin-top: 80px;
  }
  .introduce_list ul li:nth-child(1){
    display: inline-block;
    position: relative;
    width: 100%;
    margin-top: 30px;
  }
  .introduce_list ul li:nth-child(3),.introduce_list ul li:nth-child(4){
    display: inline-block;
    position: relative;
    width: 50%;
    float: left;
  }
  .text_box{
    width: 55%;
  }
  .text_box2{
    width: 90%;
  }
  .text_box p{
    display: block;
    line-height: 26px;
    margin-bottom: 5px;
  }
  .text_box2 p{
    min-height: 130px;
    display: block;
    line-height: 26px;
    margin-bottom: 5px;
  }
  .list_img{
    width: 35%;
    padding:0 0 0 5%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
  .list_img2{
    width: 35%;
    padding:0 5% 0 0;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .list_img3{
    display: block;
    width: 80%;
    height: 300px;
    margin: 0 15% 0 5%;
  }
  .list_img4{
    display: block;
    width: 80%;
    height: 300px;
    margin: 0 5% 0 15%;
  }
  .introduce_flexbox{
    display: flex;
    justify-content:space-between;
    align-items:stretch;
  }
  .introduce_flexbox section{
    flex: 1;
  }
  .introduce_flexbox section ul{
    padding: 0 45px;
  }
  .introduce_flexbox section ul li{
    display: inline-block;
    width: 100%;
    line-height: 30px;
    font-size: 14px;
  }
  .introduce_flexbox section:nth-child(1) ul li{
    text-indent: 70px;
  }
</style>
