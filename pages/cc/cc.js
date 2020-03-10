// camera.js
Page({
  // data: {
  //   tempFilePaths: "../../imag/click.png"
  // },
  onReady() {

  },
  takePhoto() {

    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
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