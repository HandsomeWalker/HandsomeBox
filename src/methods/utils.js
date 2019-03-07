'use strict';
export const handsomeError = function(msg) {
    throw new Error(`HandsomeBox Error\n${msg}`);
}
export const isObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
}
export const isArray = function(array) {
    return Object.prototype.toString.apply(array) === '[object Array]';
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
export const isJson = function(json) {
    let res;
    try {
        res = JSON.parse(json);
    } catch(e) {
        res = json;
    }
    return res;
}
export const simpleDeepCopy = function(obj) {
    if(isObject(obj) || isArray(obj)) {
        return JSON.parse(JSON.stringify(obj));
    }else {
        return obj;
    }
}
export const isOverDate = function(ms) {
    if(isNumber(ms)) {
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
export const checkArgumentsNum = function() {
    let args = arguments,
        num = Array.prototype.pop.apply(arguments);
    if(args.length < num) {
        handsomeError('params num is not enough');
    }else {
        return true;
    }
}
export const decorate = function(target, decorator, decorator_params) {
    return function() {
        let args = [];
        for (let i = 0, len = arguments.length; i < len; i++) {
            args.push(arguments[i]);
        }
        decorator_params && args.push(decorator_params);
        decorator.apply(null, args);
        return target.apply(this, arguments);
    }
}
