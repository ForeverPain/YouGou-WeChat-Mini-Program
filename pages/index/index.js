import {
  request
} from "../../request/index.js";

//Page Object
Page({
  data: {
    //轮播图数组
    swiperList: [],
    //导航数组
    cateList:[] 

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
   this.gitCateList()
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
  }
});