// 读取存储数据
function getStorage(key){
    if($.trim(key)){
        var res = "";
        if(typeof window.localStorage === "object"){
            if(localStorage.length > 0){
                var i = 0;
                for(; i < localStorage.length; i++){
                    if(localStorage.getItem(key)){
                        res = decodeURIComponent(localStorage.getItem(key));
                    }
                }
            }
            return res;
        }else{
            res = document.cookie.match(new RegExp("(^| )" + key + "=([^;]*)(;|$)"));
            if (res != null){
                return unescape(res[2]);
            }
            return "";
        }
    }
    return "";
}
// 设置存储数据
function setStorage(key, val){
    if($.trim(key)){
        if(typeof window.localStorage === "object"){
            localStorage.setItem(key, encodeURIComponent(val));
        }else{
            var cookie = key + "=" + escape(val);
            days = (typeof(days) == 'undefined' || days == 0) ? 3650 : days;// 过期时间，默认10年
            var exp = new Date();
            exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
            cookie = cookie + ";domain=.dangdang.com;path=/;expires=" + exp.toGMTString();
            document.cookie = cookie;
        }
    }
}
// 删除存储数据
function delStorage(key){
    if($.trim(key)){
        if(typeof window.localStorage === "object"){
            if(localStorage.length > 0 && key != ""){
                localStorage.removeItem(localStorage.key(key));
            }
        }else{
            var exp = new Date(),
                cval = getStorage(key);
            exp.setTime(exp.getTime() - 1);
            if(cval != null){
                document.cookie = key + "=" + cval + ";expires=" + exp.toGMTString();
            }
        }
    }
}
// 清除存储数据
function clearStorage(){
    if(typeof window.localStorage === "object"){
        localStorage.clear();
    }else{
        var key = document.cookie.match(/[^ =;]+(?=\=)/g);//console.log(key);
        if(key){
            for(var i = key.length - 1; i >= 0; i--){
                var exp = new Date(),
                    cval = getStorage(key[i]);
                exp.setTime(exp.getTime() - 1);
                document.cookie = key[i] + "=" + cval + ";expires=" + exp.toGMTString();
            }
        }
    }
}