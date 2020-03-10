// camera.js
Page({
  data: {
    device: true
  },
  onReady() {

  },
  devicePosition() {
    this.setData({
      device: !this.data.device,
    })
    console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");
  },

  takePhoto() {

    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
        console.log("car car " + res.tempImagePath)
        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];   //当前页面
        var prevPage = pages[pages.length - 2];  //上一个页面

        //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
          tempFilePaths: res.tempImagePath
        });
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  }

})