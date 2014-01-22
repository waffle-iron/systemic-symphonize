/**
 * Created by Adron on 1/6/14.
 * Description: Tests for determining reads, writes and deletes to Orchestrate.io
 */

var should = require('should');
var Chance = require('chance');
var Dispenser = require('../bin/dispenser');
var chance = new Chance();

var orchestrate_key_holder = require("../key/orchestrate_key");
var key_holder = new orchestrate_key_holder();
var db = require('orchestrate')(key_holder.access_key);

// Sample data for testing.
var data_result_1 = {
    "key": chance.guid(),
    "value": {
        "name": chance.name(),
        "bio": chance.paragraph({sentences: 1})
    }
};
var data_result_2 = {
    "key": chance.guid(),
    "value": {
        "name": chance.name(),
        "bio": chance.paragraph({sentences: 1})
    }
};

var data_result_Array = new Array();
data_result_Array.push(data_result_1);
data_result_Array.push(data_result_2);

describe('the dispenser to the console', function () {
    var dispenser = new Dispenser('console');

    it('should have a value set to console if passed console.', function () {
        dispenser._write_to.should.eql('console');
    })
})

describe('the dispenser to orchestrate.io', function () {

    var dispenser_orchestrate = new Dispenser('orchestrate');

    it('should have a value set to orchestrate if passed orchestrate.', function () {
        dispenser_orchestrate._write_to.should.eql('orchestrate');
    })

    it('should write passed in data to orchestrate.io.', function (done) {

        var result = dispenser_orchestrate.write_it(data_result_Array);

        done();
        result.should.eql(true);
    });
})
