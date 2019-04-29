<template>
  <section class="convert">
    <div class="content">
      <div class="pic-box">
        <div class="pic">
          <div class="pic-img-box">
            <img src="../../assets/img/convert/converting@2x.png" alt="" class="pic-img">
          </div>
          <div class="pic-light-box p-convert-light" :class="[{'anime': anime}]">
            <div class="pic-light small"></div>
            <div class="pic-light normal"></div>
            <div class="pic-light big"></div>
          </div>
        </div>
      </div>
      <div class="context">
        <h3 class="title font-Nm">{{ this.$t('overview.convert.title') }}</h3>
        <h4 class="subtitle font-Lt">{{ this.$t('overview.convert.subtitle') }}</h4>
        <div class="learn">
          <a :href="this.$t('overview.convert.link')" target="_blank" class="link">{{ this.$t('overview.convert.linkBtn') }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import imgLoaded from '../../assets/js/mixin/imgLoaded'

  export default {
    name: "convert",
    data () {
      return {
        anime: false
      }
    },
    mixins: [imgLoaded],
    methods: {
      commonMountAnime() {
        window.sr.reveal('.p-convert-light', {
          viewOffset: {
            bottom: 200
          },
          scale: 1,
          duration: 0,
          opacity: 1,
          origin: 'bottom',
          distance: '0',
          easing: 'ease-out',
          afterReveal: () => {
            this.anime = true
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .convert{
    width: 100%;
    overflow: hidden;
    background-color: #1E1E1E;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.28) 0px, transparent 40px);
    padding-top: 80px;
    padding-bottom: 86px;
  }
  .content{
    max-width: 1040px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
  }
  .pic-box{
    width: 595px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .pic{
    position: relative;
    z-index: 5;
    max-width: 320px;
    width: 73.56%;
    margin-right: 19.32%;
  }
  .pic-img-box{
    width: 100%;
  }
  .pic-img{
    width: 100%;
    display: block;
    filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.2));
  }
  .pic-light-box{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
  }
  .p-convert-light{
    visibility: hidden;
  }
  .pic-light{
    position: absolute;
    margin: auto;
    border-radius: 50%;
    opacity: 0;
  }
  .small{
    width: 16.875%;
    height: 22.77%;
    background-color: rgba(255,255,255,0.06);
    filter: blur(4px);
    transition: 0.6s ease-in-out;
  }
  .normal{
    width: 43.125%;
    height: 58.17%;
    background-color: rgba(255,255,255,0.11);
    filter: blur(2px);
    transition: 0.9s ease-in-out;
  }
  .big{
    width: 72.5%;
    height: 97.79%;
    background-color: rgba(255,255,255,0.04);
    transition: 1.2s ease-in-out;
  }
  .anime{
    .small{
      transform: translate(-279.63%, -203.70%);
      opacity: 1;
    }
    .normal{
      transform: translate(-128.99%, -36.23%);
      opacity: 1;
    }
    .big{
      transform: translate(40.52%, 49.57%);
      opacity: 1;
    }
  }
  .context{
    width: 405px;
    flex-shrink: 0;
  }
  .title{
    font-size: 40px;
    color: #FFFFFF;
    line-height: 53px;
  }
  .subtitle{
    margin-top: 10px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.5);
    letter-spacing: 0;
  }
  .learn{
    margin-top: 40px;
  }
  .link{
    font-size: 16px;
    color: #FFFFFF;
    text-decoration: underline;

    &:hover{
      color: #f4cf00;
    }
  }
  @media screen and (max-width: 768px){
    .pic-box{
      justify-content: center;
      width: 100%;
    }
    .pic{
      margin-right: 0;
    }
    .convert{
      padding-bottom: 64px;
    }
    .content{
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }
    .context{
      margin-top: 20px;
      width: 100%;
      text-align: center;
    }
    .title{
      font-size: 34px;
      color: #FFFFFF;
      line-height: 53px;
    }
  }
</style>