<template>
  <nav class="nav"
       :class="warning === 'show' ? 'nav-warning' : ''">


    <!--Warning-->
    <section class="mywarning" v-if="warning === 'show'">

    </section>



    <div class="header-main">
      <div class="logo"><a :href="menu[0].path" class="logoLink"><img src="../../assets/img/nav/logo.png" alt="" width="115"></a></div>

      <div class="bar" @click="barClick">
        <span :style="barCls.top"></span>
        <span :style="barCls.bottom"></span>
      </div>

      <ul class="menu" :style="routerCls">
        <li v-for="(m, key) in menu" :key="key">
          <a :href="m.path" exact v-if="m.target !== '_blank'" :class="{'nuxt-link-active': m.name === 'XWallet'}">{{ m.name }}</a>
          <a :href="m.path" target="_blank" v-else >{{ m.name }}</a>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
  export default {
    data () {
      return {
        warning: "hide",
        menu: [
          { "name": "Home", "path": "https://pundix.com/"  },
          { "name": "XPOS", "path": "https://pundix.com/product"  },
          { "name": "XWallet", "path": "/"},
          { "name": "NPXS", "path": "https://pundix.com/npxs"  },
          { "name": "Function X", "path": "https://functionx.io/"  },
          { "name": "Blog", "path": "https://blog.pundix.com", "target": "_blank" },
          { "name": "Press", "path": "https://pundix.com/press"},
          { "name": "FAQ", "path": "https://pundix.com/faq"},
          { "name": "About", "path": "https://pundix.com/about"},
          { "name": "Partnerships", "path": "https://pundix.com/partnerships"},
          { "name": "Join Us", "path": "https://pundix.com/join"}
        ],
        routerTemp: false,
        routerCls: '',
        barCls: {
          top: '',
          bottom: ''
        },
        show: false
      }
    },
    methods: {
      more () {
        this.show = true
      },
      moreTo () {
        this.show = false
      },
      path (url) {
        return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
      },
      routerPath () {
        this.barCls.top = ''
        this.barCls.bottom = ''
        this.routerCls = ''
      },
      barClick () {
        if (this.routerCls) {
          this.barCls.top = ''
          this.barCls.bottom = ''
          this.routerCls = ''
          return
        }
        this.routerCls = 'transform: translate3d(0, 0, 0);opacity: 1;transition:all .3s;'
        this.barCls.top = 'transform: rotate(45deg);'
        this.barCls.bottom = 'transform: rotate(-45deg);margin-top: -1px;'
      }
    },
    watch: {
      '$route': 'routerPath'
    }
  }
</script>

