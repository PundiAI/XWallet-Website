<template>
  <section class="tokens">
    <div class="tokens-bg-img">
      <!-- <div class="tokens-bg"></div> -->
      <div class="tokens-main">
        <div class="desc">
          <h6 class="font-Nm">{{$t('overview.token.title')}}</h6>
          <p class="subtitle">{{$t('overview.token.subtitle')}}</p>
          <a :href="$t('overview.token.link')" target="_blank" class="learn-link-btn">{{$t('overview.token.linkBtn')}}</a>
        </div>

        <div :class="['img', {'img-anime': anime}]">
          <img src="@/assets/img/tokens/iPhone_Dark812_Staking@2x.png" alt="">
        </div>
      </div>
    </div>
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      anime: false,
    }
  },
  methods: {
    mountAnime () {
      window.sr.reveal('.img', {
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
  mounted() {
    this.mountAnime();
  }
}
</script>


<style lang="scss" scoped>
.tokens {
  padding-top: 92px;
  background-color: #fff;
}
.tokens-bg-img {
  position: relative;

  display: flex;
  align-items: center;
  padding: 10px 0;
  background: url('../../assets/img/tokens/homebackground2Orig.jpg') top left;
  background-size: cover;

  .tokens-bg {
    z-index: 0;
    position: absolute;
    top: 0%;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .tokens-main {
    z-index: 10;
    width: 650px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .desc {
    h6 {
      font-size: 40px;
      color: #fff;
      width: 340px;
      line-height: 53px;
      margin: 0;
    }
    .subtitle{
      margin-top: 10px;
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
      letter-spacing: 0;
    }
    
    .learn-link-btn {
      display: inline-block;
      font-size: 16px;
      color: #fff;
      text-decoration: underline;
      margin-top: 40px;

      &:hover{
        color: #f4cf00;
      }
    }
  }

  .img {
    width: 225px;
    transition: transform .3s;
    filter: drop-shadow(0 12px 24px rgba(0,0,0,0.20));

    img {
      width: 100%;
      display: block;
    }

    &.img-anime {
      transform: translateY(-74px);
    }
  }
}

@media (max-width: 768px){
  .tokens-bg-img {
    padding: 10px 20px;

    .tokens-main {
      flex-direction: column-reverse;
    }
    .desc {
      transform: translateY(-50px);
      text-align: center;
      h6 {
        width: initial;
        font-size: 34px;
        text-align: center;
      }

      .learn-link-btn {
        text-align: center;
      }
    }

    .img {
      width: 65%;
    }
  }
}
</style>
