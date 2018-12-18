// pages/map/map.js
const order = ['red','yellow', 'blue','green','red']
Page({
  data: {
    loc:{},
    markers: [{
      iconPath: '/resources/others.png',
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      /*width: 50,
      height: 50*/
    }],
    controls: [{
      id: 1,
      iconPath: '/resources/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
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
    for(let i=0;i<order.length;i++) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView:order[i+1]
        })
        break
      }
    }
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