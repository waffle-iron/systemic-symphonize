/**
 * Created by Adron on 2/2/14.
 * Functional integration tests for reading and writing verification to Orchestrate.io.
 */

var should = require('should');
var Dispenser = require('../bin/dispenser');

// Sample data for testing.
var json_data = {
    "key": "54B073F0-5D29-47EF-A081-62E43FF18410",
    "value": {
        "name": "Thomas Frank",
        "bio": "Some story to tell goes here."
    }
};

describe('the dispenser for the console', function () {

    var dispenser = new Dispenser('console');

//    it('should write passed in data to the console.', function () {
//    })
})
