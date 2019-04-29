<template>
  <section class="simpleTitle">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="note font-Lt">
      <slot name="note"></slot>
    </div>
  </section>
</template>

<script>
  export default {
    name: "simpleTitle"
  }
</script>

<style scoped>
  .simpleTitle{
    width: 100%;
    opacity: 0.94;
    background-image: linear-gradient(-180deg, #000000 0%, #1E1E1E 100%);
    padding-top: 175px;
    padding-bottom: 50px;
  }
  .title{
    font-size: 48px;
    color: #FFFFFF;
    text-align: center;
  }
  .note{
    margin-top: 16px;
    font-size: 20px;
    color: #FFFFFF;
    text-align: center;
    line-height: 30px;
  }
</style>