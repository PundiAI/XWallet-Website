import Vue from 'vue'

const fun = {
  imgLoad: function (callback, el) {
    let imgs = el.getElementsByTagName('img')
    let imgElNum = imgs.length
    let imgNum = 0
    for (let i = 0; i < imgs.length; i++) {
      let src = imgs[i].src
      imgs[i].src = ''
      imgs[i].addEventListener('load', () => {
        imgNum += 1
        if (imgElNum === 0) {
          return false
        }
        if (imgNum === imgElNum) {
          callback()
          return true
        }
        return false
      })
      imgs[i].src = src
    }
  }
}

export default () => {
  Vue.prototype.$fun = fun
}
