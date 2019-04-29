<template>
<div class="xwalletBg">
  <section class="xwallet" ref="$refs.chatcontheight">
      <div class="xwallet-con">
          <div class="xwallet-bottom">
              <h2 class="font-Md">XWallet by Pundi X</h2>
              <p class="font-Lt">Digital payments made easy on your mobile devices</p>
              <button class="commonBtn" @click="scrollToBottom">Download</button>
          </div>
          <div class="xwallet-top">
            <div class="xwallet-bgImg">
                <div class="xwallet-bgImg-left" :class="{goLeft: anime}">
                    <img src="../../assets/img/iPhone_Light812_Code@2x.png" alt="">
                </div>
                <div class="xwallet-bgImgZ">
                    <img src="../../../public/img/iPhone_Dark812_Home@2x.png" alt="">
                </div>
                <div class="xwallet-bgImg-right" :class="{goRight: anime}">
                    <img src="../../assets/img/iPhone_Light812_Record@2x.png" alt="">
                </div>
            </div>  
            
          </div>
      </div>
  </section>
  </div>
</template>

<script>
  export default {
    name: "xwallet",
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
        let src = imgs[i].src
        imgs[i].src = ''
        imgs[i].addEventListener('load', () => {
          this.computImg()
        })
        imgs[i].src = src
      }
    }
  }
</script>

<style lang="css" scoped>
.xwalletBg {
    background: #000000;
}
.xwallet {
    position: relative;
    opacity: 0.94;
    background-image: linear-gradient(-180deg, rgb(18, 18, 18) 0%, #1E1E1E 100%);
    height: auto;
    overflow: hidden;
}
.xwallet-con {
    height: 838px;
    position: relative;
    margin: auto;
    padding: 225px 0 0;
    display: flex;
    flex-direction: column;
}
.xwallet-bottom  {
    text-align: center;
    padding-bottom: 131px;
}
.xwallet-bottom h2 {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
    padding-bottom: 16px;
}
.xwallet-bottom p {
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 30px;
    padding-bottom: 24px;
}
.xwallet-top {
    position: relative;
    margin: 0 auto;
    max-width: 830px;
    height: 100%;
    top: 60px;
}

.xwallet-bgImg {
    width: 830px;
    position: relative;
    height: 100%;
    /* display: flex;
    justify-content: space-between; */
}

.xwallet-bgImgZ {
    position: absolute;
    text-align: center;
    width: 100%;
    z-index: 9;
    top: -60px;
}

.xwallet-bgImg-left img, .xwallet-bgImg-right img{
    max-width: 319px;
    opacity: 0.4;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.20));
}

.xwallet-bgImg-left {
    position: absolute;
    width: 100%;
    text-align: left;
    transition: all 0.3s ease-out 0.3s;
    opacity: 0;
    transform: translateX(20%);
}

.xwallet-bgImg-right {
    position: absolute;
    width: 100%;
    text-align: right;
    transition: all 0.3s ease-out 0.3s;
    opacity: 0;
    transform: translateX(-20%);
}

.xwallet-bgImgZ img {
    max-width: 375px;
    opacity: 1;
    filter: drop-shadow(0 20px 40px rgba(0,0,0,0.20));
}
.goLeft{
    transform: translateY(0);
    opacity: 1;
}
.goRight{
    transform: translateY(0);
    opacity: 1;
}

.commonBtn{
  background-color: #F8D506;
  border-radius: 100px;
  width: 150px;
  height: 40px;
  font-size: 18px;
  color: #2A2A2A;
  text-align: center;
  line-height: 21px;
  border: none;
  cursor: pointer;
  transition: transform,box-shadow 0.2s;
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
@media (max-width: 768px){ 
    .xwallet-con {
        padding-left: 20px;
        padding-right: 20px;
        height: 557px;
        padding-top: 175px;
    }

    .xwallet-bgImg {
        width: 100%;
    }

    .xwallet-bgImg img{
        width: 50%;
    }

    .xwallet-bottom  {
        padding-bottom: 60px;
    }

    .xwallet-bottom h2 {
        font-size: 34px;
    }

    .xwallet-top {
        width: 100%;
    }

    .xwallet-bgImgZ {
        top: -7%;
    }
 }

@media (max-width: 330px){
    .xwallet-bottom h2 {
        font-size: 26px;
    }
}

</style>