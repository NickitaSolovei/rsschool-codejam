const assert = require('assert');
const make = require('../src/make');

Object.freeze(assert);

describe('make', () => {
  it('1', () => {
    const makeResult = make(15)(34, 21, 666)(41)((a, b) => a + b);
    assert.equal(makeResult, 777);
  });
});
