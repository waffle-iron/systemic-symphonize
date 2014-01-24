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
var spec_with_collection = {"collection": "composer"};
var spec_with_write_source = {"write_source": "orchestrateio"};
var spec_with_alt_settings = {"schema": "graph", "count": 15, "write_source": "orchestrateio", "collection": "composer"};

// Testing object.
var symphonize_minimal_spec = new Symphonize(minimal_spec);

describe('the default key value generation specification defaults', function () {
    it('should be set to "console" by default for the write_source.', function () {
        symphonize_minimal_spec.get_specification().write_source.should.eql('console');
    })
    it('should be set to "keyvalue" by default for the schema.', function () {
        symphonize_minimal_spec.get_specification().schema.should.eql('keyvalue');
    })
    it('should have a minimum count of 1 by default for data to generate.', function () {
        symphonize_minimal_spec.get_specification().count.should.eql(1);
    })
    it('should have a default collection named "sample_data".', function () {
        symphonize_minimal_spec.get_specification().collection.should.eql('sample_data');
    })
})

var symphonize_spec_with_alt_settings = new Symphonize(spec_with_alt_settings);

describe('the specification values should be set', function () {
    it('should the write_source be changed from console.', function () {
        symphonize_spec_with_alt_settings.get_specification().write_source.should.eql('orchestrateio');
    })
})