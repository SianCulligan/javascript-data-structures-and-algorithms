'use strict';

const multiBracketValidation = require('./multi-bracket-validation.js');

describe('Testing multi-bracket-validation', () => {
  test('happy path ', () => {
    expect(multiBracketValidation('{}[]()')).toBeTruthy;
  });
  test('edge case ', () => {
    expect(multiBracketValidation('4234256')).toBeFalsey;
  });
  test('expected failure ', () => {
    expect(multiBracketValidation('{}[])')).toBeFalsey;
  });
});
