/*
 * @Author: lichangjun 
 * @Date: 2018-08-25 00:19:41 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-29 01:42:11
 */
console.log(process.env.NODE_ENV);
let prefix = '/';
if (process.env.NODE_ENV == "dev") {
    prefix = ''
}
let Api = {
    index: {
        list: prefix + 'api/index/list',
        demo: prefix + 'api/address'
    },
    demo: {
        list: 'xx/xx/xx.json',
        detail: 'xx/xx/xx.json'
    }
}

module.exports = Api;