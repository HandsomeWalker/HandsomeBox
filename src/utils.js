exports.isObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
}
exports.isString = function(str) {
    return Object.prototype.toString.apply(str) === '[object String]';
}
exports.isDate = function(date) {
    return date instanceof Date;
}
