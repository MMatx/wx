//about.js
//获取应用实例
var app = getApp()
Page({
  data: {
    logosrc: '/imag/location.png',
    adrimg: '/imag/location.png',
    clockimg: '/imag/time.png',
    phoneimg: '/imag/call.png',
    jtimg: '/imag/to.png',
    picimg: '/imag/time.png',
    imgUrls: [
      // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626232647&di=c7c53f96e0f48681471e4626eebe0181&imgtype=0&src=http%3A%2F%2Fwww.sanchiseo.com%2Fuploadfile%2F2015821%2F2015821115728937045.jpg',
      // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626316444&di=ff20f74da6031541a12e0eeadaf156b9&imgtype=0&src=http%3A%2F%2Fsem.g3img.com%2Fsite%2F34016275%2F20160216162430_82108.png',
      // 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626359075&di=3297d75c3742024d15f553547495f3db&imgtype=0&src=http%3A%2F%2Fwww.17emarketing.com%2Fuploads%2Fallimg%2F160627%2F1-16062G54154.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583916638972&di=b2c79ebb27373747c8b63109cf79a692&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F18%2F12%2F19%2F9defd7282c47f6728ce0d2df4d01eeaa.jpg%2521%2Ffwfh%2F804x514%2Fquality%2F90%2Funsharp%2Ftrue%2Fcompress%2Ftrue',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583916811731&di=976b5569b84a8f39df64d35c3b997411&imgtype=0&src=http%3A%2F%2Fpic.51yuansu.com%2Fpic3%2Fcover%2F03%2F16%2F10%2F5b593018d04df_610.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=484939478,1589601387&fm=26&gp=0.jpg',
      
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '4000012333',
    })
  },
  getLocation: function () {
    wx.openLocation({
      latitude: 29.53,
      longitude: 106.57,
      name: "山东省临沂市",
      address: "山东省临沂市",
      scale: 28
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})