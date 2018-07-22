let request = {
    //接口请求
    ajax(param) {
        var _this=this;
        $.ajax({
            type: param.type || "get",
            url: param.url || "",
            dataType: param.dataType || "json",
            success: function (res) {
                if(res.success){
                     typeof param.success=="function" && param.success(res);
                }else{
                    typeof param.error=="function" && param.error(res.message);
                }
            },
            error: function (err) {
                //typeof param.error=="function" && param.error(err);
                alert("服务器相应失败！");
               
            }

        })
    },
    login(){
        window.location.href="./login?redirect="+window.location.href
    }
}

module.exports = request;