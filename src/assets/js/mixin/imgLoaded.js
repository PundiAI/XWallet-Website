const imgLoaded = {
  mounted () {
    this.$fun.imgLoad(() => {
      this.commonMountAnime()
    }, this.$el)
  }
}

export default imgLoaded
