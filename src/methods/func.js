'use strict';
import * as U from './utils';
export const checkMode = function(mode) {
    if(!U.isUndefined(mode)) {
        if(!U.isString(mode)) {
            throw new Error('options.mode must be string type');
        }
    }
}
export const checkExpire = function(expire) {
    if(!U.isUndefined(expire)) {
        if(!U.isNumber(expire)) {
            throw new Error('options.expire must be number type');
        }
    }
}
export const set_cookie = function(key, value, options) {
    var expires;
    if(options.expire) {
        var d = new Date(options.expire);
        expires = "; expires=" + d.toGMTString();
    }
    if(U.isObject(value) || U.isArray(value)) {
        var stringify = JSON.stringify(value);
    }
    document.cookie = key + "=" + (stringify || value) + (expires || '');
}
export const get_cookie = function(key) {
    var name = key + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        };
    }
    return "";
}
export const delete_cookie = function(key) {
    set_cookie(key, '', {expire: -1});
}
export const set_localstorage = function(key, value, options) {

}
export const set_sessionstorage = function(key, value, options) {

}
export const set_indexeddb = function(key, value, options) {

}
export const set_websql = function(key, value, options) {

}
