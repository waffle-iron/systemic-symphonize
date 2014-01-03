var Chance = require('chance'),
    chance = new Chance(),
    multi_gen = require('./multi_gen'),
    exports = Symphonize;

function Symphonize(generation_specification) {
    this.gen_spec = generation_specification;
}

Symphonize.prototype.act_on_object = function () {
    // This function generates data based on the received specification.
    // To learn more about the specification check out this link:
    //   https://github.com/Adron/symphonize/wiki/Json-format-for-configuration-based-data-generation.
    this.gen_spec = "blagh";

    return this.gen_spec;
}
