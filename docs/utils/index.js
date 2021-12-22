// 判断类型
export function getType(params) {
    return Object.prototype.toString.call(params).slice(8, -1)
}

//非空判断
export function isEmpty(value) {
    return value === '' || value === null || value === undefined || value === 'undefined' || value === 'null'
}
//判断手机号码
export function checkPhone(val) {
    const reg = /^1[3-9]\d{9}$/
    if (reg.test(val)) return true
    return false
}
// 获取当前时间
function getTime() {
    var date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
        minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
        second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    month >= 1 && month <= 9 ? (month = "0" + month) : "";
    day >= 0 && day <= 9 ? (day = "0" + day) : "";
    var timer = year + '-' + month + '-' + day + ' ' + hour + ':00';
    return timer
}

// 防抖动函数
function debounce(fn, wait = 50, immediate) {
    let timer;
    return function () {
        if (immediate) {
            fn.apply(this, arguments)
        }
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, wait)
    }
}
// 节流函数
function throttle(fn, wait) {
    let prev = new Date();
    return function () {
        const args = arguments;
        const now = new Date();
        if (now - prev > wait) {
            fn.apply(this, args);
            prev = new Date();
        }
    }
}