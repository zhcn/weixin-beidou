// pages/map/map.js
const order = ['red','yellow', 'blue','green','red']
Page({
  data: {
    loc:{},
    markers: [],
    toView:'green',
    scrollTop: 0
  },
  regionchange(e) {
    console.log(e)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
  },
  upper(e) {
    console.log(e)
  },
  lower(e) {
    console.log(e)
  },
  scroll(e){
    console.log(e)
  },
  tap(e) {
    wx.openLocation({//​使用微信内置地图查看位置。
      latitude: this.data.loc.latitude,//要去的纬度-地址
      longitude: this.data.loc.longitude,//要去的经度-地址
      //name: "宝安中心A地铁口",
      //address: '宝安中心A地铁口'
    })
  },
  tapMove(e) {
    this.setData({
      scrollTop:this.data.scrollTop+1
    })
  },
  onLoad(option){
    console.log('map onload');
    console.log(option);
    let index = parseInt(option.param);
    let app = getApp();
    console.log(index);
    let record = app.globalData.history[index];
    console.log(app.globalData.history);
    console.log(record);
    this.setData({ loc: record.loc, markers: [{ latitude:record.loc.latitude, longitude:record.loc.longitude}]});
  }
})