let isObject = function(obj) {
    return Object.prototype.toString.apply(obj) === '[object Object]';
}
/**
 *
 * @param {string} name
 */
function Walker(name) {
    this.name = name;
}
Walker.prototype = (function() {
    let _private = Object.create(null);
    return {
        isObject: isObject,
        bind: function(instance) {
            if(instance[this.name]) {
                throw new Error('existing name! please use other name...');
            }else {
                instance[this.name] = this;
            }
            return this;
        },
        get: function(key) {
            if(key && typeof key === 'string') {
                return _private[key];
            }else {
                return _private;
            }
        },
        set: function(key, value, options) {
            let opts = {
                mode: 'scope',
                expire: ''
            };
            this.isObject(options) && (Object.assign(opts, options));
            _private[key] = value;
            return this;
        },
        clear: function() {
            _private = Object.create(null);
            return this;
        },
    };
}());
export default Walker;
