const expect = require('chai').expect;
const utils = require('../src/methods/utils.js');

describe('工具函数测试', function () {
    it('isObject', function() {
        expect(utils.isObject({})).to.be.equal(true);
    })
    it('isString', function() {
        expect(utils.isString(2)).to.be.equal(false);
    })
    it('isNumber', function() {
        expect(utils.isNumber(-5)).to.be.equal(true);
    })
})
