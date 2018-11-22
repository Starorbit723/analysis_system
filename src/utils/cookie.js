/*
  cookie JS
  author: Michael Fang
*/

// 设置cookie
const setCookie = function (name, value, days) { 
    let exp = new Date()
    exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000) 
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString()
}

//读取cookie
const getCookie = function (name) { 
    let arr
        reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    if (arr === document.cookie.match(reg)) {
        return unescape(arr[2])
    } else { 
        return null
    }
} 

//删除cookie
const deletCookie = function (name) { 
    let exp = new Date()
    exp.setTime(exp.getTime() - 1)
    let cval = getCookie(name)
    if (cval !== null) {
      document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString() 
    }       
}

export {
  setCookie,
  getCookie,
  deletCookie
}
