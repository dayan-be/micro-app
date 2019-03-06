//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://www.huaweicloud.com/content/dam/cloudbu-site/archive/china/zh-cn/home/statics/images/homepage-_banner-sale-bg.jpg?t=201902250926',
      'https://www.huaweicloud.com/content/dam/cloudbu-site/archive/china/zh-cn/home/statics/images/homepage-_banner-guiyang-bg-animation.jpg',
      'https://www.huaweicloud.com/content/dam/cloudbu-site/archive/china/zh-cn/home/statics/images/homepage-_banner-guiyang-bg-animation.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    tipsNum: 3,
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {console.log('test');
  },
  bindGetUserInfo: function(e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.userInfo)
    console.log(e.detail.rawData)

    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  login: function (e) {
    console.log('login');
    wx.navigateTo({
      url: '../dev/dev'
    })
  },
})
