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

describe('the dispenser for orchestrate.io', function () {

    var dispenser_orchestrate = new Dispenser('orchestrateio', 'integration_tests');

    it('should write passed in data to orchestrate.io.', function (done) {
        var result = dispenser_orchestrate.write_it(json_data);

        done();
        result.should.eql(true);
    });
})
