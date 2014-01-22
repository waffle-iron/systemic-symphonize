/**
 * Created by Adron on 12/30/13.
 * Description: Purpose of this function is to provide the symphony
 *  for the orchestra of orchestrate.io.
 */

var Chance = require('chance');
var chance = new Chance();

function Symphonize(generation_spec) {
    if (generation_spec.count === undefined || generation_spec.count < 1) {
        generation_spec.count = 1;
    }

    if (generation_spec.write_source === undefined || generation_spec.write_source === "") {
        generation_spec.write_source = "console";
    }

    this._generation_spec = generation_spec;
}

function build_random_records(recordCount, keyValues, fields) {
    for (var i = 0; i < recordCount; i++) {
        keyValues.push(generateKeyValue(fields));
    }
}

function generateKeyValue(fields) {

    var valueJSON = {};

    for (var i = 0; i < fields.length; i++) {
        valueJSON[fields[i]] = chance.sentence();
    }

    var generatedResult = {
        "key": chance.guid(),
        "value": [ valueJSON ]
    };

    return generatedResult;
}

function dump_to_write_source() {

}

Symphonize.prototype.get_specification = function () {
    return this._generation_spec;
}

Symphonize.prototype.generate = function () {
    var keyValues = new Array();
    var recordCount = 1;
    var fields = new Array();

    // Generate X amount of records. **
    if (this._generation_spec.count > 0) {
        recordCount = this._generation_spec.count;
    }

    // These many fields with the respective name
    // in the value JSON data.
    if (this._generation_spec.fields === undefined) {
        fields.push('text_value');
    } else {
        fields = this._generation_spec.fields.split(',');
    }

    // **
    build_random_records(recordCount, keyValues, fields);

    dump_to_write_source();

    return keyValues;
}

module.exports = Symphonize;
