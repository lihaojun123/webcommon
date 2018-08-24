/*
 * @Author: lichangjun 
 * @Date: 2018-08-25 00:30:56 
 * @Last Modified by: lichangjun
 * @Last Modified time: 2018-08-25 00:55:21
 */

class Request {
    //接口请求
    ajax(params) {
        let _this = this;
        let promise = new Promise(function (resolve, reject) {
            $.ajax({
                type: params.type || "get",
                url: params.url || "",
                data: params.data || {},
                dataType: params.dataType || "json",
                success() {
                    if (res.success) {
                        resolve(res)
                    } else {
                        reject(res);
                    }
                },
                error(err) {
                    reject(err);
                }
            })
        });
        return promise;
    }
    login() {
        window.location.href = "./login?redirect=" + window.location.href
    }
}
export default new Request();