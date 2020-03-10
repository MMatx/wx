//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    result: "暂无结果",
    formula: ''
  },
  //事件处理函数
  calculate: function () {
    wx.request({
     url: 'https://mmatx.cn/calculate',
      //url:'http://59.110.242.240:443/',
      data: {
        formula: this.data.formula
      },
      success: res => {
        if (res.statusCode == 200) {
          this.setData({
            result: res.data
          })
        }
      }
    })
  },
  input: function (e) {
    this.setData({
      formula: e.detail.value
    })
  }
})

