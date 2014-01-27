var should = require('should');
var Symphonize = require('../bin/symphonize');

// Spool up the database & connection.
var orchestrate_holder = require("../key/orchestrate_key");
var key_holder = new orchestrate_holder();
var orchestrate_key = key_holder.access_key;
var db = require('orchestrate')(orchestrate_key);

// Data to test with.
var collection = 'musician';
var key = "1";
var value = {
    "name": "Adron Hall",
    "bio": "That's me!!!"
};

describe('the orchestrate client', function () {

    it('should exist when constructed.', function () {
        db.should.exist;
    })

    it('should put the data.', function (done) {
        db.put(collection, key, value)
            .then(function (result) {
                result.should.exist;
                done();
            })
            .fail(function (err) {
                err.should.not.exist;
                done();
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

    it('should work with static data to prove out process of adding records.', function (done) {
        db.put('turkey','9C537CC1-8735-512D-9593-CCB6D71247A2',{"text_value":"Saz noletjit eviobbet esuwidur ojse tocme hitaleh wiud kaci ramvas rogokgo faehcij."})
            .then(function(result){
                db.get('turkey', '9C537CC1-8735-512D-9593-CCB6D71247A2')
                    .then(function (result) {
                        result.body[text_value].should.exist;
                        done();
                    })
            })
            .fail(function(err){
                err.should.not.exist;
                done();
            })
    })

    it('should delete collection turkey that was statically created. #notGoodTestDesign', function (done) {
        db.deleteCollection('turkey')
            .then(function (result) {
                result.body.should.eql("");
                done();
            });
    })

    it('should have no active collection called turkey. #notGoodTestDesign', function (done) {
        db.get('turkey', '9C537CC1-8735-512D-9593-CCB6D71247A2')
            .then(function (result) {
                result.body.should.not.exist;
                done();
            })
    })
})

describe('verify spec created data is in orchestrate', function () {

    var write_src = {"write_source":"orchestrateio"};
    var write_src_fields = {"write_source":"orchestrateio","fields":"field1,field2,field3,field4,field5,end-field,last_field"};

    it('should work with static test data to prove out process.', function (done) {


    })

    it('should make a collection named sample_data generate data with multiple fields and put the data in.', function (done) {
        var symphonize = new Symphonize(write_src_fields);
        symphonize.generate();

        var dataReturned = 0;

        db.search('sample_data','*')
            .then(function (result) {
                dataReturned = result.body.count;
                done();
            })
            .fail(function (err) {
                err.should.fail;
                done();
            })

        dataReturned.should.eql(1);
    })
})