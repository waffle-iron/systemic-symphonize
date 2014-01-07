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

function build_random_records(recordCount, keyValues) {
    for (var i = 0; i < recordCount; i++) {
        keyValues.push(generateKeyValue());
    }
}

function generateKeyValue() {
    return {
        "key": chance.guid(),
        "value": chance.paragraph({sentences: 1})
    };
}

function dump_to_write_source() {

}

Symphonize.prototype.get_specification = function () {
    return this._generation_spec;
}

Symphonize.prototype.generate = function () {
    var keyValues = new Array();
    var recordCount = 1;

    if (this._generation_spec.count > 0) {
        recordCount = this._generation_spec.count;
    }

    build_random_records(recordCount, keyValues);

    dump_to_write_source();

    return keyValues;
}

module.exports = Symphonize;
