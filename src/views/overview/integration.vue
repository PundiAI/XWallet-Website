<template>
  <section class="intefration">
      <div class="intefration-con">
          <div class="intefration-left">
              <div class="intefration-left-content">
                  <h2 class="font-Md">{{$t('overview.integration.title')}}</h2>
                  <p class="font-Lt">{{$t('overview.integration.subTitle')}}</p>
              </div>
          </div>
          <div class="intefration-right">
              <div class="intefration-right-content">
                  <div class="img-box">
                      <img v-if="!bigImg" src="../../assets/img/iPhone_Dark812_Home@1x.png" alt="">
                      <img v-if="bigImg" src="/img/iPhone_Dark812_Home@2x.png" alt="">
                  </div>
                  <div class="info-box">
                     <p class="font-Md">{{$t('overview.integration.wallet.title')}}</p>
                     <ul>
                         <li class="font-Lt">
                             <!--<span></span>-->
                             <!--<span></span>-->
                             <span>{{$t('overview.integration.wallet.list1')}}</span>
                         </li>
                         <li class="font-Lt">
                             <!--<span></span>-->
                             <!--<span></span>-->
                             <span>{{$t('overview.integration.wallet.list2')}}</span>
                         </li>
                         <li class="font-Lt">
                             <!--<span></span>-->
                             <!--<span></span>-->
                             <span>{{$t('overview.integration.wallet.list3')}}</span>
                         </li>
                         <li class="font-Lt">
                             <!--<span></span>-->
                             <!--<span></span>-->
                             <span>{{$t('overview.integration.wallet.list4')}}</span>
                         </li>
                         <li class="font-Lt">
                             <!--<span></span>-->
                             <!--<span></span>-->
                             <span>{{$t('overview.integration.wallet.list5')}}</span>
                         </li>
                     </ul>
                     <div class="font-Lt note">{{$t('overview.integration.wallet.note')}}</div>
                  </div>
              </div>
          </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: "intefration",
    data () {
      return {
        bigImg: false
      }
    },
    methods: {
      loadBigImg () {
        let img = document.createElement('img')
        img.addEventListener('load', () => {
          this.bigImg = true
        })
        img.src = '/img/iPhone_Dark812_Home@2x.png'
      }
    },
    mounted () {
      let winW = document.documentElement.clientWidth
      if (winW > 768) {
        this.loadBigImg()
      }
    }
  }
</script>

<style lang="css" scoped>
.intefration {
    position: relative;
    background-color: #343432;
    overflow: hidden;
}
.intefration-con {
    max-width: 1200px;
    position: relative;
    margin: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    padding: 0 20px;
}
.intefration-left {
    padding-top: 20px;
    width: 912px;
    margin-left: auto;
    margin-right: auto;
}
.intefration-left-content{
    max-width: 390px;

}
.intefration-left h2 {
    font-size: 40px;
    color: #FFFFFF;
    padding-bottom: 10px;
}

.intefration-left p {
    font-size: 16px;
    color: #DDDDDD;
    line-height: 30px;
    padding-bottom: 35px;
}




.intefration-right {
    max-width: 912px;
    width: 100%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
}
.intefration-right-content{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}
.img-box{
    max-width: 375px;
    width: 100%;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.20));
    flex-shrink: 0.5;
    position: relative;
}
.img-box img{
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
}
.info-box{
    max-width: 450px;
    margin-left: 30px;
}

.intefration-right p{
    font-size: 24px;
    color: #FFFFFF;
    line-height: 33px;
    padding-bottom: 25px;
}
.intefration-right ul{
    padding-left: 20px;
    color: #DDDDDD;
}
.intefration-right ul li{
    position: relative;
    /*display: flex;*/
    /*justify-content: left;*/
    /*align-items: center;*/
    display: list-item;
    list-style: disc;
    padding-bottom: 25px;
    /*height: 70px;*/
}

/*.intefration-right ul li span:nth-of-type(1){*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*transform: rotate(-315deg);*/
    /*background: rgba(0,0,0,0.22);*/
    /*border-radius: 4px;*/
    /*display: inline-block;*/
    /*position: absolute;*/
    /*left: 0;*/
/*}*/
/*.intefration-right ul li span:nth-of-type(2) {*/
    /*position: absolute;*/
    /*font-size: 24px;*/
    /*color: #FFFFFF;*/
    /*width: 50px;*/
    /*height: 50px;*/
    /*line-height: 50px;*/
    /*display: inline-block;*/
    /*text-align: center;*/
    /*left: 0;*/
/*}*/
.intefration-right ul li span:nth-of-type(1){
    font-size: 16px;
    color: #DDDDDD;
    line-height: 30px;
    /*margin-left: 70px;*/
}
.note{
    font-size: 14px;
    color: #DDDDDD;
    line-height: 30px;
    padding-bottom: 35px;
}

@media (max-width: 768px){ 
    .intefration-con {
        padding-left: 20px;
        padding-right: 20px;
        justify-content: flex-start;
        align-items: center;
    }
    .intefration-left {
        width: auto;
        padding-top: 0px;
        padding-right: 0px;
        text-align: center;
    }

    .intefration-left img {
        max-width: 375px;
        width: 70%;
    }
    .intefration-left-content{
        max-width: 100%;
    }
    .intefration-right-content{
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    .img-box{
        width: 70%;
    }
    .img-box img{
        position: relative;
    }
    .info-box{
        margin-top: 30px;
        margin-left: 0;
    }
    .intefration {
        height: auto;
    }

    .intefration-right {
        /*padding-top: 60px;*/
        margin: 0 auto;
    }
    .intefration-left h2 {
        font-size: 34px;
    }
 }
</style>