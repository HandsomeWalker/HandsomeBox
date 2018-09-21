import * as U from './utils';
import * as F from './func';

const M = {
    // utils
    isObject: U.isObject,
    isString: U.isString,
    isOverDate: U.isOverDate,
    isNumber: U.isNumber,
    isUndefined: U.isUndefined,
    // func
    checkMode: F.checkMode,
    checkExpire: F.checkExpire,
    checkArgumentsNum: F.checkArgumentsNum,
    decorate: F.decorate,
    set_cookie: F.set_cookie,
    set_localStorage: F.set_localStorage,
    set_sessionStorage: F.set_sessionStorage,
}
Object.freeze(M);
export default M
