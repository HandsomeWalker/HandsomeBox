import * as U from './utils';
import * as F from './func';

const M = {
    // utils
    isObject: U.isObject,
    isString: U.isString,
    isOverDate: U.isOverDate,
    isNumber: U.isNumber,
    isUndefined: U.isUndefined,
    checkArgumentsNum: U.checkArgumentsNum,
    decorate: U.decorate,
    // func
    checkMode: F.checkMode,
    checkExpire: F.checkExpire,
    set_cookie: F.set_cookie,
    set_localstorage: F.set_localstorage,
    set_sessionstorage: F.set_sessionstorage,
    set_indexeddb: F.set_indexeddb,
    set_websql: F.set_websql
}
Object.freeze(M);
export default M
