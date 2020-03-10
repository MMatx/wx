// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt: "50%",

    maxCount: 100, // 绘制一个圆环所需的步骤 
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    that.setData({
      tempFilePaths: options.tempFilePaths
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function () {
    // 获得circle组件
    this.circle1 = this.selectComponent("#circle1");
    // 绘制背景圆环
    this.circle1.drawCircleBg('circle_bg1', 50, 8)
    // 绘制彩色圆环 
   this. circle1.drawCircle('circle_draw1', 50, 8, 1);  

    this.circle2 = this.selectComponent("#circle2");
    // 绘制背景圆环
    this.circle2.drawCircleBg('circle_bg2', 50, 8)
    // 绘制彩色圆环 
    this.circle2.drawCircle('circle_draw2', 50, 8, 1);  

    this.circle3 = this.selectComponent("#circle3");
    // 绘制背景圆环
    this.circle3.drawCircleBg('circle_bg3', 50, 8)
    // 绘制彩色圆环 
    this.circle3.drawCircle('circle_draw3', 50, 8, 1);  

    this.circle4 = this.selectComponent("#circle4");
    // 绘制背景圆环
    this.circle4.drawCircleBg('circle_bg4', 50, 8)
    // 绘制彩色圆环 
    this.circle4.drawCircle('circle_draw4', 50, 8, 1);  

    this.circle5 = this.selectComponent("#circle5");
    // 绘制背景圆环
    this.circle5.drawCircleBg('circle_bg5', 50, 8)
    // 绘制彩色圆环 
    this.circle5.drawCircle('circle_draw5', 50, 8, 1);  

    // this.circle6 = this.selectComponent("#circle6");
    // // 绘制背景圆环
    // this.circle6.drawCircleBg('circle_bg6', 100, 8)
    // // 绘制彩色圆环 
    // this.circle6drawCircle('circle_draw6', 100, 8, 1);  
    this.circle6 = this.selectComponent("#circle6");
    // 绘制背景圆环
    this.circle6.drawCircleBg('circle_bg6', 50, 8)
    // 绘制彩色圆环 
    this.circle6.drawCircle('circle_draw6', 50, 8, 1);

    this.circle7 = this.selectComponent("#circle7");
    // 绘制背景圆环
    this.circle7.drawCircleBg('circle_bg7',50, 8)
    // 绘制彩色圆环 
    this.circle7.drawCircle('circle_draw7', 50, 8, 1);  
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})