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

var spec_count = 5, spec_fields = 'writing,great,awesome';
var spec_fields_count = spec_fields.split(',').length;
var gen_spec_key_value_additional = {"schema": "keyvalue", "count": spec_count, "fields": spec_fields};

describe('the key value generation additional properties', function () {

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

    it('should have ' + spec_fields_count + ' fields.', function () {
        var symphonize = new Symphonize(gen_spec_key_value_additional);
        var result = symphonize.generate();

        for (var i = 0; i < result.length; i++) {
            var generated_data_result = result[i].value[0];
            var propNames = Object.getOwnPropertyNames(generated_data_result);
            propNames.length.should.eql(spec_fields_count);
        }

        result.should.exist;
    })
})