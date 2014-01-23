/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the specification itself.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

// Specs for testing.
var minimal_spec = {};
var spec_with_keyvalue = {"schema": "keyvalue"};
var spec_with_graph = {"schema": "graph"};
var spec_with_count = {"schema": "keyvalue", "count": 20};

// Testing object.
var symphonize_minimal_spec = new Symphonize(minimal_spec);

describe('the default key value generation specification defaults', function () {
    it('should be set to "console" by default for the write_source.', function () {
        symphonize_minimal_spec.get_specification().write_source.should.eql('console');
    })
    it('should be set to "keyvalue" by default for the schema.', function () {
        symphonize_minimal_spec.get_specification().schema.should.eql('keyvalue');
    })
    it('should be set to "console" by default for the write_source.', function () {
        symphonize_minimal_spec.get_specification().write_source.should.eql('console');
    })


})


