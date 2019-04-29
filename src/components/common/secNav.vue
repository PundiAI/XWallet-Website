<template>
  <section class="secNav">
    <div class="navbox">
      <div class="nav">
        <div class="logo-i18n">
          <div class="logo">{{ $t('nav.xwallet') /* XWallet */}}</div>
          <!-- <ul class="i18n-lang-list">
            <li v-for="list in langList" :key="list.iso" :class="{active: list.iso === lang}" @click="changeLang(list.iso)">{{list.name}}</li>
          </ul> -->
          <div class="i18n-lang-label">
            <label v-for="list in langList" :key="list.iso">
              <input type="radio" name="lang" :value="list.iso" v-model="$i18n.locale" hidden> 
              <span>{{list.name}}</span>
            </label>
          </div>
        </div>
        <ul class="links">
          <li class="link" :class="[{active: routeName === 'Overview'}]"><router-link class="router" :to="'/'">{{ $t('nav.overview') /* Overview */}}</router-link></li>
          <li class="link" :class="[{active: routeName === 'HowToUse'}]"><router-link class="router" :to="'/howtouse'">{{ $t('nav.howToUse') /* How to use */}}</router-link></li>
          <li class="link" :class="[{active: routeName === 'UserGuide'}]"><router-link class="router" :to="'/userguide'">{{ $t('nav.userGuide') /* User Guide */}}</router-link></li>
          <li class="link" :class="[{active: routeName === 'MerchantOperation'}]"><router-link class="router" :to="'/merchantoperation'">{{ $t('nav.merchantGuide') /* Merchant Guide */}}</router-link></li>
          <li class="link" :class="[{active: routeName === 'FAQ'}]"><router-link class="router" :to="'/faq'">{{ $t('nav.faq') /* FAQ */}}</router-link></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "secNav",
    data () {
      return {
        routeName: '',
        langList: [{
          iso: 'en',
          name: this.$t('lang.en')
        }, {
          iso: 'ko',
          name: this.$t('lang.ko')
        }, {
          iso: 'es',
          name: this.$t('lang.sp')
        }]
      }
    },
    methods: {
      routerPath () {
        this.routeName = this.$route.name
      },
      changeLang(val) {
        sessionStorage.setItem('lang', val);
        window.location.reload();
      }
    },
    watch: {
      '$route': 'routerPath',
      '$i18n.locale': 'changeLang'
    },
    mounted () {
      this.routerPath()
    }
  }
</script>

<style lang="scss" scoped>
.logo-i18n{
  display: flex;
}
.i18n-lang-label {
  color: #999999;
  display: flex;
  align-items: center;
  margin-left: 32px;
  
  label {
    & + label {
      margin-left: 16px;
    }

    input[type="radio"]:checked + span {
      position: relative;
      color: rgba(255, 255, 255, 1);
    
      &::before {
        background-color: #fff;
      }
    }

    span{
      font-size: 16px;
      cursor: pointer;
      transition: color 0.2s;

      &:hover {
        color: rgba(255, 255, 255, 1);
      }

      &::before {
        content: '';
        width: 5px;
        height: 5px;
        border-radius: 100%;
        background-color: transparent;
        display: inline-block;
        vertical-align: middle;
        margin-right: 8px;
      }
    }
  }
}
</style>


<style scoped>
  .secNav{
    width: 100%;
    position: absolute;
    top: 87px;
    z-index: 10;
  }
  .navbox{
    height: 38px;
    max-width: 1200px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  .nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #404040;
  }
  .logo{
    font-size: 24px;
    color: rgba(255,255,255,0.87);
    text-align: left;
    line-height: 32px;
  }
  .links{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .link{
  }
  .link+.link{
    margin-left: 24px;
  }
  .router{
    font-size: 14px;
    color: #999999;
  }
  .link.active .router{
    color: #FFFFFF;
  }
  @media screen and (max-width: 1100px){
    .nav {
      display: block;
      padding-bottom: 7px;
    }
    .navbox{
      padding-left: 20px;
      padding-right: 20px;
    }
    .logo{
      font-size: 18px;
      display: block;
      /* width: 100%; */
    }
    .links {
      display: block;
    }
    .link {
      display: inline-block;
    }
    .router{
      font-size: 12px;
      color: #999999;
    }
    .link+.link{
      margin-left: 0px;
      margin-right: 12px;
    }
    .link:not(first-child){
      margin-right: 12px;
    }
  }
  @media screen and (max-width: 768px){
    .secNav{
      top: 50px;
    }
  }
</style>