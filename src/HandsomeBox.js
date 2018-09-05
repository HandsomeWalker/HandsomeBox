let isObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
}
let isString = function(str) {
    return Object.prototype.toString.apply(str) === '[object String]';
}
let isDate = function(date) {
    return date instanceof Date;
}
let set_cookie = function(key, value, expire) {

}
let set_localStorage = function(key, value, expire) {

}
let set_sessionStorage = function(key, value, expire) {

}
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
        isObject: isObject,
        isString: isString,
        isDate: isDate,
        /**
         * @param {object} instance
         */
        bind: function(instance) {
            if(this.name in instance) {
                throw new Error('existing name! please use other name...');
            }else {
                instance[this.name] = this;
            }
            return this;
        },
        /**
         * get data
         * @param {string} key
         */
        get: function(key) {
            if(_private[this.name] === undefined) {
                return _private;
            }
            if(this.isString(key)) {
                if(_private[this.name][key]) {
                    return _private[this.name][key]['value'];
                }else {
                    return _private[this.name][key];
                }
            }
            return _private;
        },
        /**
         * set data
         * @param {string} key
         * @param {*} value
         * @param {object} options
         */
        set: function(key, value, options) {
            _private[this.name] || (_private[this.name] = Object.create(null));
            let opts = {
                mode: 'scope',
                expire: ''
            };
            this.isObject(options) && (Object.assign(opts, options));
            opts.value = value;
            _private[this.name][key] = opts;
            return this;
        },
        clear: function() {
            _private[this.name] = Object.create(null);
            return this;
        },
    };
}());
export default Walker;
