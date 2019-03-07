import * as U from './utils';
import * as F from './func';

const M = {
    // utils
    handsomeError: U.handsomeError,
    isObject: U.isObject,
    isArray: U.isArray,
    isString: U.isString,
    isOverDate: U.isOverDate,
    isNumber: U.isNumber,
    isUndefined: U.isUndefined,
    isJson: U.isJson,
    simpleDeepCopy: U.simpleDeepCopy,
    checkArgumentsNum: U.checkArgumentsNum,
    decorate: U.decorate,
    // func
    checkMode: F.checkMode,
    checkExpire: F.checkExpire,
    set_cookie: F.set_cookie,
    get_cookie: F.get_cookie,
    delete_cookie: F.delete_cookie,
    set_localstorage: F.set_localstorage,
    get_localstorage: F.get_localstorage,
    delete_localstorage: F.delete_localstorage,
    set_sessionstorage: F.set_sessionstorage,
    get_sessionstorage: F.get_sessionstorage,
    delete_sessionstorage: F.delete_sessionstorage,
    set_indexeddb: F.set_indexeddb,
    get_indexeddb: F.get_indexeddb,
    delete_indexeddb: F.delete_indexeddb,
    set_websql: F.set_websql,
    get_websql: F.get_websql,
    delete_websql: F.delete_websql,
}
Object.freeze(M);
export default M
