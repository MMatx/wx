const app = getApp()

// pages/per/person_history/person_history.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isflag:false,
    
    history_list:['kk,tt'],
    urls: ['https://mmatx.cn/media/media.jpg']

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

    var that=this;
    console.log(that.data.isflag)
    console.log(app.globalData.openid )
    wx.request({
      url: 'https://mmatx.cn/history',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        'openid': app.globalData.openid
      },
      method: 'POST',
      success: function (res) {
        let status = res.data.status;
        console.log(res.data)
        console.log(status)
        var list_history = res.data.list_result;
        var lenn=res.data.lenn;
        var list_dig=res.data.list_dig;
        var tmp_history=[]
        var tmp_url=res.data.list_url;
        
        for (var i=0;i<lenn;i++)
        {
          console.log('**************')
          console.log(list_history[i])
          console.log(list_dig[i])
          if(list_dig[i]=='21'){
            list_dig[i]='唐氏综合症'
          }
          var strr=list_dig[i]+'概率最大，为' + list_history[i]+'%'
          
          
          tmp_history.push({ 'msg': strr, 'urls': tmp_url[i],'time':res.data.list_time[i]})
          console.log(tmp_history[i])
          console.log(tmp_url[i])
          console.log(res.data.list_time[i])
        }
        if(lenn>0){
          that.setData({ isflag: true });
        }
        
        that.setData({ history_list: tmp_history });
        console.log(that.data.isflag)
      },
      fail: function () {
        console.log("检测历史接口调用失败")
      }
    })
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