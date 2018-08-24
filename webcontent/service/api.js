/*
 * @Author: lichangjun 
 * @Date: 2018-08-25 00:19:41 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-25 00:22:42
 */

let prefix = '/';
if (process.env.NODE_ENV == "dev") {
    prefix = ''
}
let Api = {
    index: {
        list: prefix + 'index/list/index.json'
    },
    demo: {
        list: 'xx/xx/xx.json',
        detail: 'xx/xx/xx.json'
    }
}

module.exports = Api;