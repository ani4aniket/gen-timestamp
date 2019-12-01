'use strict';

var expect = require('chai').expect;
var timestamp = require('../index');

describe('#getTimestamp', function() {
    it('should get timestamp', function() {
        var result = timestamp();
        expect(result).to.be.a('number');
    });
});