const app = getApp()
Page({
  data: {
    //条形框值
    tempFilePaths:'',
    list: [
      { "yellow": 0, "blue": 0.3, "red": 0 },
      { "yellow": 0, "blue": 4.7, "red": 2.1 },
      { "yellow": 0, "blue": 4.1, "red": 2.9 },
      { "yellow": 3.7, "blue": 2.4, "red": 0.2 },
      { "yellow": 0.2, "blue": 0.7, "red": 3.3 },
      { "yellow": 1.9, "blue": 0.1, "red": 4.1 },
      { "yellow": 4.3, "blue": 3.4, "red": 4.8 },
      { "yellow": 4.6, "blue": 5, "red": 1.6 },
      { "yellow": 4.6, "blue": 5, "red": 1.6 },
      { "yellow": 4.6, "blue": 5, "red": 1.6 },
      { "yellow": 4.6, "blue": 5, "red": 1.6 },
      { "yellow": 4.6, "blue": 5, "red": 1.6 },
      { "yellow": 4.6, "blue": 5, "red": 1.6 },
      { "yellow": 4.6, "blue": 100, "red": 1.6 },


    ],
    yMin: 10,  //竖
    xMin: 120, //横
    yMax: 550,  //竖
    xMax: 460 - 20,  //横
    s28: 8,  //字号大小
    s18: 14,  //字号大小 患病
    //Y轴分成的大分段
    heightLineNum: 15,
    //X轴分成的大分段
    widthLineNum: 100,
    //Y轴一个分段的值
    yOneDuan: ["唐氏综合征", "Noonan", "Charge", "Pws", "Rubinstein taybi", "Silver Russell", "Sotos", "Kabuki", "Crouzon", "Cornelia de lange", "Digeroge", "williams beuren", "rett", "apert"],
    color1: '#ffd338',  //黄色
    color2: '#4790fc',  //蓝色
    color3: '#f95415',  //绿色
  },

  onLoad: function (options) {
    //画图
      var that = this
      console.log('path  '+options.tempFilePaths)
    that.setData({
      tempFilePaths: options.tempFilePaths
    })
    wx.uploadFile({
      url: 'https://mmatx.cn/result',
      filePath: that.data.tempFilePaths,
      name: 'image',
      header: {
        "Content-Type": "multipart/form-data",
      },
      formData: {
        "user": "test",
      },
      success(res) {
        console.log("upload gbfb success")
        console.log(res.data)
        console.log(res.data.result)
        console.log(res.data.msg)
        console.log(res.data.r)
        var json = JSON.parse(res.data)  // 此处转换
        console.log(json.r+"    json")
        console.log(json.r[2])
        for(var i=0;i<14;i++)
        {
          that.data.list[i]['blue'] = json.r[i]
        }
        console.log(that.data.list[1]['blue'])
        console.log("sjdfbjsb")
        console.log(that.data.list[0]['blue'])
        that.data.list[0]['yellow'] = 99
        that.initChart()

        var pages = getCurrentPages();
        var currPage = pages[pages.length - 1];   //当前页面
        var prevPage = pages[pages.length - 2];  //上一个页面

        //直接调用上一个页面对象的setData()方法，把数据存到上一个页面中去
        prevPage.setData({
          tempFilePaths: "../../imag/f4.png"
        });
        // wx.navigateBack({
        //   delta: 1
        // })
      }
    })
  
  },

  // 初始化条形图
  initChart: function () {
    const ctx = wx.createCanvasContext('canvasId')

    ctx.beginPath() //方法开始一条路径，或重置当前的路径
    ctx.setStrokeStyle('#999999')//设置线条样式
    ctx.setFillStyle('#AAAAAA')
    ctx.setLineWidth(1) //设置线条宽度

    //左上角
    const leftBottomX = this.getEleWidth(this.data.xMin)
    const leftBottomY = this.getEleWidth(this.data.yMin)
    //右上角
    const leftTopX = this.getEleWidth(this.data.xMax)
    const leftTopY = this.getEleWidth(this.data.yMin)
    //左下角
    const rightBottomX = this.getEleWidth(this.data.xMin)
    const rightBottomY = this.getEleWidth(this.data.yMax)
    //右下角
    const bottomX = this.getEleWidth(this.data.xMax)
    const bottomY = this.getEleWidth(this.data.yMax)

    const yHeight = this.getEleWidth(this.data.yMax - this.data.yMin)
    const xWidth = this.getEleWidth(this.data.xMax - this.data.xMin)

    //从Y轴坐标开始画坐标系
    //Y轴坐标到原点坐标画出Y轴线
    //画完Y轴线，再从原点坐标到X轴坐标画出X轴线
    // ctx.moveTo(leftTopX, leftTopY)
    ctx.moveTo(leftBottomX, leftBottomY + 20)
    ctx.lineTo(rightBottomX, rightBottomY + 20)
    // ctx.lineTo(bottomX, bottomY)
    //设置字体大小
    ctx.setFontSize(this.getEleWidth(this.data.s18))
    //设置字的位置
    ctx.fillText("", this.getEleWidth(340), this.getEleWidth(1))

    //划分Y轴
    this.drawYScale(ctx);
    //划分X轴
    // this.drawXScale(ctx);
    //画条形图
    this.drawRectScale(ctx);

    ctx.stroke()
    ctx.draw(true)
  },

  //划分Y轴
  drawYScale: function (ctx) {
    var that = this;
    //Y轴坐标刻度横坐标起点
    var scaleStartX = this.getEleWidth(this.data.xMin)
    //长的刻度
    var scaleEndX = this.getEleWidth(this.data.xMin)
    //Y轴刻度总高度
    const yHeight = this.getEleWidth(this.data.yMax)
    //一个大分段的长度
    var oneScaleX = yHeight / this.data.heightLineNum
    //大分段数字字体大小
    ctx.setFontSize(this.getEleWidth(this.data.s18))
    //大分段数字位置横坐标
    var textX = this.getEleWidth(this.data.xMin - 115)
    //大分段，长刻度：50-300
    for (var i = 1; i < this.data.heightLineNum; i++) {
      var scaleEndY = oneScaleX * i + 15
      //画长刻度线条
      ctx.moveTo(scaleStartX, scaleEndY)
      ctx.lineTo(scaleEndX, scaleEndY)
      ctx.fillText(this.data.yOneDuan[i - 1], textX, scaleEndY + this.getEleWidth(10))


      var littleScaleStartY = yHeight - oneScaleX * (i - 1)
    }
  },

  //划分X轴
  drawXScale: function (ctx) {
    var that = this;
    //X轴刻度值Y坐标
    var scaleStartY = this.getEleWidth(that.data.yMax)
    var scaleEndY = this.getEleWidth(that.data.yMin);
    //X轴总长度=X轴横坐标-向右偏移长度
    const xWidth = this.getEleWidth(that.data.xMax - that.data.xMin)
    //X轴起始点
    const xMaginLeft = this.getEleWidth(that.data.xMin)
    //一个分段的宽度
    const oneScaleX = xWidth / (that.data.widthLineNum)
    for (var i = 0; i < that.data.widthLineNum + 1; i++) {
      var toEndX = xMaginLeft + oneScaleX * i;
      ctx.moveTo(toEndX, scaleStartY);
      ctx.lineTo(toEndX, scaleEndY)
      ctx.fillText(i, toEndX + this.getEleWidth(0), scaleStartY + this.getEleWidth(24))
    }
  },

  //画条形方框
  drawRectScale: function (ctx) {
    var that = this;
    //Y轴坐标刻度横坐标起点
    var scaleStartX = this.getEleWidth(this.data.xMin)
    //X轴总长度=X轴横坐标-向右偏移长度
    const xWidth = this.getEleWidth(that.data.xMax - that.data.xMin)
    //Y轴刻度总高度
    const yHeight = this.getEleWidth(that.data.yMax)
    //X轴起始点
    const yMaginLeft = this.getEleWidth(that.data.yMin)
    //一个分段的宽度
    const oneScaleX = xWidth / (that.data.widthLineNum)
    //一个大分段的长度
    var oneScaleY = yHeight / this.data.heightLineNum

    for (var i = 0; i < that.data.list.length; i++) {
      var scaleEndY = oneScaleY * (i + 1) + 15
      // const currentRectYellow = that.data.list[i].yellow;
      const currentRectBlue = that.data.list[i].blue;
      // const currentRectRed = that.data.list[i].red;
      //Y轴角度条矩形的宽度
      const rectWidth = oneScaleY / 5;
      //条矩形的长度
      // const yellowHeight = currentRectYellow * oneScaleX;
      const blueHeight = currentRectBlue * oneScaleX;
      // const redHeight = currentRectRed * oneScaleX;
      //矩形左上角的x坐标和y坐标
      const x = scaleStartX;
      const y = scaleEndY;
      //黄色填充
      // ctx.setFillStyle(that.data.color1)
      // //画框
      // ctx.fillRect(x, y - rectWidth / 2 - rectWidth, yellowHeight, rectWidth);
      // ctx.save();
      //蓝色填充
      ctx.setFillStyle(that.data.color2)
      //画框
      ctx.fillRect(x, y - rectWidth / 2, blueHeight, rectWidth);
      ctx.fillText(currentRectBlue + '%', blueHeight + x + 5, y + 2)
      ctx.save();
      // //红色填充
      // ctx.setFillStyle(that.data.color3)
      // //画框
      // ctx.fillRect(x, y + rectWidth / 2, redHeight, rectWidth);
    }
  },

  //获取屏幕自适应宽度
  getEleWidth: function (w) {
    var real = 0;
    try {
      var res = wx.getSystemInfoSync().windowWidth;//可使用窗口宽度
      //以宽度480px设计做宽度的自适应
      var scale = (480 / 2) / (w / 2);
      real = Math.floor(res / scale);
      return real;
    } catch (e) {
      return false;
    }
  }
})

















