<template>
  <footer class="footer">
    <div class="footer-con">

      <div class="link">
        <a href="mailto:contact@pundix.com" target="_blank"><img src="../../assets/img/footer/btn_contact_email.png" width="40"></a
        ><a href="https://web.facebook.com/pundixlabs/" target="_blank"><img src="../../assets/img/footer/icon_contact_fb.png" width="40"></a
      ><a href="https://twitter.com/PundiXLabs" target="_blank"><img src="../../assets/img/footer/icon_contact_twitter.png" width="40"></a
      ><a href="https://t.me/Pundix" target="_blank"><img src="../../assets/img/footer/icon_contact_telegram.png" width="40"></a
      ><a href="https://www.linkedin.com/company/13423325/" target="_blank"><img src="../../assets/img/footer/icon_contact_linkedin.png" width="40"></a
      ><a href="https://www.youtube.com/channel/UCOIf6WeLEzZi3DQxzenTZeA" target="_blank"><img src="../../assets/img/footer/icon_contact_youtube.png" width="40"></a>
      </div>

      <div class="copy">Copyright &copy; 2017 - 2019 Pundi X Labs Private Limited. All Rights Reserved.</div>
      <div class="trademark">
        <a href="https://pundix.com/disclaimer" class="routeLink normal">Disclaimer</a>
      </div>
      <div class="info-box">
        <p class="info">The Information provided herein is for general information only. It should not be taken as professional consulting advice from <span class="oneWorl">Pundi X</span> Labs Pte. Ltd (Isle of Man) and/or <span class="oneWorl">Pundi X</span> Labs Pte. Ltd (Singapore UEN No. 201731271H) or any affiliated <span class="oneWorl">Pundi X</span> entity (collectively referred to as “<span class="oneWorl">PUNDI X</span>”).</p>
        <p class="info">You should consider seeking independent legal, financial, taxation and/or other advice to confirm how participation in the activities of PUNDI X might relate to your unique circumstances.</p>
        <p class="info">Presently, the activities of PUNDI X are not regulated or licensed by the financial regulatory authorities of many jurisdictions, including the Monetary Authority of Singapore (“MAS”).</p>
        <p class="info">PUNDI X remains committed to complying with all relevant regulations in force that relate to our activities.</p>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    name: 'foot',
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .footer{
    background-color: #f4f4f4;
    text-align: center;
    position: relative;
  }
  .footer:after{
    position: absolute;
    z-index: 1;
    left: 0px;
    top: 0px;
    content: '';
    background-color: #d7d7d7;
    height: 1px;
    right:0px;
    -webkit-transform: scaleY(.5);
    -webkit-transform-origin:0 bottom;
  }
  .footer-con{
    padding: 70px 0px;
    max-width: 960px;
    margin: auto;
  }
  .link a{
    display: inline-block;
    padding: 0px 1rem;
  }
  .link a img{
    opacity: .7;
    -webkit-transition:all .5s;
    -moz-transition:all .5s;
    -o-transition:all .5s;
    transition:all .5s;
    transform: scale(.95);
  }
  .link a:hover img{
    opacity: 1;
    transform: scale(1.1);
  }
  .copy{
    color: #858585;
    font-size: 14px;
    padding-top: 20px;
    width: 100%;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
  }
  .trademark{
    margin-top: 50px;
    padding-top: 40px;
    max-width: 620px;
    border-top: 1px solid #E8E8E8;
    margin-left: auto;
    margin-right: auto;
  }
  .routeLink{
    margin-left: 10px;
    margin-right: 10px;
    color: #ddd;
    font-size: 12px;
  }
  .routeLink.normal{
    color: #333333;
    font-size: 14px;
  }
  .normal:hover{
    text-decoration: underline;
  }
  ul{
    display: table;
    text-align: center;
    padding: 40px 0px;
  }
  ul li{
    display: inline-block;
    width: 16.6666%;
    padding-bottom: 30px;
  }
  h2{
    font-size: 1.17rem;
  }

  .footer-noline{
    cursor: auto;
  }

  .info-box{
    width: 100%;
    margin-top: 15px;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
  }
  .info{
    font-size: 12px;
    color: #aaaaaa;
  }
  .info+.info{
    margin-top: 10px;
  }
  .oneWorl{
    display: inline-block;
  }

  @media (max-width: 768px){

    ul li{
      width: 50%
    }
    .link a{
      padding: 0px .3rem;
    }
    .link a img{
      width: 30px;
    }
    .copy{
      font-size: 12px;
    }

  }

  @media screen and (max-width: 414px){
    .info-box{
      text-align: left;
    }
  }

  @media screen and (max-width: 321px){
    .info-box{
      padding-left: 40px;
      padding-right: 40px;
    }
  }
</style>