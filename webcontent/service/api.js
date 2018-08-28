/*
 * @Author: lichangjun 
 * @Date: 2018-08-25 00:19:41 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-26 04:04:15
 */

let prefix = '/';
if (process.env.NODE_ENV == "dev") {
    prefix = ''
}
let Api = {
    index: {
        list: prefix + 'api/list/index.json'
    },
    demo: {
        list: 'xx/xx/xx.json',
        detail: 'xx/xx/xx.json'
    }
}

module.exports = Api;