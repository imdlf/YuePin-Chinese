// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  study_shengmu:function () {
    wx.navigateTo({
      url: '../shengmu/shengmu',
    })
  },

  study_yunmu:function () {
    wx.navigateTo({
      url: '../yunmu/yunmu',
    })
  },

  study_shengyunpeihe:function (e) {
    wx.navigateTo({
      url: '../shengyun/shengyun',
    })
  },

  study_shipin:function (e) {
    wx.navigateTo({
      url: '../videostudy/videostudy',
      
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})