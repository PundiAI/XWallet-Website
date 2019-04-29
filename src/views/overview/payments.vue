
<template>
  <section class="payments">
      <div class="payments-con">
          <div class="payments-top">
              <!-- <img src="../../assets/img/iPhone_Light812_Code@2x.png" alt="">
              <img src="../../assets/img/xpass1@2x.png" alt="" :class="{rotateKa: anime}" class="p-payments-card"> -->
              <div class="img-1">
                <img src="../../assets/img/iPhone_Light812_Code@2x.png" alt="">
              </div>
              <div :class="['img-2', 'p-payments-card', {rotateKa: anime}]">
                <img src="../../assets/img/xpass1@2x.png" alt="">
              </div>
          </div>
          <div class="payments-bottom">
              <h2 class="font-Md">{{$t('overview.payments.title')}}</h2>
              <p class="font-Lt">{{$t('overview.payments.subTitle')}}</p>
          </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: "payments",
    data () {
      return {
        imgNum: 0,
        imgElNum: 0,
        anime: false
      }
    },
    methods: {
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
        window.sr.reveal('.p-payments-card', {
          viewFactor: .3,
          scale: 1,
          duration: 0,
          origin: 'left',
          distance: '0',
          easing: 'ease-in',
          opacity: 1,
          delay: 1,
          afterReveal: () => {
            this.anime = true
          },
        })
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

<style lang="scss" scoped>
.payments-top{
  div {
    display: inline-block;
    position: relative;

    img {
      display: block;
    }
  }
  div::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .img-1 {
    &::before {
      width: 223px;
      height: 457px;
      box-shadow: 0 11px 32px 0 rgba(0, 0, 0, 0.2);
      border-radius: 6px;
    }

    img {
      max-width: 225px;
      filter: drop-shadow(0 8px 20px transparent);
    }
  }

  .img-2 {
    bottom: -10px;
    left: -64px;
    transform: rotate(0deg);
    transform-origin: right bottom;
    transition: all .3s;
    &::before {
      width: 178px;
      height: 279px;
      box-shadow: 0 5px 30px 0 rgba(0,0,0,0.40);
      border-radius: 15px;
    }

    img {
      max-width: 181px;
    }
  }
}

@media (max-width: 490px){
  .payments-top {
    .img-1 {
      width: 50%;

      &::before {
        max-width: 225px;
        width: calc(100% - 2px);
        height: calc(100% - 20px);
        left: 0;
        transform: translate(0, -50%);
      }
    }

    .img-2 {
      width: 40%;
      left: -14%;
      &::before {
        left: 0;
        transform: translate(1%, -50%);
        height: calc(100% - 8px);
        max-width: 179px;
        width: calc(100% - 2px);
      }
    }
    img {
      width: 100%;
    }
  }
}
</style>


<style lang="css" scoped>
.payments {
    position: relative;
    background-color: #FFFFFF;
    height: auto;
    overflow: hidden;
}
.payments-con {
    max-width: 715px;
    position: relative;
    margin: auto;
    padding: 150px 0 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.payments-bottom h2 {
    font-size: 40px;
    color: #111111;
    text-align: center;
    padding-bottom: 10px;
}
.payments-bottom p {
    font-size: 16px;
    color: #333333;
    text-align: center;
    line-height: 30px;
}
.payments-top {
    position: relative;
    text-align: center;
    padding-bottom: 50px;
}

.rotateKa {
    transform: rotate(16deg)!important;
}

@media (max-width: 768px){ 
    .payments-con {
        padding: 60px 20px;
    }
    .payments-bottom h2 {
        font-size: 34px;
    }

 }
</style>