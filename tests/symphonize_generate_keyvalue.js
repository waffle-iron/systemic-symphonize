/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');
var default_keyvalue_spec = {"schema": "keyvalue"};

describe('the default keyvalue generation', function () {
    it('should determine that it is generating a key value schema.', function () {
        var symphonize = new Symphonize(default_keyvalue_spec);
        var result = symphonize.generating_schema();
        result.should.eql("keyvalue");
    })
    it('should construct through constructor given invocation.', function () {
        var symphonize = new Symphonize(default_keyvalue_spec);
        symphonize.should.exist;
    })
    it('should return generated data given an empty spec.', function () {
        var symphonize = new Symphonize(default_keyvalue_spec);
        symphonize.generate().should.exist;
    })
    it('should return one key value result.', function () {
        var symphonize = new Symphonize(default_keyvalue_spec);
        var keyValue = symphonize.generate();

        keyValue.key.should.exist;
        keyValue.value.should.exist;
    })
})
