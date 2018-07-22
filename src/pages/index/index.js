/*
 * @Author: lichangjun 
 * @Date: 2018-07-21 21:53:49 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-07-22 14:21:14
 */

import "./index.less"
import base from "../base"
import request from "util/request.js"

request.ajax({
    url:"/xxx.json",
    success:function(res){
       console.log(res);
    },
    error:function(err){
        console.log(err);
    }
})
console.log(request);

