// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   * 
   */
  data: {
    setInter:'',
    gametime:20,
    gameScore:0,
    askNow:0,
    askMax:9,
    list: {
        question:["g","m","n","z", "ch", "r","y", "f","h","over"],
        optionA: ["u","v","i","i", "eng","o","i","u","ing","A"],
        optionB: ["o","a","o","ie","o",  "e","ie","e","en","B"],
        answers: ["A","B","A","A", "A",  "B","A", "A","B","ANS"]
      }
  },

  select(e){
    const that=this
    const{item}=e.currentTarget.dataset;
    console.log(item);
    const ans=this.data.list.answers[this.data.askNow];

    if(that.data.askNow >= that.data.askMax){
      return
    }
    if(item==ans){
      that.setData({
        right:that.data.right+1,
        gameScore:that.data.gameScore+10
      })
      wx.showModal({
        title: "恭喜你！",
        content: "你选对了",
        showCancel :false,
        confirmText: "下一题"
      })
    }
    else{
      that.setData({
        wrong:that.data.wrong+1
      })
      wx.showModal({
        title: "抱歉！",
        content: "你选错了。正确答案是"+this.data.list.answers[this.data.askNow]+"。",
        showCancel :false,
        confirmText: "下一题"
      })
    }

    that.setData(
      {
        askNow : that.data.askNow+1
      }
    )

    if(that.data.askNow >= that.data.askMax){
      that.endcount()
      setTimeout(that.gameOver,1000)
    }
  },

  showHelp:function(){
    wx.showModal({
      title: "游戏规则",
      content: "每一题将在屏幕中央给出一个声母,请从给定的两个韵母中选择可以与其搭配的一项,每答对一题计1分,答错一题扣1分,规定时间60秒。",
      showCancel :false,
      confirmText: "继续"
    })
  },

  showintro:function() {
    wx.navigateTo({
      url: '/pages/intro/intro'
    })
  },

  escapeit:function() {
    wx.switchTab({
      url: '/pages/list/list'
    })
  },

  countdown(){
    const that=this
    that.data.setInter=setInterval(
      function(){
        if(that.data.gametime==0){
          that.endcount()
        }
        else{
          that.setData({ gametime : that.data.gametime - 1})
        }
      },1000)

  },

  endcount(){
    const that=this
    clearInterval(that.data.setInter)
  },

  gameOver(){
    const that=this
    wx.showModal({
      title: "恭喜你！",
      content: "已完成答题！你的分数是"+that.data.gameScore+"。",
      showCancel :false,
      confirmText: "再来一次"
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
    this.countdown()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    this.endcount()

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.endcount()

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