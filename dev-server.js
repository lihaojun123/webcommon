const webpack=require('webpack');
const webpackConfig=require('./webpack.config');
const merge=require('webpack-merge');

module.exports=merge(webpackConfig,{
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        inline: true,
        proxy : {
            '/api' : {
                target:'http://localhost:3000',    //代理的目标路径
                pathRewrite:{            //重写路径
              '^/api':'/'                 
                },
                 changeOrigin:true,         //是否跨域
            }
        }
    }
})

