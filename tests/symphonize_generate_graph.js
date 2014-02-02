///**
// * Created by Adron on 12/30/13.
// * Description: Tests for the specifications.
// */
//
//var should = require('should');
//var Symphonize = require('../bin/symphonize');
//
//var gen_spec_key_value = {
//    "schema": "keyvalue"
//}
//
//describe('the generation specification', function () {
//
//    var symphonize = new Symphonize(gen_spec_key_value);
//    var specifications = symphonize.get_specification();
//
//    it('should construct through constructor given invocation.', function () {
//        symphonize.should.exist;
//    })
//    it('should have specifications.', function () {
//        symphonize.get_specification().should.exist;
//    })
//    it('should have an appropriate schema specification as assigned.', function () {
//        specifications.schema.should.eql("keyvalue");
//    })
//    it('should have an appropriate count for the default unspecificed value.', function () {
//        specifications.count.should.eql(1);
//    })
//    it('should have an appropriate write to source for the default unspecificed value.', function () {
//        specifications.write_source.should.eql("console");
//    })
//})
//
//var schema = "graph", count = 324000, write_source = "neo4j";
//
//var gen_spec = {
//    "schema": schema,
//    "count": count,
//    "write_source": write_source
//}
//
//describe('the generation specification with non-defaults', function () {
//
//    var symphonize = new Symphonize(gen_spec);
//    var specifications = symphonize.get_specification();
//
//    it('should have an appropriate schema based on passed in value.', function () {
//        specifications.schema.should.eql(schema);
//    })
//    it('should have an appropriate count based on passed in value.', function () {
//        specifications.count.should.eql(count);
//    })
//    it('should have an appropriate write based on passed in value.', function () {
//        specifications.write_source.should.eql(write_source);
//    })
//})