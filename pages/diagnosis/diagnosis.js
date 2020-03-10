// pages/diagnosis/diagnosis.js
var app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
   tempFilePaths:"../../imag/click.png"
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
 
  },
  buttonListener:function(){
   // console.log("skjfvdkbvfj")
    var that = this
    console.log("uuuup  " + that.data.tempFilePaths)
    
    wx.uploadFile({
      url: 'https://mmatx.cn/diagnosis', 
      filePath: that.data.tempFilePaths,
      name: 'image',
      header: {
        "Content-Type": "multipart/form-data",
      },
      formData: {
        "user": "test",
      },
      success(res) {
        console.log("upload success")
        console.log(res.data)
        if (res.data=="success") {
          wx.navigateTo({
            url: '../result/result?tempFilePaths=' + that.data.tempFilePaths
          })
        }
        else {
          console.log("未检测到人脸")
        }
        //do something
      }
    })

  


    
   // console.log("+++++++++++++++")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  },
  takePhoto(){
    wx.navigateTo({
      url:'/pages/photo/photo'
    })
  },
  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#25b8ef",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },

  chooseWxImage: function (type) {
    console.log("before " + this.data.tempFilePaths)
    var that = this;
    if(type=="album"){
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: [type],
        success: function (res) {
          console.log("res " + res.tempFilePaths[0]);
          that.setData({
            tempFilePaths: res.tempFilePaths[0],
          })
          console.log("after album " + that.data.tempFilePaths)
        }
      })
      
    }
    else{
    
      wx.navigateTo({
      url: '../carm/carm'
    })
      console.log("after car " + this.data.tempFilePaths[0])
    }
  },
  // chooseWxImage: function (type) {
  //   wx.navigateTo({
  //     url: '../carm/test'
  //   })
  // },
})