// // pages/result/result.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     txt: "50%",

//     maxCount: 100, // 绘制一个圆环所需的步骤 

  
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {


//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */

//   onReady: function () {
//     // 获得circle组件
//     this.circle1 = this.selectComponent("#circle1");
//     // 绘制背景圆环
//     this.circle1.drawCircleBg('circle_bg1', 50, 8)
//     // 绘制彩色圆环 
//    this. circle1.drawCircle('circle_draw1', 50, 8, 1);  

//     this.circle2 = this.selectComponent("#circle2");
//     // 绘制背景圆环
//     this.circle2.drawCircleBg('circle_bg2', 50, 8)
//     // 绘制彩色圆环 
//     this.circle2.drawCircle('circle_draw2', 50, 8, 1);  

//     this.circle3 = this.selectComponent("#circle3");
//     // 绘制背景圆环
//     this.circle3.drawCircleBg('circle_bg3', 50, 8)
//     // 绘制彩色圆环 
//     this.circle3.drawCircle('circle_draw3', 50, 8, 1);  

//     this.circle4 = this.selectComponent("#circle4");
//     // 绘制背景圆环
//     this.circle4.drawCircleBg('circle_bg4', 50, 8)
//     // 绘制彩色圆环 
//     this.circle4.drawCircle('circle_draw4', 50, 8, 1);  

//     this.circle5 = this.selectComponent("#circle5");
//     // 绘制背景圆环
//     this.circle5.drawCircleBg('circle_bg5', 50, 8)
//     // 绘制彩色圆环 
//     this.circle5.drawCircle('circle_draw5', 50, 8, 1);  

//     // this.circle6 = this.selectComponent("#circle6");
//     // // 绘制背景圆环
//     // this.circle6.drawCircleBg('circle_bg6', 100, 8)
//     // // 绘制彩色圆环 
//     // this.circle6drawCircle('circle_draw6', 100, 8, 1);  
//     this.circle6 = this.selectComponent("#circle6");
//     // 绘制背景圆环
//     this.circle6.drawCircleBg('circle_bg6', 50, 8)
//     // 绘制彩色圆环 
//     this.circle6.drawCircle('circle_draw6', 50, 8, 1);

//     this.circle7 = this.selectComponent("#circle7");
//     // 绘制背景圆环
//     this.circle7.drawCircleBg('circle_bg7',50, 8)
//     // 绘制彩色圆环 
//     this.circle7.drawCircle('circle_draw7', 50, 8, 1);  
//   },
//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {

//   }
// })