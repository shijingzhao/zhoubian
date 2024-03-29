// pages/com/com/com.js
const app = getApp();
const http = require('../../../utils/http.js')
const jsonData = require('../../../data/post.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.getPostContent()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log('onShow')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    console.log('达到底部')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  getPostContent: function() {
    // http.get('/data/post.json')
    this.setData({
      postData: jsonData.dataList
    })
  }
})