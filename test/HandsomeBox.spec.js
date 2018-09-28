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
    it('isUndefined', function() {
        expect(utils.isUndefined(null)).to.be.equal(false);
    })
    it('isOverDate', function() {
        expect(utils.isOverDate(Date.now() + 1111111)).to.be.equal(false);
    })
    it('checkArgumentsNum', function() {
        expect(utils.checkArgumentsNum(1, 1, 1, 2)).to.be.equal(true);
    })
})
