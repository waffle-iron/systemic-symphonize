/**
 * Created by Adron on 1/6/14.
 * Description: Tests for determining reads, writes and deletes to Orchestrate.io
 */

var should = require('should');
var Chance = require('chance');
var Dispenser = require('../bin/dispenser');
var chance = new Chance();

// Sample data for testing.
var data_result_1 = {
    "key": chance.guid(),
    "value": chance.paragraph({sentences: 1})
};

var data_result_Array = new Array();
data_result_Array.push(data_result_1);

describe('the dispenser', function () {

    var dispenser = new Dispenser('console');

    it('should have a value set to console if passed console.', function () {
        dispenser._write_to.should.eql('console');
    })
    it('should write passed in data to the console.', function () {
        dispenser.write_it(data_result_Array).should.eql('success');
    })

    var dispenser_orchestrate = new Dispenser('orchestrate');

    it('should have a value set to orchestrate if passed orchestrate.', function () {
        dispenser_orchestrate._write_to.should.eql('orchestrate');
    })
})
