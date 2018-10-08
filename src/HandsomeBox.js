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
                throw new Error('existing name! please use other name...');
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
                throw new Error('key must be string type!');
            }
            res = M.simpleDeepCopy(_private[this.name][key]);
            if(!M.isUndefined(res)) {
                if(M.isOverDate(res['expire'])) {
                    res = undefined;
                    delete _private[this.name][key];
                    if(res.mode !== 'scope') {
                        M[`delete_${res.mode}`](key);
                    }
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
                M[`set_${opts.mode}`] && M[`set_${opts.mode}`](key, value, opts);
            }
            _private[this.name][key] = opts;
            return this;
        }, M.checkArgumentsNum, 2),
        /**
         * delete data
         * @param {string} key
         */
        deleteItem: M.decorate(function() {
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
        clear: function() {
            _private[this.name] = Object.create(null);
            return this;
        },
    };
}());
export default Walker;
