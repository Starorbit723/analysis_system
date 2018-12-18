<template>
  <footer :class="{'fixed_footer': footerFixed}">
    <div class="content_warpper">
      <p>Copyright © Missouri University of Science and Technology, EOR Data Research Group, Rolla, MO 65409 – All Rights Reserved</p>
      <p>weim@mst.edu | 573-341-4657</p>
    </div>
  </footer>
</template>

<script>
export default {
  props:['footerFixed'],
  methods: {
    toPageAboutUs () {
      this.$router.push({path: '/aboutUs'})
    }
  }
}
</script>

<style>
  footer.fixed_footer{
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 90px;
  background: #205081;
}
footer{
  width: 100%;
  height: 90px;
  padding: 15px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  background: #205081;
}
footer p{
  color: #ffffff;
  text-align: center;
  font-size: 12px;
  line-height: 25px;
}
footer a{
  color:#FFF;
  cursor: pointer;
}
footer a:hover{
  color:#23d8ff;
}
</style>
