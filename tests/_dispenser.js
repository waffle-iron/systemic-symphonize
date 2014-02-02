/**
 * Created by Adron on 2/2/14.
 * Simple object constructor test and verification of object constructors.
 */

var should = require('should');
var Dispenser = require('../bin/dispenser');

describe('the dispenser to the console', function () {
    var dispenser = new Dispenser('console');

    it('should have a value set to console if passed console.', function () {
        dispenser._write_to.should.eql('console');
    })
})

describe('the dispenser to orchestrate.io', function () {

    var write_to = 'orchestrateio',
        collection = 'collection_name';

    var dispenser_orchestrate = new Dispenser(write_to, collection);

    it('should have a value set to ' + write_to + ' if passed orchestrate.', function () {
        dispenser_orchestrate._write_to.should.eql(write_to);
    })

    it('should have a value set to ' + collection + ' for collection.', function () {
        dispenser_orchestrate._collection.should.eql(collection);
    })
})
