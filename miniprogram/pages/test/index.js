// pages/test/index.js
const {
  getClassMateCode
} = require('../../api/index')

Page({
  data: {
    imgUrl: ''
  },
  onDownloadMiniCode(e) {
    console.log(e)
    getClassMateCode().then(res => {
      console.log(res)
      const imgUrl = 'data:image/png;base64,' + wx.arrayBufferToBase64(res.result.buffer.data)
      this.setData({
        imgUrl
      })
    }).catch(err => {
      console.log(err)
    })
  }
})