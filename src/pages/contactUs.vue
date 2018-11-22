<template>
  <div class="page_content">
    <Header></Header>
    <section class="main_body">
      <div class="content_warpper">
        <h1 class="title_level_contact">Contact Information</h1>
        <p class="contact_mess"><span>Dr. Mingzhen Wei&nbsp;&nbsp;&nbsp;&nbsp;Assistant Professor</span><br>Petroleum Engineering, Geosciences and Geological and Petroleum Engineering<br>Missouri University of Science and Technology<br>McNutt Hall 129, 1400 N. Bishop Ave., Rolla MO 65409<br>Phone: 573-341-4657&nbsp;&nbsp;&nbsp;&nbsp;Email: weim@mst.edu</p>
        <p class="contact_mess"><span>Dr. Baojun Bai&nbsp;&nbsp;&nbsp;&nbsp;Professor</span><br>Petroleum Engineering, Geosciences and Geological and Petroleum Engineering<br>Missouri University of Science and Technology<br>McNutt Hall 161, 1400 N. Bishop Ave., Rolla MO 65409<br>Phone: 573-341-4016&nbsp;&nbsp;&nbsp;&nbsp;Email: baib@mst.edu</p>
        <h1 class="title_level_contact">Location</h1>
        <img class="mapimg" src="../assets/images/map.png">
      </div>
    </section>
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
      footerFixed: false
    }
  }
}
</script>

<style>
  .title_level_contact{
    width: 100%;
    display: block;
    font-size: 20px;
    color: #1d4b79;
    padding:50px 0 0;
    height: 30px;
    line-height: 30px;
    margin-bottom: 40px;
    text-align: center;
  }
  .contact_mess{
    display: block;
    width: 80%;
    margin: 0 auto 40px;
    line-height: 30px;
    font-size: 14px;
  }
  .contact_mess span{
    font-weight: 700;
    color: #1d4b79;
  }
  .mapimg{
    display: block;
    width: 80%;
    margin:0 auto;
  }
</style>
