<template>
  <section class="faq">
    <simple-title>
      <div slot="title">{{$t('faq.title')}}</div>
      <div slot="note">{{$t('faq.subTitle')}}</div>
    </simple-title>
    <div class="content">
      <div class="title">{{$t('faq.title')}}</div>
      <div class="collapse">
        <collapse-item v-for="(item, key) in faq" :ref="'item' + key" :key="key" :change="val => changeItem(val, 'item' + key)" :state="key === 0 ? true : false">
          <div slot="title">{{ item.title }}</div>
          <div slot="context" v-for="(child, index) in item.text" :key="index" :class="{note: child.search(/^\d/) !== -1}">{{ child }}</div>
        </collapse-item>
      </div>
      <div class="LinkBox">
        <a href="https://pundix.zendesk.com/hc/en-us" target="_blank" class="link">Didn’t find the answers to your questions? You can find more XWallet FAQs here.</a>
      </div>
    </div>
  </section>
</template>

<script>
  import SimpleTitle from '../../components/common/simpleTitle'
  import CollapseItem from '../../components/common/collapse-item'
  export default {
    name: "faq",
    data () {
      return {
        faq: this.$t('faq.faqArr'),
      }
    },
    components: {
      SimpleTitle,
      CollapseItem
    },
    methods: {
      changeItem (val, item) {
        if (val === 'open') {
          for (let key in this.faq) {
            if ('item' + key === item) {
              continue
            }
            let com = this.$refs[('item' + key)]
            com[0].close()
          }
        }
      }
    },
    mounted () {
    }
  }
</script>

<style scoped>
.faq{
  width: 100%;
}
  .content{
    max-width: 910px;
    margin-left: auto;
    margin-right: auto;
    padding: 100px 20px 20px;
  }
  .title{
    font-size: 24px;
    color: #111111;
    margin-left: 20px;
  }
  .collapse{
    margin-top: 10px;
  }
  .note{
    margin-left: 20px;
  }
.LinkBox{
  padding: 30px 20px 10px;
}
.link{
  color: #333333;
  text-decoration: underline;
}
</style>