// index.js
// 获取应用实例
const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
const defaultNickName = ''

Page({
  data: {
    index: 0,
    pickType:["游客","学习者","教学方"],
    photoUrl: defaultAvatarUrl,
    userName: defaultNickName,
    notLogin: true

    
  },

  pickerChange:function(e){
    console.log(e.detail.value);
    this.setData({
      index:e.detail.value
    })
  },
  // 事件处理函数
  //登录
  Login:function(){
    let that=this
    if(that.data.userName === ''){
      console.log('this is a blank')
      return
    }
    wx.cloud.uploadFile({
      cloudPath: 'users/'+this.data.userName+this.data.photoUrl.substring(this.data.photoUrl.lastIndexOf('.')),
      filePath: this.data.photoUrl,
      success: res=>{
        console.log(res.fileID)
        let user={
          user_nickname:that.data.userName,
          user_phot:res.fileID,
          user_regtime:new Date()
        }
        const db=wx.cloud.database();
        db.collection('users').add({//添加到 'users' 表
          data: user
        })
        .then(dbres => {
          console.log("add ok",dbres)
          //保存当前用户到全局作用域
          user._id=dbres._id
          app.globalData.cur_user=user
          
        })
        that.setData({
          notLogin: false
        })
      },
      fail: err=>{
        console.log('wrong wrong wrong')
      }
    })
  },

 //选择用户头像
  onChooseAvatar:function(res) {
    console.log(res)
    
    this.setData({
      photoUrl:res.detail.avatarUrl+''
    })
    console.log(this.data.photoUrl)
  },
  
  onLoad() {
  }


 
})
