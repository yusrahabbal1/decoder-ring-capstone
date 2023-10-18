const { expect } = require('chai');
const {polybius} = require('../src/polybius');

describe('polybius()', () => {
  it('should encode a string', () => {
    expect(polybius('thinkful')).to.equal('4432423352125413');
  });

  it('should decode a string', () => {
    expect(polybius('2345 23513434112251', false)).to.equal('my message');
  });

  it('should ignore spaces', () => {
    expect(polybius('Hello world')).to.equal('3251131343 2543241341');
  });

  it('should return false for invalid decoding input', () => {
    expect(polybius('44324233521254134', false)).to.equal(false);
  });
  
  it('should encode a string and translate i/j to 42', () => {
    expect(polybius('thinkful')).to.equal('4432423352125413');
    expect(polybius('ij')).to.equal('4242');
  });

  it('should decode a string and translate 42 to (i/j)', () => {
    expect(polybius('2345 2351343411225142', false)).to.equal('my messagei/j');
  });
  
  it('should ignore capital letters', () => {
    expect(polybius('A Message')).to.equal('11 23513434112251');
    expect(polybius('a message')).to.equal('11 23513434112251');
  });

  it('should maintain spaces in the message, before and after encoding or decoding', () => {
    expect(polybius('Hello world')).to.equal('3251131343 2543241341');
    expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
  });
  
});

