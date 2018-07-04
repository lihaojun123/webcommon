var webpack=require("webpack");

var config={
   entry:{
       index:["./src/controller/index.js"],
       login:["./src/controller/login.js"]
   },
   output:{
       path:"./dist",
       filename:"js/[name].js"
   }
}

module.exports=config;