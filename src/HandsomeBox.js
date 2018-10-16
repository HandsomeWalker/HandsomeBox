'use strict';
import M from './methods/index';
/**
 *
 * @param {string} name
 */
function Walker(name) {
    this.name = name;
}
Walker.prototype = (function() {
    let _private = {};
    return {
        /**
         * @param {object} instance
         */
        bind: M.decorate(function() {
            let instance = arguments[0];
            if(this.name in instance) {
                M.handsomeError('existing name! please use other name...');
            }else {
                instance[this.name] = this;
            }
            return this;
        }, M.checkArgumentsNum, 1),
        /**
         * get data
         * @param {string} key
         * @param {bool} isGetAll
         */
        getItem: M.decorate(function() {
            let key = arguments[0],
                isGetAll = arguments[1],
                res;
            if(M.isUndefined(_private[this.name])) {
                return undefined;
            }
            if(!M.isString(key)) {
                M.handsomeError('when getting item, key must be string type!');
            }
            res = M.simpleDeepCopy(_private[this.name][key]);
            if(!M.isUndefined(res)) {
                if(M.isOverDate(res['expire'])) {
                    if(res.mode !== 'scope') {
                        M[`delete_${res.mode}`](key);
                    }
                    res = undefined;
                    delete _private[this.name][key];
                }else {
                    if(res.mode !== 'scope') {
                        res.value = M[`get_${res.mode}`](key);
                    }
                    !isGetAll && (res = res['value']);
                }
            }
            return res;
        }, M.checkArgumentsNum, 1),
        /**
         * set data
         * @param {string} key
         * @param {*} value
         * @param {object} options mode {string}, expire {number}
         */
        setItem: M.decorate(function() {
            let key = arguments[0],
                value = arguments[1],
                options = arguments[2];
            !M.isUndefined(_private[this.name]) || (_private[this.name] = Object.create(null));
            let opts = {
                mode: 'scope',
                expire: 0
            };
            if(M.isObject(options)) {
                M.checkMode(options.mode);
                M.checkExpire(options.expire);
                Object.assign(opts, options);
            }
            opts.mode = opts.mode.toLowerCase();
            opts.expire && (opts.expire = Math.abs(opts.expire));
            if(opts.mode === 'scope') {
                opts.value = value;
            }else {
                if(M.isUndefined(M[`set_${opts.mode}`])) {
                    M.handsomeError(`"${opts.mode}" this mode is not exist, plz refer api config`);
                }
                M[`set_${opts.mode}`](key, value, opts);
            }
            _private[this.name][key] = opts;
            return this;
        }, M.checkArgumentsNum, 2),
        /**
         * delete data
         * @param {string} key
         */
        removeItem: M.decorate(function() {
            let key = arguments[0],
            item = this.getItem(key, true);
            if(!M.isUndefined(item)) {
                if(_private[this.name][key]['mode'] !== 'scope') {
                    M[`delete_${_private[this.name][key]['mode']}`](key);
                }
                delete _private[this.name][key];
            }
            return this;
        }, M.checkArgumentsNum, 1),
        /**
         * clear all data
         */
        clear: function() {
            for (let key in _private[this.name]) {
                let item = _private[this.name][key];
                if(item.mode !== 'scope') {
                    M[`delete_${item.mode}`](key);
                }
            }
            _private[this.name] = Object.create(null);
            return this;
        },
        /**
         * list all data key
         * @returns {array} all data key array
         */
        list: function() {
            let res = [];
            for (let key in _private[this.name]) {
                res.push(key);
            }
            return res;
        },
    };
}());
export default Walker;
