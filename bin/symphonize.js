/**
 * Created by Adron on 12/30/13.
 * Description: Purpose of this function is to provide the symphony
 *  for the orchestra of orchestrate.io.
 */

var Chance = require('chance');
var chance = new Chance();

function Symphonize(generation_spec) {
    this._generation_spec = generation_spec;

    if (this._generation_spec.schema != 'keyvalue' && this._generation_spec.schema != 'graph') {
        throw Error("Generator only generates key value or graph data currently.");
    }
}

Symphonize.prototype.generating_schema = function () {
    return this._generation_spec.schema;
}

Symphonize.prototype.generate_spec = function () {
    return this._generation_spec;
}

function get_record_count(recordCount) {
    if (this._generation_spec.count > 0) {
        recordCount = this._generation_spec.count;
    }
    return recordCount;
}

function build_random_records(recordCount, keyValues) {
    for (var i = 0; i < recordCount; i++) {
        keyValues.push(generateKeyValue());
    }
}

Symphonize.prototype.generate = function () {
    var keyValues = new Array();
    var recordCount = get_record_count.call(this, recordCount);

    build_random_records(recordCount, keyValues);

    return keyValues;
}

function generateKeyValue() {
    return {
        "key": chance.guid(),
        "value": chance.paragraph({sentences: 1})
    };
}

module.exports = Symphonize;
