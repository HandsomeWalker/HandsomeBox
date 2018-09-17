export const isObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
}
export const isString = function(str) {
    return Object.prototype.toString.apply(str) === '[object String]';
}
export const isNumber = function(num) {
    return typeof num === 'number';
}
export const isUndefined = function(foo) {
    return typeof foo === 'undefined';
}
export const isOverDate = function(ms) {
    if(isNumber(ms)) {
        if(ms === 0) {
            return false;
        }
        if(Date.now() - ms > 0) {
            return true;
        }else {
            return false;
        }
    }else {
        return true;
    }
}
