// pages/profile/index.js
const app = getApp()

Page({
  data: {
    userInfo: null,
    activeNames: []
  },
  onShow(e) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
  },
  handleUserInfoClick(e) {
    if (!this.data.userInfo)
      wx.navigateTo({
        url: '/pages/login/index',
      })
  },
  handleMyBookClick(e) {
    app.globalData._tabPage.book = 0
    wx.switchTab({
      url: '/pages/book/index',
    })
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  toPage(e) {
    wx.navigateTo({
      url: '/pages/book-save/index',
    })
  }
})