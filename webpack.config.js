/*
 * @Author: lichangjun 
 * @Date: 2018-07-21 22:23:39 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-25 01:40:55
 */
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");//单独打包css插件
const htmlWebpackPlugin = require("html-webpack-plugin"); //打包html插件
const copyWebpackPlugin = require('copy-webpack-plugin');//复制插件

let htmlConfig = name => {
    return new htmlWebpackPlugin({
        template: "./webcontent/views/" + name + ".html",
        filename: "views/" + name + ".html",
        hash: true,
        inject: true,
        chunks: ["common", name]   //打包的模块
    })
}

module.exports = {
    entry: {
        "common": "./webcontent/pages/common/index.js",
        "index": "./webcontent/pages/index/index.js",
        "login": "./webcontent/pages/login/index.js"
    },
    output: {
        path: path.resolve(__dirname, 'webpublish'),
        publicPath: '/webpublish/',
        filename: "js/[name].js"
    },
    externals: {
        "jquery": "window.jQuery"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                //loader:"style-loader!css-loader"//默认的loader样式处理
                loader: ExtractTextPlugin.extract('css-loader!less-loader', 'style-loader') //单独打包loader对样式的处理
            }, {
                test: /\.(png|jpeg|jpg|gif|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=100&name=resource/[hash:8][name].[ext]"//图片的处理

            }
        ]
    },
    resolve: {//别名的配置
        alias: {
            util: __dirname + "/webcontent/util",
            service: __dirname + "/webcontent/service"
        }
    },
    plugins: [
        //通用模块的加载
        new webpack.optimize.CommonsChunkPlugin({
            name: "common",
            filename: "js/base.js"
        }),
        new copyWebpackPlugin([ // 复制插件
         { 
            from: path.join(__dirname,'./webcontent/plugins/'), 
            to:  path.join(__dirname,'./webpublish/plugins/') 
          }
        ]),
        //打包css
        new ExtractTextPlugin("css/[name].css"),
        //打包html
        htmlConfig("index"),
        htmlConfig("login"),
    ],
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        inline: true

    }
}