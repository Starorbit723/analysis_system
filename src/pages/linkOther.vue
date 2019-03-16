<template>
  <div class="page_content">
    <Header></Header>
    <div class="link_zone">
        <a href="https://public.tableau.com/profile/na.zhang#!/vizhome/WorldwideEOR/WorldwideEORDistribution" target="_blank">Worldwide EOR Projects Distribution</a>
        <a href="https://public.tableau.com/profile/na.zhang#!/vizhome/WorldwideEOR/ProjectDetails" target="_blank">Worldwide EOR Projects by Major Properties</a>
        <a href="https://public.tableau.com/profile/na.zhang#!/vizhome/WorldwideEOR/WorldwideEORRanges" target="_blank">Worldwide EOR Screening Criteria</a>
    </div>
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
      footerFixed: true
    }
  },
  methods: {
  }
}
</script>

<style scoped>
    .link_zone {
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
        margin-top: 200px;
    }
    .link_zone a{
        display: block;
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 20px;
        text-align: center;
        color: #205081;
        text-decoration: underline;
        font-weight: 700;
    }
</style>
