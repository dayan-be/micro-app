//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    elvAddress: '',
  },
  onLoad: function () {
  },
  next: function() {
    wx.navigateTo({
      url: '../floor/index'
    })
  },
  scanSnCode: function() {
    let self = this;
    wx.scanCode({
      scanType: ['qrCode'],
      success: function() {
        self.setData({
          elvAddress: res.result,
        });
      },
    });
  },
  scanRegCode: function () {
    let self = this;
    wx.scanCode({
      scanType: ['qrCode'],
      success: function (res) {
        console.log(res.result);
        self.setData({
          elvAddress: res.result,
        })
      },
    });
  },
})
