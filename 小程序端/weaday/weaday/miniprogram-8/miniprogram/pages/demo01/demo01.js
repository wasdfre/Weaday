// pages/demo01/demo01.js
Page({
data:{
   weaday:0,
   array:["记得多穿点衣服","记得多喝点水","今天可能不能去接你了","有什么难过的记得告诉我们"],
index:0,
content:"",
},
bindPickerChange:function(e){
  console.log(e)
  this.setData({
    index:e.detail.value
  })
}, 
set:function(e){
  var cont=this.data.content
cont=e.detail.value
this.setData({content:cont})
console.log(this.data.content)
},
sure1:function(){wx.request({
  url:'http://api.heclouds.com/cmds?device_id=651156858&qos=1&timeout=3600',
  method:"POST",
  data:this.data.content,
  header:{
    "api-key":"YtbsO6deQ8DaxTUqe84HqZ6Imsw=",
    'conyent-type':'application/x-www-form-urlencoded'
   },
  })},
sure2:function(){wx.request({
  url:'http://api.heclouds.com/cmds?device_id=651156858&qos=1&timeout=3600',
  method:"POST",
  data:this.data.index+1,
  header:{
    "api-key":"YtbsO6deQ8DaxTUqe84HqZ6Imsw=",
    'conyent-type':'application/x-www-form-urlencoded'
   },
 
  success: function(res){
    console.log(res.data)
   }
  })
},
  onLoad: function () {
    var that=this
    var wea=this.data.weaday
    
   wx.request({
     url:'https://weatherweek.api.bdymkt.com/week',
     method:"GET",
     data:{
     "city":"北京",
     },
     header:{
      "X-Bce-Signature":"AppCode/a255f5ee5e9f4685bbbfc974e648dd5a"
     },
     success: function(res){
       console.log(res.data)
       var result=res.data.data[0].wea_day
       console.log(result)
       if(result=="晴"){
       that.setData({weaday:5})
       console.log(that.data.weaday)}
       else if(result =="多云"){
        that.setData({weaday:6})
        console.log(that.data.weaday)
      }
        else if(result =="雨"){
          that.setData({weaday:7})
          console.log(that.data.weaday)}
        else if(result =="雪"){
            that.setData({weaday:8})
            console.log(that.data.weaday)}
            wx.request({
              url:'http://api.heclouds.com/cmds?device_id=651156858&qos=1&timeout=3600',
              method:"POST",
              data:that.data.weaday,
              header:{
                "api-key":"YtbsO6deQ8DaxTUqe84HqZ6Imsw=",
                'conyent-type':'application/x-www-form-urlencoded'
               },
             
              success: function(res){
                console.log(res.data)
               }
              })
}
})



},
 

}
)