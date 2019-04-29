<template>
  <section class="xwalletNew xwallet-con">
    <div class="content">
      <div class="context">
        <div class="title font-Md">{{$t('overview.xwalletNew.title')}}</div>
        <div class="note font-Lt">{{$t('overview.xwalletNew.subTitle')}}</div>
        <div class="btnBox">
          <button class="commonBtn" @click="scrollToBottom">{{$t('overview.xwalletNew.down')}}</button>
        </div>
      </div>
      <div class="phones">
        <div class="phoneCBox">
          <img src="../../assets/img/Mockup1@2x.png" alt="" class="phone">
        </div>
        <div class="phoneLBox phoneSmallBox" :class="{goLeft: anime}">
          <img src="../../assets/img/Mockup2@2x.png" alt="" class="phone">
        </div>
        <div class="phoneRBox phoneSmallBox" :class="{goRight: anime}">
          <img src="../../assets/img/Mockup3@2x.png" alt="" class="phone">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "xwalletNew",
    data () {
      return {
        imgNum: 0,
        imgElNum: 0,
        anime: false
      }
    },
    methods: {
      scrollToBottom () {
        this.$nextTick(() => {
          let scrollHeight = document.documentElement.scrollHeight||document.body.scrollHeight;
          window.scrollTo(0,scrollHeight)
        })
      },
      computImg () {
        this.imgNum += 1
        if (this.imgElNum === 0) {
          return false
        }
        if (this.imgNum === this.imgElNum) {
          this.mountAnime()
        }
      },
      mountAnime () {
        this.anime = true
      }
    },
    mounted () {
      let imgs = this.$el.getElementsByTagName('img')
      this.imgElNum = imgs.length
      for (let i = 0; i < imgs.length; i++) {
        let newImg = document.createElement('img')
        let src = imgs[i].src
        newImg.addEventListener('load', () => {
          this.computImg()
        })
        newImg.src = src
      }
    }
  }
</script>

<style scoped>
  .xwalletNew{
    width: 100%;
    background-color: #000;
  }
  .content{
    width: 100%;
    opacity: 0.94;
    background-image: linear-gradient(-180deg, rgb(18, 18, 18) 0%, #1E1E1E 100%);
    padding-top: 255px;
    overflow: hidden;
  }
  .context{
    text-align: center;
  }
  .title{
    font-size: 48px;
    color: #FFFFFF;
  }
  .note{
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    line-height: 30px;
    margin-top: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .btnBox{
    margin-top: 24px;
  }
  .phones{
    max-width: 870px;
    margin-top: 131px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    max-height: 548px;
    height: 62.34vw;
  }
  .phoneCBox{
    max-width: 375px;
    width: 45.18%;
    overflow: hidden;
    margin-left: auto;
    margin-right: auto;
    font-size: 0;
    position: relative;
    z-index: 10;
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.20))
  }
  .phone{
    width: 100%;
  }
  .phoneSmallBox{
    position: absolute;
    max-width: 319px;
    width: 38.43%;
    top: 11.13%;
    font-size: 0;
    opacity: 0;
    transition: all 0.5s;
  }
  .phoneLBox{
    left: 20%;
  }
  .phoneRBox{
    right: 20%;
  }
  .goLeft{
    left: 20px;
    opacity: 0.4;
  }
  .goRight{
    right: 20px;
    opacity: 0.4;
  }
  .commonBtn{
    background-color: #F8D506;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    width: 150px;
    height: 40px;
    font-size: 18px;
    color: #2A2A2A;
    text-align: center;
    line-height: 21px;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
  }
  .commonBtn:focus{
    outline: none;
  }
  .commonBtn:hover{
    transform: translateY(-2px);
    box-shadow: 0 6px 24px 0 rgba(248,213,6,0.5);
  }
  .commonBtn:active{
    transform: translateY(-1px);
    box-shadow: 0 4px 12px -2px rgba(201,172,4,0.8);
  }
  .commonBtn:disabled{
    background-color: #F5F5F5;
    color: rgba(0,0,0,0.25);
    border: 1px solid #D9D9D9;
    cursor: not-allowed;
    font-weight: normal;
  }
  .commonBtn:disabled:hover{
    transform: none;
    box-shadow: none;
  }
  @media screen and (max-width: 768px) {
    .content{
      padding-top: 175px;
    }
    .title{
      font-size: 34px;
    }
    .note{
      font-size: 16px;
    }
    .phones{
      margin-top: 65px;
    }
  }
</style>