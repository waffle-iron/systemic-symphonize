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
    it('should have a key.', function () {

        var dba = db;

        var promiseThing = db.get(collection, key)
            .then(function (result) {
                console.log(result);
            })
            .fail(function (err) {
                console.log(err);
            })
            .fin(function (blugh) {
                console.log(blugh);
            });

        var promise = promiseThing;
    })
})
