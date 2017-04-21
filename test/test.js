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
});
