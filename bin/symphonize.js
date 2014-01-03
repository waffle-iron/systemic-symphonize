function Symphonize(generation_spec) {
    this._generation_spec = generation_spec;
}

Symphonize.prototype.generate_spec = function () {
    return this._generation_spec;
}

module.exports = Symphonize;
