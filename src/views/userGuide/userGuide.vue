<template>
  <section class="userGuide">
    <simple-title>
      <div slot="title">{{$t('userGuide.title')}}</div>
      <div slot="note">{{$t('userGuide.subTitle')}}</div>
    </simple-title>
    <!-- 1 -->
    <div class="content">
      <div class="infoBox infoBoxPaddTop">
         <div class="info">
          <div class="infoTitle">{{$t('userGuide.sect1.title')}}</div>
          <p class="infoCollapse font-Lt">
            {{$t('userGuide.sect1.desc')}}
          </p>
        </div>
        <div class="infoImgBox">
          <img src="../../assets/img/userGuide/pic_xwallet_01@2x.jpg" alt="" class="infoImg">
          <p class="dsfjdhfjhTitle">{{$t('userGuide.sect1.imgAlt')}}</p>
        </div>
      </div>
    </div>
    <!-- 2 -->
    <div class="content">
      <div class="infoBox twoImg">
        <div class="info">
          <div class="infoTitle">{{$t('userGuide.sect2.title')}}</div>
          <!-- <p class="infoCollapse font-Lt">
            Click “Scan” on the user homepage and scan the Collection QR code belonging to the merchant, enter the corresponding USDT amount (1 USDT=1 USD), and choose a card and the correct coin which has sufficient balance.
          </p> -->
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect2.li1')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect2.li2')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect2.li3')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect2.li4')}}</p>
        </div>
        <div class="infoImgBoxDiv">
          <div class="infoImgBox">
            <img src="../../assets/img/userGuide/pic_xwallet_02@2x.jpg" alt="" class="infoImg">
            <p class="dsfjdhfjhTitle">{{$t('userGuide.sect2.imgAlt1')}}</p>
          </div>
          <div class="infoImgBox">
            <img src="../../assets/img/userGuide/pic_xwallet_03@2x.jpg" alt="" class="infoImg">
            <p class="dsfjdhfjhTitle">{{$t('userGuide.sect2.imgAlt2')}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 3 -->
    <div class="contentBg">
      <div class="content">
        <div class="infoBox">
          <div class="info">
            <div class="infoTitle">{{$t('userGuide.sect3.title')}}</div>
            <!-- <p class="infoCollapse font-Lt">
              Click "Pay" on the user homepage. Show the user’s Payment QR code to the merchant so that he/she can scan the code to complete the transaction.The merchant will set the collection method according to the cryptocurrency you choose on your Payment code page. If the balance is insufficient, you will need to pay in other type of coins.
            </p> -->
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect3.li1')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect3.li2')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect3.li3')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect3.li4')}}</p>
          </div>
          <div class="infoImgBox">
            <img src="../../assets/img/userGuide/pic_xwallet_04@2x.jpg" alt="" class="infoImg">
            <p class="dsfjdhfjhTitle">{{$t('userGuide.sect3.imgAlt')}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 4 -->
    <div class="contentBg">
      <div class="content">
        <div class="infoBox twoImg">
          <div class="info">
            <div class="infoTitle">{{$t('userGuide.sect4.title')}}</div>
            <p class="infoCollapse listTtem listTtemleft font-Lt">
              {{$t('userGuide.sect4.li1')}}
            </p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">
              {{$t('userGuide.sect4.li2')}}
            </p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">
              {{$t('userGuide.sect4.li3')}}
            </p>
          </div>
           <div class="infoImgBoxDiv">
            <div class="infoImgBox">
              <img src="../../assets/img/userGuide/pic_xwallet_05@2x.jpg" alt="" class="infoImg">
              <p class="dsfjdhfjhTitle">{{$t('userGuide.sect4.imgAlt1')}}</p>
            </div>
            <div class="infoImgBox">
              <img src="../../assets/img/userGuide/pic_xwallet_06@2x.jpg" alt="" class="infoImg">
              <p class="dsfjdhfjhTitle">{{$t('userGuide.sect4.imgAlt2')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 5 -->
    <div class="content">
      <div class="infoBox twoImg">
         <div class="info">
          <div class="infoTitle">{{$t('userGuide.sect5.title')}}</div>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect5.li1')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect5.li2')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect5.li3')}}</p>
        </div>
         <div class="infoImgBoxDiv">
            <div class="infoImgBox">
              <img src="../../assets/img/userGuide/pic_xwallet_07@2x.jpg" alt="" class="infoImg">
              <p class="dsfjdhfjhTitle">{{$t('userGuide.sect5.imgAlt1')}}</p>
            </div>
            <div class="infoImgBox">
              <img src="../../assets/img/userGuide/pic_xwallet_08@2x.jpg" alt="" class="infoImg">
              <p class="dsfjdhfjhTitle">{{$t('userGuide.sect5.imgAlt2')}}</p>
            </div>
          </div>
      </div>
    </div>
    <!-- 6 -->
    <div class="content">
      <div class="infoBox">
        <div class="info">
          <div class="infoTitle">{{$t('userGuide.sect6.title')}}</div>
          <!-- <p class="infoCollapse font-Lt">Tap “Transfer” on the homepage, choose a coin for payment, enter an address of the payee and the transfer amount, and then confirm the transfer. After transfer, wait for the confirmation on the blockchain network to ensure that the payment is through.</p>
          <p class="infoCollapse font-Lt">Note: please do enter a valid address without any mistakes during transfer. Crypto cannot be retrieved once the transaction is done due to the immutability of blockchain transactions.</p> -->
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect6.li1')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect6.li2')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect6.li3')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect6.li4')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect6.li5')}} </p>
          <br/>
          <p class="infoCollapse listTtemPadd listTtemleft font-Lt">{{$t('userGuide.sect6.note')}}</p>
        </div>
        <div class="infoImgBoxDiv">
          <div class="infoImgBox">
            <img src="../../assets/img/userGuide/pic_xwallet_09@2x.jpg" alt="" class="infoImg">
            <p class="dsfjdhfjhTitle">{{$t('userGuide.sect6.imgAlt')}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 7 -->
    <div class="contentBg">
      <div class="content">
        <div class="infoBox twoImg">
          <div class="info">
            <div class="infoTitle">{{$t('userGuide.sect7.title')}}</div>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect7.li1')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect7.li2')}}</p>
            <p class="infoCollapse listTtem  listTtemleft font-Lt">{{$t('userGuide.sect7.li3')}}</p>
          </div>
          <div class="infoImgBoxDiv">
              <div class="infoImgBox">
                <img src="../../assets/img/userGuide/pic_xwallet_10@2x.jpg" alt="" class="infoImg">
                <p class="dsfjdhfjhTitle">{{$t('userGuide.sect7.imgAlt1')}}</p>
              </div>
              <div class="infoImgBox">
                <img src="../../assets/img/userGuide/pic_xwallet_11@2x.jpg" alt="" class="infoImg">
                <p class="dsfjdhfjhTitle">{{$t('userGuide.sect7.imgAlt2')}}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    <!-- 8 -->
    <div class="contentBg">
      <div class="content">
        <div class="infoBox">
          <div class="info">
            <div class="infoTitle">{{$t('userGuide.sect8.title')}}</div>
            <p class="infoCollapse font-Lt">{{$t('userGuide.sect8.desc')}}</p>
          </div>
          <div class="infoImgBoxDiv">
            <div class="infoImgBox">
              <img src="../../assets/img/userGuide/pic_xwallet_12@2x.jpg" alt="" class="infoImg">
              <p class="dsfjdhfjhTitle">{{$t('userGuide.sect8.imgAlt')}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 9 -->
    <div class="content">
      <div class="infoBox">
         <div class="info">
          <div class="infoTitle">{{$t('userGuide.sect9.title')}}</div>
          <!-- <p class="infoCollapse font-Lt">
            Bonus in BTC, ETH, NPXS and other cryptocurrencies can be withdrawn only if the bonus amount reaches the designated withdrawal limit. Withdrawal of bonus in BTC, ETH, NPXS or other cryptocurrencies will be automatically transferred to the Virtual Card account.
          </p> -->
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect9.li1')}}</p>
          <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect9.li2')}}</p>
        </div>
        <div class="infoImgBox">
          <img src="../../assets/img/userGuide/pic_xwallet_13@2x.jpg" alt="" class="infoImg">
          <p class="dsfjdhfjhTitle">{{$t('userGuide.sect9.imgAlt')}}</p>
        </div>
      </div>
    </div>
    <!-- 10 -->
    <div class="content">
      <div class="infoBox twoImg">
        <div class="info">
          <div class="infoTitle">{{$t('userGuide.sect10.title')}}</div>
          <p class="infoCollapse font-Lt">{{$t('userGuide.sect10.desc')}}</p>
        </div>
        <div class="infoImgBoxDiv">
          <div class="infoImgBox">
            <img src="../../assets/img/userGuide/pic_xwallet_14@2x.jpg" alt="" class="infoImg">
            <p class="dsfjdhfjhTitle">{{$t('userGuide.sect10.imgAlt1')}}</p>
          </div>
          <div class="infoImgBox">
            <img src="../../assets/img/userGuide/pic_xwallet_15@2x.jpg" alt="" class="infoImg">
            <p class="dsfjdhfjhTitle">{{$t('userGuide.sect10.imgAlt2')}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 11 -->
    <div class="contentBg">
      <div class="content">
        <div class="infoBox twoImg">
          <div class="info">
            <div class="infoTitle">{{$t('userGuide.sect11.title')}}</div>
            <!-- <p class="infoCollapse font-Lt">Go to “Me” on the homepage, and then go to “Settings” - “Security” and click “Change login password” or “Change payment password”. Passwords can also be retrieved if forgotten.</p> -->
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect11.li1')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect11.li2')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect11.li3')}}</p>
            <p class="infoCollapse listTtem listTtemleft font-Lt">{{$t('userGuide.sect11.li4')}}</p>
          </div>
          <div class="infoImgBoxDiv">
              <div class="infoImgBox">
                <img src="../../assets/img/userGuide/pic_xwallet_16@2x.jpg" alt="" class="infoImg">
                <p class="dsfjdhfjhTitle">{{$t('userGuide.sect11.imgAlt1')}}</p>
              </div>
              <div class="infoImgBox">
                <img src="../../assets/img/userGuide/pic_xwallet_17@2x.jpg" alt="" class="infoImg">
                <p class="dsfjdhfjhTitle">{{$t('userGuide.sect11.imgAlt2')}}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 12 -->
    <div class="contentBg">
      <div class="content">
        <div class="infoBox twoImg infoBoxPaddBottom">
          <div class="info">
            <div class="infoTitle">{{$t('userGuide.sect12.title')}}</div>
            <p class="infoCollapse font-Lt">{{$t('userGuide.sect12.email')}}</p>
            <!-- <p class="infoCollapse font-Lt">{{$t('userGuide.sect12.tg')}} <a class="infoCollapse font-Lt" href="https://t.me/XWallet_Support">https://t.me/XWallet_Support</a></p> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import SimpleTitle from '../../components/common/simpleTitle'
  export default {
    name: "userGuide",
    data () {
      return {
        userGuide: []
      }
    },
    components: {
      SimpleTitle,
    },
    methods: {

    },
    mounted () {

    }
  }
</script>

<style scoped>
  .userGuide{
    width: 100%;
  }
  .content{
    max-width: 1000px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
  }
  .contentBg{
    background: #F6F6F6;
  }
  .infoBox{
    border-radius: 5px;
    padding: 64px 0px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
  }
  .infoImgBoxDiv {
    position: relative;
    display: flex;
  }
  .infoImgBox{
    max-width: 177px;
    font-size: 0;
    position: relative;
    /* margin-right: 24px; */
  }
  .infoImgBoxDiv > .infoImgBox:nth-child(2) {
    margin-right: auto;
  }
  .infoImg{
    display: inline-block;
    width: 100%;
    position: relative;
  }
  .info{
    width: 506px;
    flex-shrink: 2;
    position: relative;
    padding-right: 190px;
  }
  .twoImg > .info{
    padding-right: 100px;
  }
  .infoTitle{
    font-size: 20px;
    color: #161502;
    line-height: 29px;
    padding-bottom: 16px;
  }
  .infoCollapse{
    font-size: 16px;
    color: #161502;
    line-height: 30px;
  }
  .listTtem {
    display: list-item;
  }
  .listTtemTitle {
    position: relative;
    left: -20px;
  }
  .listTtemleft {
    position: relative;
    left: 20px;
  }
  .infoBoxPaddTop {
    padding-top: 128px;
  }
  .infoBoxPaddBottom {
    padding-bottom: 128px;
  }
  .dsfjdhfjhTitle {
    opacity: 0.6;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    .infoBox{
      flex-direction: column;
      overflow: visible;
    }
    .info {
      margin-left: 0;
      max-width: 530px;
      width: 100%;
      padding-bottom: 30px;
      padding-right: 0px;
    }
    .infoImgBoxDiv{
      width: 90%;
      margin-right: auto;
      margin-left: auto;
    }
    .infoImgBox{
      width: 70%;
      margin-right: auto;
      margin-left: auto;
    }
    .contentBg > .content > .infoBox > .info {
      margin-left: 0;
      max-width: 530px;
      width: 100%;
    }
    .listTtemTitle {
      left: 0;
    }
    .listTtem {
      position: relative;
      left: 20px;
      padding-right: 20px;
    }
    .twoImg > .info {
      padding-right: 0px;
    }
    .twoImg > .infoImgBoxDiv > .infoImgBox{
      padding-right: 24px;
    }
    .twoImg > .infoImgBoxDiv > .infoImgBox:nth-child(2) {
      padding-right: 0px;
    }
  }
</style>