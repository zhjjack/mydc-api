/**
 *  扫码点餐API子系统 
 */
const PORT=8090;
const express=require("express");
const pool=require("./pool");
const cors=require("cors");
const bodyParser=require('body-parser');
const categoryRouter=require('./routes/admin/category');
var app=express();
app.listen(PORT,()=>{
    console.log('服务器启动成功！');
});
// 使用中间件
app.use(cors());
//app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json());
// 挂载路由器
app.use('/admin/category',categoryRouter)