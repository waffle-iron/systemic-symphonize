/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Chance = require('chance');
var chance = new Chance();
var Symphonize = require('../bin/symphonize');
var default_graph_spec = {"schema": "graph"};

describe('the default graph generation', function () {
    it('should determine that it is generating a graph schema.', function () {
        var symphonize = new Symphonize(default_graph_spec);
        var result = symphonize.generating_schema();
        result.should.eql("graph");
    })
    it('should generate two key value data elements that will be graphed together first.', function () {
        var symphonize = new Symphonize(default_graph_spec);
    })
})

describe('the default graph generation', function () {
    it('should construct through constructor given invocation.', function () {
        var symphonize = new Symphonize(default_graph_spec);
        symphonize.should.exist;
    })
})

describe('the default graph generation', function () {
    it('should return generated data given an empty spec.', function () {
        var symphonize = new Symphonize(default_graph_spec);
        symphonize.generate().should.exist;
    })
})

describe('the default graph generation', function () {
    it('should return one key value result.', function () {
        var symphonize = new Symphonize(default_graph_spec);
        var keyValue = symphonize.generate();

        keyValue[0].key.should.exist;
        keyValue[0].value.should.exist;
    })
})

