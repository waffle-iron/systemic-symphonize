/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

// Specs for testing.
var default_key_value_spec = {"schema": "keyvalue"};
var gen_spec_key_value_20 = {"schema": "keyvalue", "count": 20};

describe('the default key value generation', function () {

    it('should construct through constructor given invocation.', function () {
        var symphonize = new Symphonize(default_key_value_spec);
        symphonize.should.exist;
    })

    it('should return generated data given an empty spec.', function () {
        var symphonize = new Symphonize(default_key_value_spec);
        symphonize.generate().should.exist;
    })

    it('should return one key value result.', function () {
        var symphonize = new Symphonize(default_key_value_spec);
        var keyValue = symphonize.generate();

        keyValue[0].key.should.exist;
        keyValue[0].value.should.exist;
    })

    it('should generate X records', function () {
        var symphonize = new Symphonize(gen_spec_key_value_20);
        var result = symphonize.generate();
        result.length.should.eql(20);
    })
})
