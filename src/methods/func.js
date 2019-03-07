'use strict';
import * as U from './utils';
const s = Symbol('sessionStorage');
const o = {[s]: true};
export const checkMode = function(mode) {
    if(!U.isUndefined(mode)) {
        if(!U.isString(mode)) {
            M.handsomeError('options.mode must be string type');
        }
    }
}
export const checkExpire = function(expire) {
    if(!U.isUndefined(expire)) {
        if(!U.isNumber(expire)) {
            M.handsomeError('options.expire must be number type');
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
            return U.isJson(c.substring(name.length, c.length));
        };
    }
    return "";
}
export const delete_cookie = function(key) {
    set_cookie(key, '', {expire: -1});
}
export const set_localstorage = function(key, value, options) {
    if(U.isObject(value) || U.isArray(value)) {
        var stringify = JSON.stringify(value);
    }
    options[s] ?
    sessionStorage.setItem(key, stringify || value) :
    localStorage.setItem(key, stringify || value);
}
export const get_localstorage = function(key, options) {
    let res;
    if(!options) {
        res = localStorage.getItem(key);
    }else  {
        res = sessionStorage.getItem(key);
    }
    return U.isJson(res);
}
export const delete_localstorage = function(key, options) {
    if(!options) {
        localStorage.removeItem(key);
    }else {
        sessionStorage.removeItem(key);
    }
}
export const set_sessionstorage = function(key, value, options) {
    set_localstorage(key, value, o);
}
export const get_sessionstorage = function(key) {
    return get_localstorage(key, o);
}
export const delete_sessionstorage = function(key) {
    delete_localstorage(key, o);
}
export const set_indexeddb = function(key, value, options) {

}
export const get_indexeddb = function(key) {

}
export const delete_indexeddb = function(key) {

}
export const set_websql = function(key, value, options) {

}
export const get_websql = function(key) {

}
export const delete_websql = function(key) {

}
