/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the multi_gen code.
 */

var should = require('should');
var Symphonize = require('../bin/symphonize');

// Specs for testing.
var default_key_value_spec = {"schema": "keyvalue"};
var minimal_spec = {};
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

    it('should return one even with minimal spec.', function () {
        var symphonize = new Symphonize(minimal_spec);
        var keyValue = symphonize.generate();

        keyValue[0].should.exist;
        keyValue[0].key.should.exist;
        keyValue[0].value.should.exist;
    })

    it('should generate X records', function () {
        var symphonize = new Symphonize(gen_spec_key_value_20);
        var result = symphonize.generate();
        result.length.should.eql(20);
    })

})

var spec_count = 5, spec_fields = 'writing,great,awesome';
var spec_fields_count = spec_fields.split(',').length;
var gen_spec_key_value_additional = {
    "schema": "keyvalue",
    "count": spec_count, "fields": spec_fields};
// Arbitrary tests specs.
var spec_write_src_fields = {
    "write_source": "console",
    "fields": "field1,field2,field3,field4,field5,end-field,last_field"};
var spec_fields = {
    "fields": "SomeString,MoreString,GotD20,GuidValue"
}

describe('given different field and parameters data should generated', function () {


    it('should have appropriate fields count.', function () {
        var symphonize = new Symphonize(spec_write_src_fields);
        symphonize.get_specification().fields.split(",").length.should.eql(7);
    })

    it('should generate 1 record.', function () {
        var symphonize = new Symphonize(spec_write_src_fields);
        var result = symphonize.generate();
        result.length.should.eql(1);
    })

    it('should have 7 fields in the 1 record.', function () {
        var symphonize = new Symphonize(spec_write_src_fields);
        var result = symphonize.generate()[0];

        var asdf = result;
    })


})

describe('the key value generates additional properties', function () {

    it('should have ' + spec_count + ' fields for the value.', function () {
        var symphonize = new Symphonize(gen_spec_key_value_additional);
        var result = symphonize.generate();
        result.length.should.eql(spec_count);
    })

    it('should have ' + spec_fields_count + ' in the fields value.', function () {

        var sepcs = gen_spec_key_value_additional;

        var symphonize = new Symphonize(sepcs);
        var spec = symphonize.get_specification().fields;
        spec.split(',').length.should.eql(spec_fields_count);
    })

    // Test needs fixed.
//    it('should have ' + spec_fields_count + ' fields.', function () {
//        var symphonize = new Symphonize(gen_spec_key_value_additional);
//        var result = symphonize.generate();
//
//        for (var i = 0; i < result.length; i++) {
//            var generated_data_result = result[i].value[0];
//            var propNames = Object.getOwnPropertyNames(generated_data_result);
//            propNames.length.should.eql(spec_fields_count);
//        }
//
//        result.should.exist;
//    })
})