/**
 * Created by adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

var gen_spec_key_value = {
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

var gen_spec_graph = {
    "schema": "graph",
    "count": 3
};

describe('the general spec', function () {
    it('should construct through constructor given invocation.', function () {
        var symphonize = new Symphonize(gen_spec_key_value);
        symphonize.should.exist;
    })
})

describe('the general spec', function () {
    it('should return an appropriate value given no parameters.', function () {
        var symphonize = new Symphonize(gen_spec_key_value);
        var result = symphonize.generate_spec();
        result.should.exist;
    })
})




