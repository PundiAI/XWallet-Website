<template>
  <section class="download">
    <div class="content">
      <div class="android">
        <div class="xwalletbox">
          <div class="xwalletLogoBox">
            <img src="../../assets/img/footer/logo54.svg" alt="logo" class="xwalletLogo">
          </div>
          <div class="xwalletInfo">
            <div class="xwalletTop">
              <div class="app">APPLICATION</div>
              <div class="new">NEW!</div>
              <router-link class="how" to="/howtouse">How to use?</router-link>
            </div>
            <div class="xwalletBottom">XWallet</div>
          </div>
        </div>
      </div>
      <div class="line"></div>
      <div class="appBox">
        <div class="androidLogoBox">
          <a href="https://play.google.com/store/apps/details?id=com.pundix.xwallet" target="_blank" class="androidLogoLink">
            <img src="../../assets/img/footer/GooglePlay.svg" alt="logo" class="androidLogo">
          </a>
        </div>
        <div class="ios">
          <div class="appStoreLogoBox">
            <a href="https://itunes.apple.com/tt/app/xwallet-by-pundi-x/id1321754661" target="_blank" class="androidLogoLink">
              <img src="../../assets/img/footer/AppStore.svg" alt="logo" class="appStoreLogo">
            </a>
          </div>
          <!--<div class="iosInfo">-->
            <!--<a href="itms-services://?action=download-manifest&amp;url=https://download.pundix.com/xwallet/app/ios/XWallet.plist" target="_blank" class="iosInfoText" title="Once the latest iOS XWallet app is downloaded, in order to use the app for staking, please go to “settings” -> “profiles & device management” -> enable “Pundi X Labs”">For staking, please download the latest iOS XWallet here</a>-->
          <!--</div>-->
          <!--<div class="appStoreInfo">-->
            <!--<div class="appStoreForIos">XWallet for iOS</div>-->
            <!--<div class="appStoreComing">COMING SOON</div>-->
          <!--</div>-->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "download"
  }
</script>

<style scoped>
  .download{
    width: 100%;
    background-color: #fff;
  }
  .content{
    padding: 80px 20px 70px;
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    height: 75px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .android{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xwalletbox{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .xwalletLogoBox{
    width: 54px;
    height: 54px;
    font-size: 0;
  }
  .xwalletLogo{
    width: 100%;
  }
  .xwalletInfo{
    margin-left: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .xwalletTop{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .app{
    font-size: 12px;
    color: #999999;
  }
  .new{
    font-size: 12px;
    color: #000000;
    background-color: #F6D30C;
    border-radius: 4px;
    padding: 2px 6px;
    margin-left: 7px;
  }
  .how{
    font-size: 14px;
    color: #1E1E1E;
    text-decoration: underline;
    margin-left: 7px;
  }
  .xwalletBottom{
    font-size: 24px;
    color: #111111;
  }
  .androidLogoBox{
    height: 40px;
    font-size: 0;
  }
  .androidLogoLink{
    display: inline-block;
    font-size: 0;
    height: 100%;
  }
  .androidLogo{
    height: 100%;
  }
  .line{
    height: 100%;
    border-left: 1px dashed #AAAAAA;
  }
  .appBox{
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  .ios{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .iosInfo{
    position: absolute;
    top: 50px;
    left: 40px;
    width: 180px;
    font-size: 12px;
  }
  .iosInfoText{
    color: #111111;
  }
  .iosInfoText:hover{
    text-decoration: underline;
  }
  .appStoreLogoBox{
    font-size: 0;
    margin-left: 40px;
    height: 40px;
  }
  .appStoreLogo{
    height: 100%;
  }
  .appStoreInfo{
    margin-left: 13px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .appStoreForIos{
    font-size: 12px;
    color: #999999;
  }
  .appStoreComing{
    font-size: 12px;
    color: #B7B7B7;
    padding: 2px 7px;
    background-color: #DFDFDF;
    border-radius: 4px;
    margin-top: 3px;
  }
  @media screen and (max-width: 768px) {
    .download{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content{
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      height: auto;
      width: auto;
    }
    .line{
      display: none;
    }
    .android{
      flex-direction: column;
      align-items: flex-start;
    }
    .androidLogoBox{
      margin-left: 0;
      margin-top: 30px;
    }
    .xwalletbox{
      height: 54px;
    }
    .ios{
      margin-top: 30px;
    }
    .iosInfo{
      width: 120px;
    }
  }
</style>