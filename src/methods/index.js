import {
    isObject, isString, isOverDate, isNumber, isUndefined,
} from './utils';
import {
    set_cookie, set_localStorage, set_sessionStorage
} from './func';

export default {
    isObject: isObject,
    isString: isString,
    isOverDate: isOverDate,
    isNumber: isNumber,
    isUndefined: isUndefined,
    set_cookie: set_cookie,
    set_localStorage: set_localStorage,
    set_sessionStorage: set_sessionStorage
}
