<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <!--图片-->
      <div class="headadv">
        <img src="../assets/images/headimg.png">
      </div>
      <div class="content_warpper">
        <div class="introduce_box">
          <h1>Objectives</h1>
          <ul>
            <li>•	Collect and organize the worldwide EOR projects from varied sources</li>
            <li>•	Provide a customized platform to collect new project data for each EOR technology</li>
            <li>•	Apply fundamental statistical methods to display the existing project distributions, ranges, and relationships for different EOR technologies</li>
            <li>•	Utilize advanced data analytical techniques for project analogous analysis and visualizations, the main methods include clustering analysis and principal component analysis</li>
          </ul>
          <div class="imgbox">
            <img src="../assets/images/headpic.png"/>
          </div>
        </div>
        <div class="introduce_list">
          <h1>Functions</h1>
          <ul>
            <li>
              <div class="text_box">
                <h2>Data Acquisition</h2>
                <p>EOR project data have been collected from variety of data sources, which lay the foundation for further analysis. Table below illustrated the number of projects and main reservoir parameters that our research group have been collected for various EOR techniques, each EOR technique has customized format for data collection.<br>The primary function of this website is the customization of data acquisition system based on our valuable experience for data collection from various sources. Currently, we have the full-design for polymer flooding and preformed particle gels, and the design for other EOR technologies are undergoing. Customers could provide and use their EOR project information for further comparison and analysis.</p>
              </div>
              <img class="list_img" src="../assets/images/headpic.png">
            </li>
          </ul>
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
    margin:50px 0;
  }
  .introduce_box h1{
    font-size: 18px;
    color: #1d4b79;
    line-height: 30px;
    margin-bottom: 10px;
  }
  .introduce_box ul{
    display: block;
    width: 60%;
  }
  .introduce_box ul li{
    display: inline-block;
    line-height: 30px;
    font-size: 14px;
  }
  .introduce_box:last-child::after{
    content: '';
    clear: both;
    position: absolute;
    bottom: 0;
  }
  .imgbox{
    position: absolute;
    top:0;
    right: 0;
    bottom: 0;
    width: 35%;
    padding:0 2.5%;
    height: 100%;
  }
  .imgbox img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .introduce_list{
    clear: both;
    display: inline-block;
    margin-bottom: 40px;
  }
  .introduce_list h1{
    font-size: 20px;
    color: #1d4b79;
    line-height: 30px;
    margin-bottom: 20px;
    text-align: center;
  }
  .introduce_list ul{
    display: inline-block;
  }
  .introduce_list ul li{
    display: inline-block;
    position: relative;
  }
  .text_box{
    width: 55%;
    float: left;
  }
  .text_box h2{
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    color: #1d4b79;
  }
  .text_box p{
    line-height: 26px;
  }
  .list_img{
    width: 35%;
    padding:0 2.5%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
  }
</style>
