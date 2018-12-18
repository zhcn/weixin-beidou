// pages/locations/locations.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recent: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("locations onLoad");
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
    let app = getApp();
    let recent = app.globalData.history.concat();
    this.setData({ recent: recent });
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
  bindRecentTap:function(e){
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../map/map?param='+index
    })
  }
})