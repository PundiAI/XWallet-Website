<template>
  <section class="overview">
    <xwallet-new></xwallet-new>
    <!--<xwallet></xwallet>-->
    <ubiquitous></ubiquitous>
    <intefration></intefration>
    <payments></payments>
    <tokens/>
    <convert/>
    <security></security>
  </section>
</template>

<script>
// import xwallet from '../../views/overview/xwallet'
import intefration from '../../views/overview/integration'
import payments from '../../views/overview/payments'
import security from '../../views/overview/security'
import ubiquitous from '../../views/overview/ubiquitous'
import XwalletNew from "./xwalletNew";
import convert from './convert'
import Tokens from './tokens.vue'
  export default {
    name: "overview",
    components: {
      XwalletNew,
      intefration,
      payments,
      security,
      convert,
      ubiquitous,
      Tokens
    }
  }
</script>

<style scoped>
.overview{
  /* opacity: 0.94; */
  /* background-image: linear-gradient(-180deg, #000000 0%, #1E1E1E 100%); */
}
</style>