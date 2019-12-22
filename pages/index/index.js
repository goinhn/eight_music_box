// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    className: ['钢琴', '小提琴', '架子鼓', '吉他', '萨克斯', '贝斯'],
    icons: 'graphic',

    imgUrls: [
      '../../images/banner-01.png',
      '../../images/banner-02.png',
      '../../images/banner-03.png'
    ],

    introImg:[
      '../../images/intro-01.jpg',
      '../../images/intro-02.jpg',
      '../../images/intro-03.jpg',
      '../../images/intro-04.jpg',
      '../../images/intro-05.jpg',
      '../../images/intro-06.jpg'
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,  

    previousMargin:"30rpx",
    nextMargin:"30rpx",
    circular:true,

    // 热门课程数据
    hotLesson:[
      {
        color:"#4399f9",
        title:"创意钢琴班",
        subtitle:"适合1-3岁孩子"
      },
      {
        color:"#8c43f9",
        title:"吉他班",
        subtitle:"各年龄段均可"
      },
      {
        color:"#f94388",
        title:"架子鼓班",
        subtitle:"适合9-16岁孩子"
      },
      {
        color:"#8333f9",
        title:"小提琴班",
        subtitle:"各年龄段均可"
      },
      {
        color:"#f92088",
        title:"贝斯班",
        subtitle:"各年龄段均可"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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