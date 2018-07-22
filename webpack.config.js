/*
 * @Author: lichangjun 
 * @Date: 2018-07-21 22:23:39 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-07-22 14:20:06
 */
const path=require("path");
const webpack=require("webpack");
const ExtractTextPlugin=require("extract-text-webpack-plugin");//单独打包css插件
const htmlWebpackPlugin=require("html-webpack-plugin"); //打包html插件

let htmlConfig=name=>{
    return new htmlWebpackPlugin({
        template:"./src/views/"+name+".html",
        filename:"views/"+name+".html",
        hash:true,
        inject:true,
        chunks:["common",name]   //打包的模块
    })
}

module.exports={
    entry:{
        "common":"./src/pages/common/index.js",
        "index":"./src/pages/index/index.js",
        "login":"./src/pages/login/index.js"
    },
    output:{
        path:path.resolve(__dirname, 'dist'),
        publicPath:'/dist/',
        filename:"js/[name].js"
    },
    externals:{
        "jquery":"window.jQuery"
    },
    module:{
        loaders:[
            {
                test:/\.less$/,
                //loader:"style-loader!css-loader"//默认的loader样式处理
                loader:ExtractTextPlugin.extract('css-loader!less-loader','style-loader') //单独打包loader对样式的处理
            },{
                test:/\.(png|jpeg|jpg|gif|woff|svg|eot|ttf)\??.*$/,
                loader:"url-loader?limit=100&name=resource/[hash:8][name].[ext]"//图片的处理
                
            }
        ]
    },
    resolve:{//别名的配置
      alias:{
          util:__dirname + "/src/util"
      }
    },
    plugins:[
        //通用模块的加载
        new webpack.optimize.CommonsChunkPlugin({
            name:"common",
            filename:"js/base.js"
        }),
        //打包css
        new ExtractTextPlugin("css/[name].css"),
        //打包html
        htmlConfig("index"),
        htmlConfig("login"),
    ],
    devServer:{
        port:8080,
        hot:true,
        open:true,
        inline:true

    }
}