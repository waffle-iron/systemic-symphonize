/**
 * Created by Adron on 12/30/13.
 * Description: Purpose of this function is to provide the symphony
 *  for the orchestra of orchestrate.io.
 */

var Chance = require('chance');
var chance = new Chance();
var Dispensator = require('../bin/dispenser');

// Constructor Invocator
function Symphonize(generation_spec) {
    set_defaults(generation_spec);
    this._generation_spec = generation_spec;
}

Symphonize.prototype.get_specification = function () {
    return this._generation_spec;
}

Symphonize.prototype.generate = function () {
    var keyValues = new Array();
    var recordCount = 1;
    var fields_array = this._generation_spec.fields.split(',');
    var collection = this._generation_spec.collection;

    // Generate X amount of records. **
    if (this._generation_spec.count > 0) {
        recordCount = this._generation_spec.count;
    }

    // **
    build_random_records(recordCount, keyValues, fields_array);
    dump_to_write_source(keyValues, collection, this._generation_spec.write_source);

    return keyValues;
}

function set_defaults(generation_spec) {
    if (generation_spec.count === undefined || generation_spec.count < 1) {
        generation_spec.count = 1;
    }
    if (generation_spec.write_source === undefined || generation_spec.write_source === "") {
        generation_spec.write_source = "console";
    }
    if (generation_spec.schema === undefined || generation_spec.schema === "") {
        generation_spec.schema = 'keyvalue';
    }
    if (generation_spec.collection === undefined || generation_spec.collection === "") {
        generation_spec.collection = 'sample_data';
    }
    // These many fields with the respective name
    // in the value JSON data.
    if (generation_spec.fields === undefined || generation_spec.fields.length < 1) {
        generation_spec.fields = 'text_value';
    }
}

function build_random_records(recordCount, keyValues, fields) {
    for (var i = 0; i < recordCount; i++) {
        keyValues.push(generateKeyValue(fields));
    }
}

function generateKeyValue(fields_array) {
    var valueJSON = {};

    for (var i = 0; i < fields_array.length; i++) {
        valueJSON[fields_array[i]] = chance.sentence();
    }

    var generatedResult = {
        "key": chance.guid(),
        "value": valueJSON
    };

    return generatedResult;
}

function dump_to_write_source(keyValues, collection, write_source) {
    dispensator = new Dispensator(write_source);
    dispensator.write_it(keyValues, collection);
}

module.exports = Symphonize;