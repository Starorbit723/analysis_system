<template>
  <footer :class="{'fixed_footer': footerFixed}">
    <div class="content_warpper">
      <p>Copyright © 2018 XXX.COM Inc. All Rights Reserved. </p>
      <p>Please Read The<a href="#"> Anti-piracy Statement </a>And<a href="#"> The Copyright Statement</a>. Report E-mail：anjanette119@163.com</p>
      <p>Welcome To Contact Us For More Information And Suggest : 0529-4646462</p>
    </div>
  </footer>
</template>

<script>
export default {
  props:['footerFixed']
}
</script>

<style>
  footer.fixed_footer{
  position: fixed;
  z-index: 200;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 110px;
  padding: 15px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 110px;
  background: #205081;
}
footer{
  width: 100%;
  height: 110px;
  padding: 15px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100%;
  height: 110px;
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
}
footer a:hover{
  color:#23d8ff;
}
</style>
