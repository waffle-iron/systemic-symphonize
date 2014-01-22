/**
 * Created by Adron on 1/7/14.
 * Description: Tests for determining the key returns correctly and
 *  also this test acts as a reminder that the file needs to be
 *  in place for the code base to work against orchestrate.io.
 */

var should = require('should');
var Orchestrate_key = require('../key/orchestrate_key');

describe('the orchestrate key', function () {

    it('should exist when constructed.', function () {
        var orchestrate_key = new Orchestrate_key();
        orchestrate_key.should.exist;
    })

    it('should return the key value.', function () {
        var orchestrate_key = new Orchestrate_key();
        orchestrate_key.access_key.should.exist;
    })
})
