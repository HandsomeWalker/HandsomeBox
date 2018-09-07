const expect = require('chai').expect;
const utils = require('../src/utils.js');

describe('工具函数测试', function () {
    it('isObject', function() {
        expect(utils.isObject({})).to.be.equal(true);
    })
    it('isString', function() {
        expect(utils.isString(2)).to.be.equal(false);
    })
    it('isDate', function() {
        expect(utils.isDate(new Date())).to.be.equal(true);
    })
})
