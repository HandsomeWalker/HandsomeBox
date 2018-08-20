var bind = function(instance) {
    if(instance[this.name]) {
        throw new Error('exist name! please use other name...');
    }else {
        instance[this.name] = this;
    }
}
function Walker(name, has_proto) {
    var _private;
    this.has_proto = has_proto;
    var _init = function() {
        this.has_proto ? (_private = {}) : (_private = Object.create(null));
    }
    _init.apply(this);
    var get = function(key) {
        if(key && typeof key === 'string') {
            return _private[key];
        }else {
            return _private;
        }
    }
    var set = function(key, value, options) {
        _private[key] = value;
        return this;
    }
    var clear = function() {
        _init.apply(this);
        return this;
    }
    this.name = name;
    this.bind = bind;
    this.set = set;
    this.get = get;
    this.clear = clear;
}
export default Walker;
