import {
  request
} from "../../request/index.js";

//Page Object
Page({
  data: {
    //轮播图数组
    swiperList: []

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
    request({
        url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata"
      })
      .then(result => {
        this.setData({
          swiperList: result.data.message
        })
      })
  },
});