<style>
  .more{
    color: #ffea00;
    cursor: pointer;
  }
  .more:hover{
    text-decoration: underline;
  }
  .nav{
    position: relative;
    /*left: 0px;*/
    /*right: 0px;*/
    /*top: 0px;*/
    z-index: 999;
  }
  /*.nav ~ .main .box{*/
  /*padding-top: 136px;*/
  /*}*/
  /*.nav-warning ~ .main .box{*/
  /*padding-top: 196px;*/
  /*}*/
  /*.nav-warning ~ .main .cover{*/
  /*padding-top: 196px;*/
  /*}*/
  .mywarning{
    position: relative;
    background-color: #f4d549;
    overflow: hidden;
    box-shadow: 0px 1px 20px rgba(0,0,0,.2);
    z-index: 30;
    /*padding: 10px 0px 5px 0px;*/
  }
  .warning-main{
    display: table;
    max-width: 1024px;
    margin: auto;
    height: 100%;
    /*text-transform: uppercase;*/
    font-size: .9rem;
    color: #1e1e1e;
  }
  .warning-main >div{
    display: table-cell;
    vertical-align: middle;
    text-align: left;
  }
  .warning-main >div p{
    padding-bottom: 5px;
  }
  .warning-main .left,
  .warning-main .right{
    padding: 0px 20px;
    text-align: center;
  }
  .warning-main a{
    color: #1e1e1e;
    text-decoration: underline;
    line-height: 1rem;
  }
  .warning-main a:hover{
    color: #0675b5;
  }
  .warning-w{
    background-color: #e63800;
  }
  .warning-w .warning-main{
    color: #ffffff;
  }
  .warning-w .warning-main a{
    color: #ffffff;
  }
  .warning-w .warning-main .right{
    min-width: 60px;
  }

  .header-main{
    max-width: 1200px;
    margin: auto;
    padding: 20px 20px 0px 20px;
    position: absolute;
    left: 0;
    right: 0;
  }
  .logo{
    float: left;
    font-size: 0;
  }
  .logoLink{
    display: inline-block;
    font-size: 0;
  }
  .menu{
    float: right;
  }
  .menu li+li{
    margin-left: 26px;
    transition: margin .2s ease;
  }
  .menu li{
    position: relative;
    float: left;
  }
  .menu a,
  .lang{
    color: #ffffff;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    /*padding: 0px 15px;*/
    height: 45px;
    font-size: .9rem;
    cursor: pointer;
    -webkit-transition:all .3s;
    -moz-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
    position: relative;
  }
  .lang{
    padding-right: 0px;
  }
  .lang >img{
    padding-bottom: 6px;
    margin-left: 3px;
    transform: rotate(-90deg);
    -webkit-transition:all .3s;
    -moz-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
  }
  .menu a:hover,
  .menu a.nuxt-link-active{
    color: #f4cf00;
  }
  .lang-list{
    position: absolute;
    top: 100%;
    right: 0px;
    height: 0px;
    overflow: hidden;
    -webkit-transition:all .3s;
    -moz-transition:all .3s;
    -o-transition:all .3s;
    transition:all .3s;
  }
  .lang-list a{
    height: 30px;
    justify-content: flex-end;
  }
  .lang:hover >img{
    transform: rotate(0deg);
    padding-bottom: 3px;
  }
  .lang:hover .lang-list{
    height: auto;
  }

  /**
    Mobile
  **/
  @media (max-width: 940px) {
    .menu li+li{
      margin-left: 16px;
    }
  }
  @media (max-width: 840px) {
    .menu li + li {
      margin-left: 10px;
    }
  }
  @media (max-width: 768px) {
    .mywarning{
      height: auto;
      /*padding: 5px 0px;*/
    }
    .warning-main{
      font-size: .7rem;
      line-height: .7rem;
    }
    .logo{
      position: relative;
      z-index: 20;
    }
    .logo >img{
      width: 80px;
    }
    .header-main{
      padding-top: 10px;
      height: 45px;
    }
    .menu{
      position: absolute;
      left: 0px;
      top: 0px;
      right: 0px;
      background-color: #1e1e1e;
      z-index: 10;
      padding-top: 45px;
      padding-bottom: 30px;
      opacity: 0;
      transform: translate3d(0, -100%, 0);
    }
    .menu li{
      display: block;
      float: none;
      height: auto;
    }
    .menu li+li{
      margin-left: 0;
    }
    .menu a,
    .lang{
      height: 40px;
      line-height: 40px;
      font-size: 1rem;
    }
    .lang{
      height: auto;
      padding: 0px;
    }
    .lang >span,
    .lang >img{
      display: none;
    }
    .lang-list{
      position: relative;
      left: auto;
      top: auto;
      right: auto;
      height: auto;
      width: 100%;
      margin: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(255,255,255,.1);
    }
    .lang-list a{
      display: inline-block;
      padding: 0px;
      width: 33.3333%;
      height: 35px;
      text-align: center;
    }
    .bar{
      float: right;
      position: relative;
      padding: 15px 0px 5px 10px;
      width: 22px;
      height: 10px;
      z-index: 20;
    }
    .bar >span {
      display: block;
      width: 22px;
      height: 1px;
      background-color: #ffffff;
      border-radius: 1px;
      -webkit-transition:all .5s;
      -moz-transition:all .5s;
      -o-transition:all .5s;
      transition:all .5s;
    }
    .bar >span:last-child{
      margin-top: 8px;
    }
    .warning-w .warning-main .center{
      padding-right: 15px;
    }
    /*.nav-warning ~ .main .cover{*/
    /*padding-top: 180px;*/
    /*}*/
  }
  @media screen and (max-width: 370px){
    .logo-i18n{
      flex-direction: column;
    }
    .i18n-lang-label{
      margin-left: 0!important;
    }
  }

</style>