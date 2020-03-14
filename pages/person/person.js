// pages/personal/personal.js
const app = getApp();
Page({
  data: {
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示.
    console.log(app.globalData.allow+"    showallow");
    console.log(app.globalData.userInfo+"   show")
    var userInfo = wx.getStorageSync('userInfo');
    if (app.globalData.allow== true) {
      this.setData({
        operation: '退出',
        login: true,
        userName: app.globalData.userInfo.nickName,
        userHead: app.globalData.userInfo.avatarUrl
      })
    } else {
      this.setData({
        userName: '',
        userHead: '../../imag/unuserhead.png',
        operation: '登录',
        login: false
      })
    }
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  defaultLogin: function (e) {
    console.log("dnfv")
    let login = e.currentTarget.dataset.login;
    if (login == true) {
      // 点击退出
      wx.showToast({
        title: '退出中',
        icon: 'loading'
      })
      app.globalData.allow =false;
      this.setData({
        operation: '登录',
        login: false,
        userName: '',//app.globalData.userInfo.nickName,
        userHead: '',//app.globalData.userInfo.avatarUrl
      })
      setTimeout(function () {
        // wx.hideToast();
        // wx.removeStorageSync('userInfo');
        wx.switchTab({
          url: '/pages/person/person'
        })
      }, 2000);
    } else {
      // 点击登录
      console.log("login  login")
      wx.navigateTo({
        url: '../per/login/login'
      })
    }
  },
  listFirst: function () {
    // 个人信息
    if (this.data.login) {
      wx.navigateTo({
        url: '../per/person_message/person_message'
      })
    } else {
      wx.showToast({
        title: '请登录',
        icon: 'loading',
        duration: 800
      })
    }
  },
  about:function(){
    wx.navigateTo({
      url: '../per/about/about'
    })
  },
  edit:function(){
    wx.navigateTo({
      url: '../per/edit/edit'
    })
  },
  message_back:function(){
    wx.navigateTo({
      url: '../per/message_back/message_back'
    })
  },
  getScanning: function () {
    app.getScanning()
  }
})