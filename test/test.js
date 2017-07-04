'use strict';

const invert = require('../index');
const assert = require('chai').assert;

describe('Invert lists map', function() {
    it('Should invert map of lists into corresponding values keys', function() {
        const result = invert({b: ['a', 'b'], c: ['d']});
        assert.deepEqual(result, {a: 'b', b: 'b', d: 'c'});
    });

    it('Should disregard empty lists', function() {
        const result = invert({a: ['c'], b: []});
        assert.deepEqual(result, {c: 'a'});
    });

    it('Should fail for conflicting keys (last should win) by default', function() {
        assert.throws(() => invert({a: ['c'], b: ['c']}));
    });

    it('Should join the conflicts as lists when requested', function() {
        const result = invert({a: ['c'], b: ['c']}, false);
        assert.deepEqual(result, {c: ['a', 'b']});
    });

    it('Should return always return lists when joining conflict resolution is requested', function() {
        const result = invert({a: ['c'], b: ['d']}, false);
        assert.deepEqual(result, {c: ['a'], d: ['b']});
    });
});
