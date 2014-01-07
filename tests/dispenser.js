/**
 * Created by Adron on 1/6/14.
 * Description: Tests for determining reads, writes and deletes to Orchestrate.io
 */

var should = require('should');
var Dispenser = require('../bin/dispenser');

describe('the dispenser', function () {

    var dispenser = new Dispenser('console');

    it('should have a value set to console if passed console.', function () {
        dispenser._write_to.should.eql('console');
    })


    var dispenser_orchestrate = new Dispenser('orchestrate');

    it('should have a value set to orchestrate if passed orchestrate.', function () {
        dispenser_orchestrate._write_to.should.eql('orchestrate');
    })
})
