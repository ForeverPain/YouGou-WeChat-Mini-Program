import {request} from "../../request/index.js";

//Page Object
Page({
  data: {
    //轮播图数组
    swiperList: [],
    //导航数组
    cateList:[], 
    //楼层数组
    floorList:[]

  },
  //options(Object)
  onLoad: function (options) {
    // var reqTask = wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result)=>{ 
    //     console.log(result);
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    // });
   //
   this.gitSwiperList();
   this.gitCateList();
   this.gitFloorList();
  },
  //获取轮播图数据
  gitSwiperList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"})
    .then(result => {
      this.setData({
        swiperList: result.data.message
      })
    })
  },
  gitCateList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/catitems"})
    .then(result => {
      this.setData({
        cateList : result.data.message
      })
    }) 
  },
  gitFloorList(){
    request({url: "https://api-hmugo-web.itheima.net/api/public/v1/home/floordata"})
    .then(result => {
      this.setData({
        floorList : result.data.message
      })
    }) 
  }
});