/**
 * Created by Adron on 1/6/14.
 * Description: Tests for determining reads, writes and deletes to Orchestrate.io
 */

var should = require('should');
var db = require('orchestrate');
var Symphonize = require('../bin/symphonize');

var gen_spec_write_to_source = {
    "schema": "keyvalue",
    "count": 20,
    "write_source": "orchestrate"
}

describe('the general spec', function () {
//    it('should determine the appropriate write to source.', function () {
//        var symphonize = new Symphonize(gen_spec_write_to_source);
//
//    })
//
})
