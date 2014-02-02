/**
 * Created by Adron on 2/2/14.
 *
 * Description: Simple object constructor test and verification of object constructors.
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
