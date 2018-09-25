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
export const set_cookie = function(key, value, expire) {

}
export const set_localStorage = function(key, value, expire) {

}
export const set_sessionStorage = function(key, value, expire) {

}
