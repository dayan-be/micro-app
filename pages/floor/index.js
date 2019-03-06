
//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    floors: [1],
    min: 0,
    max: 1,
  },
  onLoad: function () {
  },
  updateMaxFloor: function(e) {
    this.data.max = e.detail.value;
    this.updateFloors();
  },
  updateMinFloor: function (e) { 
    this.data.min = e.detail.value;
    this.updateFloors();
  },
  updateFloors: function() {
    var floors = [];
    for (var i = this.data.min; i <= this.data.max; i++) {
      if (i === 0) { continue; }
      floors.push(i);
    };
    this.data.floors = floors;
    this.setData({
      floors: floors
    })
  },
  toggleDisable: function() {
    console.log('jinyong');
  },
  next: function () {
    
  }
})
