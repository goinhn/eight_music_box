// pages/kecheng/kecheng.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:'',
    userName:'小八',
    show1: false,
    show2: false,

    className1: ['陪练预约', '琴房预约'],
    icon1: 'friends',
    className2: ['练习', '讲义资料', '学习报告', '错题本'],
    icon2: 'todo-list'
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
  
  },
  tiao:function(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: "/pages/mulu/mulu?id="+id
    });
  },

  onSearch:function(e){

  },

  showPopup1() {
    this.setData({ show1: true });
  },

  onClose1() {
    this.setData({ show1: false });
  },

  showPopup2() {
    this.setData({ show2: true });
  },

  onClose2() {
    this.setData({ show2: false });
  }
})