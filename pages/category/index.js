import {
  request
} from "../../request/index.js";
//Page Object
Page({

  data: {
    commodityClassify: [],
    commodityDetails: []
  },
  Total: [],
  onLoad: function (option) {
    this.getToal()

  },
  getToal() {
    request({
        url: 'https://api-hmugo-web.itheima.net/api/public/v1/categories'
      })
      .then(res => {
        console.log(res);
        
        this.Total = res.data.message
        let commodityClassify = this.Total.map(v => v.cat_name)
        let commodityDetails= this.Total[0].children
        this.setData({
          commodityClassify,
          commodityDetails
        })
      })
  }
});