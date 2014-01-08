/**
 * Created by Adron on 12/30/13.
 * Description: Tests for the symphonize project.
 */

// Verify tests are running because: people forget.
var assert = require("assert")

describe('Test Framework', function () {
    it('should have mocha installed and running.', function () {
        assert.equal(true, true);
    })
    it('should have the should library installed and running.', function () {
        true.should.eql(true);
    })
})