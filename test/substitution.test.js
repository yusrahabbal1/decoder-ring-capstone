const { expect } = require('chai');
const {substitution} = require('../src/substitution');

describe('substitution()', () => {
  it('should encode a string with a valid alphabet', () => {
    expect(substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
  });

  it('should decode a string with a valid alphabet', () => {
    expect(substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });

  it('should ignore spaces', () => {
    expect(substitution('You are an excellent spy', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('elp xhm xf mbymwwmfj dne');
  });
  
  it('should return false for invalid alphabet lengths', () => {
    expect(substitution('thinkful', 'short')).to.equal(false);
  });

  it('should return false for non-unique characters in the alphabet', () => {
    expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.equal(false);
  });
 
   it('should ignore capital letters', () => {
    expect(substitution('A Message', 'plmoknijbuhvygctfxrdzeswaq')).to.equal('p ykrrpik');
    expect(substitution('a message', 'PLMOKNIJBUHVYGCTFXRDZESWAQ')).to.equal('p ykrrpik');
  });
  
});

