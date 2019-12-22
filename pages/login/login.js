// pages/login/login.js
import areaList from '../../assets/area'

var app = getApp();

const citys = {
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州'],
  '上海': ['徐家汇'],
  '北京': [],
  '天津': [],
  '重庆': [],
  '河北': [],
  '山西': [],
  '辽宁': [],
  '吉林': [],
  '黑龙江': [],
  '江苏': [],
  '安徽': [],
  '江西': [],
  '山东': [],
  '河南': [],
  '湖北': [],
  '河南': [],
  '湖北': [],
  '湖南': [],
  '广东': [],
  '海南': [],
  '四川': [],
  '贵州': [],
  '云南': [],
  '陕西': [],
  '甘肃': [],
  '青海': [],
  '台湾': [],
  '内蒙古': [],
  '广西': [],
  '西藏': [],
  '宁夏': [],
  '新疆': [],
  '香港': [],
  '澳门': [],
};


Page({
  data: {
    username: '',
    password: '',
    age: '',

    radio:'1',

    show: false,

    columns: [
      {
        values: Object.keys(citys),
        className: 'column1',
        defaultIndex:1
      },
      {
        values: citys[Object.value],
        className: 'column2',
        defaultIndex: 1
      }
    ],

    area: ''


  },

  onLocation(event) {
    const { picker, value, index } = event.detail;
    picker.setColumnValues(1, citys[value[0]]);
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },

  onSex(event){
    this.setData({
      radio: event.detail
    });
  },

  onSexSub(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name
    });
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


  bindRegionChange: function (e) {
    
    this.setData({
      region: e.detail.value
    })
  },



  formSubmit:function(e){

  console.log(e.detail.value);
    var xinxi = e.detail.value;
    if (xinxi.userName == "" || xinxi.age=="" || xinxi.sex == ""){
      wx.showLoading({
        title: '信息么有正确',
        mask: true,
      });
      setTimeout(function () {
        wx.hideLoading();        
      }, 1000)
    }else{
      wx.showLoading({
        title: '注册中....',
        mask: true,
      });
      setTimeout(function () {
        app.globalData.userInfo = e.detail.value;
        console.log(e.detail.value);
        wx.hideLoading();
        wx.showToast({
          title: "欢迎你",
          icon: 'success',
          duration: 1500,
          mask: true,
          success: function (e) {
            console.log(1111);
            wx.switchTab({
              url: '/pages/index/index'
            });
          }

        });
      }, 2000)
    }
  },


// todo
  onClickButtonSubmit:function(){
    wx.switchTab({
      url: '/pages/index/index'
    });
  }

})