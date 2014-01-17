require("mocha-as-promised")();

var orchestrate_holder = require("../key/orchestrate_key");
var key_holder = new orchestrate_holder();
var orchestrate_key = key_holder.access_key;
var db = require('orchestrate')(orchestrate_key);

// Data to test with.
var collection = 'musician';
var key = "1";
var value = {
    "name": "Alfred Palfred",
    "bio": "Alfred just does cool stuff."
};

describe('the orchestrate client', function () {
    it('should exist when constructed.', function () {
        db.should.exist;
    })
    it('should put the data.', function (done) {
        db.put(collection, key, value)
            .then(function (result) {

            })
            .fail(function (err) {

            })
    })
    it('should have a result.', function (done) {
        db.get(collection, key)
            .then(function (result) {
                result.should.exist;
                done();
            })
            .fail(function (err) {
                err.should.not.exist;
                done();
            })
    })
})
