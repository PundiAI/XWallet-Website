<template>
  <div class="item">
    <div class="title" @click="handleOItext" :class="{gray: iconStatus}">
      <div class="tText">
        <slot name="title"></slot>
      </div>
      <div class="tIcon">
        <img src="../../assets/img/collapse/QAarrowdown.svg" alt="" class="tIconImg" :class="{tIconDown: iconStatus}">
      </div>
    </div>
    <div class="content" ref="content" :class="[{none: none}, {hide: hide}]" :style="[contentStyle]" v-on:transitionend="handleOver">
      <div class="context font-Lt">
        <slot name="context"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "collapseItem",
    data () {
      return {
        none: true,
        hide: false,
        showStatus: false,
        contentStyle: {},
        iconStatus: true
      }
    },
    props: {
      change: Function,
      state: Boolean
    },
    methods: {
      handleOItext () {
        if (!this.showStatus) {
          this.open()
        } else {
          this.close()
        }
      },
      open () {
        this.change('open')
        this.iconStatus = false
        this.hide = true
        this.none = false
        this.$nextTick(() => {
          let h = this.$refs.content.scrollHeight
          this.contentStyle = {
            height: h + 'px'
          }
        })
      },
      close () {
        this.change('close')
        this.iconStatus = true
        this.$nextTick(() => {
          this.contentStyle = {
            overflow: 'hidden',
            height: 0 + 'px'
          }
        })
      },
      handleOver () {
        if (!this.showStatus) {
          this.showStatus = true
          this.hide = false
        } else {
          this.showStatus = false
          this.contentStyle = {}
          this.none = true
        }
      }
    },
    mounted () {
      if (this.state) {
        this.change('open')
        this.iconStatus = false
        this.hide = true
        this.none = false
        this.contentStyle = {
          transition: 'none'
        }
        this.$nextTick(() => {
          let h = this.$refs.content.scrollHeight
          this.contentStyle = {
            transition: 'none',
            height: h + 'px'
          }
          this.showStatus = true
          this.hide = false
        })
      }
    }
  }
</script>

<style scoped>
  .item{
    width: 100%;
  }
  .item+.item{
    margin-top: 1px;
  }
  .title{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 46px;
    padding-left: 20px;
    padding-right: 20px;
    transition: background-color 0.3s ease-out;
    cursor: pointer;
  }
  .gray{
    background-color: rgba(0,9,19,0.05);
  }
  .tText{
    font-size: 16px;
    color: #333333;
    line-height: 26px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .tIcon{
    font-size: 0;
    width: 24px;
    height: 24px;
    flex-shrink: 0;
    margin-left: 10px;
    margin-top: 17px;
  }
  .tIconImg{
    width: 100%;
    transition: transform 0.3s;
  }
  .tIconDown{
    transform: rotateZ(-90deg);
  }
  .content{
    transition: height 0.3s;
  }
  .context{
    padding: 4px 20px 30px;
    font-size: 16px;
    color: #333333;
    line-height: 30px;
  }
  .cText{
  }
  .none{
    display: none;
  }
  .hide{
    overflow: hidden;
    height: 0;
  }
</style>