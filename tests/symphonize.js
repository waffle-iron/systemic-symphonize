/**
 * Created by adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */
// Pull local requires and test em'.
var assert = require("assert")
var symphonize = require('../bin/symphonize');

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

describe('the spec', function () {
    describe('for key value', function () {
        it('should return appropriate default of 10 when no count is given.', function () {
            assert.equal(gen_spec_key_value.KeyValue, "Yes");
        })

    })
})


//blu = new Symphonize({"gen":"stuff"});
