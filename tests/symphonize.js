/**
 * Created by adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

var gen_spec_key_value = {
    "Schema": "KeyValue",
    "Count": 20
}

var gen_spec_key_value = {
    "Schema": "KeyValue",
    "Count": 10,
    "ValueSetPairs": 4,
    "SetPairs": {
        "Pair1": "d10",
        "Pair2": "guid",
        "Pair3": "email",
        "Pair4": "address"
    }
};

var gen_spec_graph = {
    "Schema": "Graph",
    "Count": 3
};

describe('the general spec', function () {
    describe('for key value', function () {
        it('should construct through constructor given invocation.', function () {
            var symphonize = new Symphonize(gen_spec_key_value);
            symphonize.should.exist;
        })
    })
})

describe('the general spec', function () {
    describe('for key value', function () {
        it('should return an appropriate value given no parameters.', function () {
            var symphonize = new Symphonize(gen_spec_key_value);
            var result = symphonize.generate_spec();
            result.should.exist;
        })
    })
})




