// pages/next/next.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sysWidth: wx.getSystemInfoSync().windowWidth, //屏幕宽度
    sysHeight: wx.getSystemInfoSync().windowHeight,//屏幕高度
    imgSrc:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1569414294423&di=1ccf0e0e83d9ecf16453de12b36503da&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201801%2F26%2F20180126224524_xrrdq.thumb.700_0.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var sysWidth = this.data.sysWidth
    var sysHeight = this.data.sysHeight
    this.setData({
      // 获取屏幕宽度
      moveViewLeft: sysWidth - 50,
      moveViewTop: sysHeight - 100,
    });
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