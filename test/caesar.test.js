const { expect } = require('chai');
const {caesar} = require('../src/caesar');

describe('caesar()', () => {
  it('should encode a string with a positive shift value', () => {
    expect(caesar('thinkful', 3)).to.equal('wklqnixo');
  });

  it('should decode a string with a negative shift value', () => {
    expect(caesar('wbyox jxdxwfkb', -3, false)).to.equal('zebra magazine');
  });

  it('should handle shifts that wrap around the alphabet', () => {
    expect(caesar('z', 1)).to.equal('a');
  });

  it('should ignore non-alphabetic characters', () => {
    expect(caesar('This is a secret message!', 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });

  it('should return false for invalid shift values', () => {
    expect(caesar('thinkful', 0)).to.equal(false);
    expect(caesar('thinkful', 99)).to.equal(false);
    expect(caesar('thinkful', -26)).to.equal(false);
    expect(caesar('thinkful', undefined)).to.equal(false);
  });
  
  it('should ignore capitalization', () => {
    expect(caesar('A Message', 1)).to.equal('b nfttbhf');
  });
});

