<template>
  <section class="howToUse">
    <simple-title>
      <div slot="title">{{$t('howToUse.title')}}</div>
      <div slot="note">{{$t('howToUse.subTitle')}}</div>
    </simple-title>
    <div class="content">
      <div class="infoBox">
        <div class="infoImgBox" :class="{hover: hover[0]}" @mouseover="test(0)" @mouseout="out(0)">
          <!--<img v-if="!bigImg" src="../../assets/img/iPhone_Dark812_Home@1x.png" alt="" class="infoImg" :class="{hide: !phoneState}" @transitionend="phoneOver">-->
          <!--<img v-if="bigImg" src="/img/iPhone_Dark812_Home@2x.png" alt="" class="infoImg" :class="{hide: !phoneState}" @transitionend="phoneOver">-->
          <!--<div class="glass p-howToUse-glass" :class="[{glassChange: anime}, {glassBigImg: bigImg}]" @webkitAnimationEnd="glassOver"></div>-->
          <!--<img v-if="!bigImg" src="../../assets/img/iPhone_Light812_Balance@1x.png" alt="" class="infoImgTow" :class="{hide: phoneState}" @transitionend="otherPhoneOver">-->
          <!--<img v-if="bigImg" src="/img/iPhone_Light812_Balance@2x.png" alt="" class="infoImgTow" :class="{hide: phoneState}" @transitionend="otherPhoneOver">-->
          <img v-if="!bigImg" src="../../assets/img/iPhone_Dark812_Capture1@1x.png" alt="img" class="infoImg step1">
          <img v-if="bigImg" src="/img/iPhone_Dark812_Capture1@2x.png" alt="img" class="infoImg step1">
          <img v-if="!bigImg" src="../../assets/img/iPhone_Dark812_Capture2@1x.png" alt="img" class="infoImgTow step2">
          <img v-if="bigImg" src="/img/iPhone_Dark812_Capture2@2x.png" alt="img" class="infoImgTow step2">
          <img v-if="!bigImg" src="../../assets/img/iPhone_Dark812_Capture4@1x.png" alt="img" class="infoImgTow step3">
          <img v-if="bigImg" src="/img/iPhone_Dark812_Capture4@2x.png" alt="img" class="infoImgTow step3">
        </div>
        <div class="info" @mouseover="test(0)" @mouseout="out(0)">
          <div class="infoTitle">{{$t('howToUse.sect1.title')}}</div>
          <div class="infoCollapse">
            <collapse-item v-for="(item, key) in htu" :ref="'item' + key" :key="key" :change="val => changeItem(val, 'item' + key)" :state="key === 0 ? true : false">
              <div slot="title">{{ item.title }}</div>
              <div class="note" slot="context" v-for="(child, index) in item.text" :key="index">{{ child }}</div>
            </collapse-item>
          </div>
          <div class="back"></div>
        </div>
      </div>
      <div class="infoBox flip">
        <div class="infoImgBox" :class="{hover: hover[1]}" @mouseover="test(1)" @mouseout="out(1)">
          <img v-if="!bigImg" src="../../assets/img/iPhone_Dark812_Capture3@1x.png" alt="" class="infoImg">
          <img v-if="bigImg" src="/img/iPhone_Dark812_Capture3@2x.png" alt="" class="infoImg">
        </div>
        <div class="info" @mouseover="test(1)" @mouseout="out(1)">
          <div class="infoTitle">{{$t('howToUse.sect2.title')}}</div>
          <div class="infoCollapse">
            <div class="infoText font-Lt">{{$t('howToUse.sect2.li1')}}</div>
            <div class="infoText font-Lt">{{$t('howToUse.sect2.li2')}}</div>
            <div class="infoText font-Lt">{{$t('howToUse.sect2.li3')}}</div>
            <div class="infoText font-Lt">{{$t('howToUse.sect2.li4')}}</div>
          </div>
          <div class="back"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SimpleTitle from '../../components/common/simpleTitle'
  import CollapseItem from '../../components/common/collapse-item'
  export default {
    name: "howToUse",
    data () {
      return {
        htu: [
          {
            title: this.$t('howToUse.sect1.htuArr1.title') /* 'Transferring your digital assets to the XWallet', */,
            text: [
              this.$t('howToUse.sect1.htuArr1.li1') /* '1. Tap on the "Card" and select the virtual card.', */,
              this.$t('howToUse.sect1.htuArr1.li2') /* '2. Select the type of currency you want to top up.', */,
              this.$t('howToUse.sect1.htuArr1.li3') /* '3. Tap the “Receive” icon and select “View address”.', */,
              this.$t('howToUse.sect1.htuArr1.li4') /* '4. Copy the top-up address or scan the QR code.', */,
              this.$t('howToUse.sect1.htuArr1.li5') /* '5. On your other wallet, choose the correct type of cryptocurrency and insert the XWallet top-up address to make the transfer.' */,
            ]
          },{
            title: this.$t('howToUse.sect1.htuArr2.title') /* 'Transferring tokens from your XPASS card to the XWallet', */,
            text: [
              this.$t('howToUse.sect1.htuArr2.li1') /* '1. Add your XPASS card to the XWallet app.', */,
              this.$t('howToUse.sect1.htuArr2.li2') /* '2. Tap on your XPASS card that you want to transfer the tokens from.', */,
              this.$t('howToUse.sect1.htuArr2.li3') /* '3. Choose the type of currency you want to transfer to the XWallet.', */,
              this.$t('howToUse.sect1.htuArr2.li4') /* '4. Tap the ‘...’ icon on the upper right hand side and choose ‘Internal transfer’.', */,
              this.$t('howToUse.sect1.htuArr2.li5') /* '5. Select the XPASS card you want to transfer the tokens from.', */,
              this.$t('howToUse.sect1.htuArr2.li6') /* '6. Enter the amount of tokens and click the ‘confirm’ button.' */,
            ]
          }
        ],
        hover: [
          false,
          false
        ],
        imgNum: 0,
        imgElNum: 0,
        anime: false,
        phoneState: true,
        state: 0,
        bigImg: false,
        bigImgList: [
          "iPhone_Dark812_Home@2x.png",
          "iPhone_Light812_Balance@2x.png"
        ],
        bigImgFinshNum: 0
      }
    },
    components: {
      SimpleTitle,
      CollapseItem
    },
    methods: {
      glassOver () {
        if (this.state === 0) {
          this.phoneState = false
          this.anime = false
          this.state = 1
        }
      },
      otherPhoneOver () {
        if (!this.phoneState && this.state === 1) {
          setTimeout(() => {
            this.phoneState = true
            this.state = 2
          }, 2000)
        }
      },
      phoneOver () {
        if (this.phoneState && this.state === 2) {
          setTimeout(() => {
            this.anime = true
            this.state = 0
          }, 1500)
        }
      },
      changeItem (val, item) {
        if (val === 'open') {
          for (let key in this.htu) {
            if ('item' + key === item) {
              continue
            }
            let com = this.$refs[('item' + key)]
            com[0].close()
          }
        }
      },
      test (key) {
        this.$set(this.hover, key, true)
      },
      out (key) {
        this.$set(this.hover, key, false)
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
        window.sr.reveal('.p-howToUse-glass', {
          scale: 1,
          duration: 0,
          origin: 'left',
          distance: '0',
          easing: 'ease-in',
          delay: 1,
          afterReveal: () => {
            this.anime = true
            this.changeBigImg()
          }
        })
      },
      isCompleteLoadBigImg () {
        this.bigImgFinshNum += 1
        if (this.bigImgFinshNum === this.bigImgList.length) {
          this.bigImg = true
        }
      },
      changeBigImg () {
        if (document.documentElement.clientWidth > 768) {
          let afterUrl = '/img/'
          for (let item of this.bigImgList) {
            let img = document.createElement('img')
            img.addEventListener('load', () => {
              this.isCompleteLoadBigImg()
            })
            img.src = afterUrl + item
          }
        }
      }
    },
    mounted () {
      window.scrollTo(0,0)
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

<style scoped>
  .howToUse{
    width: 100%;
  }
  .content{
    max-width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .infoBox{
    border-radius: 5px;
    padding: 100px 65px 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
  }
  .infoBox.flip{
    flex-direction: row-reverse;
    padding: 80px 65px 90px;
    margin-top: -70px;
    margin-bottom: -90px;
  }
  .infoImgBox{
    max-width: 236px;
    font-size: 0;
    position: relative;
    margin-left: 20px;
    z-index: 10;
    transition: transform 0.3s;
  }
  .infoBox.flip .infoImgBox{
    padding-left: 0;
    padding-right: 20px;
  }
  .infoImg{
    display: inline-block;
    width: 100%;
    /*filter: drop-shadow(0 5px 30px rgba(0,0,0,0.20));*/
    /*transition: all 0.3s;*/
    opacity: 1;
    visibility: visible;
    position: relative;
  }
  .infoImgBox::before{
    content: '';
    box-shadow: 0 5px 30px 0 rgba(0,0,0,0.20);
    border-radius: 22px;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    transition: all 0.3s;
  }
  .infoBox.flip .infoImgBox::before{
    right: 20px;
  }
  .glass{
    position: absolute;
    top: 45%;
    width: 63.56%;
    height: 29.35%;
    border-radius: 100%;
    background-image: url("../../assets/img/iPhone_Dark812_Home@1x.png");
    background-repeat: no-repeat;
    background-size: 200%;
    background-position: 8% 60%;
    transition: all 0.5s;
    border: 2px solid #CCC;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
  }
  .glassBigImg{
    background-image: url("/img/iPhone_Dark812_Home@2x.png")!important;
  }
  .glassChange{
    animation: glassUpDown 6s linear forwards;
  }
  .infoImgTow{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    /*filter: drop-shadow(0 5px 30px rgba(0,0,0,0.20));*/
    opacity: 0;
    visibility: hidden;
    /*transition: all 0.7s;*/
  }
  @keyframes glassUpDown {
    0%{
      opacity: 0;
      visibility: hidden;
      top: 45%;
      background-position: 8% 60%;
    }
    9%{
      opacity: 1;
      visibility: visible;
      top: 45%;
      background-position: 8% 60%;
    }
    18%{
      opacity: 1;
      visibility: visible;
      top: 45%;
      background-position: 8% 60%;
    }
    27%{
      opacity: 1;
      visibility: visible;
      top: 30%;
      background-position: 8% 40%;
    }
    45%{
      opacity: 1;
      visibility: visible;
      top: 30%;
      background-position: 8% 40%;
    }
    54%{
      opacity: 1;
      visibility: visible;
      top: 45%;
      background-position: 8% 60%;
    }
    63%{
      opacity: 1;
      visibility: visible;
      top: 45%;
      background-position: 8% 60%;
    }
    72%{
      opacity: 0;
      visibility: hidden;
      top: 45%;
      background-position: 8% 60%;
    }
    100%{
      opacity: 0;
      visibility: hidden;
      top: 45%;
      background-position: 8% 60%;
    }
  }
  .infoImgBox:hover::before,.infoImgBox.hover::before{
    /*filter: drop-shadow(0 10px 40px rgba(0,0,0,0.30));*/
    box-shadow: 0 10px 40px rgba(0,0,0,0.30);
  }
  .infoImgBox:hover,.infoImgBox.hover{
    transform: translateY(-10px);
  }
  .info{
    width: 530px;
    margin-left: 20px;
    flex-shrink: 2;
    position: relative;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .infoBox.flip .info{
    margin-left: 0;
    margin-right: 20px;
  }
  .infoTitle{
    font-size: 24px;
    color: #111111;
    margin-left: 20px;
    position: relative;
    z-index: 10;
  }
  .infoCollapse{
    margin-top: 10px;
    position: relative;
    z-index: 10;
  }
  .infoBox.flip .infoCollapse{
    margin-top: 12px;
  }
  .back{
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1000px;
    right: -65px;
    background-color: #F4F4F4;
    z-index: 1;
  }
  .infoBox.flip .back{
    left: -65px;
    right: -1000px;

  }
  .note{
    /*text-indent: 2em;*/
    margin-left: 20px;
  }
  .infoText{
    font-size: 16px;
    color: #333333;
    line-height: 30px;
    margin-left: 20px;
  }
  .hide{
    opacity: 0;
    visibility: hidden;
  }
  .step1{
    animation: showHideImg1 15s infinite;
  }
  .step2{
    animation: showHideImg2 15s infinite;
  }
  .step3{
    animation: showHideImg3 15s infinite;
  }
  @keyframes showHideImg1 {
    0%{
      opacity: 1;
      visibility: visible;
    }
    28%{
      opacity: 1;
      visibility: visible;
    }
    33%{
      opacity: 0;
      visibility: hidden;
    }
    95%{
      opacity: 0;
      visibility: hidden;
    }
    100%{
      opacity: 1;
      visibility: visible;
    }
  }
  @keyframes showHideImg2 {
    0%{
      opacity: 0;
      visibility: hidden;
    }
    28%{
      opacity: 0;
      visibility: hidden;
    }
    33%{
      opacity: 1;
      visibility: visible;
    }
    61%{
      opacity: 1;
      visibility: visible;
    }
    66%{
      opacity: 0;
      visibility: hidden;
    }
    100%{
      opacity: 0;
      visibility: hidden;
    }
  }
  @keyframes showHideImg3 {
    0%{
      opacity: 0;
      visibility: hidden;
    }
    61%{
      opacity: 0;
      visibility: hidden;
    }
    66%{
      opacity: 1;
      visibility: visible;
    }
    95%{
      opacity: 1;
      visibility: visible;
    }
    100%{
      opacity: 0;
      visibility: hidden;
    }
  }
  @media screen and (max-width: 768px) {
    .infoBox{
      flex-direction: column-reverse;
      background-color: #F4F4F4;
      padding: 0 10px 30px;
      margin-top: 50px;
      overflow: visible;
    }
    .infoBox.flip{
      flex-direction: column-reverse;
      margin-top: 30px;
      padding: 0 10px 30px;
      margin-bottom: 0;
    }
    .info{
      margin-left: 0;
      max-width: 530px;
      width: 100%;
      padding-bottom: 30px;
      padding-top: 30px;
    }
    .infoBox.flip .info{
      margin-right: 0;
    }
    .back{
      display: none;
    }
    .infoImgBox{
      padding-left: 0;
      margin-left: 0;
      width: 70%;
    }
    .infoBox.flip .infoImgBox{
      padding-right: 0;
    }
    .infoImgBox:hover .infoImg,.infoImgBox.hover .infoImg{
      filter: drop-shadow(0 5px 30px rgba(0,0,0,0.20));
      transform: none;
    }
    .note{
    }
  }
</style>