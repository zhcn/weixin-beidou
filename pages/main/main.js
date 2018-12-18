// pages/main/main.js
var QQMapWX = require('../../libs/qqmap/qqmap-wx-jssdk.js');
var qqmapsdk;
const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curLoc : {},
    markers : [],
    name:'',
    info:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {    
    qqmapsdk = new QQMapWX({
      key: 'GNJBZ-63D3J-JBRFA-KNWGB-L4TVZ-MCFWR'
    });
    wx.getSetting({
      success(res) {
        console.log("wx setting");
        console.log(res.authSetting);
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation'
          });
        }
      }
    });
    
    wx.getLocation({
      type: 'gcj02',
      success: res=>{
        console.log("get location");
        this.setData({curLoc:{latitude:res.latitude, longitude:res.longitude}});
        /*this.setData({ markers: [{ id: 1, latitude: this.data.curLoc.latitude, longitude: this.data.curLoc.longitude }] });*/
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            console.log(res);
            this.setData({
                name:res.result.formatted_addresses.recommend,
              info:res.result.address
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });
      },
      complete(res) {
        console.log(res);
      }
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

  },
  onGetCurLoc: function(){
    wx.getLocation({
      type: 'gcj02',
      success: res => {
        console.log("get location");
        this.setData({ curLoc: { latitude: res.latitude, longitude: res.longitude } });
        /*this.setData({ markers: [{ id: 1, latitude: this.data.curLoc.latitude, longitude: this.data.curLoc.longitude }] });*/
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            console.log(res);
            this.setData({
              name: res.result.formatted_addresses.recommend,
              info: res.result.address
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });
      },
      complete(res) {
        console.log(res);
      }
    });
  },
  onMarkCurLoc: function(){
    let app = getApp();
    app.globalData.history.push({ name: this.data.name, info: this.data.info, loc:this.data.curLoc});
    /*this.setData({markers:[{id:1, latitude:this.data.curLoc.latitude, longitude:this.data.curLoc.longitude}]});*/
  },
  regionchange:function(e){
    console.log("region change");
    console.log(e);
    let map = wx.createMapContext("map",this);
    map.getCenterLocation({
      success:res=>{
        if(util.checkLocationDiff(this.data.curLoc,res)==false){
          console.log("no diff");
          return;
        }
        this.setData({ curLoc: { latitude: res.latitude, longitude: res.longitude } });
        /*this.setData({ markers: [{ id: 1, latitude: this.data.curLoc.latitude, longitude: this.data.curLoc.longitude }] });*/
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: res => {
            console.log(res);
            this.setData({
              name: res.result.formatted_addresses.recommend,
              info: res.result.address
            })
          },
          fail: function (res) {
            console.log(res);
          },
          complete: function (res) {
            console.log(res);
          }
        });
      }
    });
  }
})