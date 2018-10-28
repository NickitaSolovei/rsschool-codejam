const assert = require('assert');
const sumOfOther = require('../src/sumOfOther');

Object.freeze(assert);

describe('sumOfOthers', () => {
  it('1', () => {
    const sum = sumOfOther([2, 3, 4, 1]);
    assert.deepEqual(sum, [8, 7, 6, 9]);
  });
});
