const webpack=require('webpack');
const webpackConfig=require('./webpack.config');
const merge=require('webpack-merge');

module.exports=merge(webpackConfig,{
    devServer: {
        port: 8089,
        hot: true,
        open: true,
        inline: true,
        //publicPath:'/webpublish',
        proxy: {
            '/api':{
                target:'http://localhost:3000',    //代理的目标路径
                pathRewrite:{            //重写路径
                    '^/api':'/'                 
                },
                changeOrigin:true,         //是否跨域
               // secure:false                //https 证书问题
            } 
          }
    }
})

