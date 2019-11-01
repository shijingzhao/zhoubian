function get(url, data = []) {
  console.log('get')
  wx.request({
    url: url,
    data: data,
    method: 'GET',
    header: {
      'content-type': 'application/json'
    },
    success(res) {
      console.log(res)
    },
    fail(e) {
      console.log(e)
    },
    complete(c) {
      console.log(c)
    }
  })
}

function post(url, data = []) {
  wx.request({
    url: url,
    data: data,
    method: 'POST',
    header: {
      'content-type': 'application/json'
    },
    success(res) {
      console.log(res)
    },
    fail(e) {
      console.log(e)
    },
    complete(c) {
      console.log(c)
    }
  })
}

module.exports = {
  get: get,
  post: post
}

var hasClick = false;

// Page({
//   tap: function () {
//     if (hasClick) {
//       return
//     }
//     hasClick = true
//     wx.showLoading()
//     wx.request({
//       url: 'https://test.com/getinfo',
//       method: 'POST',
//       header: {
//         'content-type': 'application/json'
//       },
//       data: {},
//       success: function (res) {
//         if (res.statusCode === 200) {
//           console.log(res.data) // 服务器回包内容
//         }
//       },
//       fail: function (res) {
//         wx.showToast({
//           title: '系统错误'
//         })
//       },
//       complete: function (res) {
//         wx.hideLoading()
//         hasClick = false
//       }
//     })
//   }
// })