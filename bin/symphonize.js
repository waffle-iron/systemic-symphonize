/**
 * Created by Adron on 12/30/13.
 * Description: Purpose of this function is to provide the symphony
 *  for the orchestra of orchestrate.io. This
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

Symphonize.prototype.generate = function () {
    var keyValue = {
        "key": chance.guid(),
        "value": chance.paragraph({sentences: 1})
    };

    return keyValue;
}

module.exports = Symphonize;
