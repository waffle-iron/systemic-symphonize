var Chance = require('chance'),
    chance = new Chance(),
    multi_gen = require('./multi_gen'),
    symphonize = exports;

symphonize.generate_sample = function () {

}

symphonize.generate = function (gen_spec) {
    // This function generates data based on the received specification.
    // To learn more about the specification check out this link:
    //   https://github.com/Adron/symphonize/wiki/Json-format-for-configuration-based-data-generation.

}

symphonize.idents_generate = function (count) {
    return multi_gen.gen(count, this);
}