exports.isObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
}
exports.isString = function(str) {
    return Object.prototype.toString.apply(str) === '[object String]';
}
exports.isNumber = function(num) {
    return typeof num === 'number';
}
exports.isUndefined = function(foo) {
    return typeof foo === 'undefined';
}
exports.isOverDate = function(ms) {
    if(exports.isNumber(ms)) {
        if(ms === 0) {
            return false;
        }
        if(Date.now() - Math.abs(ms) > 0) {
            return true;
        }else {
            return false;
        }
    }else {
        return true;
    }
}
