// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.login({
      success: function(res) {
        console.log('无需登陆');
      }
    });
  },
  globalData: {
    userInfo: null
  }
})
