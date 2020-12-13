// pages/demo02/demo02.js
Page({
data:{
array:["记得多穿点衣服","记得多喝点水","今天可能不能去接你了","有什么难过的记得告诉我们"],
index:0
},
bindPickerChange:function(e){
  console.log(e)
  this.setData({
    index:e.detail.value
  })
},
submit:function () {
  var wea1=this.data.weaday
 wx.request({
 method: 'POST',
 url: 'http://api.heclouds.com/devices/651156858/datapoints',/*设备号还有数据的id都要填自己的*/
 header: {
 'api-key': 'YtbsO6deQ8DaxTUqe84HqZ6Imsw='/*这个也是*/
 },
 data: {
   
     "datastreams":[{
         "id":"weather",
         "datapoints":[{
             "value":1}]
     }]
 
 },
 success: function (res) {
 console.log(res),
 wx.showToast({
 title: '开启成功',
 icon: 'success',
 duration: 2000
 })
 },
 fail: function (res) {
 console.log("fail!!!")
 }
})
}
})
