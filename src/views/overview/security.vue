<template>
  <section class="security">
      <div class="security-con">
          <div class="security-bottom">
              <h2 class="font-Md">{{$t('overview.security.title')}}</h2>
              <p class="font-Lt">{{$t('overview.security.subTitle')}}</p>
          </div>
          <div class="security-top">
              <div class="security-img">
                <img src="../../assets/img/HomeChip@2x.jpg" alt="">
              </div>
              <img class="security-svg" src="../../assets/img/ShdowLight.svg" alt="">
          </div>
      </div>
  </section>
</template>

<script>
  export default {
    name: "security",
  }
</script>

<style lang="css" scoped>
.security {
    position: relative;
    background-color: #000;
    height: auto;
    overflow: hidden;
}
.security-con {
    max-width: 555px;
    position: relative;
    margin: auto;
    padding: 120px 0 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.security-bottom h2 {
    font-size: 40px;
    color: #ffffff;
    text-align: center;
    padding-bottom: 10px;
}
.security-bottom p {
    font-size: 16px;
    color: #ffffff;
    text-align: center;
    line-height: 30px;
}
.security-top {
    position: relative;
    max-width: 370px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
}
.security-top .security-img img {
    max-width: 241px;
    box-shadow: 0 5px 20px 0 rgba(0,0,0,0.50);
}
.security-top img:nth-of-type(2) {
    max-width: 451px;
}
.security-img {
   position: absolute;
   z-index: 9;
}

.security-svg {
   /* animation: mymove 2s linear infinite; */
    animation-name: mymove;
    animation-duration: 2s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes mymove {
    from {opacity: .3}
    to {opacity: 1}
}

@media (max-width: 750px){ 
    .security-con {
        padding: 60px 20px;
    }
    .security-top {
        width: 220px;
        transform: scale(.8);
    }

    .security-bottom h2 {
        font-size: 34px;
    }
 }
</style>