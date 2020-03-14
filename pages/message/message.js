// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  intro:function(e){
    console.log("ksjdfk")
    console.log(e.currentTarget.dataset.text)
    var num = e.currentTarget.dataset.text;
    console.log(num)
    if(num==1)
    {
      wx.navigateTo({
        url: '../introduce/tang/tang'
      })
    }
    else if(num==2)
    {
      wx.navigateTo({
        url: '../introduce/noonan/noonan'
      })
    }
    else if(num==3){
      wx.navigateTo({
        url: '../introduce/charge/charge'
      })
    }
    else if(num==4){
      wx.navigateTo({
        url: '../introduce/pws/pws'
      })
    }
    else if(num==5){
      wx.navigateTo({
        url: '../introduce/rubinstein/rubinstein'
      })
    }
    else if(num==6){
      wx.navigateTo({
        url: '../introduce/silver/silver'
      })
    }
    else if(num==7){
      wx.navigateTo({
        url: '../introduce/sotos/sotos'
      })
    }
    else if(num==8){
      wx.navigateTo({
        url: '../introduce/kabuki/kabuki'
      })
    }
    else if(num==9){
      wx.navigateTo({
        url: '../introduce/crouzon/crouzon'
      })
    }
    else if(num==10){
      wx.navigateTo({
        url: '../introduce/cornelia_de_lange/cornelia_de_lange'
      })
    }
    else if(num==11){
      wx.navigateTo({
        url: '../introduce/digeroge/digeroge'
      })
    }
    else if(num==12){
      wx.navigateTo({
        url: '../introduce/williams/williams'
      })
    }else if(num==13){
      wx.navigateTo({
        url: '../introduce/rett/rett'
      })
    }
    else if(num==14){
      wx.navigateTo({
        url: '../introduce/apert/apert'
      })
    }
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})