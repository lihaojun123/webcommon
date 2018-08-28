/*
 * @Author: lichangjun 
 * @Date: 2018-08-25 00:30:37 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-29 01:29:57
 */

import http from 'util/request'
import * as api from './api'
class Index {
    /**
     * 比如：获取首页列表接口
     */
    getList(data) {
        return http.ajax({
            url: api.index.list,
            data: data
        })
    }
    /**
     * 获取新闻列表接口
     */
    getNewList(data) {
        return http.ajax({
            url: api.index.demo,
            data: data
        })
    }

}
export default new Index();

