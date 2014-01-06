/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

var gen_spec_key_value_20 = {
    "schema": "keyvalue",
    "count": 20
}

var gen_spec_key_value = {
    "schema": "keyvalue",
    "count": 10,
    "valueSetPairs": 4,
    "setPairs": {
        "Pair1": "d10",
        "Pair2": "guid",
        "Pair3": "email",
        "Pair4": "address"
    }
};

describe('the general spec', function () {
    it('should construct through constructor given invocation.', function () {
        var symphonize = new Symphonize(gen_spec_key_value_20);
        symphonize.should.exist;
    })
    it('should return an appropriate value given no parameters.', function () {
        var symphonize = new Symphonize(gen_spec_key_value_20);
        var result = symphonize.generate_spec();
        result.should.exist;
    })
    it('should generate X records', function () {
        var symphonize = new Symphonize(gen_spec_key_value_20);
        var result = symphonize.generate();
        result.length.should.eql(20);
    })
})
