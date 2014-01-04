/**
 * Created by Adron on 1/3/14.
 * Description: Test for error stats of Symphonize object.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

var default_keyvalue_spec = {"schema": "keyvalue"};

describe('the default keyvalue generation', function () {
    it('should determine an error for improper schema value.', function () {
        var symphonize = new Symphonize(default_keyvalue_spec);
        var result = symphonize.generating_schema();
        result.should.eql("keyvalue");
    })
})

