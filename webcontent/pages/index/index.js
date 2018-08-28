/*
 * @Author: lichangjun 
 * @Date: 2018-07-21 21:53:49 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-29 01:30:32
 */

import "./index.less"
import base from "../base"
import api from "service/index"


let data = {
    
}
api.getList(data).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
    console.log(2);
})

api.getNewList(data).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
    console.log(2);
})

