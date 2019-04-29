<template>
  <section class="ubiquitous" >
      <div class="ubiquitous-con" :style="styleObject" ref="ubiquitous" :class="[{bigBack: bigBack}, {PhoneBigBack, PhoneBigBack}]"></div>
      <div style="height: 600px;position: relative;z-index: -1;"></div>
      <div class="ubiquitousBg">
          <div class="backgroundBottom">
        <div class="ubiquitous-text">
            <img src="../../assets/img/TitleIcon.svg" alt="">
            <h2>{{$t('overview.ubiquitous.title')}}</h2>
            <p class="font-Lt">{{$t('overview.ubiquitous.subTitle')}}</p>
        </div>
      </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: "ubiquitous",
    data () {
        return {
            styleObject: {
                backgroundPosition: '50% 0'
            },
            bigBack: false,
            PhoneBigBack: false
        }
    },
    computed: {

    },
    methods: {
      handleScroll () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let winW = document.documentElement.clientWidth
        let xwalletHeight = window.document.getElementsByClassName('xwallet-con')[0].clientHeight
        if (winW > 768) {
          this.styleObject.backgroundPosition = '50% ' + Math.round((xwalletHeight - scrollTop) * .2) + 'px'
        } else {
          this.$set(this.styleObject, 'backgroundPosition', 'center 0')
        }
      },
      loadBigImg () {
        let img = document.createElement('img')
        img.addEventListener('load', () => {
          this.bigBack = true
        })
        img.src = '/img/homebackgroundOrig.jpg'
      },
      loadPhoneBigImg () {
        let img = document.createElement('img')
        img.addEventListener('load', () => {
          this.PhoneBigBack = true
        })
        img.src = '/img/homebackgroundOrigWAP.jpg'
      }
    },
    mounted () {
      let winW = document.documentElement.clientWidth
      if (winW < 768) {
        this.$set(this.styleObject, 'backgroundPosition', 'center 0')
        this.loadPhoneBigImg()
      } else {
        this.$set(this.styleObject, 'backgroundPosition', '50% 838px')
        this.loadBigImg()
      }
        this.handleScroll()
        window.addEventListener('scroll',this.handleScroll,true);
    },
    beforeDestroy () {
      window.removeEventListener('scroll',this.handleScroll,true);
    }
  }
</script>

<style lang="css" scoped>
.ubiquitousBg {
    width: 100%;
    background-color: #343432;
}
.ubiquitous {
    position: relative;
    /* background-color: #343432; */
    height: auto;
    overflow: hidden;
}
.ubiquitous-con {
    /* height: 600px; */
    margin: auto;
    /* background-attachment: fixed; */
    background-position: 50% 0;
    background-repeat: no-repeat; 
    background-size: cover;
    overflow: hidden;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
}

.backgroundBottom {
    max-width: 1005px;
    height: 193px;
    position: relative;
    margin: 0 auto;
}

.ubiquitous-text {
    position: absolute;
    background: #FFFFFF;
    box-shadow: 0 20px 30px 15px rgba(0,0,0,0.10);
    border-radius: 5px;
    width: 430px;
    height: auto;
    z-index: 9;
    bottom: 0;
    right: 0;
    padding: 62px 30px 76px;
}

.ubiquitous-text h2{
    font-size: 40px;
    color: #111111;
    padding-bottom: 20px;
}

.ubiquitous-text p{
    font-size: 16px;
    color: #333333;
    line-height: 30px;
}

.ubiquitous-text img {
    position: absolute;
    width: 101px;
    top: -50px;
    left: 20px;
}
.ubiquitous-con.bigBack{
  background-image: url('/img/homebackgroundOrig.jpg');
}
.ubiquitous-con.PhoneBigBack{
  background-image: url('/img/homebackgroundOrigWAP.jpg');

}
@media (max-width: 1040px){
    .backgroundBottom {
      margin-right: 20px;
    }
}
@media (min-width: 769px){
  .ubiquitous-con {
    background-image: url('../../assets/img/homebackground.jpg');
  }
}

@media (max-width: 768px){
   .backgroundBottom {
        height: auto;
        width: auto;
        padding: 0 20px 60px;
        margin-right: 0px;
        margin-bottom: -200px;
        /* position: absolute;
        top: 0; */
   }
   .ubiquitous-text {
       position: relative;
       width: auto;
     top: -200px;
   }
   .ubiquitous-text h2{
     font-size: 34px;
   }

    .ubiquitous-con {
         /*display: none;*/
      background-position: center;
      background-image: url('../../assets/img/homebackground768.jpg');
      background-attachment: local;
      height: 600px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: -1;
    }

 }
</style>