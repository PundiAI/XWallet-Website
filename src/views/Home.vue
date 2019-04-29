<template>
  <div class="home">
    <My-Nav></My-Nav>
    <my-sec-nav></my-sec-nav>
    <router-view/>
    <my-download></my-download>
    <my-foot></my-foot>
  </div>
</template>

<script>
  import MyNav from '../components/common/nav'
  import MySecNav from '../components/common/secNav'
  import MyFoot from '../components/common/foot'
  import MyDownload from '../components/common/download'
export default {
  name: 'home',
  components: {
    MyNav,
    MySecNav,
    MyFoot,
    MyDownload
  }
}
</script>


<style scoped>
  .home{
    /*height: 100%;*/
    position: relative;
  }
</style>
